import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <img src={chair} className="lg:max-w-lg rounded-lg shadow-2xl" alt="" />
        <div className="text-center  rounded-lg shadow-2xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
