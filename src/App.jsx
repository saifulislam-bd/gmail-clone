import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Inbox from "./components/Inbox";
import Mail from "./components/Mail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-[#f6f8fc] h-screen w-screen overflow-hidden">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
