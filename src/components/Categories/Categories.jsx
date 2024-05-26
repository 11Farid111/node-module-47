import PropTypes from 'prop-types';

const Categories = ({ category }) => {
      const { logo, category_name, availability } = category;
      return (

            <div className="card bg-blue-50 shadow-xl">
            <div className="card-body">
              <img className="w-[150px]" src={logo} alt="" />
              <h2 className="text-2xl font-bold">{category_name}</h2>
              <p>{availability}</p>
              
            </div>
          </div>
      );
};
 
Categories.propTypes ={
      category:PropTypes.object
}

export default Categories;