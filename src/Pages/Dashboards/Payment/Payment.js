import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(
  "pk_test_51L0WL8Bg1HWi2R2NsVMby3L9NHn423JHSk14m3VqpwuAYHqEmaxscyWTMVlO2te6hk79ISTURxWmCsvXDTC3rUZ400mghRWp8N"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://desolate-hollows-61905.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
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
      <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="text-success font-bold">
            Hello, {appointment.patientName}
          </p>
          <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:{" "}
            <span className="text-orange-700">{appointment.date}</span> at{" "}
            {appointment.slot}
          </p>
          <p>Please pay: ${appointment.price}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckOutFrom appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
