import {  useState } from "react";
import useCar from "../../../hooks/useCar";


const ReservationDetails = () => {
  const {setReservation} = useCar();
  const [rid,setRID] = useState('');
  const [pickDate,setPickDate] = useState('');
  const [returnDate,setReturnDate] = useState('');
  const [duration,setDuration] = useState('');
  const [discount,setDiscount] = useState('');
  
  const data = {
    rid,pickDate,returnDate,duration,discount
  }
  const handleSubmit = ()=>{
    setReservation(data);
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
          onChange={(e)=>setPickDate(e.target.value)}
          type="datetime-local" placeholder="Select Date and Time" name="pickup_date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date<span className="text-red-600">*</span></span>
          </label>
          <input 
          onChange={(e)=>setReturnDate(e.target.value)}
          type="datetime-local" placeholder="Select Date and Time" name="return_date" className="input input-bordered" required />
        </div>
        <div className="form-control flex flex-row justify-between items-center mt-3">
         <div> <label className="label">
            <span className="label-text">Duration</span>
          </label></div>
          <div>
          <input 
          onChange={(e)=>setDuration(e.target.value)}
          type="text" placeholder="" name="duration" className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount</span>
          </label>
          <input 
          onChange={(e)=>setDiscount(e.target.value)}
          type="text" placeholder="" name="discount" className="input input-bordered" required />
        </div>
     
      
      </form>
    </div>
        </div>
    );
};

export default ReservationDetails;