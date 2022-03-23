import React from "react";
import { Route, Link,Routes } from 'react-router-dom';

class ReactPage extends React.Component{
    render(){
        return(<h2>ReactPage页面</h2>)
    }
}

class Flutter extends React.Component{
    render(){
        return(<h2>Flutter页面</h2>)
    }
}

class Vue extends React.Component{
    render(){
        return(<h2>Vue页面</h2>)
    }
}

class Video extends React.Component{


       render(){
            return (
                <div>
                    <div className="topNav">
                        <ul>
                            <li><Link to="/video/reactpage">React教程</Link></li>
                            <li><Link to="/video/flutter">Flutter教程</Link></li>
                            <li><Link to="/video/vue">Vue教程</Link></li>
                        </ul>
                    </div>
                    <div className="videoContent">
                        <div><h3>视频教程</h3></div>
                        <Routes>
                            <Route path="/video/reactpage" element={ReactPage} />
                            <Route path="/video/flutter" element={Flutter} />
                            <Route path="/video/vue" element={Vue} />
                        </Routes>
                    </div>
                </div>
            )
       }
    }

export default Video