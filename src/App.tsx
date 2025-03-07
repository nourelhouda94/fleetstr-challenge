import React, { useState, useEffect } from "react";
import CostChart from "./components/CostChart";
import Filters from "./components/Filters";

/**
 * Dummy dataset representing cost comparisons for different categories.
 * This data is used for initial rendering and will be modified based on filters.
 */
const dummyData = [
  { category: "Financing", vehicleCost: 300, averageCost: 220 },
  { category: "Fuel", vehicleCost: 400, averageCost: 350 },
  { category: "Maintenance", vehicleCost: 280, averageCost: 210 },
  { category: "Tires", vehicleCost: 390, averageCost: 320 },
  { category: "Damages", vehicleCost: 250, averageCost: 180 },
  { category: "Insurance", vehicleCost: 120, averageCost: 50 },
  { category: "Misc", vehicleCost: 270, averageCost: 230 },
];

const App = () => {
  const [data, setData] = useState(dummyData); // State to store cost comparison data

  /**
   * Simulates fetching filtered data based on selected filters.
   * In a real-world scenario, this would involve an API request.
   *
   * @param {string} filter - Selected time filter (e.g., "All Time", "Last Month").
   * @param {string} location - Selected location filter.
   * @param {string} [startDate] - Custom start date (if applicable).
   * @param {string} [endDate] - Custom end date (if applicable).
   */
  const fetchData = async (filter: string, location: string, startDate?: string, endDate?: string) => {
    console.log("Fetching data with filters:", { filter, location, startDate, endDate });

    // If "All Time" and "All Locations" are selected, use the default dataset
    if (filter === "All Time" && location === "All Locations") {
      setData(dummyData);
      return;
    }

    // Apply random adjustments to simulate data filtering/modifications
    let filteredData = dummyData.map((item) => ({
      ...item,
      vehicleCost: item.vehicleCost * (Math.random() * 0.5 + 0.75), // Math.random() is used to simulate real-world dynamic data by randomly modifying the cost values within a reasonable range
      averageCost: item.averageCost * (Math.random() * 0.5 + 0.75),
    }));

    // Apply further modifications if a custom time range is selected
    if (filter === "Custom" && startDate && endDate) {
      console.log(`Filtering data from ${startDate} to ${endDate}`);
      filteredData = filteredData.map((item) => ({
        ...item,
        vehicleCost: item.vehicleCost * 1.1, // Example adjustment for demonstration
      }));
    }

    setData(filteredData);
  };

  /**
   * useEffect Hook - Fetches initial data on component mount.
   */
  useEffect(() => {
    fetchData("All Time", "All Locations");
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full">
      <div className="md:flex items-start  mb-6">
        <div className="md:min-w-1/2 sm:min-w-full mb-6">
          <h4>Tesla Roadster 2.5</h4>
          <h1 className="text-2xl font-bold">Vehicle Cost Comparison</h1>
        </div>
        <div className="md:min-w-1/2 w-full md:flex justify-end flex-wrap">
          <Filters onFilterChange={fetchData} />
        </div>
      </div>

      {/* Cost Comparison Chart */}
      <div className="w-full">
        <CostChart data={data}/>
      </div>
      
    </div>
  );
};

export default App;
