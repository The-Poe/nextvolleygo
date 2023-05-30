import UserMenu from './clientComponents/UserMenu';
import VolleyMap from './clientComponents/VolleyMap';
import styles from './page.module.css';
import UseVH from '@/app/clientComponents/UseVH';
import LocationFilter from './clientComponents/LocationFilter';

export default function MapPage() {
  return (
    <>
      <UseVH />
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
