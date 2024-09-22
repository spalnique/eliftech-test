const parseNumber = (value: unknown, defaultValue: number): number => {
  if (typeof value !== 'string') return defaultValue;

  const parsed = parseInt(value);

  if (Number.isNaN(parsed) || parsed < 1) return defaultValue;

  return parsed;
};

const parsePaginationParams = (page: unknown, perPage: unknown) => {
  return { page: parseNumber(page, 1), perPage: parseNumber(perPage, 12) };
};

export default parsePaginationParams;
