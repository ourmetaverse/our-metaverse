export async function log(str: string): Promise<void> {
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
