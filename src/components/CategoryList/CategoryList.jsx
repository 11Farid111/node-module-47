import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";


const CategoryList = () => {

      const [categories, setCategories] = useState([])

      useEffect(() => {
            fetch('categories.json')
                  .then(res => res.json())
                  .then(data => setCategories(data))
      }, [])

      return (
            <div>
                  <div className="text-center space-y-2 mt-8">
                        <h2 className="text-5xl font-bold">Job Category List</h2>
                        <p className="text-xl">Explore thousands of job opportunities with all the information you need. Its your future</p>
                  </div>

                  <div className="grid grid-cols-4 gap-6 mt-8">
                        {
                              categories.map(category => <Categories key={category.id} category={category}></Categories>)
                        }
                  </div>
            </div>
      );
};

export default CategoryList;