import {Route,Routes} from "react-router-dom";
import { Tabledisplaydata } from "../BookNewTable/Booktable";
import { HomePage } from "../Homepage/homepage";
import { AccountDetails } from "../MyAccount/AccountDetails";
import { OrderDetails } from "../OrederDetails/OrderDetails";
import { RestraurantDetail } from "../RestaurentDetails/RestraurantDetail";

export const AppRoutes = ()=>{
    return <Routes>
        <Route path={`/`} element={<HomePage/>}></Route>
        <Route path={`/detail`} element={<RestraurantDetail/>}></Route>
        <Route path={`/success`} element={<OrderDetails/>}></Route>
        <Route path={`/myAccount`} element={<AccountDetails/>}></Route>
        <Route path={`/sort`} element={<Tabledisplaydata/>}></Route>
    </Routes>
}