import React from "react";
import { Link } from "react-router-dom";


const Portfolio = () => {
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/158701169_3725153640902813_339529241213780524_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFxleT7BNL1HXLum4WYYxa0TUlBYi2HgU9NSUFiLYeBT7zgKoUbnIkqfKbMdRZ5hwzOzL6zDbtgOlqA8z4YzHqL&_nc_ohc=b8Mu8zEw4ZoAX83-Tua&_nc_oc=AQnv932be30FENHOLR3aMVydetT4eP03so4NkyB374KiOM-MExmjjPmZZEw8kW1OsRg&_nc_ht=scontent.fdac24-1.fna&oh=00_AT-W9RrjRKCtzsNP290DL-5fyJKaa6Lj6E9pP3eyn2iCMg&oe=62B2127A"
            
            className="max-w-sm  rounded-lg shadow-2xl hover:bg-sky-100"
            alt=""
          />
          <div className="lg:p-20">
            <div className="">
              <h1 class="text-5xl font-bold">Hi I am Shams Al Fahad</h1>
              <p class="py-6">
                Student of{" "}
                <a className="text-blue-500" href="https://smuct.edu.bd/">
                  Shanto mariam university of creative technology.
                </a>
                Department of Computer Science and Information Technology
                (CSE). Learning web development, next goal is being a full
                stack web developer.
              </p>
            </div>
            <div className="">
              <div class="card w-10/12 mx-auto bg-sky-100 shadow-xl">
                <div class="card-body ">
                  <h2 class="card-title">About me</h2>
                  <p>
                    <span className="font-bold">Email: </span>{" "}
                    shamsalfahad3@gmail.com
                  </p>

                  <p>
                    {" "}
                    <span className="font-bold">Education: </span>Doing
                    B.Sc.(hons) in CSE
                  </p>

                  <div className="">
                    <h2 className="card-title">Skills :</h2>
                    <div className="all-ratings grid grid-cols-1 lg:grid-cols-2">
                      <div className="left-ratings">
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/2x/html-5.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/dusk/2x/css3.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/bootstrap.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/javascript.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                      </div>
                      <div className="right-ratings">
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/react-native.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/344/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://img.icons8.com/color/344/nodejs.png"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                        <div className="ratings  ">
                          <li className="flex justify-center items-center ">
                            <img
                              className="w-12"
                              src="https://symbols.getvecta.com/stencil_79/88_expressjs-icon.54bb6035d3.svg"
                              alt=""
                            />{" "}
                            <img
                              className="w-8 ml-2"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8"
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                            <img
                              className="w-8 "
                              src="https://img.icons8.com/nolan/344/star.png"
                              alt=""
                            />
                          </li>
                        </div>
                      </div>
                    </div>

                    {/* <div class="card-actions justify-end">
                      <button class="btn btn-primary">Buy Now</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero min-h-screen bg-sky-100">
        <div class="hero-content text-center">
          <div class="">
            <h1 class="text-5xl font-bold">Some of my projects links 😇</h1>
            <p class="py-6">
              <li>
                <a
                  className="text-blue-500"
                  href="https://neon-malabi-9bd620.netlify.app//"
                >
                  https://neon-malabi-9bd620.netlify.app/
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500"
                  href="https://inspiring-dodol-ced2fd.netlify.app"
                >
                  https://inspiring-dodol-ced2fd.netlify.app
                </a>
              </li>
              <li>
                <a
                  className="text-blue-500"
                  href="https://leafy-axolotl-898c2a.netlify.app"
                >
                  https://leafy-axolotl-898c2a.netlify.app
                </a>
              </li>
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-2">
              <button class="btn btn-lg btn-info">
                <div className=" ">
                  <a
                    className="flex justify-center items-center"
                    href="https://www.facebook.com/shamsalfahad/"
                  >
                    Knock me on{" "}
                    <img
                      className="w-12 mx-2"
                      src="https://img.icons8.com/fluency/344/facebook-new.png"
                      alt=""
                    />
                    to hire me{" "}
                    <div class="avatar">
                      <div class="w-12 ml-3 mask mask-circle">
                        <img
                          src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/274081580_4789715564446610_2392413317466415345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6uxXy8JJQZoWM6lYAKVCIdFShUOAVa0F0VKFQ4BVrQarXHFvNEdMGhqJ9pTpRxP_um4R1c2zdJD9101caEczd&_nc_ohc=IdtoqtDX9WkAX8w6glr&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8n8BmInLl6frH9FDyMj65GJbUrDMjv5CbR58_T0SuRTg&oe=6292F7B0"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </button>
              <button class="btn btn-lg  btn-primary">
                <div className=" ">
                  <a
                    className="flex justify-center items-center"
                    href="https://twitter.com/SHAMSALFAHAD"
                  >
                    Knock me on{" "}
                    <img
                      className="w-12 mx-2"
                      src="https://img.icons8.com/color/2x/twitter.png"
                      alt=""
                    />
                    to hire me{" "}
                    <div class="avatar">
                      <div class="w-12 ml-3 mask mask-circle">
                        <img
                          src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/274081580_4789715564446610_2392413317466415345_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE6uxXy8JJQZoWM6lYAKVCIdFShUOAVa0F0VKFQ4BVrQarXHFvNEdMGhqJ9pTpRxP_um4R1c2zdJD9101caEczd&_nc_ohc=IdtoqtDX9WkAX8w6glr&_nc_ht=scontent.fdac24-2.fna&oh=00_AT8n8BmInLl6frH9FDyMj65GJbUrDMjv5CbR58_T0SuRTg&oe=6292F7B0"
                          alt=""
                        />
                      </div>
                    </div>
                  </a>{" "}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">
        <div className="my-10">
          <h2 className="text-4xl font-bold "> </h2>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
