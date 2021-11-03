import Animals from "../../Animals/views/Animals";
import Dashboard from "../../Dashboard/views/Dashboard";
import Tasks from "../../Tasks/views/Tasks";

/*...............................icons and assets.......................*/
const dashIcon = process.env.PUBLIC_URL + "/img/dash.png";
const animalIcon = process.env.PUBLIC_URL + "/img/animals.png";

const kilimoRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: dashIcon,
    component: Dashboard,
    layout: "/kilimo",
  },
  {
    path: "/animals",
    name: "Animals",
    icon: animalIcon,
    component: Animals,
    layout: "/kilimo",
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks,
    layout: "/kilimo",
  },

];

export default kilimoRoutes;
