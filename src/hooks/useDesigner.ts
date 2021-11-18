import { useContext, useEffect } from 'react';
import { Engine } from '@designable/core';
import { DesignerEngineContext } from '../context';
import { isFn } from '@designable/shared';
export interface IEffects {
  (engine: Engine): void;
}

export const useDesigner = (effects?: IEffects): Engine => {
  const window1 = window as any;
  const designer: Engine =
    window1['__DESINGER_ENGINE__'] || useContext(DesignerEngineContext);
  useEffect(() => {
    if (isFn(effects)) {
      return effects(designer);
    }
  }, []);
  return designer;
};
