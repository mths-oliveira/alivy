import { Flex, Text, Image, Grid } from '@chakra-ui/react';
import { memo } from 'react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';
import Player from '../../Player';

import { id, name, url, content, text, fornecedores } from './data.json';

function Produtos() {
  return (
    <Flex flexDir="column" id={id} as="section">
      <BgImage url={url} mask="rgba(0,0,0,0.2)">
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex flexDir="column">
        <Flex
          padding={[
            '4rem 2rem 0',
            '8rem 8rem 0',
            '8rem 8rem 0',
            '8rem 8rem 0',
            '8rem 16rem 0',
          ]}
          flexDir="column"
        >
          <Text
            as="h4"
            fontSize="1.25rem"
            fontWeight="400"
            marginBottom="3rem"
            color="gold"
          >
            {text}
          </Text>

          <Grid
            marginBottom="1rem"
            gridTemplateColumns={[
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(5, 1fr)',
            ]}
            gridTemplateRows={[
              'repeat(5, 1fr)',
              'repeat(5, 1fr)',
              'repeat(2, 1fr)',
            ]}
            gap="3rem"
            alignItems="center"
            justifyContent="center"
          >
            {fornecedores.map(
              (logo, i) =>
                typeof logo === 'string' && (
                  <Image
                    src={logo}
                    filter={
                      i === 6 || i === 7
                        ? 'grayScale(100%)'
                        : 'grayScale(100%) invert(90%)'
                    }
                    maxHeight="5rem"
                  />
                )
            )}
          </Grid>
        </Flex>
      </Flex>
      <Player
        content={content}
        width="100vw"
        height="100vh"
        flexDir={['column', 'column', 'row']}
        padding={['1.5rem', '8rem', '8rem']}
      />
    </Flex>
  );
}

export default memo(Produtos);
