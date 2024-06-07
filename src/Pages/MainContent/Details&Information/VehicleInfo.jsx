const VehicleInfo = () => {
  return (
    <div className="mt-7 mb-12">
      <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">
        Vehicle Information
      </h3>
      <div className="card w-full rounded-md border-2 border-[#DFDFFF] mt-5 font-display text-sm font-light">
        <form className="card-body -mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Vehicle Type<span className="text-red-600">*</span>
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="vehicle_type"
            >
              <option disabled selected>
                Select One
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Vehicle<span className="text-red-600">*</span>
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              name="vehicle"
            >
              <option disabled selected>
                Select One
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleInfo;
