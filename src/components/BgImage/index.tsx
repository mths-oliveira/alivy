import { Center } from '@chakra-ui/react';
import React, { memo } from 'react';

interface Props {
  url: string;
  as?: any;
  children?: JSX.Element | JSX.Element[];
}

function BgImage({ url, children, as = 'div' }: Props) {
  return (
    <Center
      as={as}
      height="100vh"
      filter="saturate(60%)"
      bgImage={`linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0)), url(${url})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
    >
      {children}
    </Center>
  );
}

export default memo(BgImage);
