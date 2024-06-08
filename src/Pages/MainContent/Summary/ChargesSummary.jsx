import { useEffect, useState } from "react";
import useCar from "../../../hooks/useCar";


const ChargesSummary = () => {
  const {reservation,carDetail,collisionDamage,
    liabilityInsurance,
    rentalTax,setWeekCharges,setDailyCharges,setHourCharges,setCharges} = useCar();
   
  
  let damage,liability,tax,totalWeekly,totalDaily,totalHourly,totalSum;
      if(collisionDamage){
        damage = 9.00
      }else{
        damage = 0.00
      }
      
      if(liabilityInsurance){
        liability = 15.00
      }else{
        liability=0.00
      }
     
      if(rentalTax){
        tax = 11.5
      }else{
        tax=0.00
      }
      
  if(carDetail&&reservation.duration)
  {
    totalWeekly = parseFloat((reservation.duration.weeks)*(carDetail.rates.weekly));
    
    totalDaily = parseFloat((reservation.duration.days)*(carDetail.rates.daily));
    
    totalHourly = parseFloat((reservation.duration.hours)*(carDetail.rates.hourly));
    
    totalSum = parseFloat(totalWeekly+totalDaily+totalHourly+damage+liability+tax);
  
      const parsed = parseFloat(reservation.discount);
     
        totalSum -= (totalSum * parsed / 100);
      
}

useEffect(()=>{
  
  if (carDetail && reservation.duration)
    {
      (reservation.duration.weeks>0)?
        setWeekCharges({
          unit:reservation.duration.weeks,
          rates:carDetail.rates.weekly,
          totalWeekly
        }):setWeekCharges({});
        (reservation.duration.days>0)?
        setDailyCharges({
          unit:reservation.duration.days,
          rates:carDetail.rates.daily,
          totalDaily
        }):setDailyCharges({});
        (reservation.duration.hour>0)?
        setHourCharges({
          unit:reservation.duration.hours,
          rates:carDetail.rates.hourly,
          totalHourly
        }):setDailyCharges({});

        setCharges(parseFloat(totalSum))

      }
},[carDetail, reservation.duration, setCharges, setDailyCharges, setHourCharges, setWeekCharges, totalDaily, totalHourly, totalSum, totalWeekly])



   return (
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
    <tbody >
      {/* row 1 */}
     {carDetail&&
    <>
    {reservation.duration && 
     <>
     {
      (reservation.duration.weeks>0)?
      <tr className="border-none" >
      <td>Weekly</td>
      <td>{reservation.duration.weeks}</td>
      <td>${carDetail.rates.weekly}</td>
      <td>${(reservation.duration.weeks)*(carDetail.rates.weekly)}</td>
    </tr>
    :''
     }
     {
      (reservation.duration.days>0)?
      <tr className="border-none">
      <td>Daily</td>
      <td>{reservation.duration.days}</td>
      <td>${carDetail.rates.daily}</td>
      <td>${(reservation.duration.days)*(carDetail.rates.daily)}</td>
    </tr>
    :''
     }
     {
      (reservation.duration.hours)?
      <tr className="border-none">
      <td>Hourly</td>
      <td>{reservation.duration.hours}</td>
      <td>${carDetail.rates.hourly}</td>
      <td>${(reservation.duration.hours)*(carDetail.rates.hourly)}</td>
    </tr>
    :''
     }
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
      <tr className="border-none">
      <td>Discount</td>
      <td></td>
        <td>{reservation.discount}%</td>
        <td>{reservation.discount}%</td>
     
    </tr>
     </>}
    
    </>
    
      }
       
     
      
    </tbody>
    <tfoot className="border-none text-black">
        
       {(carDetail&&reservation)? <tr >
        <th className="col-span-3">Total</th>
        <th></th>
        <th></th>
        <th>${ totalSum}</th>
      </tr>:
       <tr >
       <th className="col-span-3">Total</th>
       <th></th>
       <th></th>
       <th>0</th>
     </tr>}
        
    </tfoot>
  </table>
</div>
</div>
            </div>
        </div>
    );
};

export default ChargesSummary;