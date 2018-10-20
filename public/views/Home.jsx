import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Layout from './../components/Layout';

const Home = () => {
  return (
    <div className="page">
      <Layout>
        <div className="text-center">
          <h1>Home</h1>
          <p>THis is the home</p>
        </div>
      </Layout>
    </div>
  );
};

export default Home;