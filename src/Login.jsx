import { CompanyRegister } from "./CompanyRegister";

const Login = () => {
  return (
    <CompanyRegister
      key={1}
      title="Registro"
      description={<span>Ingresa tu información para continuar con el registro</span>}
    />
  )
}

export default Login;