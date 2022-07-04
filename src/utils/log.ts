let cleared = false;
const logs: string[] = [];

export async function log(str: string): Promise<void> {
  if (!cleared) {
    logs.push(str);
    return;
  }
  console.log(
    `%c ${str}`,
    `
    background: linear-gradient(to right bottom, #000000, #060F35, #142E9D, #041352);
    color: #fff;
    border-radius: 5px;
    padding: 8px;
    width: 500px;
    display: inline-block;
  `,
  );
}

export function clearInit() {
  console.clear();
  cleared = true;
  logs.forEach(log);
}
