
const ReservationDetails = () => {
    return (
        <div>
            <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">Reservation Details</h3>
            <div className="card w-full rounded-md border-2 border-[#DFDFFF] mt-5 font-display text-sm font-light">
      <form className="card-body -mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Reservation ID</span>
          </label>
          <input type="text" placeholder="" name="reservation_id" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Pickup Date<span className="text-red-600">*</span></span>
          </label>
          <input type="date" placeholder="Select Date and Time" name="pickup_date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Return Date<span className="text-red-600">*</span></span>
          </label>
          <input type="date" placeholder="Select Date and Time" name="return_date" className="input input-bordered" required />
        </div>
        <div className="form-control flex flex-row justify-between items-center mt-3">
         <div> <label className="label">
            <span className="label-text">Duration</span>
          </label></div>
          <div>
          <input type="text" placeholder="" name="duration" className="input input-bordered" required />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Discount</span>
          </label>
          <input type="text" placeholder="" name="discount" className="input input-bordered" required />
        </div>
        
      
      </form>
    </div>
        </div>
    );
};

export default ReservationDetails;