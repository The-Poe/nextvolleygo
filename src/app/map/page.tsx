'use client';
import useVH from 'react-viewport-height';
import UserMenu from './clientComponents/UserMenu';
import VolleyMap from './clientComponents/VolleyMap';
import styles from './page.module.css';
import LocationFilter from './clientComponents/LocationFilter';

export default function MapPage() {
  useVH();
  return (
    <>
      <div className={styles.volleyMapLayer}>
        <VolleyMap />
      </div>
      <div className={styles.uiLayer}>
        <LocationFilter />
        <UserMenu />
      </div>
    </>
  );
}
