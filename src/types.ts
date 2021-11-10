import { Engine, IResource, IBehavior } from '@designable/core';

export interface IDesignerLayoutProps {
  prefixCls?: string | undefined;
  theme?: 'dark' | 'light' | (string & {});
}

export interface IDesignerLayoutContext {
  theme?: 'dark' | 'light' | (string & {});
  prefixCls: string | undefined;
}

export interface IWorkspaceContext {
  id: string;
  title?: string;
  description?: string;
}

export interface IDesignerComponents {
  [key: string]: DnFC<any>;
}

export type DnFC<P = {}> = React.FC<P> & {
  Resource?: IResource[];
  Behavior?: IBehavior[];
};
