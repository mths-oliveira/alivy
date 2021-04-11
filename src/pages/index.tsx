import { Flex, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import Hero from '../components/Hero';
import Menu from '../components/Menu';
import LogoButton from '../components/LogoButton';

import Parceiros from '../components/Sections/Parceiros';
import Sobre from '../components/Sections/Sobre';
import Solucoes from '../components/Sections/Solucoes';
import Servicos from '../components/Sections/Servicos';
import Produtos from '../components/Sections/Produtos';
//import Contato from '../components/Sections/Contato';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isToShrink, setIsToShrink] = useState(false);

  const [scrollProgress, setScrollProgress] = useState(0);

  const [isScrollDown, setIsScrollDown] = useState(false);

  const handleScroll = useCallback(
    (header, button) => {
      const { bottom, y } = header.getBoundingClientRect();
      const { height } = button.getBoundingClientRect();

      setScrollProgress(y);

      setIsScrollDown(scrollProgress > y);

      setIsToShrink(bottom <= height / 2);
    },
    [scrollProgress]
  );

  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <>
      <Flex
        bg="white"
        color="text"
        height="100vh"
        flexDir="column"
        overflowY="auto"
        overflowX="hidden"
        position="relative"
        onScroll={({ currentTarget }) => {
          const { children } = currentTarget;

          const button = children[0];
          const header = children[1];

          handleScroll(header, button);
        }}
      >
        <LogoButton
          isToShrink={isToShrink}
          isScrollDown={isScrollDown}
          isOpen={isOpen}
          onOpen={onOpen}
          buttonDisabled={buttonDisabled}
        />
        <Menu
          isOpen={isOpen}
          onClose={onClose}
          setButtonDisabled={setButtonDisabled}
        />
        <Hero />
        <Sobre />
        <Parceiros />
        <Servicos />
        <Solucoes />
        <Produtos />
        {/*<Contato />*/}
      </Flex>
    </>
  );
}

export default App;
