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
import { useSelector } from "react-redux";
import Hoc from "../Hoc";
export const AppRoutes = ()=>{


    
    return <Routes>
        <Route path={`/`} element={<HomePage/>}></Route>
        <Route path={`/detail`} element={<Hoc><MainContent/></Hoc>}></Route>
        <Route path={`/success`} element={<Hoc><OrderDetails/></Hoc>}></Route>
        <Route path={`/myAccount`} element={<AccountDetails/>}></Route>
        <Route path="/restaurant/dashboard" element={<RestaurantDashboard/>}></Route>
        <Route path={`/sort`} element={<Hoc><Tabledisplaydata/></Hoc>}></Route>
        </Routes>
}