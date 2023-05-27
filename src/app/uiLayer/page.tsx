"use client";

import { Switch } from "@mui/material";
import Image from "next/image";
import UiLayerLayout from "./layout";


export default function UiLayer() {
 
  return (
    <UiLayerLayout>
      <Switch inputProps={{ "aria-label": "Switch demo" }}></Switch>
    </UiLayerLayout>
  );
}
