import { createBrowserRouter } from "react-router-dom";
import ClientErrorPage from "./pages/ClientErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ClientErrorPage />,
  },
]);
export default router;
