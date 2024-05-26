
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
      const featuredJobs = useLoaderData();
      const {id} = useParams();
      const idInt = parseInt(id);
      const feature = featuredJobs.find(feature =>  feature.id === idInt);
      console.log(feature)
      const handleAppliedJob = () =>{
            saveJobApplication(idInt)
            toast('you have applied successfully')
      }
      return (
            <div>
                 <h2 className="text-4xl font-bold text-center mb-4">Job Details</h2> 
                 <div className="grid gap-6 md:grid-cols-4 items-center ">
                  <div className=" md:col-span-3 space-y-8">
                        <h2 className="text-2xl font-bold">Job Description: <span className="text-xl font-medium">{feature.job_description}</span></h2>
                        
                        <h2 className="text-2xl font-bold">Job Responsibility: <span className="text-xl font-medium">{feature.job_responsibility}</span> </h2>
                        <p className="text-2xl font-bold">Educational Requirements:
                        <br />
                        <span className="text-xl font-medium ">{feature.educational_requirements}</span>
                        </p>
                        <p className="text-2xl font-bold">Experiences:
                        <br />
                        <span className="text-xl font-medium ">{feature.experiences}</span>
                        </p>
                  </div>
                   <div className="border bg-[#9873FF1A] p-6">
                        <h2>Salary:{feature.salary}</h2>
                        <button onClick={handleAppliedJob} className="btn btn-primary w-full">Apply Now</button>
                  </div>      
                  <ToastContainer />
                 </div>
            </div>
      );
};

export default JobDetails;