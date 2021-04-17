import { Center, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import { FiMail, FiMapPin } from 'react-icons/fi';

import { id, content, url, name } from './data.json';

function Contato() {
  return (
    <Flex
      id={id}
      pading="12.5rem"
      bg="black"
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="-25vw 0"
      bgAttachment="fixed"
      flexDir={['column-reverse', 'column-reverse', 'row']}
    >
      <Flex
        flex={1}
        color="rgba(255,255,255,.95)"
        bg="rgba(0,0,0,.3)"
        alignItems="center"
        textAlign="center"
        justifyContent="space-between"
        flexDir="column"
        paddingX={['1.5rem', '1.5rem', '0']}
      >
        <Center flex={1} paddingY={['6rem', '8rem', '0']}>
          <Stack
            spacing={['3rem', '4rem', '4.5rem']}
            direction="row"
            as="ul"
            listStyleType="none"
            fontSize={['2rem', '2.5rem', '3rem']}
          >
            <Flex as="li">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5531"
              >
                <FaWhatsapp />
              </a>
            </Flex>

            <Flex as="li">
              <a target="_blank" href="mailto:">
                <FiMail />
              </a>
            </Flex>
            <Flex as="li">
              <a target="_blank" href="https://www.google.com.br/maps/place/">
                <FiMapPin />
              </a>
            </Flex>
          </Stack>
        </Center>
        <Text fontSize=".75rem" paddingBottom={['2rem', '2rem', '1rem']}>
          <a target="_blank" href="mailto:contato.mths@outlook.com">
            Copyright &copy; 2021 | Alivy | Todos os direitos reservados.
          </a>
        </Text>
      </Flex>
      <Flex
        __css={{ backdropFilter: 'blur(16px)' }}
        color="rgba(0,0,0,.6)"
        bg="rgba(255,255,255,.85)"
        width={['100%', '100%', '50%']}
        height="100%"
        minWidth={['auto', 'auto', '46.75rem']}
        padding={['4rem 2rem', '8rem', '8rem', '8rem', '12rem']}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h2"
          fontSize={['3rem', '5rem', '5rem']}
          fontWeight="700"
          marginBottom={['1.5rem', '3rem', '3rem']}
        >
          {name}
        </Heading>
        <Text>{content.text}</Text>
      </Flex>
    </Flex>
  );
}

export default memo(Contato);
