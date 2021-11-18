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
  Designer,
  CompositePanel,
  TopbarPanel,
  CompositePanelContent,
  StudioPanel,
  ActionsWidget,
} from 'header-bar';

const style = {
  border: '1px solid gray',
};

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Layouts: '布局组件',
      Arrays: '自增组件',
      Displays: '展示组件',
      DataContainers: '数据容器',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Layouts: 'Layouts',
      Arrays: 'Arrays',
      Displays: 'Displays',
      DataContainers: 'Data Containers',
    },
  },
});

const engine = useMemo(
  () =>
    createDesigner({
      shortcuts: [
        new Shortcut({
          codes: [
            [KeyCode.Meta, KeyCode.S],
            [KeyCode.Control, KeyCode.S],
          ],
          handler(ctx) {
            saveSchema(ctx.engine);
          },
        }),
      ],
      rootComponentName: 'Form',
    }),
  [],
);

export default () => {
  const [value, setValue] = useState();
  const [leftVisible, setLeftVisible] = React.useState(false);
  const [leftActiveKey, setLeftActiveKey] = React.useState();
  return (
    <div>
      <Designer engine={engine}>
        <StudioPanel actions={<ActionsWidget />}>
          <TopbarPanel>
            <CompositePanel
              visible={leftVisible}
              setVisible={setLeftVisible}
              activeKey={leftActiveKey}
              setActiveKey={setLeftActiveKey}
            >
              <CompositePanel.Item title="panels.Component" icon="Add" />
              <CompositePanel.Item title="panels.OutlinedTree" icon="Layer" />
              <CompositePanel.Item title="panels.History" icon="History" />
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
                title="panels.Component"
                icon="Add"
              ></CompositePanelContent.Item>
            </CompositePanelContent>
          </div>
        </StudioPanel>
      </Designer>
    </div>
  );
};
```
