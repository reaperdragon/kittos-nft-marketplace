export const truncateRegex = /^(0x[a-zA-Z0-9]{4})[a-zA-Z0-9]+([a-zA-Z0-9]{4})$/;

export const truncateEthAddress = (addr) => {
  const match = addr?.match(truncateRegex);
  if (!match) return addr;
  return `${match[1]}…${match[2]}`;
};
