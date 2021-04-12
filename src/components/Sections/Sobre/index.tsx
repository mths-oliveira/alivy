import { Flex, Heading, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { id } from './data.json';

function Sobre() {
  return (
    <Flex
      flexDir="column"
      id={id}
      padding={['4.5rem 3rem', '6rem', '6rem', '6rem', '9rem 12.5rem']}
      as="section"
    >
      <Flex
        width={['100%', '45%']}
        border={['none', 'sm']}
        padding={['2rem 0', '4rem']}
        flexDir="column"
        borderRadius="sm"
      >
        <Heading
          color="gold"
          letterSpacing=".15rem"
          fontFamily="body"
          fontWeight="300"
          marginBottom="2rem"
          fontSize="2.75rem"
        >
          Alivy
        </Heading>
        <Text letterSpacing=".1rem" lineHeight="1.75rem">
          Fundada em 1993 pelos irmãos Antônio Jose Seabra e Daniel Seabra, a
          antiga BCA, atual Alivy, começou com desenvolvimento de softwares de
          automação, 5 anos após a chegada da internet no Brasil, e vem se
          refinando até os dias de hoje. BCA se tornou a Alivy em 2008, quando
          as paixões pela engenharia e tecnologia desses dois se fundiram, desde
          então, atuando principalmente no mercado de segurança patrimonial e
          pessoal, desenvolvimento de softwares e integração de sistemas de
          automação de última geração. A Alivy se destaca pela equipe de
          engenheiros, prontos para te fornecer inúmeras soluções
          personalizadas, levando assim a nossos clientes uma automação
          exclusiva e inovadora.
        </Text>
      </Flex>
    </Flex>
  );
}

export default memo(Sobre);
