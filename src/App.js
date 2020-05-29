import React from 'react';
import {Button,Row,Col} from 'antd'
 

function App() {
  return (
    <div className="App">
      <Button type="primary">测试1</Button>
      <Row>
      <Col xs={8}   md={24}   >
      Col
    </Col>
    <Col xs={8}   md={24} >
      Col
    </Col>
    <Col xs={8}   md={24}>
      Col
    </Col>
    </Row>
     
    </div>
  );
}

export default App;
