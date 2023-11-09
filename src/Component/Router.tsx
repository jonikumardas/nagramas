import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Registation from './Registation';
import Deshbord from './deshboard/Deshbord';
import NotFound from './NotFound';
import About from './About';
import Contact from './Contact';
import Profile from './deshboard/Profile';
import AddMile from './deshboard/AddMile';
import Add_user from './deshboard/Add_user';
import Add_cost from './deshboard/Add_cost';
import Settings from './deshboard/Settings';
import Payment from './deshboard/Payment';
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
      path: "deshbord",
      element:<Deshbord/>,
      children: [
        {
          path: "profile",
          element:<Profile></Profile>,
        },
        {
          path: "add-user",
          element:<Add_user></Add_user>,
        },
        {
          path: "add-mile",
          element:<AddMile></AddMile>,
        },
        {
          path: "add-cost",
          element:<Add_cost/>,
        },
        {
          path: "payment",
          element:<Payment></Payment>,
        },
        {
          path: "settings",
          element:<Settings/>
        },
      ],
    },
    {
      path: "*",
      element:<NotFound/>,
    }
  ]);
  
export default Router;