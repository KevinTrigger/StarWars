import PeoplePage from "@containers/PeoplePage/PeoplePage";
import PersonPage from "@containers/PersonPage/PersonPage";
import HomePage from "@containers/HomePage";
import ErrorRequest from "@containers/ErrorPage/ErrorPage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: <HomePage />,
  },
  {
    path: "/people",
    exact: true,
    component: <PeoplePage />,
  },
  {
    path: '/people/:id',
    exact: true,
    component: <PersonPage />,
  },
  {
    path: "/not-found",
    exact: true,
    component: <ErrorRequest />,
  },
  {
    path: "*",
    exact: false,
    component: <ErrorRequest />,
  },
];

export default routesConfig;
