
import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";


const FeaturedJobs = () => {
      const [featuredJobs,setFeaturedJobs] = useState([])

      const [dataLength,setDataLength] = useState(4)

      useEffect(()=>{
            fetch('jobs.json')
            .then(res =>res.json())
            .then(data => setFeaturedJobs(data))
      },[])
      return (
            <div className='text-center mt-8'>
                  <h2 className='text-4xl font-bold'>Job Category List</h2>
                  <p className='text-xl'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                  <div className="grid grid-cols-2 gap-6">
                      {
                        featuredJobs.slice(0, dataLength).map(feature=><Jobs key={feature.id} feature ={feature}></Jobs>)
                      }  
                  </div>
                  <div className={dataLength === featuredJobs.length && 'hidden'}>
                        <button onClick={()=>setDataLength(featuredJobs.length)} className="btn btn-primary mt-4">See All Jobs</button>
                  </div>
            </div>
      );
};

export default FeaturedJobs;