import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [view, setView] = useState(window.localStorage.getItem("view"));
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUserData = () => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://randomuser.me/api/?results=15")
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.results);
          setLoading(false);
        });
    }, 3000);
  };
  //added setTimeout so that loader can be visible

  useEffect(() => {
    setView(window.localStorage.getItem("view"));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("view", view);
  }, [view]);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="root">
      <Header changeView={setView} view={view} fetchUsers={fetchUserData} />
      {!loading ? <Main view={view} users={users} /> : <Loader />}
      <Footer />
    </div>
  );
};

export default App;
