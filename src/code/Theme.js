import { DefaultTheme } from 'react-native-paper'

export const Color={
  Blue: '#01ADED',
  Magenta: '#92288C'
}

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#257A52',
    secondary: '#414757',
    error: '#f13a59',
  },
}