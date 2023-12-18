import IconConfig from "../../../icons/iconConfig";
import IconHome from "../../../icons/iconHome";
import IconUser from "../../../icons/iconUser";

const asideData = [
  {
    id: 1,
    name: "Home",
    icon: <IconHome />,
    links: [
      {
        title: "Inicio",
        url: "/dashboard/inicio",
      },
      {
        title: "Videos",
        url: "/dashboard/videos",
      },
      {
        title: "Imágenes",
        url: "/dashboard/imagenes",
      },
    ],
  },
  {
    id: 2,
    name: "Usuarios",
    icon: <IconUser />,
    links: [
      {
        title: "Usuarios",
        url: "/dashboard/usuarios",
      },
      {
        title: "Roles",
        url: "/dashboard/roles",
      },
    ],
  },
];

export default asideData;