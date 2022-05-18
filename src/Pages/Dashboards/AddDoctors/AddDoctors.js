import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const AddDoctors = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://desolate-hollows-61905.herokuapp.com/services").then((res) =>
      res.json()
    )
  );
  const imgStorageKey = "6bfda015f6c8c5101d0d2aed16e27a44";

  const onSubmit = async (data) => {
    const image = data.image[0];
    const fromData = new FormData();
    fromData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: fromData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          fetch("https://desolate-hollows-61905.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("Doctor Added Successfully", {
                  position: "top-center",
                });
                reset();
              } else {
                toast.error("Failed to add the Doctor", {
                  position: "top-center",
                });
              }
            });
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex mt-4 justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body bg-slate-100">
          <h2 className="text-center text-2xl font-bold">Add a New Doctor</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please Provide a Valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Specialty</span>
              </label>
              <select
                className="select w-full max-w-xs"
                {...register("specialty")}
              >
                {services.map((service) => (
                  <option key={service._id}>{service.name}</option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Photo:</span>
              </label>
              <input
                type="file"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Photo url is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="btn w-full  mt-7 max-w-xs text-white"
              type="submit"
              value="Add Doctor"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctors;
