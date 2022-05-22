import React, { useEffect } from 'react';
import './App.css';
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Account from './components/Account/Account';
import MenuItems from './components/MenuItems/MenuItems';
import ERC20Balance from "./components/ERC20Balance";

import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import "./style.css";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};

function App() {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
  useMoralis();

useEffect(() => {
  const connectorId = window.localStorage.getItem("connectorId");
  if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
    enableWeb3({ provider: connectorId });
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <h1>DefiStats</h1>
          <MenuItems />
          <div style={styles.headerRight}>
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Routes>
            <Route path='/erc20balance' element={<ERC20Balance/>}/>
            <Route path='/' element={<ERC20Balance/>}/>
          </Routes>
        </div>
      
      </Router>
    </Layout>
  );
}

export default App;