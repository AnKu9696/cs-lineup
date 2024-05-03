import { Text, Box, Image, HStack } from '@chakra-ui/react';
import { GRENADE_MAP, GRENADE_TYPES } from 'contstants';
import { Dispatch, SetStateAction } from 'react';

type GrenadeSwitcherProps = {
  onSwithGrenade: Dispatch<SetStateAction<string>>;
};

const GrenadeSwitcher = ({ onSwithGrenade }: GrenadeSwitcherProps) => {
  return (
    <Box>
      <Text
        fontWeight='600'
        fontSize='15px'
        my='10px'
        textAlign='start'
      >
        Type
      </Text>
      <HStack
        gap='20px'
        border='1px solid black'
        borderRadius='20px'
        bgColor='gray'
        px='10px'
        py='10px'
      >
        {GRENADE_TYPES.map((grenade) => (
          <Image
            border='1px solid black'
            borderRadius='20px'
            cursor='pointer'
            _hover={{
              bgColor: 'white',
            }}
            p='10px'
            key={grenade}
            src={GRENADE_MAP[grenade]}
            w='50px'
            h='50px'
          />
        ))}
      </HStack>
    </Box>
  );
};

export default GrenadeSwitcher;
