import React from 'react';
import { NavLink as Link } from "react-router-dom";
import Layout from './../components/Layout';

const Main = () => {
  return (
    <div className="page">
      <Layout>
        <div className="text-center">
          <h1>Examples</h1>
          <p>Here are some examples to try out</p>
        </div>
      </Layout>
    </div>
  );
};

export default Main;