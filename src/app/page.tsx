import styles from "./page.module.css";
import UiLayer from "./uiLayer/page";
import VolleyMapLayer from "./volleyMapLayer/page";
import RootLayout from "./layout";

export default function App() {
  return (
    <RootLayout>
      <UiLayer />
      <VolleyMapLayer />
    </RootLayout>
  );
}
