import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const backToHome = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="">
        <img
          className=" w-[600px] rounded-lg mx-auto "
          src="https://cdn.dribbble.com/users/932640/screenshots/2470471/jq.gif"
          alt=""
        />
        <button
          onClick={backToHome}
          className="btn btn-md btn-outline btn-error "
        >
          {" "}
          back to home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
