import useCar from "../../../hooks/useCar";

const AdditionalCharges = () => {
  const {collisionDamage,
    liabilityInsurance,
    rentalTax,setCollisionDamage,setLiabilityInsurance,setRentalTax} = useCar();
   const handleCollison = ()=>{
    setCollisionDamage(!collisionDamage)
   }
   const handleLiabilityInsurance = ()=>{
    setLiabilityInsurance(!liabilityInsurance)
   }
   const handleRentalTax = ()=>{
    setRentalTax(!rentalTax)
   }
    return (
        <div className="mt-7">
             <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">Additional Charges</h3>
             <div className="card w-full rounded-md border-2 border-[#DFDFFF] mt-5 font-display text-sm font-light">
           
  <table className="table">
    {/* head */}
    
    <tbody className="font-normal ">
     
      <tr className="border-none ">
        <td>
          <label>
            <input onClick={handleCollison}  type="checkbox" className="checkbox" />
          </label>
        </td>
       
        <td >
        <p className="-ml-10">Collision Damage Waiver</p>
        </td>
        <td>
        $9.00
        </td>
       </tr>
      <tr className="border-none">
        <td>
          <label>
            <input onClick={handleLiabilityInsurance} type="checkbox" className=" checkbox" />
          </label>
        </td>
       
        <td >
        <p className="-ml-10">Liability Insurance</p>
        </td>
        <td>
        $15.00
        </td>
       </tr>
      <tr className="border-none">
        <td>
          <label>
            <input onClick={handleRentalTax}  type="checkbox" className=" checkbox" />
          </label>
        </td>
       
        <td >
        <p className="-ml-10">Rental Tax</p>
        </td>
        <td>
        $11.5
        </td>
       </tr>
    </tbody>
    {/* foot */}
    
  </table>
</div>
    </div>
        
    );
};

export default AdditionalCharges;