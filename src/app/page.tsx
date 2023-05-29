import styles from "./page.module.css";
import RootLayout from "./layout";
import MapPage from "./map/page";
import UseVH from "./clientComponents/UseVH";

export default function App() {
  return (
    <>
      <UseVH />
      <MapPage />
    </>
  );
}
