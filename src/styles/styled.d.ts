import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      primary: string;
      secondary: string;
      h1: string;
      inputText: string;
      title: string;
      paragraph: string;
      arrowIcon: string;
      borderError: string;
      messageError: string;
      placeholderError: string;
    };
    fonts: {
      title: string;
      paragraph: string;
    };
  }
}
