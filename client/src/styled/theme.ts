// my-theme.ts

const myTheme = {
  borderRadius: '5px',

  colors: {
    main: 'cyan',
    secondary: 'magenta'
  }
};

export type ThemeType = typeof myTheme;

export { myTheme };
