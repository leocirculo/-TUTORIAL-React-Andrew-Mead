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
        <ol>
          <li>
            <Link to="/?location=Berlin">Berlin, Germany</Link>
          </li>
          <li>
            <Link to="/?location=Resistencia">Resistencia, Chaco</Link>
          </li>
        </ol>
      </Layout>
    </div>
  );
};

export default Main;