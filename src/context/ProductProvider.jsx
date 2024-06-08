
import { createContext,  useState,useEffect } from "react";

export const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
    
    const [cars,setCars] = useState([]);
  const [reservation, setReservation] = useState([]);
  
  const [vehicleType, setVehicleType ] = useState('');
  const [vehicle, setVehicle ] = useState('');
  // const [customerInfo, setCustomerInfo] = useState([]);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [collisionDamage,setCollisionDamage] = useState(false);
  const [liabilityInsurance,setLiabilityInsurance] = useState(false);
  const [rentalTax,setRentalTax] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList')
    .then(res=>res.json())
    .then(data=>setCars(data.data))
    setLoading(false)
  },[]);
  
  const carInfo = {loading, reservation,setReservation,setVehicleType, setVehicle,cars,vehicleType,setFirstName,setLastName,setEmail,setPhone,setCollisionDamage,setLiabilityInsurance,setRentalTax,collisionDamage,
    liabilityInsurance,
    rentalTax,vehicle}
  return (
    
    <ProductContext.Provider value={carInfo}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
