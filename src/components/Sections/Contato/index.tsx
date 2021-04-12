import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { id, content } from './data.json';

function Sobre() {
  return (
    <Flex
      as="footer"
      flexDir="column"
      id={id}
      padding={['4.5rem 3rem', '6rem', '6rem', '6rem', '6rem 12rem']}
      bg="white"
    >
      <Text color="text">{content.text}</Text>
    </Flex>
  );
}

export default memo(Sobre);
