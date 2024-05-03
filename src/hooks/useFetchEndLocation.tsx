import { useEffect, useState } from 'react';
import { GrenadesData } from 'types';

export const useFetchEndLocation = (map: string, grenadeType: string) => {
  const [data, setData] = useState<GrenadesData | []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/map/${map}?type=${grenadeType}`
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

    fetchData();
  }, [map, grenadeType]);
  return { data, loading };
};
