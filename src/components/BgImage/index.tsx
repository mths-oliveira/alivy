import { Center, CenterProps, Flex } from '@chakra-ui/react';
import React, { memo } from 'react';

interface Props extends CenterProps {
  url?: string;
  as?: any;
  children?: JSX.Element | JSX.Element[];
  mask?: string;
}

function BgImage({ url, children, as = 'div', mask, ...rest }: Props) {
  return (
    <Flex
      as={as}
      height="100vh"
      filter="saturate(70%)"
      bgImage={`url(${url})`}
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      {...rest}
    >
      <Center flex={1} bg={mask ? `${mask}` : 'rgba(0,0,0,0.3)'}>
        {children}
      </Center>
    </Flex>
  );
}

export default memo(BgImage);
