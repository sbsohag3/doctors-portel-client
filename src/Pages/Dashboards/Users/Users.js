import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://desolate-hollows-61905.herokuapp.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-2xl text-center">All Users: {users.length}</h2>
      <div className="overflow-x-auto mt-5">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
