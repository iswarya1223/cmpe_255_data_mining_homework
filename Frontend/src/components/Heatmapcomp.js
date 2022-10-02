import Map from "./map";
import { HeatMap } from "google-maps-react";
import React,{useEffect, useState} from 'react';
const axios = require('axios');

const Heatmapcomp = () =>
{
    const gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)"
      ];
    const [data, setdata]=useState([]);
    useEffect(() => {
      async function fetchData(){
        const res = await axios.get('/api/cloud/heatmap');
        setdata(res.data)
      }
      fetchData();
      },[setdata]);
  
return (
    <>
  <Map data={data} center={{ lat: 37.7, lng: -122.4 }} />;
  <HeatMap
            gradient={gradient}
            positions={data}
            opacity={1}
            radius={20}
          />
  </>
    );
}

export default Heatmapcomp