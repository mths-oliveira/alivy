import {
  Center,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
} from '@chakra-ui/react';

import { TriangleUpIcon, ViewIcon } from '@chakra-ui/icons';

import { memo, useCallback, useEffect, useRef, useState } from 'react';

import BgImage from '../../BgImage';
import Card from '../../Card';

import Heading from '../../Heading';
import Player from '../../Player';

import { id, name, url, content } from './data.json';

function Produtos() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [scrollable, setScrollable] = useState(0);

  useEffect(() => {
    if (!sliderRef.current) return;

    const { height } = sliderRef.current.getBoundingClientRect();

    const scrollHeight = sliderRef.current.scrollHeight;

    const scrollable = scrollHeight - height;

    setScrollable(scrollable);
  }, []);

  const handleScroll = useCallback(
    (val) => {
      if (!sliderRef.current) return;

      const percentageProgress = scrollable / 100;

      const top = percentageProgress * val;

      sliderRef.current.scrollTo({ top });
    },
    [scrollable]
  );

  const [currentId, setCurrentId] = useState(content[0].linkId);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = useCallback((target) => {
    const id = target.getAttribute('data-id');

    const index = target.getAttribute('data-index');

    setCurrentId(`${id}?autoplay=1`);

    setActiveIndex(Number(index));
  }, []);

  return (
    <Flex flexDir="column" id={id} as="section">
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex flexDir="column">
        <Flex
          width="100vw"
          height={['120vh', '100vh']}
          justifyContent="center"
          alignItems="center"
          padding={['4.5rem 0', '9rem']}
          flexDir={['column', 'row']}
        >
          <Player
            id={currentId}
            title={name}
            flex={1}
            width={['100%', 'auto']}
            height="100%"
            minHeight={['32.5vh', 'inherit']}
          />
          <Stack
            className="slider"
            spacing={['.75rem', '.5rem']}
            width={['75%', '12.5rem']}
            flexDir="column"
            marginX="1.25rem"
            marginTop={['1.5rem', '0']}
            height="100%"
            overflowX="hidden"
            overflowY="scroll"
            ref={sliderRef}
          >
            {content.map(({ name, linkId }, i) => (
              <Card
                key={`${name}_${i}`}
                name={name}
                src={`http://img.youtube.com/vi/${linkId}/0.jpg`}
                width="100%"
                height={['42.5vw', '8rem']}
                cursor="pointer"
                fontSize={['1.5rem', '1rem']}
                textTransform="uppercase"
                transition=".2s ease"
                color={activeIndex === i ? 'transparent' : '#FFF'}
                _hover={{ color: 'transparent' }}
                onClick={({ currentTarget }) => {
                  handleClick(currentTarget);
                }}
                data-id={linkId}
                data-index={i}
              >
                <Center
                  width="100%"
                  height="100%"
                  position="absolute"
                  bg={activeIndex === i ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.3)'}
                  top="0"
                  opacity={activeIndex === i ? '1' : '0'}
                  transition=".3s ease"
                  _hover={{ color: '#FFFFFFDD', opacity: '1' }}
                  color={activeIndex === i ? '#FFFFFFDD' : 'transparent'}
                >
                  {activeIndex === i ? (
                    <ViewIcon height="30%" width="30%" />
                  ) : (
                    <TriangleUpIcon
                      height="30%"
                      width="30%"
                      transform="rotate(90deg)"
                    />
                  )}
                </Center>
              </Card>
            ))}
          </Stack>
          <Slider
            display={['none', 'inherit']}
            aria-label="slider-ex-1"
            defaultValue={0}
            height="100%"
            orientation="vertical"
            isReversed={true}
            onChange={(val) => {
              handleScroll(val);
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
        </Flex>
      </Flex>
    </Flex>
  );
}

export default memo(Produtos);
