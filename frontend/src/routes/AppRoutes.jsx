import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import StartupInitiative from "../pages/StartupIndiaInitiative";
import Faqs from "../pages/Faqs";
import Prabhaav from "../pages/Prabhaav";
import SeedFundScheme from "../pages/SeedFundScheme";
import SchemesandPolicies from "../pages/SchemesandPolicies"
import MarketAccess from "../pages/MarketAccess";
import Initiatives from "../pages/Initiatives";
import Resources from "../pages/Resources";
import SearchResults from "../pages/SearchResults";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />

      {/* Dropdown files for the about  */}
      <Route path="/startup-initiative" element={<StartupInitiative />} />
      <Route path="/faqs" element={<Faqs />} />
      {/* Dropdown files for the Recognition  */}
       <Route path="/prabhaav" element={<Prabhaav />} />
       {/* Dropdown files for the Recognition  */}

      <Route path="/SeedFundScheme" element={<SeedFundScheme />} />
      <Route path="/SchemesandPolicies" element={<SchemesandPolicies />} />
      <Route path="/MarketAccess" element={<MarketAccess />} />
      <Route path="/Initiatives" element={<Initiatives />} />
      <Route path="/Resources" element={<Resources />} />



    </Routes>
  );
};

export default AppRoutes;
