import { Button, Center, Image } from '@chakra-ui/react';
import { useCallback, useEffect, useState } from 'react';

function LogoButon({
  isScrollDown,
  isOpen,
  onOpen,
  buttonDisabled,
  setIsButtonClicked,
}: any) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = useCallback(() => {
    setIsClicked(true);
    onOpen();

    setTimeout(() => {
      setIsClicked(false);
    }, 800);
  }, []);

  useEffect(() => {
    setIsButtonClicked(isClicked);
  }, [isClicked]);
  return (
    <Center width={['100%', '100%', '0']}>
      <Button
        transform={['inherit', 'scale(1.25)', 'inherit']}
        height={false ? ['5rem', '5rem', '8rem'] : ['5rem', '5rem', '10rem']}
        width={false ? ['5rem', '5rem', '10rem'] : ['5rem', '5rem', '12rem']}
        margin={
          !false ? ['0 auto', '0 auto', '0'] : ['0 auto', '0 auto', '1rem']
        }
        bottom={
          isScrollDown
            ? ['-7rem', '-7rem', 'initial']
            : ['1.5rem', '2.5rem', 'initial']
        }
        opacity={isOpen ? ['0', '0', '1'] : '1'}
        position="fixed"
        zIndex="20"
        left={['initial', 'initial', '0']}
        top={['initial', 'initial', '0']}
        overflow="hidden"
        transition=".6s ease, opacity .3s ease"
        bg={['black', 'black', 'initial']}
        borderRadius={['50%', '50%', 'initial']}
        boxShadow={['sm', 'sm', 'none']}
        _active={{}}
        _focus={{}}
      >
        <Image
          src="/logo.svg"
          height={['120%', '120%', '100%']}
          width="90%"
          position="absolute"
          zIndex="10"
          objectFit="cover"
          objectPosition="center"
          transform={[
            'translateY(-2.5%) translateX(5%)',
            'translateY(-2.5%) translateX(5%)',
            'translateY(-10%) translateX(5%)',
          ]}
          transition=" .1s ease"
          onMouseOverCapture={() => {
            if (!buttonDisabled) {
              handleClick();
            }
          }}
          onClick={() => {
            handleClick();
          }}
        />
      </Button>
    </Center>
  );
}

export default LogoButon;
