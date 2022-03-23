import React from "react";
import { Route, Link,Routes } from 'react-router-dom';

class Getup extends React.Component{
    render(){
        return(<h2>Getup页面</h2>)
    }
}

class Money extends React.Component{
    render(){
        return(<h2>Money页面</h2>)
    }
}

class WorkPlace extends React.Component{

    render(){
        return(
            <div>
                    <div className="topNav">
                        <ul>
                            <li><Link to="/workplace/getup">Getup</Link></li>
                            <li><Link to="/workplace/money">赚Money</Link></li>
                        </ul>
                    </div>
                    <div className="videoContent">
                        <div><h3>升职教程</h3></div>
                        <Routes>
                            <Route path="/workplace/getup" element={Getup} />
                            <Route path="/workplace/money" element={Money} />
                        </Routes>
                    </div>
                </div>
        )
    }
}

export default WorkPlace