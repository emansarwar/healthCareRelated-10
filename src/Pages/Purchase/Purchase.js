import React from "react";
import { Link } from "react-router-dom";


const Purchase = () => {
  return (
    <div className="text-center py-5">
      
      <Link to="/home">
        <p className="fs-3 my-4">Back to home</p>
      </Link>
    </div>
  );
};

export default Purchase;