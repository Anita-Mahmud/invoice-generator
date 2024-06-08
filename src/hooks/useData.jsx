import { useEffect } from "react";
import useCar from "./useCar";

const useData = () => {
    const {cars,loading,setCars,setLoading} = useCar();
    useEffect(()=>{
        fetch('https://exam-server-7c41747804bf.herokuapp.com/carsList')
        .then(res=>res.json())
        .then(data=>setCars(data.data))
        setLoading(false)
    },[setCars,setLoading])
    return ({cars,loading});
};

export default useData;