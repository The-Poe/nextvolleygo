import Image from "next/image";
import MapAppBar from "./clientComponents/MapAppBar";
import VolleyMap from "./clientComponents/VolleyMap";
import styles from "./page.module.css"

export default function MapPage() {
  
  return (
    <>
      <div className={styles.volleyMapLayer}>
        <VolleyMap />
      </div>
      <div className={styles.uiLayer}>
        <MapAppBar />
      </div>
    </>

  );
}
