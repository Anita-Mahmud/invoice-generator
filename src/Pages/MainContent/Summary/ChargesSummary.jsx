
const ChargesSummary = () => {
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
      <tr className="border-none">
        <td>Daily</td>
        <td>1</td>
        <td>$99.00</td>
        <td>$99.00</td>
      </tr>
      <tr className="border-none">
        <td className="text-nowrap">Collision Damage Waiver</td>
        <td></td>
        <td>$9.00</td>
        <td>$9.00</td>
      </tr>
      
     
      
    </tbody>
    <tfoot className="border-none text-black">
        
        <tr >
        <th className="col-span-3">Charge</th>
        <th></th>
        <th></th>
        <th>Total</th>
      </tr>
        
    </tfoot>
  </table>
</div>
</div>
            </div>
        </div>
    );
};

export default ChargesSummary;