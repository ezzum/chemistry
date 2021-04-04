import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./navbar/navbar";
import Table from "./table/table";
import Home from "./home/home";
import { Provider } from "react-redux";
import store from "./redux/store";

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
        </AppStyled>
      </Router>
    </Provider>
  );
}

const AppStyled = styled.div`
  font-family: "Roboto", sans-serif;
`;

export default App;
