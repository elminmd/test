import Globe from "react-globe.gl";

import { useEffect, useRef, useState } from "react";

export const RGlobe = () => {
    const [countries, setCountries] = useState([]);
    const globeEl = useRef();
    const locations = [
        { lat: 40.1431, lon: 47.5769 }, // Azerbaijan
        { lat: 35.9078, lon: 127.7669 }, // South Korea
        // Add other locations here if needed
    ];

    const arcsData = locations.map(location => ({
        startLat: location.lat,
        startLng: location.lon,
        endLat: location.lat,
        endLng: location.lon,
        color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));

    useEffect(() => {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 1;
    }, []);

    fetch('../datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()).then(countries => {
        setCountries(countries)
    });
    return (
        <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.3}
            hexPolygonAltitude={0.1}
            hexPolygonSideColor={() => 'blue'}
            arcsData={arcsData}
            arcColor={'color'}
            width={300}
            height={300}
            arcDashLength={0.5}
            arcDashGap={4}
            arcDashAnimateTime={1000}
            arcDashInitialGap={0}
        />
    )
}

