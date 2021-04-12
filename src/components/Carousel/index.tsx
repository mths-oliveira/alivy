import {
  Center,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from '@chakra-ui/react';

import { memo, useCallback, useEffect, useState } from 'react';

interface SliderProgress {
  val: number;
  i: number;
}

interface Props {
  i?: number;
  children: JSX.Element[];
  handleSliderRef: any;
  sliderRef: any;
  spacing?: string;
}

function Carousel({
  i = 0,
  children,
  handleSliderRef,
  sliderRef,
  spacing,
}: Props) {
  const [scrollable, setScrollable] = useState<number[]>([]);

  useEffect(() => {
    const widthsScrollable: number[] = [];

    for (const slider of sliderRef.current) {
      const { width } = slider.getBoundingClientRect();

      const { scrollWidth } = slider;

      const scrollable = scrollWidth - width;

      widthsScrollable.push(scrollable);
    }

    setScrollable(widthsScrollable);
  }, []);

  const [sliders, setSliders] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    const sliders: HTMLDivElement[] = [];

    for (const slider of sliderRef.current) {
      sliders.push(slider);
    }

    setSliders(sliders);
  }, []);

  const handleScroll = useCallback(
    ({ val, i }: SliderProgress) => {
      const percentageProgress = scrollable[i] / 100;

      const left = percentageProgress * val;

      sliders[i].scrollTo({ left });
    },
    [scrollable, sliders]
  );

  const [isDisabled, setIsDisabled] = useState<boolean[]>([]);

  useEffect(() => {
    if (isDisabled.length === scrollable.length) return;

    const isScrollable: boolean[] = [];

    for (const scroll of scrollable) {
      isScrollable.push(scroll <= 0);
    }

    setIsDisabled(isScrollable);
  }, [scrollable]);

  return (
    <>
      <Flex ref={handleSliderRef} overflowX="scroll" className="slider">
        <Stack
          direction="row"
          spacing={spacing ? spacing : ['.75rem', '1rem']}
          paddingX={['3rem', '6rem', '6rem', '6rem', '12.5rem']}
        >
          {children}
        </Stack>
        <Flex width="1px" height="1px" />
      </Flex>
      <Center
        marginTop="4.5rem"
        width="100%"
        display={['none', 'none', isDisabled[i] ? 'none' : 'inherit']}
      >
        <Slider
          aria-label="slider-ex-1"
          defaultValue={0}
          width="30vw"
          onChange={(val) => {
            handleScroll({ val, i });
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
    </>
  );
}

export default memo(Carousel);
