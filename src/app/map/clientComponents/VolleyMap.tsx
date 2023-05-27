"use client";
import Supercluster from "supercluster";
import Map, { MapRef, Marker } from "react-map-gl";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const supercluster = new Supercluster({
  radius: 75,
  maxZoom: 20,
});

export default function VolleyMap() {
  //overwrite VH unit height for all devices browser
  //especially for parent .bodyLayout
  const mapRef = useRef<MapRef>(null);
  const [points, setPoints] = useState<any>([]);
  const [clusters, setClusters] = useState<any>([]);
  const [bounds, setBounds] = useState<any>([-180, -85, 180, 85]);
  const [zoom, setZoom] = useState<any>(12.5);
  console.log("process.env.NODE_ENV:", process.env.NODE_ENV);
  useEffect(() => {
    const asyncFetchData = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/The-Poe/VolleyCourtsWorldwide/main/volleyCourtsTW20170502Geo.json"
      );
      const data = await response.json();
      const points = data.features.map((court: any) => ({
        type: "Feature",
        properties: {
          cluster: false,
          courtId: court.properties.source_data_id,
          courtName: court.properties.court_name,
          courtAddress: court.properties.court_address,
          courtPhone: court.properties.court_phone,
          courtSite: court.properties.court_site,
        },
        geometry: {
          type: "Point",
          coordinates: [
            parseFloat(court.geometry.coordinates[0]),
            parseFloat(court.geometry.coordinates[1]),
          ],
        },
      }));
      setPoints(points);
    };
    asyncFetchData();
  }, []);

  useEffect(() => {
    supercluster.load(points);
    // console.log("supercluster:", supercluster);
    setClusters(supercluster.getClusters(bounds, zoom));
  }, [points, zoom, bounds]);

  useEffect(() => {
    if (mapRef.current) {
      setBounds(mapRef.current.getMap().getBounds().toArray().flat());
    }
  }, [mapRef?.current, zoom]);

  // useEffect(() => {
  //   console.log("points:", points);
  // }, [points]);
  // useEffect(() => {
  //   console.log("supercluster:", supercluster);
  // }, [supercluster]);
  // useEffect(() => {
  //   console.log("clusters:", clusters);
  // }, [clusters]);
  // useEffect(() => {
  //   console.log("bounds:", bounds);
  // }, [bounds]);
  // useEffect(() => {
  //   console.log("zoom:", zoom);
  // }, [zoom]);

  // useEffect(() => {
  //   console.log("mapRef?.current:", mapRef?.current);
  // }, [mapRef?.current]);

  return (
        <Map
          mapboxAccessToken={process.env.MAP_TOKEN}
          ref={mapRef}
          reuseMaps
          // cursor={cursor}
          initialViewState={{
            longitude: 121.51963252539002,
            latitude: 25.036192536573314,
            zoom: 12.5,
          }}
          style={{ width: "100vw", height: 'calc(var(--vh, 1vh) * 100)' }}
          logoPosition="bottom-left"
          mapStyle="mapbox://styles/poe-3/ckqvmcwps1so819qmtogdbsl8"
          onZoomEnd={(e) => setZoom(Math.round(e.viewState.zoom))}
        >
          {clusters.map((cluster: any) => {
            const { cluster: isCluster, point_count } = cluster.properties;
            const [longitude, latitude] = cluster.geometry.coordinates;
            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  longitude={longitude}
                  latitude={latitude}
                >
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${14 + (point_count / points.length) * 30}px`,
                      height: `${14 + (point_count / points.length) * 30}px`,
                    }}
                    onClick={() => {
                      const zoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      mapRef?.current?.flyTo({
                        center: [longitude, latitude],
                        zoom,
                        speed: 1,
                      });
                    }}
                  >
                    {point_count}
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={`court-${cluster.properties.courtId}`}
                longitude={longitude}
                latitude={latitude}
              >
                <Image
                  src="/volleyIcon.png"
                  alt="Vercel Logo"
                  width={24}
                  height={24}
                  priority
                />
                {/* <Tooltip title={cluster.properties.courtName}>
            <Avatar
              src={process.env.PUBLIC_URL + '/assets/images/volleyball.jpg'}
              component={Paper}
              elevation={2}
              // onClick={() => setPopupInfo(cluster.properties)}
            />
          </Tooltip> */}
              </Marker>
            );
          })}
        </Map>
  );
}
