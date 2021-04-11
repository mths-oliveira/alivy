import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from '@chakra-ui/react';

import { memo, useCallback, useState } from 'react';

interface Props {
  name: string;
  about: string;
  logo: string;
  link: string;
  i: number;
}

function ParceirosContent({ name, about, logo, link, i }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleClick = useCallback(
    ({ target }) => {
      const index = Number(target.getAttribute('data-index'));

      currentIndex !== null && currentIndex === index
        ? setCurrentIndex(null)
        : setCurrentIndex(index);
    },
    [currentIndex]
  );

  return (
    <Flex
      as="li"
      flexDir={['column', 'column', 'column', 'row']}
      justifyContent="space-between"
      alignItems={['center', 'center', 'center', 'flex-start']}
      marginY={['3rem', '4.5rem']}
      overflowX="hidden"
    >
      <Link
        href={link}
        target="_blank"
        _focus={{}}
        _active={{}}
        order={['initial', 'initial', i % 2 === 0 ? 'initial' : 1]}
        marginRight={i % 2 === 0 ? '6rem' : 0}
        marginLeft={i % 2 !== 0 ? '6rem' : 0}
        marginX={['auto', 'auto', 'initial']}
      >
        <Image
          src={logo}
          height={['auto', 'auto', 'auto', '18vw']}
          marginTop={['0', '0', '0', '0vw']}
          width={['100%', '100%', '100%', 'auto']}
        />
      </Link>

      <Flex
        margin={['4.5rem 0', '4.5rem auto', 'initial']}
        flex={1}
        flexDir="column"
        maxWidth={['30rem', '30rem', '40vw']}
        transition=".3s ease-in-out"
      >
        <Box
          maxHeight={
            currentIndex === i
              ? 'fit-content'
              : ['70vh', '37.5vh', '18vh', '30vw', '18vw']
          }
          minHeight="fit-content"
          overflow="hidden"
        >
          <Heading
            as="h3"
            fontSize={['2.25rem', '2.75rem']}
            fontFamily="body"
            fontWeight="300"
            letterSpacing=".1rem"
            marginBottom="2.25rem"
            lineHeight="3rem"
            width="100%"
            color="gold"
          >
            {name}
          </Heading>
          <Box flex={1} overflow="hidden">
            <Text lineHeight="1.75rem" letterSpacing=".1rem">
              {about}
            </Text>
          </Box>
        </Box>
        <Button
          width={['100%', '50%']}
          onClick={handleClick}
          marginTop="2rem"
          _focus={{}}
          _active={{}}
          data-index={i}
          color="gold"
          padding="1.25rem 2rem"
          border="sm"
          borderRadius="sm"
          letterSpacing=".1rem"
          fontWeight="400"
        >
          {`Ler ${currentIndex !== i ? 'mais' : 'menos'}`}
        </Button>
      </Flex>
    </Flex>
  );
}

export default memo(ParceirosContent);
