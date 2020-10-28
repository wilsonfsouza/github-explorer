export const themes = {
  light: {
    type: 'light',
    colors: {
      background: '#F0F0F5',
      primary: '#04d361',
      secondary: '#fff',
      h1: '#3a3a3a',
      inputText: '#3a3a3a',
      title: '#3d3d4d',
      paragraph: '#a8a8b3',
      arrowIcon: '#cbcbd6',
      borderError: '#c53030',
      messageError: '#c53030',
      placeholderError: '#a8a8b3',
    },
    fonts: {
      title: 'Roboto, sans-serif',
      paragraph: 'Roboto, sans-serif',
    },
  },
  dark: {
    type: 'dark',
    colors: {
      background: '#22212c',
      primary: '#9580FF',
      secondary: '#80FFEA',
      h1: '#f8f8f2',
      inputText: '#8aff80',
      title: '#9580FF',
      paragraph: '#f8f8f2',
      arrowIcon: '#cbcbd6',
      borderError: '#c53030',
      messageError: '#c53030',
      placeholderError: '#a8a8b3',
    },
    fonts: {
      title: 'Abril Text',
      paragraph: 'Fira Code, monospace',
    },
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
