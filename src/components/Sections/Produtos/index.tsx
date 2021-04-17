import { Flex, Text } from '@chakra-ui/react';
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
            fontSize="1.5rem"
            lineHeight="2.5rem"
            fontWeight="400"
            marginBottom="3rem"
            color="white"
          >
            {text}
          </Text>
          <Text marginBottom={['3rem', '3rem', '0']}>
            {fornecedores.reduce((text, name, i) =>
              i !== fornecedores.length - 1
                ? `${text}, ${name}`
                : `${text} e ${name}`
            )}
          </Text>
        </Flex>
      </Flex>
      <Player
        content={content}
        width="100vw"
        height="100vh"
        flexDir={['column', 'column', 'row']}
        padding={['1rem', '1rem', '8rem']}
      />
    </Flex>
  );
}

export default memo(Produtos);
