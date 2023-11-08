import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Registation from './Registation';
import Deshbord from './Deshbord';
import NotFound from './NotFound';
import Navber from './Navber';
const Router =createBrowserRouter([
    {
      path: "/",
      element:<Navber></Navber>,
    },
    {
      path: "/home",
      element:<Home></Home>,
    },
    {
      path: "/log-in",
      element:<LogIn></LogIn>,
    },
    {
      path: "/register",
      element:<Registation/>,
    },
    {
      path: "/deshbord",
      element:<Deshbord/>,
    },
    {
      path: "/deshbord",
      element:<Deshbord/>,
      children: [
        {
          path: "deshbord/:profile",
          element:<></>,
        },
      ],
    },
    {
      path: "*",
      element:<NotFound/>,
    }
  ]);
  
export default Router;