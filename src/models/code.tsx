import { useState } from 'react';

export default function useUser() {
  const [code, setCode] = useState<number>(3001);
  return {
    code,
  };
}
