

const CustomerInfo = () => {
    return (
        <div>
             <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">Customer Information</h3>
             <div className="card w-full rounded-md border-2 border-[#DFDFFF] mt-5 font-display text-sm font-light">
      <form className="card-body -mt-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name<span className="text-red-600">*</span></span>
          </label>
          <input type="text" placeholder="" name="first_name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name<span className="text-red-600">*</span></span>
          </label>
          <input type="text" placeholder="" name="last_name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email<span className="text-red-600">*</span></span>
          </label>
          <input type="email" placeholder="" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone<span className="text-red-600">*</span></span>
          </label>
          <input type="text" placeholder="" name="phone" className="input input-bordered" required />
        </div>
       
        
      
      </form>
    </div>
        </div>
    );
};

export default CustomerInfo;