import DetailsInformation from "./Details&Information/DetailsInformation";
import ChargesSummary from "./Summary/ChargesSummary";

const MainContent = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {/* Details&Information */}
            <div className="col-span-2">
                <DetailsInformation></DetailsInformation>
            </div>
             {/* Summary */}
            <div>
                <ChargesSummary></ChargesSummary>
            </div>
            
        </div>
    );
};

export default MainContent;