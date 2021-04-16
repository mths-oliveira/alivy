import { Box, BoxProps } from '@chakra-ui/layout';
import { memo } from 'react';

interface Props extends BoxProps {
  currentVideoId: string;
}

function Player({ currentVideoId, ...rest }: Props) {
  return (
    <Box
      as="iframe"
      src={`https://www.youtube.com/embed/${currentVideoId}`}
      allow="accelerometer; encrypted-media; gyroscope; autoplay; picture-in-picture"
      title="Youtube Video Player"
      allowFullScreen={true}
      {...rest}
    />
  );
}

export default memo(Player);
