import { Theme, ColorStates } from './types';

export const _theme: Theme = 'light';

export const _colors: Record<Theme, Record<ColorStates, string>> = {
  light: {
    text: 'rgb(0, 0, 0)',
    bg: 'rgb(240, 242, 245)',

    primary: 'rgb(40, 120, 255)',
    error: 'rgb(245, 34, 45)',
    warning: 'rgb(255, 184, 0)',
    info: 'rgb(74, 108, 135)',
  },

  dark: {
    text: 'rgb(240, 242, 245)',
    bg: 'rgb(0, 0, 0)',

    primary: 'rgb(40, 120, 255)',
    error: 'rgb(245, 34, 45)',
    warning: 'rgb(255, 184, 0)',
    info: 'rgb(74, 108, 135)',
  },
};
