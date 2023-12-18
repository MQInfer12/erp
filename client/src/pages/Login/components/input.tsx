import { ErrorMessage, Field } from "formik";

interface Props {
  title: string;
  name: string;
  placeholder?: string;
  type?: string;
}

const Input = ({ title, name, placeholder, type = "text" }: Props) => {
  return (
    <div className="w-96 grid grid-cols-[1fr_250px]">
      <p className="font-semibold py-3">{title}</p>
      <Field
        type={type}
        placeholder={placeholder || `Ingrese ${name}`}
        className="border-b border-neutral-300 outline-none py-3"
        name={name}
      />
      <div className="col-[2] h-6">
        <ErrorMessage name={name}>
          {(msg) => <small className="text-rose-800">{msg}</small>}
        </ErrorMessage>
      </div>
    </div>
  );
};

export default Input;
