import { memo } from 'react';
import { Flex, Heading as ChakraH, Stack, Text } from '@chakra-ui/react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

import { id, name, url, content, videos } from './data.json';
import Player from '../../Player';

function Solucoes() {
  return (
    <Flex flexDir="column" id={id} as="section">
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex
        flexDir="column"
        padding={['2rem', '8rem', '8rem', '8rem', '8rem 16rem 0']}
      >
        <Stack spacing={['1.5rem', '1.5rem', '3rem']}>
          {content.map(({ title, subtitles }, i) => (
            <Flex key={`${title}, ${i}`} flexDir="column">
              <ChakraH
                as="h3"
                fontSize="2.5em"
                fontFamily="body"
                fontWeight="300"
                marginY="1.5rem"
                width="100%"
                color="gold"
              >
                {title}
              </ChakraH>
              <Flex as="ul" flexDir="column">
                {subtitles.map((subtitle) => (
                  <Text as="li">{subtitle}</Text>
                ))}
              </Flex>
            </Flex>
          ))}
        </Stack>
      </Flex>
      <Player
        content={videos}
        width="100%"
        height="100vh"
        flexDir={['column', 'column', 'row']}
        padding={['1.5rem', '8rem', '8rem']}
      />
    </Flex>
  );
}

export default memo(Solucoes);
