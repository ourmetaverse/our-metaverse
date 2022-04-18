import { Space, Select, Divider, Button } from 'antd';
import { useEffect, useState } from 'react';
import { totalSupply } from '@/constants';
import { Link, useModel } from 'umi';

const Option = Select.Option;

export default () => {
  const { contract, ConnectTip } = useModel('user');
  const [progress, setProgress] = useState<number>(0);

  async function updateProgress() {
    if (contract) {
      const progress = parseInt(await contract.totalSupply());
      setProgress(progress);
    }
  }

  useEffect(() => {
    updateProgress();
  }, [contract]);

  const nfts = [];
  const [range, setRange] = useState(0);
  for (let i = range * 500; i < range * 500 + 500 && i < totalSupply; i++) {
    nfts.push(
      <Link key={i} to={`/nfts/token?token=${i}`}>
        <Button
          disabled={i >= progress}
          type={i < 2 ? 'primary' : 'default'}
          style={{ width: '80px' }}
        >
          #{i}
        </Button>
      </Link>,
    );
  }

  if (!contract) {
    return <ConnectTip />;
  }

  return (
    <div>
      <Select
        style={{ width: '200px' }}
        value={String(range)}
        onChange={(value) => {
          setRange(parseInt(value));
        }}
      >
        <Option value="0">0~499</Option>
        <Option value="1">500~1999</Option>
        <Option value="2">1000~1499</Option>
        <Option value="3">1500~1999</Option>
        <Option value="4">2000~2499</Option>
        <Option value="5">2500~2999</Option>
      </Select>
      <Divider />
      <Space wrap>{nfts}</Space>
    </div>
  );
};
