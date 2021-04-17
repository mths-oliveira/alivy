import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  StackProps,
} from '@chakra-ui/react';
import React, { memo, RefObject } from 'react';

interface Props extends StackProps {
  handleScroll: (value: number) => void;
  sliderRef: RefObject<HTMLDivElement>;
}

function SliderStack({ children, handleScroll, sliderRef, ...rest }: Props) {
  return (
    <>
      <Stack
        className="slider"
        spacing={['.5rem', '1rem']}
        width={['100%', '100%', '14rem']}
        flexDir="column"
        direction="column"
        marginX={['auto', 'auto', '1.5rem']}
        height="100%"
        alignItems="center"
        overflowX="hidden"
        overflowY="scroll"
        ref={sliderRef}
        {...rest}
      >
        {children}
      </Stack>

      <Slider
        display={['none', 'none', 'inherit']}
        aria-label="slider-ex-1"
        defaultValue={0}
        height="33%"
        orientation="vertical"
        isReversed={true}
        onChange={handleScroll}
      >
        <SliderTrack bg="#000" height=".25rem">
          <SliderFilledTrack bg="gold" />
        </SliderTrack>
        <SliderThumb
          boxSize="1.25rem"
          bg="gold"
          boxShadow="sm"
          transition=".1s ease"
          _active={{ boxSize: '1.5rem' }}
          _focus={{}}
          _hover={{ boxSize: '1.5rem' }}
        />
      </Slider>
    </>
  );
}

export default memo(SliderStack);
