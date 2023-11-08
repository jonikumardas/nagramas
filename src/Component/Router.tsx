import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Registation from './Registation';
import Deshbord from './Deshbord';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
const Router =createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
    },
    {
      path: "/log-in",
      element:<LogIn></LogIn>,
    },
    {
      path: "/about",
      element:<About/>,
    },
    {
      path: "/Contact",
      element:<Contact/>,
    },
    {
      path: "/register",
      element:<Registation/>,
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