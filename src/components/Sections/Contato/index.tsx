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
      bgPosition={['-75vw 20vh', '-25vw 0', '-25vw 0']}
      bgAttachment="fixed"
      flexDir={['column-reverse', 'column-reverse', 'row']}
    >
      <Flex
        flex={1}
        color="rgba(255,255,255,.9)"
        bg="rgba(0,0,0,.3)"
        alignItems="center"
        textAlign="center"
        justifyContent="space-between"
        flexDir="column"
        paddingX={['1.5rem', '1.5rem', '0']}
      >
        <Center flex={1} paddingY={['5rem', '5rem', '0']}>
          <Stack
            spacing={['3rem', '4rem', '4.5rem']}
            direction="row"
            as="ul"
            listStyleType="none"
            fontSize={['2.5rem', '2.5rem', '3rem']}
          >
            <Flex as="li">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5531996171871"
              >
                <FaWhatsapp />
              </a>
            </Flex>

            <Flex as="li">
              <a target="_blank" href="mailto:bca@alivy.com">
                <FiMail />
              </a>
            </Flex>
            <Flex as="li">
              <a
                target="_blank"
                href="https://www.google.com/maps/place/R.+Santa+Rita+Dur%C3%A3o,+321+-+Savassi,+Belo+Horizonte+-+MG,+30140-111/@-19.9362424,-43.9309207,17z/data=!3m1!4b1!4m5!3m4!1s0xa699c14348cfaf:0x157fa50340f472de!8m2!3d-19.9362424!4d-43.928732"
              >
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
        padding={['3rem 2rem', '8rem', '8rem', '8rem', '12rem']}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          as="h2"
          textTransform={['uppercase', 'uppercase', 'inherit']}
          fontSize={['3rem', '3rem', '5rem']}
          fontWeight="700"
          marginBottom={['1rem', '1rem', '2rem']}
        >
          {name}
        </Heading>
        <Text>{content.text}</Text>
      </Flex>
    </Flex>
  );
}

export default memo(Contato);
