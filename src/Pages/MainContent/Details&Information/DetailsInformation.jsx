import AdditionalCharges from "./AdditionalCharges";
import CustomerInfo from "./CustomerInfo";
import ReservationDetails from "./ReservationDetails";
import VehicleInfo from "./VehicleInfo";

const DetailsInformation = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
             <div>
                <ReservationDetails></ReservationDetails>
                <VehicleInfo></VehicleInfo>
             </div>
             <div>
                <CustomerInfo></CustomerInfo>
                <AdditionalCharges></AdditionalCharges>
             </div>
        </div>
    );
};

export default DetailsInformation;