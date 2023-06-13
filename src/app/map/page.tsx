// import useVH from 'react-viewport-height';
import UserMenu from './clientComponents/UserMenu';
import VolleyMap from './clientComponents/VolleyMap';
import styles from './page.module.css';
import LocationFilter from './clientComponents/LocationFilter';
import dynamic from 'next/dynamic';

/**
 * @description Third-party library react-viewport-height need to
 * be used in dynamic import as client component get VH after render.
 */
const DynamicUseVH = dynamic(() => import('@/app/clientComponent/hooks/UseVH'), {
  ssr: false,
});

export default function MapPage() {
  return (
    <>
      <DynamicUseVH />
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
