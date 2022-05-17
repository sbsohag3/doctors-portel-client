import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
   const [deletingDoctor, setDeletingDoctor] = useState(null);
  const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-2xl text-center my-5">
        Manage Doctor: {doctors.length}
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center ">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Specialty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => (
              <DoctorRow
                key={doctor._id}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorRow>
            ))}
          </tbody>
        </table>
      </div>
      {deletingDoctor && (
        <DeleteConfirmModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        ></DeleteConfirmModal>
      )}
    </div>
  );
};

export default ManageDoctors;
