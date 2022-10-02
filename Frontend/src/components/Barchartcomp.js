import React,{useEffect, useState} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const axios = require('axios');

const Barchartcomp = () =>
{
    const [data, setdata]=useState([]);
    useEffect(() => {
      async function fetchData(){
        const res = await axios.get('/api/cloud/bar');
        setdata(res.data)
      }
      fetchData();
      },[setdata]);
  
    return (
      <>
      <div style={{display: 'flex',  justifyContent:'center'}}>
      <h1>San Fransico Incidents Report</h1>
      </div>
      <h3>Top 5 Incidents Occured till Now</h3>
      <p></p>
      <BarChart width={800} height={300}  data={data}
       margin={{
        top: 5,
        right: 50,
        left: 20,
        bottom: 5,
      }}
     >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="incident_count" fill="#8884d8" />
  </BarChart>
      </>
    );
}

export default Barchartcomp
