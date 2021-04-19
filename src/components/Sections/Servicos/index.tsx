import { memo } from 'react';
import { Flex, Text, Heading as ChakraH } from '@chakra-ui/react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

import { id, name, url, content } from './data.json';

function Produtos() {
  return (
    <Flex flexDir="column" id={id} as="section">
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>

      <Flex
        flexDir="column"
        padding={['4rem 2rem', '8rem', '8rem', '8rem', '8rem 16rem']}
      >
        <Text
          as="h4"
          fontSize="1.25rem"
          fontWeight="400"
          marginBottom="1rem"
          color="gold"
        >
          {content.text}
        </Text>
        {content.services.map(({ title, text }, i) => (
          <Flex key={`${title}, ${i}`} flexDir="column" marginY="1rem">
            <ChakraH
              as="h3"
              fontSize="2.5rem"
              fontFamily="body"
              fontWeight="300"
              marginY="1.5rem"
              width="100%"
              color="gold"
            >
              {title}
            </ChakraH>

            <Text>{text}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default memo(Produtos);
