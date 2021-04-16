import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import { useCallback, useState } from 'react';

import Menu from '../components/Menu';
import LogoButton from '../components/LogoButton';

import Home from '../components/Sections/Home';
import Sobre from '../components/Sections/Sobre';
import Parceiros from '../components/Sections/Parceiros';
import Solucoes from '../components/Sections/Solucoes';
import Servicos from '../components/Sections/Servicos';
import Produtos from '../components/Sections/Produtos';
import Contato from '../components/Sections/Contato';

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

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <>
      <Flex
        bg="black"
        color="grayText"
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
          setIsButtonClicked={setIsButtonClicked}
        />
        <Menu
          isButtonClicked={isButtonClicked}
          isOpen={isOpen}
          onClose={onClose}
          setButtonDisabled={setButtonDisabled}
        />
        <Home />
        <Box as="main">
          <Sobre />
          <Solucoes />
          <Servicos />
          <Produtos />
          <Parceiros />
          <Contato />
        </Box>
      </Flex>
    </>
  );
}

export default App;
