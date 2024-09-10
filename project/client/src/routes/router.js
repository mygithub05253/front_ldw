import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import PageNotFound from "../pages/error/PageNotFound";
import TodoContainer from "../pages/todo/TodoContainer";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import MyPage from "../pages/myPage/MyPage";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "/",
        element : <Main />
      },
      {
        path: "/todo",
        element : <TodoContainer />
      },
      {
        path : "/signIn",
        element : <SignIn />
      },
      {
        path : "/signUp",
        element : <SignUp />
      }
    ]
  },
  {
    path : "/my",
    element : <MyPage />
  },
  {
    path : "*",
    element : <PageNotFound />
  }
])

export default router;