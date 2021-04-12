import { Box, BoxProps } from '@chakra-ui/layout';
import { memo } from 'react';

interface Props extends BoxProps {
  id: string;
  title: string;
}

function Player({ id, title, ...rest }: Props) {
  return (
    <Box
      {...rest}
      as="iframe"
      src={`https://www.youtube.com/embed/${id}`}
      allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture"
      title={title}
      allowFullScreen={true}
    />
  );
}

export default memo(Player);
