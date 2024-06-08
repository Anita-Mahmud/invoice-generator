/* eslint-disable react/no-unknown-property */

import ReactToPrint, { useReactToPrint } from "react-to-print";
import Invoice from "../Pages/Invoice/Invoice";
import { useEffect, useRef, useState } from "react";

const Button = () => {
    const [showInvoice, setShowInvoice] = useState(false);
   
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        onAfterPrint: () => setShowInvoice(false) 
      });
      const handlePrintClick = () => {
        setShowInvoice(true);
      };
      useEffect(() => {
        if (showInvoice) {
          handlePrint();
        }
      }, [showInvoice, handlePrint]);
    return (
        <div className="">
           
            <button className=" bg-[#5D5CFF] btn btn-xs sm:btn-sm md:btn-md  text-white font-semibold text-sm hover:bg-[#181872]"
            onClick={handlePrintClick}
            >Print / Download</button>
            {showInvoice && <Invoice ref={componentRef} />}
         
        </div>
    );
};

export default Button;