import {  useEffect, useState } from "react";
import useCar from "../../../hooks/useCar";



const ReservationDetails = () => {
  const {setReservation} = useCar();
  const [rid,setRID] = useState('');
  const [pickupDate,setPickDate] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [duration, setDuration] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    
  });
  const [discount,setDiscount] = useState(0);

  const calculateDuration = (pickupDate, returnDate) => {
   
    if (pickupDate && returnDate) {
      const pickup = new Date(pickupDate);
      const returnD = new Date(returnDate);

      const diff = Math.abs(returnD - pickup);
      const diffWeeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
      const diffDays = Math.floor((diff / (1000 * 60 * 60 * 24)) % 7);
      const diffHours = Math.floor((diff / (1000 * 60 * 60)) % 24);
     
      

      setDuration({
        weeks: diffWeeks,
        days: diffDays,
        hours: diffHours,
       
      });
    }
  };

  useEffect(() => {
    calculateDuration(pickupDate, returnDate);
  }, [pickupDate, returnDate]);
  
  const data = {
    rid,pickupDate,returnDate,duration,discount
  }
  const handleSubmit=()=>{
    setReservation(data)
  }
  
  
  
    return (
        <div>
            <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">Reservation Details</h3>
            <div className="card w-full rounded-md border-2 border-[#DFDFFF] mt-5 font-display text-sm font-light">
      <form className="card-body -mt-4" onBlur={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reservation ID</span>
          </label>
          <input 
          
          type="text"  name="reservation_id" className="input input-bordered" 
          onChange={(e) => setRID(e.target.value)}
         required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Date<span className="text-red-600">*</span></span>
          </label>
          <input 
           onBlur={(e)=>setPickDate(e.target.value)}
          type="datetime-local" placeholder="Select Date and Time" name="pickup_date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date<span className="text-red-600">*</span></span>
          </label>
          <input 
          onBlur={(e)=>setReturnDate(e.target.value)}
          type="datetime-local" placeholder="Select Date and Time" name="return_date" className="input input-bordered" required />
        </div>
        <div className="form-control flex flex-row justify-between items-center mt-3">
         <div> <label className="label">
            <span className="label-text" >Duration</span>
          </label></div>
          <div>
          <input 
          value={`${duration.weeks}weeks ${duration.days} days ${duration.hours} hours`}
          type="text" placeholder="" name="duration" className="input input-bordered" readOnly />
          </div>
        </div>
      
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount(%)</span>
          </label>
          <input 
          onChange={(e)=>setDiscount(e.target.value)}
          type="text" placeholder="" name="discount" value={discount}className="input input-bordered" />
        </div>
     
      
      </form>
    </div>
        </div>
    );
};

export default ReservationDetails;