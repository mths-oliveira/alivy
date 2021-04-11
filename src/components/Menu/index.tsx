import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Image,
  Link,
  Stack,
} from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Sections from '../Sections';
import { idHome } from '../Hero';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setButtonDisabled: (isDisabled: boolean) => void;
}

type HandleToggle = (to: string) => void;

function Menu({ isOpen, onClose, setButtonDisabled }: Props) {
  const router = useRouter();

  const handleToggle: HandleToggle = useCallback((to) => {
    onClose();

    setTimeout(() => {
      router.push(to);
    }, 300);
  }, []);

  const handleActive = useCallback((target) => {
    target.setAttribute('data-active', 'true');
  }, []);

  const [isDisabled, setIsDisabled] = useState(false);

  const handleDisabled = useCallback(() => {
    setIsDisabled(true);

    setTimeout(() => {
      setIsDisabled(false);
    }, 800);
  }, []);

  useEffect(() => {
    setButtonDisabled(isDisabled);
  }, [isDisabled]);

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
      <DrawerOverlay transition=".6s ease">
        <DrawerContent
          bg="rgba(255,255,255,.85)"
          transition=".3s ease"
          __css={{ backdropFilter: 'blur(3px)' }}
          onMouseLeave={() => {
            if (window.innerWidth >= 1000) {
              onClose();
            }
          }}
        >
          <DrawerHeader
            padding="0 .5rem"
            __css={{ backdropFilter: 'blur(10px)' }}
          >
            <Center width="12rem" height="10rem" overflow="hidden">
              <Image
                width="100%"
                height="100%"
                transform="translateY(-10%)"
                objectFit="cover"
                objectPosition="center"
                opacity=".5"
                src="/logo.svg"
                cursor="pointer"
                transition=".3s ease"
                _hover={{ transform: 'scale(1.05) translateY(-10%)' }}
                onClick={() => {
                  handleDisabled();
                  handleToggle(`#${idHome}`);
                }}
              />
            </Center>
          </DrawerHeader>
          <DrawerBody as="nav" padding="0">
            <Stack
              as="ul"
              color="text"
              flexDir="column"
              listStyleType="none"
              spacing="2px"
              paddingX="2px"
              textAlign="center"
            >
              {Sections.map(({ id, name }, i) => (
                <Box key={i} as="li">
                  <Link
                    display="block"
                    padding=".75rem"
                    cursor="pointer"
                    letterSpacing=".1rem"
                    transition=" .3s ease"
                    onClick={({ target }) => {
                      handleActive(target);

                      setTimeout(
                        () => {
                          handleToggle(`#${id}`);
                        },
                        window.innerWidth >= 1000 ? 300 : 800
                      );
                    }}
                    position="relative"
                    _before={{
                      content: `''`,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: -1,
                      height: '100%',
                      width: '3px',
                      background: 'gold',
                      transform: 'scaleY(0)',
                      transition:
                        'transform .2s .3s, width .6s cubic-bezier(1,0,0,1)',
                    }}
                    _hover={{
                      color: 'gold',
                      _before: {
                        transform: 'scaleY(1)',
                      },
                    }}
                    _active={{
                      color: 'white',
                      transition: 'color .2s .2s',
                      _hover: {
                        color: 'white',
                      },
                      _before: {
                        transform: 'scaleY(1)',
                        width: '100%',
                        transition: 'width .3s .3s transform .3s',
                      },
                    }}
                  >
                    {name}
                  </Link>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default Menu;