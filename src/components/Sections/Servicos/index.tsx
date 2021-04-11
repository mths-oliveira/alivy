import { Flex, Text } from '@chakra-ui/react';

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
      <Flex flexDir="column" id={id} bg="white" paddingY={['4.5rem', '9rem']}>
        <Text
          marginBottom="4.5rem"
          paddingX={['3rem', '6rem', '6rem', '6rem', '12.5rem']}
        >
          {content.text}
        </Text>
        <Flex
          as="ul"
          width="100%"
          height="fit-content"
          listStyleType="none"
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
        >
          <Carousel handleSliderRef={handleSliderRef} sliderRef={sliderRef}>
            {content.services.map(({ name, src }, i) => (
              <Card name={name} src={src} key={`${name}_${i}`} />
            ))}
          </Carousel>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default memo(Produtos);
