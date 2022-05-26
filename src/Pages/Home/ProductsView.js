import React from "react";
import web_Capture from "../../images/webCap.jpg";

const ProductsView = () => {
  return (
    <div className="cursor-pointer">
      <h1 className="text-5xl font-bold my-10 ">Mobile View 😁 </h1>
      <div class="mockup-phone m-4 hover:bg-pink-200">
        <div class="camera"></div>
        <div class="display ">
          <div class="artboard artboard-demo phone-1">
            <img className="w-50" src={web_Capture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
