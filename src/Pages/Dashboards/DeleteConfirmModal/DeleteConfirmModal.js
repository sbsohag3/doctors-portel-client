import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;
  const handleDelete = () => {
    fetch(`https://desolate-hollows-61905.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Doctor: ${name} is Remove!!`, {
            position: "top-center",
          });
          setDeletingDoctor(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <p class="py-4 text-red-500">
            Are You Sure You Want to delete {name}?
          </p>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Remove
            </button>
            <label for="delete-confirm-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
