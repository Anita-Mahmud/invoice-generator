import useCar from "../../hooks/useCar";


const Details = () => {
    const {firstName,
        lastName,
        email,
        phone,vehicle,vehicleType} = useCar();
    return (
        <div className="w-full">
             <div>
                {/* customer info */}
             <h1 className="text-xl font-bold border-b-2 border-[#5D5CFF] uppercase">Renter Information</h1>
             <div className="my-4">
                <p><span className="font-semibold">First Name:</span>{firstName}</p>
                <p><span className="font-semibold">Last Name:</span>{lastName}</p>
                <p><span className="font-semibold">Email:</span>{email}</p>
                <p><span className="font-semibold">Phone:</span>{phone}</p>
            </div>
           
             </div>

             <div>
                 {/* car info */}
            <h1 className="text-xl uppercase font-bold border-b-2 border-[#5D5CFF] ">Unit Details</h1>
            <div className="my-4">
                <p><span >Unit:</span>{vehicleType}</p>
                <p><span >Model:</span>{vehicle}</p>
               <div>
               <p><span >BILL TO:</span></p>
               <p>Payment Type:Unpaid</p>
               <p>AUTH:$0.00</p>
               </div>
               <div>
                <p>Referral:</p>
                <p><span className="font-semibold">NOTICE:</span></p>
                <p>Collision Insurance(CDW)- $9.00 per day limits liability of damage to own vehicle is $15.00 in an event of an accident.</p>
                <p>By waving this coverage renter agrees to be hold liable for damages up to the entire value of the vehicle</p>
                <div className="flex justify-evenly">
                    <p>Accept</p>
                    <p>Reject</p>
                </div>
               </div>
                
            </div>
             </div>
        </div>
    );
};

export default Details;