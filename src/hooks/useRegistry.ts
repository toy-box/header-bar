import { GlobalRegistry, IDesignerRegistry } from '@designable/core';

export const useRegistry = (): IDesignerRegistry => {
  const window1 = window as any;
  return window1['__DESIGNER_REGISTRY__'] || GlobalRegistry;
};
