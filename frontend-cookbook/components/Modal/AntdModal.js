import React, { useState } from "react";
import { Modal, Button } from "antd";

const Demo = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setVisible(true)}>Open modal</Button>
      <Modal
        title="Antd Modal"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        destroyOnClose={true}
      >
        <div>Modal body</div>
      </Modal>
    </div>
  );
};

export default Demo;
