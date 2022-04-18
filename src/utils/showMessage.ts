import { Modal } from 'antd';

function showMessage(options: {
  title: string;
  type: 'error' | 'success';
  body: React.ReactNode;
}) {
  const { title, body, type } = options;

  if (type === 'error') {
    Modal.error({
      title,
      content: body,
    });
  }

  if (type === 'success') {
    Modal.success({
      title,
      content: body,
    });
  }
}

export default showMessage;
