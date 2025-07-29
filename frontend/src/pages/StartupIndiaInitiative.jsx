import React from "react";
import Layout from '../components/Layout';
import HomeImage from '../assets/Images/home3.jpg'; 


const StartupIndiaInitiative = () => {
  return (
      <Layout>
    <div className="p-10">
      <h1 className="text-2xl font-bold">Startup India Initiative</h1>
            <img src={HomeImage} alt="Home" className="w-full h-auto mt-4" />
      
      <p>Page content goes here hheee. Bharat Startup Knowledge Access Registry, BHASKAR, is envisioned as a one-stop digital platform where diverse startup ecosystem stakeholders can seamlessly connect and collaborate, catalysing the growth and success of the startup ecosystem across India. By providing a comprehensive platform for connection, knowledge sharing, and searchability, BHASKAR aspires to empower entrepreneurs and ecosystem stakeholders at every stage of their journey, driving forward a culture of innovation that propels India to the forefront of global entrepreneurship.
        hat is the Startup India Initiative?
Launched on 16th January, 2016, the Startup India Initiative has rolled out several programs with the objective of supporting entrepreneurs, building a robust startup ecosystem and transforming India into a country of job creators instead of job seekers. These programs are managed by a dedicated Startup India Team, which reports to The Department for Promotion of Industry and Internal Trade (DPIIT)

 

The broad scope of Startup India’s programs is outlined in the Action Plan below.

 

Prabhaav : 9 year Factbook
Startup India Action Plan
Startup India Kit
..</p>
    </div>
    </Layout>
  );
};

export default StartupIndiaInitiative;
