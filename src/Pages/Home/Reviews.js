import React from "react";

const Reviews = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-bold my-10 ">Customer Reviews </h1>

      <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mx-10 my-16 cursor-pointer">
        <div class="card bg-pink-300 hover:bg-red-300 card-side shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=92048"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono ">
            <h2 class="card-title">Niko</h2>
            <p>I am really impressed, This website helps me to grow my business 😇.</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8 "
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-blue-300 bg-red-400 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=88539"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title">Tyler</h2>
            <p>I started my business, by this website 😊.</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-orange-300 bg-cyan-300 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=80245"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title">Aaron</h2>
            <p>Wow! an amazing website, So much help full for everyone 🤗.</p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="card card-side hover:bg-slate-200 bg-orange-400 shadow-xl">
          <figure>
            <img
              className="w-28 rounded-xl ml-3"
              src="https://api.lorem.space/image/face?hash=77703"
              alt="Movie"
            />
          </figure>
          <div class="card-body font-mono">
            <h2 class="card-title ">Leo</h2>
            <p className="">
              I started with nothing, Now i have three shop in a three different city 😇🥰.{" "}
            </p>
            <div class="card-actions justify-center">
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />{" "}
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
              <img
                className="w-8"
                src="https://img.icons8.com/nolan/344/star.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
