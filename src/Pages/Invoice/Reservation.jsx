import useCar from "../../hooks/useCar";

const Reservation = () => {
    const {reservation,weekCharges,dayCharges,hourCharges,charges,collisionDamage,liabilityInsurance,rentalTax} = useCar();
   const {rid,pickupDate, returnDate,discount} = reservation
    return (
        <div>
            <div>
            <h1 className="text-xl font-bold border-b-2 border-[#5D5CFF] uppercase">Reservation</h1>
            <p className="font-semibold">RA#{rid}</p>
            <div>
                <p>CLAIM:</p>
                <p>Pickup Time:{pickupDate}</p>
                <p>Return Time:{returnDate}</p>
            </div>
            {/* charges */}
            <div>
            <div>
            <h3 className="text-lg font-semibold border-b-2 border-[#5D5CFF]">Charges Summary</h3>
            <div className="w-[420px] mt-5 bg-[#DFDFFF] border-2 border-[#5D5CFF] rounded  py-2.5 ">
            <div className="">
            <div className="">
  <table className="table border-none">
    {/* head */}
    <thead className="text-black ">
      <tr className="border-none">
        <th >Charge</th>
        <th>Unit</th>
        <th>Rate</th>
        <th>Total</th>
      </tr>
    </thead>
   <tbody>
   {weekCharges?<tr className="border-none" >
      <td>Weekly</td>
      <td>{weekCharges.unit}</td>
      <td>${weekCharges.rates}</td>
      <td>${weekCharges.totalWeekly}</td>
    </tr>:''}
   {dayCharges?<tr className="border-none" >
      <td>Daily</td>
      <td>{dayCharges.unit}</td>
      <td>${dayCharges.rates}</td>
      <td>${dayCharges.totalDaily}</td>
    </tr>:''}
   {hourCharges?<tr className="border-none" >
      <td>Hourly</td>
      <td>{hourCharges.unit}</td>
      <td>${hourCharges.rates}</td>
      <td>${hourCharges.totalHourly}</td>
    </tr>:''}
    {collisionDamage? <tr className="border-none">
        <td className="text-nowrap">Collision Damage Waiver</td>
        <td></td>
        <td>$9.00</td>
        <td>$9.00</td>
      </tr>:''}
     {liabilityInsurance? <tr className="border-none">
        <td className="text-nowrap">Liability Insurance</td>
        <td></td>
        <td>$15.00</td>
        <td>$15.00</td>
      </tr>:''}
     {rentalTax? <tr className="border-none">
        <td className="text-nowrap">Rental Tax</td>
        <td></td>
        <td>$11.5</td>
        <td>$11.5</td>
      </tr>:''}
   {discount?<tr className="border-none">
      <td>Discount</td>
      <td></td>
        <td></td>
        <td>{discount}%</td>
     
    </tr>:''}

   </tbody>
    <tfoot className="border-none text-black"> 
       <tr >
        <th className="col-span-3">Total</th>
        <th></th>
        <th></th>
        <th>{charges}</th>
      </tr> 
    </tfoot>
  </table>
</div>
</div>
            </div>
        </div>
            </div>
            <div>
                <p>
                    Your rental agreement offers for an additional charge,an optiona waiver to cover all or part of your responsibility for damage to or loss of the vehicle 
                </p>
            </div>
            <div>
                <p>Renters Signature </p>
                <p>___________________</p>
            </div>
            <div>
                <p>Additional Driver 1</p>
                <p>___________________</p>
            </div>
            </div>
        </div>
    );
};

export default Reservation;