import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./navbar/navbar";
import Table from "./table/table";
import Home from "./home/home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./footer/footer";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppStyled>
          <NavBar />
          <Switch>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </AppStyled>
      </Router>
    </Provider>
  );
}

const AppStyled = styled.div`
  font-family: "Roboto", sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default App;
