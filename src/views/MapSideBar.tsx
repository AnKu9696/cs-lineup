import { Box, Image, Text } from '@chakra-ui/react';
import SideBar, { MAP_ICON } from 'components/SideBar';
import { MAPS } from 'contstants';

import newsIcon from 'assets/newsIcon.png';
import { Link, useLocation } from 'react-router-dom';

const MapSideBar = () => {
  const location = useLocation();

  return (
    <SideBar title='Maps'>
      <>
        {MAPS.map((map) => (
          <Box
            key={map}
            borderRadius='20px'
            _hover={{
              bgColor: 'rgb(191, 191, 191, 1)',
            }}
            py='5px'
            pl='5px'
          >
            <Link to={map}>
              <Box
                display='flex'
                alignItems='center'
              >
                <Image
                  mr='10px'
                  src={MAP_ICON[map]}
                  w='32px'
                  h='32px'
                />
                <Text fontWeight='500'>
                  {map.charAt(0).toUpperCase() + map.slice(1)}
                </Text>
              </Box>
            </Link>
          </Box>
        ))}
        {location.pathname !== '/' && (
          <Box
            borderRadius='20px'
            _hover={{
              bgColor: 'rgb(191, 191, 191, 1)',
            }}
            py='5px'
            pl='5px'
          >
            <Link to='/'>
              <Box
                display='flex'
                alignItems='center'
              >
                <Image
                  mr='10px'
                  src={newsIcon}
                  w='32px'
                  h='32px'
                />
                <Text fontWeight='500'>News</Text>
              </Box>
            </Link>
          </Box>
        )}
      </>
    </SideBar>
  );
};

export default MapSideBar;
