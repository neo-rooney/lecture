import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <p>home</p>,
    errorElement: <p>Not Found</p>,
  },
  {
    path: "/videos",
    element: <p>videos</p>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
