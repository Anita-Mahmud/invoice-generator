/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useMemo, useState } from "react";

export const ProductContext = createContext(null);
const ProductProvider = ({ children }) => {
    const [cars,setCars] = useState([]);
  const [reservation, setReservation] = useState([]);
  const [vehicleInfo, setVehicleInfo] = useState([]);
  const [customerInfo, setCustomerInfo] = useState([]);
  const [additional, setAdditional] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const carInfo = {loading, reservation,setReservation,}
  return (
    <ProductContext.Provider value={carInfo}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
