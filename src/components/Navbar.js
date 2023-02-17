import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img></img>
      </Link>
      <Stack>
        <Link to="/"></Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
