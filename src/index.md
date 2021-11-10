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
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import {
  CompositePanel,
  TopbarPanel,
  CompositePanelContent,
  StudioPanel,
} from 'hrm-header-bar';

const style = {
  border: '1px solid gray',
};

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
    </div>
  );
};
```
