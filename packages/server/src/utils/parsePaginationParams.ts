const parseNumber = (value: unknown, defaultValue: number): number => {
  const isString = typeof value === 'string';
  if (!isString) return defaultValue;

  const parsedNumber = parseInt(value);
  if (Number.isNaN(parsedNumber) || parsedNumber <= 0) return defaultValue;
  return parsedNumber;
};

// const parseNumber = (value, defaultValue) =>
//   parseInt(value) > 0 ? parseInt(value) : defaultValue;

const parsePaginationParams = (page: string, perPage: string) => {
  return { page: parseNumber(page, 1), perPage: parseNumber(perPage, 12) };
};

export default parsePaginationParams;
