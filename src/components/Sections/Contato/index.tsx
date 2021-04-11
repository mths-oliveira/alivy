import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { id } from './data.json';

function Sobre() {
  return (
    <Flex
      flexDir="column"
      id={id}
      padding={['4.5rem 3rem', '6rem', '6rem', '6rem', '6rem 12rem']}
      bg="white"
    >
      <Text color="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        fugiat id molestiae quia odit libero illo eum dolorum repellat, error
        asperiores voluptates deleniti natus, reprehenderit dicta, repellendus
        inventore quo voluptas!
      </Text>
    </Flex>
  );
}

export default memo(Sobre);
