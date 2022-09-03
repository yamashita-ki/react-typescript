import { Home } from "../component/page/Home";
import { Setting } from "../component/page/Setting";
import { UserManagement } from "../component/page/UserManagement";

export const homeRoutes = [
  {
    index:true,
    path:"",
    children: <Home />
  },
  {
    index:false,
    path:"user_management",
    children: <UserManagement />
  },
  {
    index:false,
    path:"setting",
    children: <Setting />
  },
];
