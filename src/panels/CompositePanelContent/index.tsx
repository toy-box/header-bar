import React, { useEffect, useState } from 'react';
import cls from 'classnames';
import { isValid } from '@designable/shared';
import { IconWidget, TextWidget } from '../../widgets';
import { usePrefix } from '../../hooks';
import './styles.less';

export type CompositePanelContentItemProps = {
  shape?: 'tab' | 'button' | 'link';
  title?: React.ReactNode | string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  extra?: React.ReactNode;
  activeKey: string | number;
};

export type CompositePanelContentProps = {
  direction?: 'left' | 'right';
  activeKey?: number;
  visible?: boolean;
  onClose?: () => void;
};

const parseItems = (
  children: React.ReactNode,
): React.PropsWithChildren<CompositePanelContentItemProps>[] => {
  const items: any[] = [];
  React.Children.forEach(children, (child: any) => {
    if (child['type'] === CompositePanelContent.Item) {
      items.push(child['props']);
    }
  });
  return items;
};

export const CompositePanelContent: React.FC<
  React.PropsWithChildren<CompositePanelContentProps>
> & {
  Item?: React.FC<React.PropsWithChildren<CompositePanelContentItemProps>>;
} = ({ direction, activeKey, visible, onClose, children }) => {
  const prefix = usePrefix('composite-panel-content');
  const items = parseItems(children);
  const currentItem = items?.find((item) => item.activeKey === activeKey);
  const content = currentItem?.children;

  const renderContent = () => {
    if (!currentItem || !visible) return;
    return (
      <div
        className={cls(prefix + '-item', {
          [`direction-${direction}`]: !!direction,
        })}
      >
        <div className={prefix + '-item-header'}>
          <div className={prefix + '-item-header-title'}>
            {currentItem.title}
          </div>
          <div className={prefix + '-item-header-actions'}>
            <div className={prefix + '-item-header-extra'}>
              {currentItem.extra}
            </div>
            <IconWidget
              infer="Close"
              className={prefix + '-item-header-close'}
              onClick={onClose}
            />
          </div>
        </div>
        <div className={prefix + '-item-body'}>{content}</div>
      </div>
    );
  };

  return <React.Fragment>{renderContent()}</React.Fragment>;
};

CompositePanelContent.Item = () => {
  return <React.Fragment />;
};
