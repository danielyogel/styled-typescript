import 'styled-components';
import type { ThemeType } from './theme';

// and extend them!
declare module 'styled-components' {
  interface DefaultTheme extends ThemeType {}
}
