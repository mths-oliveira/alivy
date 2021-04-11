import {
  Flex,
  Text,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

import { memo, useCallback, useState } from 'react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

import { id, name, url } from './data.json';

function Produtos() {
  const [sliderProgress, setSliderProgress] = useState(0);

  const handleSliderProgress = useCallback((val) => {}, []);
  return (
    <Flex flexDir="column" id={id}>
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex
        transform={`translateX(-${sliderProgress}%)`}
        flexDir="column"
        id={id}
        padding={['4.5rem 3rem', '6rem', '6rem', '6rem', '6rem 12rem']}
        bg="white"
      >
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          fugiat id molestiae quia odit libero illo eum dolorum repellat, error
          asperiores voluptates deleniti natus, reprehenderit dicta, repellendus
          inventore quo voluptas!
        </Text>
      </Flex>
      <Center marginTop="3rem">
        <Slider
          aria-label="slider-ex-1"
          defaultValue={0}
          width="50%"
          onChange={(val) => {
            setSliderProgress(val);
          }}
        >
          <SliderTrack bg="rgba(0,0,0,.1)" height=".25rem">
            <SliderFilledTrack bg="gold" />
          </SliderTrack>
          <SliderThumb
            boxSize="1.25rem"
            boxShadow="sm"
            transition=".1s ease"
            _active={{ boxSize: '1.5rem' }}
            _focus={{}}
            _hover={{ boxSize: '1.5rem' }}
          />
        </Slider>
      </Center>
    </Flex>
  );
}

export default memo(Produtos);
