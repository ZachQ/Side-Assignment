import Header from "@/components/Header";
import React, { useState, useEffect } from 'react';
import Map from "@/components/Listing/Map";
import HouseListing from "@/components/Listing/HouseListing";
import { getPropertyListings } from "services/SimplyRETS";

export default function Listings({ data }: { data: HouseType[] }) {
  const [showMap, setShowMap] = useState(false);

  const togglePropertiesPanel = () => {
    setShowMap(!showMap);
  };

  // Save the properties into localStorage
  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(data))
  }, [data]);

  // TODO: Update the width of the panels for mobile toggling
  return <>
    <Header />
    <div className='panel-container'>
      <div style={{ width: '50%' }}>
        <Map />
      </div>
      <div style={{ width: '50%' }}>
        <HouseListing data={data} />
      </div>
    </div>
    <button className='map-toggle-button' onClick={togglePropertiesPanel}>{showMap ? 'List' : 'Map'} View</button>
  </>;
}

// Fetch Property Listing Data on the server side
export async function getServerSideProps() {
  try {
    const data = await getPropertyListings();

    return {
      props: { data },
    };
  } catch (error) {
    return {
      props: { data: null },
    };
  }
}
