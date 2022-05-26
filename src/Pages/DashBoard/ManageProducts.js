import React, { useEffect, useState } from "react";
import DeleteConfirmMOdal from "./DeleteConfirmMOdal";
import OrdersRow from "./OrdersRow";

const ManageProducts = () => {
  const [orders, setOrders] = useState([]);

  const [deletingProducts, setDeletingProducts] = useState(null);

  useEffect(() => {
    fetch("https://aqueous-plateau-89291.herokuapp.com/tool", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, []);
  return (
    <div>
      manage orders : {orders.length}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Product name</th>
              <th>Available Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                index={index}
                order={order}
                setDeletingProducts={setDeletingProducts}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProducts && (
        <DeleteConfirmMOdal
          deletingProducts={deletingProducts}
          setDeletingProducts={setDeletingProducts}
        ></DeleteConfirmMOdal>
      )}
    </div>
  );
};

export default ManageProducts;
