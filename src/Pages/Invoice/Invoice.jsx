
import Details from "./Details";
import Reservation from "./Reservation";

const Invoice = () => {
    
        
    return (
        <div className="">
           <h1 className="text-2xl font-bold border-b-2 border-[#5D5CFF] w-1/2">Invoice</h1>
           <div className="grid grid-cols-2 gap-3">
            <div>
                <Details></Details>
            </div>
            <div>
                <Reservation></Reservation>
            </div>
           </div>

        </div>
    );
};

export default Invoice;