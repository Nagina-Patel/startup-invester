import React from "react";
import { useLocation } from "react-router-dom";
import Layout from '../components/Layout';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("q");

  const fakeData = ["apple", "banana", "orange", "grape", "watermelon"];
  const results = fakeData.filter(item =>
    item.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  return (
     <Layout>
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        Results for: <span className="text-orange-500">{searchTerm}</span>
      </h2>
      {results.length > 0 ? (
        <ul className="list-disc list-inside">
          {results.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
    </Layout>
  );
};

export default SearchResults;
