import { Flex, Image, Box, Text, Stack } from '@chakra-ui/react';
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
        padding={['4rem 2rem', '8rem', '8rem', '8rem', '8rem 16rem']}
      >
        <Stack spacing="4.5rem">
          {content.map(({ about, link, logo }, i) => (
            <Flex as="li" flexDir="column">
              <Box
                target="_blank"
                as="a"
                href={link}
                maxWidth="18.75rem"
                marginBottom="2.5rem"
                width={['66%', '66%', 'inherit']}
                borderRadius="3px"
              >
                <Image
                  src={logo}
                  filter={
                    i === 1 ? 'grayScale(100%) invert(100%)' : 'grayScale(100%)'
                  }
                />
              </Box>
              <Box>
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
