import { Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { id, title, content } from './data.json';

function Sobre() {
  return (
    <Flex
      id={id}
      flexDir="column"
      padding={['4rem 2rem', '8rem', '8rem', '8rem', '8rem 16rem']}
    >
      <Heading
        color="gold"
        fontFamily="body"
        fontWeight="300"
        marginBottom="2rem"
        fontSize="3rem"
      >
        {title}
      </Heading>
      <Text>{content}</Text>
    </Flex>
  );
}

export default memo(Sobre);
