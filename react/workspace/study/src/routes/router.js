import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/route/Main";
import Intro from "../pages/route/Intro";
import PageNotFound from "../pages/error/PageNotFound";
// import Job from "../pages/route/Job";

const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Main />
      },
      {
        path : "/intro",
        element : <Intro />,
      }
    ]
  },
  {
    path : "*",
    element : <PageNotFound />
  }
])

export default router;