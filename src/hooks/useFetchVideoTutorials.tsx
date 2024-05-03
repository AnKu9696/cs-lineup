import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { VideoTutorials } from 'types';

export const useFetchVideoTutorials = (startId: string, endId: string) => {
  const [data, setData] = useState<VideoTutorials | []>([]);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchVideoTutorial = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/grenade?start=${startId}&end=${endId}`
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
      onOpen();
    }
  };
  return { data, loading, isOpen, onClose, fetchVideoTutorial };
};
