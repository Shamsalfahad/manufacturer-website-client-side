import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full lg:w-12/12 lg:h-[700px] mx-auto ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://www.zameen.com/blog/wp-content/uploads/2020/01/21-20-E-1-1024x658.jpg"
          alt=""
          className="w-full mx-auto "
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://t3.ftcdn.net/jpg/04/19/65/34/240_F_419653457_jK3z4bQAG6rzyOGIqccYPXmDvWaTaH59.jpg"
          className="w-full"
          alt=""
        />{" "}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/01/Cover-21-20-3.jpg"
          className="w-full"
          alt=""
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://kk2441jgteq2e4z8l3n8u6dw-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/garage-workshop.jpg"
          className="w-full"
          alt=""
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
