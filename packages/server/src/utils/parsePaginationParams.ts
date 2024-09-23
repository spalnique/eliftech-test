import type { IPagination, IQuery } from '../../../shared/types/index.ts';

const parseNumber = (value: unknown, defaultValue: number): number => {
  if (typeof value !== 'string') return defaultValue;

  const parsed = parseInt(value);

  if (Number.isNaN(parsed) || parsed < 1) return defaultValue;

  return parsed;
};

const parsePaginationParams = (
  query: IQuery
): Pick<IPagination, 'page' | 'perPage'> => {
  const { page, perPage } = query;
  return { page: parseNumber(page, 1), perPage: parseNumber(perPage, 12) };
};

export default parsePaginationParams;
