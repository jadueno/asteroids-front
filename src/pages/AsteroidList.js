import React, { useEffect, useState } from "react";
import { Loading, Input } from "../components";
import { Link } from "react-router-dom";

export const AsteroidList = () => {
  const [startDate, setStartDate] = useState("2015-09-07");
  const [endDate, setEndDate] = useState("2015-09-08");
  const [asteroids, setAsteroids] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFeedDate, setErrorFeedDate] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchAsteroids = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/api/asteroids?start_date=${startDate}&end_date=${endDate}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        if (data && data.length > 0) {
          setAsteroids(data);
        }
      } catch (error) {
        console.error("Error fetching asteroids:", error);
        setFetchError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAsteroids();
  }, [startDate, endDate]);

  const checkValidFeedDate = (date1, date2) => {
    const diffTime = Math.abs(new Date(date1) - new Date(date2));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays >= 7) {
      setErrorFeedDate(true);
      return false;
    } else {
      setErrorFeedDate(false);
      return true;
    }
  };

  const handleStartDateChange = (event) => {
    if (checkValidFeedDate(endDate, event.target.value)) {
      setStartDate(event.target.value);
    }
  };

  const handleEndDateChange = (event) => {
    if (checkValidFeedDate(event.target.value, startDate)) {
      setEndDate(event.target.value);
    }
  };

  return (
    <>
      <div className="my-2 flex sm:flex-row flex-col">
        <div className="flex flex-row mb-1 sm:mb-0">
          <div className="relative">
            <Input
              type="date"
              name="startDate"
              value={startDate}
              max={endDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="relative">
            <Input
              type="date"
              name="endDate"
              value={endDate}
              min={startDate}
              onChange={handleEndDateChange}
            />
          </div>
          {errorFeedDate && (
            <div
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Error</strong>
              <span className="block sm:inline">
                , The Feed date limit is only 7 Days
              </span>
            </div>
          )}
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Magnitude
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Diameter (kilometers)
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Hazardous
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    See detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {asteroids.map(
                  ({ id, name, magnitude, diameter, hazardous }) => (
                    <tr key={id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap font-bold">
                          {name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {magnitude}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {diameter}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span
                          className={`relative inline-block px-3 py-1 font-semibold leading-tight ${
                            hazardous ? "text-green-900" : "text-red-900"
                          }`}
                        >
                          <span
                            aria-hidden
                            className={`absolute inset-0 opacity-50 rounded-full ${
                              hazardous ? "bg-green-200" : "bg-red-200"
                            }`}
                          ></span>
                          <span className="relative">
                            {hazardous ? "No" : "Yes"}
                          </span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <Link to={`/asteroid/${id}`}>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Go
                          </button>
                        </Link>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
      {fetchError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error</strong>
          <span className="block sm:inline">
            , There was a problem while fetching the data.
          </span>
        </div>
      )}
    </>
  );
};
