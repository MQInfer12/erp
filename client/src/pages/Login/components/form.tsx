import { Formik, Form as FormikForm } from "formik"
import { LoginForm, loginSchema } from "../validations/login"
import Input from "./input"
import Button from "./button"

const Form = () => {
  const handleSubmit = (values: LoginForm) => {
    console.log(values)
  }

  return (
    <div className="bg-white p-20 gap-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold">Iniciar sesión</h1>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <FormikForm className="flex flex-col">
          <Input name="email" title="Email" placeholder="johndoe@example.com" />
          <Input type="password" name="password" title="Contraseña" placeholder="johndoe@example.com" />
          <Button />
        </FormikForm>
      </Formik>
    </div>
  )
}

export default Form