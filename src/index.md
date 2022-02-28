---
nav:
  title: Components
  path: /components
---

Install dependencies,

```bash
$ npm i header-bar
```

## 头部菜单

```tsx
import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import {
  GlobalRegistry,
  createDesigner,
  Shortcut,
  KeyCode,
} from '@designable/core';
import {
  CompositePanel,
  TopbarPanel,
  CompositePanelContent,
  StudioPanel,
  ActionsWidget,
} from '@toy-box/header-bar';

const style = {
  border: '1px solid gray',
};

const Add = (
  <svg
    viewBox="0 0 1024 1024"
    height="1em"
    width="1em"
    fill="currentColor"
    focusable="false"
    aria-hidden="true"
  >
    <svg>
      <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
      <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
    </svg>
  </svg>
);

export default () => {
  const [value, setValue] = useState();
  const [leftVisible, setLeftVisible] = React.useState(false);
  const [leftActiveKey, setLeftActiveKey] = React.useState();
  return (
    <div>
      <StudioPanel>
        <TopbarPanel>
          <CompositePanel
            visible={leftVisible}
            setVisible={setLeftVisible}
            activeKey={leftActiveKey}
            setActiveKey={setLeftActiveKey}
          >
            <CompositePanel.Item title="组件" icon={Add} activeKey="1" />
            <CompositePanel.Item
              title="panels.OutlinedTree"
              activeKey="2"
              icon="Layer"
            />
            <CompositePanel.Item
              title="panels.History"
              activeKey="3"
              icon="History"
            />
          </CompositePanel>
        </TopbarPanel>
        <div
          style={{
            display: 'flex',
            flexGrow: 1,
            height: '200px',
          }}
        >
          <CompositePanelContent
            activeKey={leftActiveKey}
            visible={leftVisible}
            onClose={() => setLeftVisible(false)}
          >
            <CompositePanelContent.Item
              title="组件"
              activeKey="1"
            ></CompositePanelContent.Item>
          </CompositePanelContent>
        </div>
      </StudioPanel>
    </div>
  );
};
```
