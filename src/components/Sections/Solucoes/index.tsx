import { Flex, Heading as ChakraH } from '@chakra-ui/react';
import { memo, useCallback, useRef } from 'react';

import BgImage from '../../BgImage';
import Card from '../../Card';
import Carousel from '../../Carousel';
import Heading from '../../Heading';

import { id, name, url, content } from './data.json';

function Produtos() {
  const sliderRef = useRef<HTMLDivElement[]>([]);

  sliderRef.current = [];

  const handleSliderRef = useCallback((el) => {
    if (!el || sliderRef.current.includes(el)) return;

    sliderRef.current.push(el);
  }, []);

  return (
    <Flex flexDir="column" id={id}>
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex flexDir="column" id={id} bg="white" paddingY={['4.5rem', '6rem']}>
        {content.map(({ title, subtitles }, i) => (
          <Flex
            key={`${title}, ${i}`}
            as="ul"
            flexDir="column"
            listStyleType="none"
            marginY={['3.75rem', '6rem']}
          >
            <ChakraH
              as="h3"
              fontSize={['2.25em', '3rem']}
              fontFamily="body"
              fontWeight="300"
              letterSpacing=".0rem"
              marginBottom="4.5rem"
              lineHeight="3rem"
              width="100%"
              color="gold"
              paddingX={['3rem', '6rem', '6rem', '6rem', '12.5rem']}
            >
              {title}
            </ChakraH>
            <Carousel
              i={i}
              sliderRef={sliderRef}
              handleSliderRef={handleSliderRef}
            >
              {subtitles.map(({ name, src }, i) => (
                <Card name={name} src={src} key={`${name}_${i}`} />
              ))}
            </Carousel>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default memo(Produtos);
