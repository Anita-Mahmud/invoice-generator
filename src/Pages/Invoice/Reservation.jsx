import useCar from "../../hooks/useCar";

const Reservation = () => {
    const {reservation} = useCar();
   const {rid,pickupDate, returnDate} = reservation
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