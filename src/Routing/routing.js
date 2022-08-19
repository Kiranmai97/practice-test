import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "../components/account";
import Display from "../components/display";
import FormInput from "../components/form";
import Mouse from "../components/hover";
import Password from "../components/password";
import Search from "../components/search";
import TableList from "../components/table";
import Mirror from "../components/mirror";
import Find from "../components/practice";
import Duplicates from "../components/duplicates";
import Unique from "../components/unique";
import Valid from "../components/valid";
import Sorting from "../components/sorting";
import Axios from "../components/axios";
import Fetch from "../components/fetch";
import Hooks from "../components/updating";
import Sample from "../components/sample";
import Propsuser from "../components/propsuser";
import TextUpper from "../components/textupper";



function Routing() {
    return (
        <div>
            <BrowserRouter>

                <Routes>
                    <Route path="/display" element={<Display />} />
                    <Route path="/form" element={<FormInput />} />
                    <Route path="/hover" element={<Mouse />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/table" element={<TableList />} />
                    <Route path="/pswd" element={<Password />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/aug02" element={<Mirror />} />
                    <Route path="/find" element={<Find />} />
                    <Route path="/duplicates" element={<Duplicates />} />
                    <Route path="/unique" element={<Unique />} />
                    <Route path="/valid" element={<Valid />} />
                    <Route path="/sort" element={<Sorting />} />
                    <Route path="/axios" element={<Axios />} />
                    <Route path="/fetch" element={<Fetch />} />
                    <Route path="/hooks" element={<Hooks />} />
                    <Route path="/sample" element={<Sample />} />
                    <Route path="/props" element={<Propsuser/>}/>
                    <Route path="/text" element={<TextUpper/>}/>


                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routing;