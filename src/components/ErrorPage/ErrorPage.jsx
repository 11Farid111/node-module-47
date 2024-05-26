import { Link } from "react-router-dom";


const ErrorPage = () => {
      return (
            <div className="text-3xl text-center my-60">
                 <h2>Oops!!!</h2> 
                <button><Link to = '/'>Go Back</Link></button> 
            </div>
      );
};

export default ErrorPage;