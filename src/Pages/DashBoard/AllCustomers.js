import React, { useEffect, useState } from "react";
import Customer from "./Customer";

const AllCustomers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-plateau-89291.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json().then((data) => setCustomers(data)));
  }, [customers]);
  //   console.log(customer);

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove Customer</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <Customer key={customer._id} customer={customer}></Customer>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCustomers;
