import Image from "next/image";
import MapAppBar from "./clientComponents/MapAppBar";
import UserMenu from "./clientComponents/UserMenu";
import VolleyMap from "./clientComponents/VolleyMap";
import styles from "./page.module.css"
import {
  Switch
} from "@mui/material";
import LocationFilter from "./clientComponents/LocationFilter";

export default function MapPage() {
  
  return (
    <>
      <div className={styles.volleyMapLayer}>
        <VolleyMap />
      </div>
      <div className={styles.uiLayer}>
        {/* <MapAppBar /> */}
        <LocationFilter/>
        <UserMenu />
      </div>
    </>

  );
}
