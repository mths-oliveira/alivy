import { Center, CenterProps, Heading } from '@chakra-ui/react';
import { memo } from 'react';

import { FaEye, FaPlay } from 'react-icons/fa';

interface Props extends CenterProps {
  title: string;
  videoId: string;
  activeIndex: number;
  thisIndex: number;
  handleClick: (args: any) => void;
}

function CardPreview({
  title,
  videoId,
  activeIndex,
  thisIndex,
  handleClick,
}: Props) {
  return (
    <Center
      width="100%"
      height={['10rem', '10rem', '8rem']}
      flexShrink={0}
      fontWeight="600"
      transition=".3s ease"
      textTransform="uppercase"
      cursor="pointer"
      overflow="hidden"
      onClick={handleClick}
      data-index={thisIndex}
      data-id={videoId}
      position="relative"
      bgImage={`linear-gradient(to bottom, transparent, rgba(0,0,0,.3),transparent), url(http://img.youtube.com/vi/${videoId}/0.jpg)`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="rgba(255,255,255,.95)"
      _hover={{ color: 'transparent' }}
    >
      <Heading as="h4" fontSize="1rem">
        {title}
      </Heading>

      <Center
        width="100%"
        height="100%"
        position="absolute"
        zIndex="5"
        top="0"
        left="0"
        transition=".3s ease"
        color={
          activeIndex === thisIndex ? 'rgba(255,255,255,.95)' : 'transparent'
        }
        opacity={activeIndex === thisIndex ? '1' : '0'}
        bg={activeIndex === thisIndex ? 'rgba(0,0,0,.8)' : 'rgba(0,0,0,.2)'}
        _hover={{
          color: 'rgba(255,255,255,.95)',
          opacity: '1',
          backdropFilter: 'blur(3px)',
        }}
      >
        {activeIndex === thisIndex ? (
          <FaEye fontSize="2.5rem" />
        ) : (
          <FaPlay fontSize="2rem" />
        )}
      </Center>
    </Center>
  );
}

export default memo(CardPreview);
