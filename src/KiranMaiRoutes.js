import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AxiosFetch from "./components/axios_async";
import Displaybutton from "./components/buttonDisplay";
import ChartBox from './components/chart';
import Text from "./components/displayText";
import ButtonDrop from "./components/dropDown";
import ConditionalRendering from "./components/navbar";
import Page from "./components/pagination";
import Password from "./components/password";
import TableData from "./components/tableData";
import Timer from "./components/Timer";



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
