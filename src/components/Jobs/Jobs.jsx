import PropTypes from 'prop-types'
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from 'react-router-dom';
const Jobs = ({ feature }) => {
      const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, } = feature;
      return (
            <div className="card card-compact bg-base-100 shadow-xl">
                  <figure><img src={logo} alt="Shoes" /></figure>
                  <div className='card-body'>
                        <h2 className="card-title">{job_title}</h2>
                        <p className='text-xl font-medium'>{company_name}</p>
                        <div>
                              <button className='px-4 py-2 font-extrabold border border-[#7E90FE] rounded text-[#7E90FE] mr-4'>{remote_or_onsite}</button>
                              <button className='px-4 py-2 font-extrabold border border-[#7E90FE] rounded text-[#7E90FE] mr-4' >{job_type}</button>
                        </div>
                        <div className='mt-4 flex gap-6'>
                              <h2 className='flex'><IoLocationOutline className='text-2xl mr-2' ></IoLocationOutline>{location} </h2>
                              <h2 className='flex'><HiOutlineCurrencyDollar className='text-2xl mr-2' ></HiOutlineCurrencyDollar>{salary}</h2>
                        </div>

                       <div className='card-actions'>
                       <Link to = {`/feature/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                        </Link>
                       </div>
                  </div>
            </div>
      );
};
Jobs.propTypes = {
      feature: PropTypes.object
}
export default Jobs;