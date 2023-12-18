import { Link } from "react-router-dom";
import LoginImg from "../../../assets/images/login.png";

const Image = () => {
  return (
    <div className="h-full w-[640px] bg-black relative">
      <img src={LoginImg} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 right-0 bg-white p-6">
        <small className="flex gap-5">
          ¿No tienes una cuenta?
          <Link to="/" className="text-sky-700">
            Regístrate
          </Link>
        </small>
      </div>
      <div className="absolute bottom-0 left-0 p-6">
        <small className="text-white">Bienvenido</small>
      </div>
    </div>
  );
};

export default Image;
