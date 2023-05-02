import RegisterForm from "../components/RegisterForm";

const Register = () => {
  return (
    <div className="min-h-screen py-4">
        <div className="container mx-auto my-4 flex items-center justify-center px-4">
        <h1 className="text-4xl font-semibold">Cadastro de Assinante</h1>
      </div>
      <div className="container mx-auto flex items-center justify-center px-4">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
