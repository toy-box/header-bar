import { useContext } from 'react';
import { DesignerLayoutContext } from '../context';
import { IDesignerLayoutContext } from '../types';

export const useTheme = (): IDesignerLayoutContext['theme'] => {
  const window1 = window as any;
  return (
    window1['__DESINGER_THEME__'] || useContext(DesignerLayoutContext)?.theme
  );
};
