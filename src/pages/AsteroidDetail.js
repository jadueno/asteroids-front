import React, { useEffect, useState } from "react";
import { Loading, Card } from "../components";
import { useParams } from "react-router-dom";

export const AsteroidDetail = () => {
  const { id } = useParams();

  const [asteroid, setAsteroid] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAsteroid = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/asteroids/${id}`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setAsteroid(data);
      } catch (error) {
        console.error("Error fetching asteroid:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAsteroid();
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <h1 className="text-xl font-semibold leading-tight text-blue-500 pb-4">
        {asteroid.name}
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <Card title="Magnitude" subtitle={asteroid.absolute_magnitude_h} />
        <Card title="Designation" subtitle={asteroid.designation} />
        <Card
          title="Diameter"
          subtitle={
            asteroid.estimated_diameter?.kilometers.estimated_diameter_max
          }
        />
        <Card
          title="Hazardous"
          subtitle={asteroid.is_potentially_hazardous_asteroid ? "Yes" : "No"}
        />
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Close approach date
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Relative velocity (Km/s)
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Miss distance (km)
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Orbiting body
                </th>
              </tr>
            </thead>
            <tbody>
              {asteroid &&
                asteroid.close_approach_data &&
                asteroid.close_approach_data.map(
                  ({
                    close_approach_date,
                    relative_velocity,
                    miss_distance,
                    orbiting_body,
                  }) => (
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {close_approach_date}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {relative_velocity.kilometers_per_second}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {miss_distance.kilometers}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {orbiting_body}
                        </p>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
