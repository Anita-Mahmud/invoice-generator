import Header from "../Pages/Header/Header";
import Invoice from "../Pages/Invoice/Invoice";
import MainContent from "../Pages/MainContent/MainContent";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <MainContent></MainContent>
            <Invoice></Invoice>
        </div>
    );
};

export default MainLayout;