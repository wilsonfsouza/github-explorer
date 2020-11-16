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
      returnhover: '#666',
    },
    fonts: {
      title: 'Roboto, sans-serif',
      paragraph: 'Roboto, sans-serif',
      size: '16px',
    },
  },
  dark: {
    type: 'dark',
    colors: {
      background: '#312E38',
      primary: '#9580FF',
      secondary: '#232129',
      h1: '#f8f8f2',
      inputText: '#8aff80',
      title: '#F4EDE8',
      paragraph: '#afafaf',
      arrowIcon: '#cbcbd6',
      borderError: '#cc4848',
      messageError: '#cc4848',
      placeholderError: '#a8a8b3',
      returnhover: '#9580FF',
    },
    fonts: {
      title: 'Roboto, sans-serif',
      paragraph: 'Roboto, sans-serif',
      size: '16px',
    },
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
