import profile from '../../assets/user.png'

const Banner = () => {
      return (
            <div className='flex items-center gap-4 mt-8'>
                 <div className=''>
                  <h2 className="text-4xl font-bold">One Step <br />Closer To Your <br /><span className="text-[#7E90FE]">Dream Job</span></h2>
                  <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                  <button className=" btn bg-[#7E90FE] text-white font-semibold px-4 py-2 rounded-lg">Get Started</button>
                  </div> 
                  <div>
                        <img src={profile} alt="" />
                  </div>
            </div>
      );
};

export default Banner;