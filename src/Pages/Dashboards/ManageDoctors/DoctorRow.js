import React from "react";


const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { img, name, specialty } = doctor;
  
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={img} alt="{name}" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <th>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          for="delete-confirm-modal"
          class="btn btn-xs btn-error"
        >
          Remove
        </label>
      </th>
    </tr>
  );
};

export default DoctorRow;
