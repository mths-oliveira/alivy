import { Center, Heading } from '@chakra-ui/layout';
import React, { memo } from 'react';

interface Props {
  name: string;
  src: string;
}

function Card({ name, src }: Props) {
  return (
    <Center
      as="li"
      flexShrink={0}
      position="relative"
      overflow="hidden"
      borderRadius="sm"
      padding="1rem"
      width={['48vw', '48vw', '24vw']}
      minWidth={['16.25rem', '22.5rem']}
      height={['48vw', '48vw', '18vw']}
      filter="saturate(60%)"
      bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)), url(${src})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
    >
      <Heading
        as="h4"
        color="#FFF"
        fontWeight="600"
        padding="2rem"
        lineHeight={['2rem', '3rem']}
        fontSize={['1.25rem', '1.5rem', '1.75rem']}
        textAlign="center"
      >
        {name}
      </Heading>
    </Center>
  );
}

export default memo(Card);
