import React from "react";
import chair from "../../../assets/images/chair.png";
import bgimage from "../../../assets/images/bg.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bgimage})`,
      }}
      className="hero min-h-screen my-8 px-5"
    >
      
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
