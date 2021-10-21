import Kilimo from "../views/Kilimo";
import Animals from "../../Animals/views/Animals";

/*...............................icons and assets.......................*/
const dashIcon = process.env.PUBLIC_URL + "/img/icons/dash.png";
const animalIcon = process.env.PUBLIC_URL + "/img/icons/animals.png";

const kilimoRoutes = [
  {
    path: "/animals",
    name: "Animals",
    icon: animalIcon,
    component: Animals,
    layout: "/kilimo",
  },
  {
    path: "/kilimo",
    name: "Dashboard",
    icon: dashIcon,
    component: Kilimo,
    layout: "/kilimo",
  },
];

export default kilimoRoutes;
