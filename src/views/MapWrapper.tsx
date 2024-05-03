import { Box, Spinner } from '@chakra-ui/react';
import { MAP_SIZE } from 'contstants';
import { useFetchEndLocation } from 'hooks/useFetchEndLocation';
import { useFetchStartPosiitions } from 'hooks/useFetchStartPositions';
import { useState } from 'react';
import { Image as KonvaImage, Layer, Stage } from 'react-konva';
import { Html } from 'react-konva-utils';
import { GrenadeSetup } from 'types';
import useImage from 'use-image';
import Grenade from 'views/Grenade';
import StartPositionsRender from 'views/StartPositionsRender';
import GrenadeSwitcher from './GrenadeSwitcher';

const MapWrapper = ({ map }: { map: string }) => {
  const [grenadeType, setGrenadeType] = useState<string>('smoke');
  const { data: grenadesData, loading } = useFetchEndLocation(
    'mirage',
    grenadeType
  );
  const [selectedGrenade, setSelectedGrenade] = useState<string>('');
  const { data: startPositions, fetchData } = useFetchStartPosiitions();
  const [image] = useImage(map);

  const onGrenadeClick = (grenadeId: string) => {
    if (selectedGrenade !== grenadeId) {
      fetchData(grenadeId).then(() => {
        setSelectedGrenade(grenadeId);
      });
    } else {
      setSelectedGrenade('');
    }
  };

  return (
    <Box>
      <Stage
        width={MAP_SIZE}
        height={MAP_SIZE}
      >
        {!loading ? (
          <>
            <Layer>
              <Html>
                <GrenadeSwitcher onSwithGrenade={setGrenadeType} />
              </Html>
              <KonvaImage
                image={image}
                width={MAP_SIZE}
                height={MAP_SIZE}
              />
              {grenadesData.map((grenade: GrenadeSetup, index) => (
                <Grenade
                  index={index}
                  isSelected={
                    !selectedGrenade || grenade.id === selectedGrenade
                  }
                  onGrenadeClick={() => onGrenadeClick(grenade.id)}
                  id={grenade.id}
                  x={grenade.position.x}
                  y={grenade.position.y}
                  grenadeType={grenade.type}
                  key={grenade.id}
                  count={grenade.count}
                />
              ))}
            </Layer>
            <Layer>
              {startPositions.map(({ id, ...props }, index) => (
                <StartPositionsRender
                  isGrenadeSelected={!!selectedGrenade}
                  key={id}
                  startId={id}
                  endId={selectedGrenade}
                  index={index}
                  {...props}
                />
              ))}
            </Layer>
          </>
        ) : (
          <Layer>
            <Html
              divProps={{
                style: {
                  top: `${MAP_SIZE / 2 - 60}px`,
                  left: `${MAP_SIZE / 2 - 60}px`,
                  textAlign: 'center',
                },
              }}
            >
              <Spinner
                thickness='4px'
                speed='0.5s'
                emptyColor='gray.200'
                color='rgba(116, 100, 72, 1)'
                size='xl'
              />
            </Html>
          </Layer>
        )}
      </Stage>
    </Box>
  );
};

export default MapWrapper;
