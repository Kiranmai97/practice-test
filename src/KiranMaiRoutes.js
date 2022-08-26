import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosFetch from "./Kiranmai/axios_async";
import Displaybutton from "./Kiranmai/buttonDisplay";
import ChartBox from "./Kiranmai/chart";
import Text from "./Kiranmai/displayText";
import ButtonDrop from "./Kiranmai/dropDown";
import ConditionalRendering from "./Kiranmai/navbar";
import Page from "./Kiranmai/pagination";
import Password from "./Kiranmai/password";
import TableData from "./Kiranmai/tableData";
import Timer from "./Kiranmai/Timer";



const KiranMaiRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/tabledata" element={<TableData />} />
        <Route path="/axiosfetch" element={<AxiosFetch />} />
        <Route path="/page" element={<Page />} />
        <Route path="/navbar" element={<ConditionalRendering />} />
        <Route path="/drop" element={<ButtonDrop/>}/>
        <Route path="/display" element={<Displaybutton/>}/>
        <Route path="/text" element={<Text/>}/>
        <Route path="/timer" element={<Timer/>}/>
        <Route path="/chart" element={<ChartBox/>}/>
        <Route path="/password" element={<Password/>}/>
        



      </Routes>
    </BrowserRouter>
  );
};

export default KiranMaiRoutes;
