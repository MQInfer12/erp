import Swal from "sweetalert2";

export const successAlert = (message: string) => {
  Swal.fire({
    icon: "success",
    title: "Éxito",
    text: message,
  });
};
