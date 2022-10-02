import React,{useEffect, useState} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const axios = require('axios');

const Barchart1comp = () =>
{
    const [data, setdata]=useState([]);
    useEffect(() => {
      async function fetchData(){
        const res = await axios.get('/api/cloud/dayofweek');
        setdata(res.data)
      }
      fetchData();
      },[setdata]);
  
    return (
      <>
      <h3>Number of Incidents happened on the day of week during 2013 to 2018</h3>
      <p></p>
      <BarChart width={700} height={300}  data={data}
       margin={{
        top: 5,
        right: 50,
        left: 20,
        bottom: 5,
      }}
     >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="dayofweek" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="incidentcount" fill="#8884d8" />
  </BarChart>
      </>
    );
}

export default Barchart1comp
