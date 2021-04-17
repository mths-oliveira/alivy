import { Flex, Text } from '@chakra-ui/react';
import { memo } from 'react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

export const idHome = 'home';

function Home() {
  return (
    <Flex flexDir="column" id={idHome} height="100vh" as="header">
      <BgImage url="/home.webp" mask="rgba(0,0,0,0.3)">
        <Heading as="h1">
          Automação Residencial
          <Text
            as="span"
            padding={['1rem', '1rem 1.5rem']}
            display="block"
            textTransform="initial"
            fontSize={['1rem', '1.75rem']}
            letterSpacing=".1rem"
            fontWeight="400"
            lineHeight={['2.25rem', '2.75rem']}
          >
            Sua casa inteligente e com audio e vídeo de altíssima qualidade
          </Text>
        </Heading>
      </BgImage>
    </Flex>
  );
}

export default memo(Home);
