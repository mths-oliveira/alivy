import { Button, Center, Image } from '@chakra-ui/react';

function LogoButon({
  isToShrink,
  isScrollDown,
  isOpen,
  onOpen,
  buttonDisabled,
}: any) {
  return (
    <Center width={['100%', '100%', '0']}>
      <Button
        height={isToShrink ? ['5rem', '8rem'] : ['5rem', '10rem']}
        width={isToShrink ? ['5rem', '10rem'] : ['5rem', '12rem']}
        margin={!isToShrink ? ['0 auto', '0'] : ['0 auto', '1rem']}
        bottom={
          isScrollDown ? ['-7rem', '-7rem', 'initial'] : ['1.5rem', 'initial']
        }
        opacity={[isOpen ? '0' : '1', '1']}
        position="fixed"
        zIndex="5"
        left={['initial', 'initial', '0']}
        top={['initial', 'initial', '0']}
        overflow="hidden"
        transition=".6s ease, opacity .3s ease"
        bg={['#F8F8F8', 'initial']}
        borderRadius={['50%', 'initial']}
        boxShadow={['sm', 'none']}
        _active={{}}
        _focus={{}}
      >
        <Image
          src="/logo.svg"
          height={['120%', '100%']}
          width="90%"
          position="absolute"
          zIndex="10"
          objectFit="cover"
          objectPosition="center"
          opacity=".5"
          transform={[
            'translateY(-2.5%) translateX(5%)',
            'translateY(-10%) translateX(5%)',
          ]}
          transition=" .1s ease"
          onClick={onOpen}
          onMouseOverCapture={() => {
            if (!buttonDisabled) {
              onOpen();
            }
          }}
        />
      </Button>
    </Center>
  );
}

export default LogoButon;
