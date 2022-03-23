import React, { useState } from 'react';
import { BrowserRouter,Link,Route,Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Video from "./Pages/Video";
import WorkPlace from "./Pages/WorkPlace";

function App() {
  const [routeConfig,setRouteConfig] = useState([
    {id:'1', path: '/', title: '博客首页', exact: true, component: Index },
    {id:'2', path: '/video/', title: '视频教程', exact: false, component: Video },
    {id:'3', path: '/workplace/', title: '职场技能', exact: false, component: WorkPlace }
    ]);

    console.log(setRouteConfig);
    
  return (
  <BrowserRouter>
    <div className="main_div">
      <h3>一级导航</h3>
      <ul>
        {routeConfig.map((item)=>{
         return (<li key={item.id}><Link  to={item.path}>{item.title}</Link></li>)
        })}
      </ul>
    </div>
    <div className="rightMain">
      <h3>二级导航</h3>
      <Routes>
       {routeConfig.map((item)=>{
          return (<Route key={item.id} path={item.path}  element={item.component} />)
        })}
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
