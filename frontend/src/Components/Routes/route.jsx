import {Route,Routes} from "react-router-dom";
import { Tabledisplaydata } from "../BookNewTable/Booktable";
import { HomePage } from "../Homepage/homepage";
import { AccountDetails } from "../MyAccount/AccountDetails";
import { OrderDetails } from "../OrederDetails/OrderDetails";
import { MainContent } from "../RestaurentDetails/MainContent";
import { RestraurantDetail } from "../RestaurentDetails/RestraurantDetail";
import Footer from "../../Components/footer"
import Navbar from "../../Components/navbar"
import RestaurantDashboard from "../RestaurantAuth.jsx/RestaurantDashboard";
export const AppRoutes = ()=>{
    const location = window.location.href;
    return <Routes>
        <Route path={`/`} element={<HomePage/>}></Route>
        <Route path={`/detail`} element={<MainContent/>}></Route>
        <Route path={`/success`} element={<OrderDetails/>}></Route>
        <Route path={`/myAccount`} element={<AccountDetails/>}></Route>
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard/>}></Route>
        <Route path={`/sort`} element={<Tabledisplaydata/>}></Route>
        </Routes>
}