export const range = (count: number) => {
  const buffer: number[] = [];

  while (buffer.length < count) {
    buffer.push(buffer.length);
  }

  return buffer;
};
