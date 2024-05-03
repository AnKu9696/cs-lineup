import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
} from '@chakra-ui/react';
import { MAPS } from 'contstants';
import { Link } from 'react-router-dom';
import mirage from 'assets/mapsIcons/mirage.png';
import nuke from 'assets/mapsIcons/nuke.png';
import overpass from 'assets/mapsIcons/overpass.png';
import inferno from 'assets/mapsIcons/inferno.png';
import vertigo from 'assets/mapsIcons/vertigo.png';
import anubis from 'assets/mapsIcons/anubis.png';
import ancient from 'assets/mapsIcons/ancient.png';
import { ReactElement } from 'react';

export const MAP_ICON: Record<string, string> = {
  mirage,
  nuke,
  overpass,
  inferno,
  vertigo,
  anubis,
  ancient,
};

type SideBar = {
  title: string;
  children: ReactElement;
};

const SideBar = (props: SideBar) => {
  const { children, title } = props;
  return (
    <Box
      borderRadius='20px'
      marginLeft='10px'
      marginTop='10px'
      bg='gray'
      border='1px solid black'
    >
      <Accordion
        allowToggle
        defaultIndex={[0]}
      >
        <AccordionItem border='none'>
          <h1>
            <AccordionButton
              minW='200px'
              justifyContent='space-between'
            >
              <Box>
                <Text
                  fontWeight='600'
                  fontSize='20px'
                >
                  {title}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel
            pl={3}
            pb={3}
          >
            {children}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default SideBar;
