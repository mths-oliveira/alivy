import {
  Flex,
  Image,
  Heading as ChakraH,
  Box,
  Text,
  Stack,
} from '@chakra-ui/react';
import { memo } from 'react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

import { id, name, url, content } from './data.json';

function Parceiros() {
  return (
    <Flex flexDir="column" id={id} as="section">
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex
        as="ul"
        flexDir="column"
        padding={['5rem 3rem', '8rem', '8rem', '8rem', '8rem 16rem']}
      >
        <Stack spacing="8rem">
          {content.map(({ about, link, name, logo }) => (
            <Flex as="li" flexDir="column">
              <Box
                target="_blank"
                as="a"
                href={link}
                maxWidth="18.75rem"
                marginBottom="3rem"
              >
                <Image src={logo} filter="grayScale(100%)" />
              </Box>
              <Box>
                <ChakraH
                  as="h3"
                  width="fit-content"
                  fontSize={['2.5em', '3rem']}
                  fontFamily="body"
                  fontWeight="300"
                  lineHeight={['3.25rem', '3.75rem']}
                  marginBottom="1.5rem"
                  color="gold"
                >
                  {name}
                </ChakraH>
                <Text>{about}</Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
}

export default memo(Parceiros);
