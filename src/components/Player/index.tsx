import { Center, CenterProps } from '@chakra-ui/react';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import CardPreview from './CardPreview';
import Slider from './Slider';
import View from './view';

interface Content {
  title: string;
  linkId: string;
}

interface Player extends CenterProps {
  content: Content[];
}

function Player({ content, ...rest }: Player) {
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

  const handleClick = useCallback(({ currentTarget }) => {
    const id = currentTarget.getAttribute('data-id');

    const index = currentTarget.getAttribute('data-index');

    setCurrentId(`${id}?autoplay=1`);

    setActiveIndex(Number(index));
  }, []);

  return (
    <Center {...rest}>
      <View
        currentVideoId={currentId}
        flex={1}
        width={['100%', '100%', 'auto']}
        maxHeight={['32.5vh', '32.5vh', '100%']}
        minHeight={['32.5vh', '32.5vh', '100%']}
      />
      <Slider handleScroll={handleScroll} sliderRef={sliderRef}>
        {content.map(({ linkId, title }, i) => {
          return (
            <CardPreview
              title={title}
              videoId={linkId}
              thisIndex={i}
              activeIndex={activeIndex}
              handleClick={handleClick}
              key={`${title}_${i}`}
            />
          );
        })}
      </Slider>
    </Center>
  );
}

export default memo(Player);
