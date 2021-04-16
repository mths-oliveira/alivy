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
        padding={['4.5rem 3rem', '6rem', '6rem', '6rem', '8rem 16rem 0']}
      >
        <Stack spacing="3rem">
          {content.map(({ title, subtitles }, i) => (
            <Flex key={`${title}, ${i}`} flexDir="column">
              <ChakraH
                as="h3"
                fontSize={['2.375em', '3rem']}
                fontFamily="body"
                fontWeight="300"
                lineHeight={['3.25rem', '3.75rem']}
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
        padding={['0', '0', '8rem']}
      />
    </Flex>
  );
}

export default memo(Solucoes);
