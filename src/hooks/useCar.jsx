import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";



const useCar = () => {
    const carContext = useContext(ProductContext)
    return carContext;
};

export default useCar;