import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
});

const theme = extendTheme({
  colors: {
    white: '#F8F8F8',
    black: '#1A1A1A',
    gold: '#D2A440',
    text: '#565958',
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
    mono: `'Menlo', monospace`,
  },
  shadows: {
    sm: '0 4px 14px rgba(0,0,0,.2)',
    line: '0 0 3px rgba(0,0,0,.25)',
  },
  radii: {
    sm: '5px',
  },
  borders: {
    sm: '1px solid #D2A440',
  },
  sizes: {
    xs: '12rem',
  },
  styles: {
    global: {
      '*': {
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': {
          width: ['0', '.675rem'],
          background: 'white',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,.5))',
          borderRadius: '12px',
        },
        '&::selection': {
          background: '#D2A440BB',
          color: '#F8F8F8',
        },

        letterSpacing: '.1rem',
        lineHeight: '1.75rem',
        listStyle: 'none',
      },

      '.slider': {
        scrollBehavior: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
  breakpoints,
});

export default theme;
