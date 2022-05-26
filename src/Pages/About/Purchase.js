import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const [user, loading, error] = useAuthState(auth);
  const { id } = useParams();
  const [tools, setTools] = useState({});
  const {
    name,
    img,
    desc,
    min_order_quantity,
    available_quantity,
    price,
    _id,
  } = tools;

  const handleOrder = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const userAddress = event.target.address.value;
    console.log(phone, userAddress);
    const order = {
      orderId: _id,
      tool: name,
      customerName: user.displayName,
      customerEmail: user.email,
      userAddress,
      phone,
      price,
    };

    fetch("https://aqueous-plateau-89291.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Order Succeed");
      });
  };

  useEffect(() => {
    fetch(`https://aqueous-plateau-89291.herokuapp.com/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [id]);
  return (
    <div>
      <div class="  ">
        <div class=" grid  lg:grid-cols-2   ">
          <div className="card flex-shrink-0 w-full max-w-sm  mx-auto">
            <figure className=" ">
              <img src={img} className="rounded-xl" alt="" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{desc}</p>
              <p>Minimum Order Quantity : {min_order_quantity}</p>
              <p>Available Quantity : {available_quantity}</p>
              <p>
                <span className="font-mono">Price : {price}</span>
              </p>
              <div className="card-actions"></div>
            </div>
          </div>
          <form onSubmit={handleOrder}>
            <div class="card flex-shrink-0 w-full max-w-sm  mx-auto ">
              <div class="card-body ">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    value={user.displayName || ""}
                    disabled
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={user.email || ""}
                    disabled
                    class="input input-bordered"
                  />
                  <div class="form-control">
                    <label class="label">
                      <span class="label-text">Your Address</span>
                    </label>
                    <textarea
                      required
                      name="address"
                      class="textarea textarea-bordered h-24"
                      placeholder="Address"
                    ></textarea>
                  </div>
                  <label class="label"></label>
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    required
                    name="phone"
                    type="number"
                    placeholder="your phone "
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control mt-6">
                  <button class="btn text-white ">place the order</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
