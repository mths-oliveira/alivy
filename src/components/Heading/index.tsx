import { HeadingProps, Heading as ChakraH } from '@chakra-ui/react';
import { memo } from 'react';

interface Props extends HeadingProps {}

function Heading({ as, children }: Props) {
  return (
    <ChakraH
      as={as}
      color="#FFF"
      textTransform="uppercase"
      textAlign="center"
      fontWeight={`${as}` === 'h1' ? '700' : '700'}
      fontSize={['2.75rem', '5rem']}
      lineHeight={['5rem', '7rem']}
      letterSpacing={['.1rem', '.15rem']}
    >
      {children}
    </ChakraH>
  );
}

export default memo(Heading);
