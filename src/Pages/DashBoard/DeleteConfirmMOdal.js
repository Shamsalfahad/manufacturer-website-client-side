import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmMOdal = ({ deletingProducts, setDeletingProducts }) => {
  const handleDelete = () => {
    fetch(`https://aqueous-plateau-89291.herokuapp.com/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast(`Products : ${name} is deleted`);
          setDeletingProducts(null);
        }
      });
  };
  const { name, email } = deletingProducts;
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle " />
      <div class="modal modal-bottom sm:modal-middle ">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-700 ">
            Are you sure you want to delete? {name}
          </h3>
          <p class="py-4">
            If you want to delete click the delete button ☺️
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete()}
              className=" btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs cursor-pointer">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmMOdal;
