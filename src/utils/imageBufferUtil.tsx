const imageBufferUtil = (
  data: number[],
  type: string = 'image/jpeg',
): string => {
  const uint8Array = new Uint8Array(data);
  const blob = new Blob([uint8Array], { type });
  return URL.createObjectURL(blob);
};

export default imageBufferUtil;
