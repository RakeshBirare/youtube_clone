import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./Components/Header/Header";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Routes,Route, Navigate } from "react-router-dom";
import "./_app.scss";
import WatchScreen from "./Screen/watchScreen/WatchScreen";
import SearchScreen from "./Screen/SearchScreen";


const Layout = ({children}) => {

    const [toggler, setToggler] = useState(false)
    const handleToggler = () => setToggler(value => !value)

    

    return (
        <div>
            <Header handleToggler = {handleToggler} />
            <div className="app_container">
                <Sidebar toggler = {toggler}
                    handleToggler= {handleToggler} />
                <Container fluid className="app_main">
                    {children}
                </Container>
            </div>

        </div>
    )
}


const App = () => {
    
    // const {accessToken, loading} = useSelector(state =>state.auth)
    // console.log(accessToken)

    // let navigate = useNavigate

    // useEffect(() =>{
    //     if (!accessToken && !loading) { 
    //         navigate("/auth")
    //     }
    // },[accessToken, loading, navigate])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><HomeScreen /></Layout>} />
                <Route path ="/auth" element={<LoginScreen />} />
                <Route path="/search/:query" element={<Layout><SearchScreen /></Layout>} />
                <Route path="/watch/:id" element={<Layout><WatchScreen /></Layout>} />
                <Route path ="*" element = {<Navigate replace to="/" />} />
            </Routes>
        </Router>
    )
}

export default App;