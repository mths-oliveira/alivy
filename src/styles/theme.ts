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
    black: '#282828',

    gold: '#E7CD99',

    grayText: '#C6C4C2',
  },

  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
    mono: `'Menlo', monospace`,
  },
  shadows: {
    xs: '0 4px 14px rgba(0,0,0,.1)',
    sm: '0 4px 14px rgba(0,0,0,.2)',
    line: '0 0 3px rgba(0,0,0,.25)',
  },
  radii: {
    sm: '5px',
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
          background: '#000',
        },

        '&::-webkit-scrollbar-thumb': {
          background: 'gold',
        },

        '&::selection': {
          background: 'gold',
          color: 'black',
        },

        lineHeight: '1.75rem',
        listStyle: 'none',
      },

      p: {
        letterSpacing: '1px',
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
