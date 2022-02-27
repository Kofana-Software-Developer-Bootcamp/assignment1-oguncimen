import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          email: "",
          name: "",
          surname: "",
          phoneNumber: "",
          birthday: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          const user = {
            email: values.email,
            name: values.name,
            surname: values.surname,
            phoneNumber: values.phoneNumber,
            birthday: values.birthday,
          };

          //If local storage is empty, create new array
          var users = localStorage.getItem("users")
            ? JSON.parse(localStorage.getItem("users"))
            : [];
          //Add new user to array
          users.push(user);
          //Save array to local storage
          localStorage.setItem("users", JSON.stringify(users));
          alert("User added successfully!");
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.name) {
            errors.name = "Name is required";
          }
          if (!values.surname) {
            errors.surname = "Surname is required";
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = "Phone number is required";
          }
          if (!values.birthday) {
            errors.birthday = "Birthday is required";
          }
          return errors;
        }}
      >
        {({ isSubmitting }) => (
          <Form className="Form">
            <p className="formHeader">Koform</p>
            <Field
              className="formText"
              type="text"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              className="errorMessage"
              name="email"
              component="div"
            />
            <Field
              className="formText"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              className="errorMessage"
              name="name"
              component="div"
            />
            <Field
              className="formText"
              type="text"
              name="surname"
              placeholder="Surname"
            />
            <ErrorMessage
              className="errorMessage"
              name="surname"
              component="div"
            />
            <Field
              className="formText"
              type="text"
              name="phoneNumber"
              placeholder="Phone"
            />
            <ErrorMessage
              className="errorMessage"
              name="phoneNumber"
              component="div"
            />
            <Field
              className="formText"
              type="date"
              name="birthday"
              placeholder="Birthday"
            />
            <ErrorMessage
              className="errorMessage"
              name="birthday"
              component="div"
            />
            <div className="buttonContainer">
              <Button
                style={{ color: "white" }}
                className="formButton"
                variant="warning"
                type="submit"
              >
                Register
              </Button>
              <Button
                className="formButton"
                style={{ color: "white" }}
                onClick={() => {
                  const users = JSON.parse(localStorage.getItem("users"));
                  console.log(users);
                }}
                variant="warning"
              >
                Show Users
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
