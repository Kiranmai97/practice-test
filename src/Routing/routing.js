import React from "react";
import { BrowserRouter,  Routes, Route} from "react-router-dom";
import Account from "../components/account";
import Display from "../components/display";
import FormInput from "../components/form";
import Mouse from "../components/hover";
import Password from "../components/password";
import Search from "../components/search";
import TableList from "../components/table";
import Mirror from "../components/mirror";
import { Stringpb } from "../components/string";
import Find from "../components/practice";
import Duplicates from "../components/duplicates";
import Unique from "../components/unique";
import Valid from "../components/valid";
import Sorting from "../components/sorting";
import Axios from "../components/axios";

function Routing() {
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/display" element ={<Display/>}/>
                <Route path="/form" element ={<FormInput/>}/>
                <Route path="/hover" element ={<Mouse/>}/>
                <Route path="/account" element ={<Account/>}/>
                <Route path="/table" element ={<TableList/>}/>
                <Route path="/pswd" element ={<Password/>}/>
                <Route path="/search" element ={<Search/>}/>
                <Route path="/aug02" element={<Mirror/>}/>
                {/* <Route path="/string" element={<Stringpb/>}/> */}
                <Route path="/find" element={<Find/>}/>
                <Route path="/duplicates" element={<Duplicates/>}/>
                <Route path="/unique" element={<Unique/>}/>
                <Route path="/valid" element={<Valid/>}/>
                <Route path="/sort" element={<Sorting/>}/>
                <Route path="/axios" element={<Axios/>}/>
                </Routes>
                </BrowserRouter>
        </div>
    )
}
export default Routing;