import "./assets/style/app.scss"
import React from "react";
import CategoryRow from "./components/CategoryRow";
import {requests} from "./api/requests";
import HeaderContainer from "./containers/HeaderContainer";
import CategoryRowContainer from "./containers/CategoryRowContainer";
import Nav from "./components/Nav";

const App = () => {

    return (
        <div className="app">
            <Nav/>
            <HeaderContainer/>
            <CategoryRowContainer/>
        </div>
    );
};

export default App;