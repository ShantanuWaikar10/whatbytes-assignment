import React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <>
      <div className="p-5 flex justify-between">
        <h1 className="text-3xl font-bold">WhatBytes</h1>
        <div className="flex gap-2 border rounded-md items-center px-2">
          <Avatar
            alt="Remy Sharp"
            src="/avatar.webp"
            sx={{ width: 24, height: 24 }}
          />
          <p className="font-semibold">Rahil Siddique</p>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Navbar;
