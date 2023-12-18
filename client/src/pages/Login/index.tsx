import Form from "./components/form";
import Image from "./components/image";

const Login = () => {
  return (
    <main className="h-screen bg-gray-300 flex items-center justify-center">
      <section className="flex h-[464px] shadow-xl">
        <Form />
        <Image />
      </section>
    </main>
  );
};

export default Login;
