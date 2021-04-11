import { Flex } from '@chakra-ui/react';
import { memo } from 'react';

import BgImage from '../../BgImage';
import Heading from '../../Heading';

import { id, name, url, content } from './data.json';
import ParceirosContent from './ParceirosContent';

function Parceiros() {
  return (
    <Flex flexDir="column" id={id}>
      <BgImage url={url}>
        <Heading as="h2">{name}</Heading>
      </BgImage>
      <Flex
        flexDir="column"
        id={id}
        padding={['3.75rem', '6rem', '6rem', '6rem', '6rem 12.5rem']}
        bg="white"
        as="ul"
      >
        {content.map(({ about, link, logo, name }, i) => (
          <ParceirosContent
            i={i}
            link={link}
            about={about}
            logo={logo}
            name={name}
            key={`${i}_${name}`}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default memo(Parceiros);
