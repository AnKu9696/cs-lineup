import { useState } from 'react';
import { StartPosition } from 'types';

export const useFetchStartPosiitions = () => {
  const [data, setData] = useState<StartPosition[] | []>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (endLocationId: string) => {
    try {
      const response = await fetch(
        `http://localhost:8000/map/${endLocationId}/start-positions`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, fetchData };
};
