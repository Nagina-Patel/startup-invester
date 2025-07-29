import React from 'react';
import Layout from '../components/Layout';
import HomeImage from '../assets/Images/home2.jpg'; 

const Home = () => {
  return (
        <Layout>

    <div className="p-4">
      <h1 className="text-xl">Welcome to Startup Investor Portal</h1>
      <img src={HomeImage} alt="Home" className="w-full h-auto mt-4" />
    </div>
    </Layout>
  );
};

export default Home;
