import { Box, Container, HStack } from '@chakra-ui/react';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/theme.css';
import csMaps from 'assets/maps.jpg';
import { Outlet } from 'react-router-dom';
import MapSideBar from 'views/MapSideBar';

const App = () => {
  return (
    <Box
      h='calc(100vh)'
      bgImage={csMaps}
      bgPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
    >
      <Box
        backgroundColor='rgba(0, 0, 0, 0.1)'
        w='100%'
        h='100%'
        zIndex='0'
        position='absolute'
      />
      <Container
        minW='min-content'
        paddingTop='20px'
      >
        <HStack
          borderRadius='20px'
          border='1px solid black'
          bg='rgba(189, 195, 199, 0.6)'
          alignItems='start'
        >
          <MapSideBar />
          <Outlet />
        </HStack>
      </Container>
    </Box>
  );
};

export default App;
