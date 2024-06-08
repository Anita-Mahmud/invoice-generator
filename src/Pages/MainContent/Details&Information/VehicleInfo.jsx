import { useEffect, useState } from "react";
import useCar from "../../../hooks/useCar";


const VehicleInfo = () => {
  const {cars,setVehicleType, setVehicle,vehicleType} = useCar();
  const [types,setTypes] = useState([]);
  const [filtered,setFiltered] = useState([]);
  useEffect(()=>{
    const uniqueTypes = [...new Set(cars.map(car=>car.type))];
    setTypes(uniqueTypes)
  },[cars]);
  useEffect(()=>{
    const filteredCars = cars.filter(car=>car.type === vehicleType);
    setFiltered(filteredCars);
  },[cars, vehicleType])
  
  
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
              name="vehicle_type" onChange={(e)=>setVehicleType(e.target.value)}
            >
              <option disabled selected>
                Select One
              </option>
             {
              types.map((type,idx)=> <option key={idx} value={type} >{type}</option>)
             }
             
              
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
              name="vehicle" onChange={(e)=>setVehicle(e.target.value)}
            >
              <option disabled selected>
                Select One
              </option>
             {
             filtered.map((found,idx)=> <option key={idx} value={found.model} >{found.model}</option>)
             }
              
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleInfo;
