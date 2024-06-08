
const Button = () => {
    const handlePrint = ()=>{
        window.print()
    }
    return (
        <div className="">
            <button className=" bg-[#5D5CFF] btn btn-xs sm:btn-sm md:btn-md  text-white font-semibold text-sm hover:bg-[#181872]"
            onClick={handlePrint}
            >Print / Download</button>
        </div>
    );
};

export default Button;