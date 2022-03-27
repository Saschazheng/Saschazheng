import React, { useState } from 'react';
import './App.css';
import { Spin,Switch, Alert , Modal, Button,Table,Pagination } from 'antd';

function App() {
  const [loading,setLoading] = useState(false)

  const toggle=()=>{
    setLoading(value => !value);
  }
  const container = (
    <Alert message="消息提示的文案"
      description="消息提示的辅助性文字介绍消息提示的辅助性文字介绍消息提示的辅助性文字介绍"
      type="info"
    />
  );

  const [ visible, setVisible ] = useState(false)
  const showModal = () =>{
    setVisible(true)
  };
  const handleCancel = ()=>{
    setVisible(false);
  }
  const handleOk = ()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      setVisible(false);
    },2000)
  }

  /* 表格 */
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `李大嘴${i}`,
      age: 32,
      address: `西湖区湖底公园${i}号`,
    });
  };
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    width:100,
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    width:100,
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
  

  return (
    <div className="example">
      <div>
        <Spin spinning={loading} tip="正在读取数据...">{container}</Spin>
        切换加载状态：<Switch checked={loading} onChange={toggle} />
      </div>
      <div>
        <button onClick={showModal}>点击</button>
        <Modal  
        visible={visible}
        title="对话框标题" 
        onOk={handleOk} 
        onCancel={handleCancel}
        footer={[
          <Button key="back" type="ghost" size="large" onClick={handleCancel}>返 回</Button>,
          <Button key="submit" type="primary" size="large" loading={loading} onClick={handleOk}>
            提 交
          </Button>,
        ]}
        >
          <p>对话框的内容</p>
          <Table dataSource={data} columns={columns} pagination={{ pageSize: 20 }} scroll={{ y: 240 }}/>

        </Modal>
      </div>
    </div>
  );
}

export default App;
