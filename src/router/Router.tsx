import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/page/Login";
import { Page404 } from "../component/page/Page404";
import { homeRoutes } from "./HomeRoutes";

export const Router = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home">
        {homeRoutes.map((route) => (
          <Route
            index={route.index}
            key={route.path}
            path={route.path}
            element={route.children}
          />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
});
