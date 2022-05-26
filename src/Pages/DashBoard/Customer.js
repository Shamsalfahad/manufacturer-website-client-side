import React from "react";
import { toast } from "react-toastify";

const Customer = ({ customer }) => {
  const { _id, email, role } = customer;
  const makeAdmin = () => {
    fetch(`https://aqueous-plateau-89291.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully made an admin");
        }
      });
  };
  return (
    <tr>
      <td>{_id}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-sm text-white btn-success">
            Make admin
          </button>
        )}
      </td>
      <td>
        <button class="btn btn-error btn-sm">remove user</button>
      </td>
    </tr>
  );
};

export default Customer;
