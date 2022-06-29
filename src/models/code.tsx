import { useState } from 'react';

export default function useUser() {
  const [code, setCode] = useState<number>(2001);
  return {
    code,
  };
}
