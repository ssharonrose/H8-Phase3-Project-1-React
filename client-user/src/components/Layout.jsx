import { Outlet } from "react-router-dom";
import StickyNavbar from "./StickyNavbar";

export default function Layout() {
  return (
    <>
      <StickyNavbar />
      <Outlet />
    </>
  );
}
