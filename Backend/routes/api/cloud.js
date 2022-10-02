const express = require('express');
const router = express.Router();
const session = require('express-session');
var cors = require('cors');
router.use(cors());
const {BigQuery} = require('@google-cloud/bigquery');
const options = {
  keyFilename: 'C:/Users/iswar/Downloads/cmpe255cloud-975de2e94336.json',
  projectId: 'cmpe255cloud',
};

const bigquery = new BigQuery(options);
router.get('/bar',async (req,res) => {
try{ 

    const query = `SELECT
    *
FROM
    \`crime_Demo.crime_demo_category\``;

    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
      query: query,
      // Location must match that of the dataset(s) referenced in the query.
    };

    // Run the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to finish
    const [rows] = await job.getQueryResults();
    if(rows.length !== 0){
        res.send(rows.slice(0,5));
     }else{
        res.send("failure");
     };
}
catch(err){
    console.error(err.message);
    res.send("server error");
}
}
);

router.get('/line',async (req,res) => {
  try{ 
  
      const query = `SELECT
      *
  FROM
      \`crime_Demo.crime_demo_resolution\``;
  
      // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
      const options = {
        query: query,
        // Location must match that of the dataset(s) referenced in the query.
      };
  
      // Run the query as a job
      const [job] = await bigquery.createQueryJob(options);
      console.log(`Job ${job.id} started.`);
  
      // Wait for the query to finish
      const [rows] = await job.getQueryResults();
      if(rows.length !== 0){
          res.send(rows);
       }else{
          res.send("failure");
       };
  }
  catch(err){
      console.error(err.message);
      res.send("server error");
  }
  }
  );
  router.get('/pie',async (req,res) => {
    try{ 
    
        const query = `SELECT
        *
    FROM
        \`crime_Demo.crime_demo_risklocation\``;
    
        // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
        const options = {
          query: query,
          // Location must match that of the dataset(s) referenced in the query.
        };
    
        // Run the query as a job
        const [job] = await bigquery.createQueryJob(options);
        console.log(`Job ${job.id} started.`);
    
        // Wait for the query to finish
        const [rows] = await job.getQueryResults();

        if(rows.length !== 0){
            res.send(rows);
         }else{
            res.send("failure");
         };
    }
    catch(err){
        console.error(err.message);
        res.send("server error");
    }
    }
    );

  router.get('/dayofweek',async (req,res) => {
      try{ 
      
          const query = `SELECT
          *
      FROM
          \`crime_Demo.crime_demo_day_of_week_count\``;
      
          // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
          const options = {
            query: query,
            // Location must match that of the dataset(s) referenced in the query.
          };
      
          // Run the query as a job
          const [job] = await bigquery.createQueryJob(options);
          console.log(`Job ${job.id} started.`);
      
          // Wait for the query to finish
          const [rows] = await job.getQueryResults();
          if(rows.length !== 0){
              res.send(rows);
           }else{
              res.send("failure");
           };
      }
      catch(err){
          console.error(err.message);
          res.send("server error");
      }
      }
      );
module.exports = router;