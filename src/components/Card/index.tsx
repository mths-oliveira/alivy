import { Center, CenterProps, Heading } from '@chakra-ui/layout';
import React, { memo } from 'react';

interface Props extends CenterProps {
  name: string;
  src: string;
}

function Card({ name, src, fontSize, children, ...rest }: Props) {
  return (
    <Center
      as="li"
      width={['16.25rem', '24rem']}
      height={['12.1875rem', '18rem']}
      flexShrink={0}
      position="relative"
      overflow="hidden"
      padding="1rem"
      filter="saturate(60%)"
      bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)), url(${src})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="#FFF"
      {...rest}
    >
      <Heading
        as="h4"
        fontWeight="600"
        padding="2rem"
        fontSize={fontSize ? fontSize : ['1.25rem', '1.75rem']}
        lineHeight={['2rem', '2.5rem']}
        textAlign="center"
      >
        {name}
      </Heading>
      {children}
    </Center>
  );
}

export default memo(Card);
