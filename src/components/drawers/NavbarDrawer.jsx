import { Drawer } from "@mui/material";
import React from "react";
import list from "./functions";

const NavbarDrawer = ({ anchor = "left" }) => {
  return (
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  );
};

export default NavbarDrawer;
