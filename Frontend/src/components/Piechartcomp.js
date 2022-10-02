import React,{useEffect, useState} from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import  Chart  from "react-apexcharts";
const axios = require('axios');

const Piechartcomp = () =>
{
    const [data, setdata]=useState([]);
    const [area, setarea]=useState([])
    useEffect(() => {
      async function fetchData(){
        const res = await axios.get('/api/cloud/pie');
        const data1=[]
        const data2=[]
        res.data.forEach(dt => {
            data1.push(dt["count"])
            data2.push(dt["areas"])
          })
        setdata(data1)
        setarea(data2)
      }
      fetchData();
      },[setdata,setarea]);
  
    return (
      <>
      <h3>Top 15 Highest Risk Locations</h3>
      <p></p>
      <React.Fragment>
            <div className="container-fluid mb-3">
                <Chart 
                type="pie"
                width={600}
                height={500}
                series={data}                

                options={{
                        title:{ text:"Risklocation PieChart"
                        } , 
                       noData:{text:"Empty Data"},                        
                      // colors:["#f90000","#f0f"], 
                      labels: area                   

                 }}
                >
                </Chart>
            </div>
        </React.Fragment>
      </>
    );
}

export default Piechartcomp