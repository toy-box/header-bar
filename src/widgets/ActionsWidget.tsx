import React, { useEffect, useState } from 'react';
import { Space, Button, Radio } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { TextWidget } from './TextWidget';
import { useDesigner } from '../hooks';
import { GlobalRegistry } from '@designable/core';
import { observer } from '@formily/react';
// import { loadInitialSchema, saveSchema } from '../service'

export const ActionsWidget = observer(() => {
  const designer = useDesigner();
  const [value, setValue] = useState(GlobalRegistry.getDesignerLanguage());

  // useEffect(() => {
  //   loadInitialSchema(designer)
  // }, [])
  return (
    <Space style={{ marginRight: 10 }}>
      <Button href="https://designable-fusion.formilyjs.org">
        Alibaba Fusion
      </Button>
      <Radio.Group
        value={value}
        optionType="button"
        options={[
          { label: 'English', value: 'en-us' },
          { label: '简体中文', value: 'zh-cn' },
        ]}
        onChange={(e) => {
          GlobalRegistry.setDesignerLanguage(e.target.value);
          setValue(e.target.value);
        }}
      />
      <Button href="https://github.com/alibaba/formily" target="_blank">
        <GithubOutlined />
        Github
      </Button>
      <Button
        onClick={() => {
          // saveSchema(designer)
        }}
      >
        <TextWidget>Save</TextWidget>
      </Button>
      <Button
        type="primary"
        onClick={() => {
          // saveSchema(designer)
        }}
      >
        <TextWidget>Publish</TextWidget>
      </Button>
    </Space>
  );
});
