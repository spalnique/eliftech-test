import {
  SORT_ORDER,
  SORT_BY,
  type IQuery,
  type ISort,
} from '../../../shared/types/index.ts';

const parseSortOrder = (sortOrder: SORT_ORDER): SORT_ORDER => {
  if (Object.values(SORT_ORDER).includes(sortOrder)) return sortOrder;
  return SORT_ORDER.DESC;
};

const parseSortBy = (sortBy: SORT_BY): SORT_BY => {
  if (Object.values(SORT_BY).includes(sortBy)) return sortBy;
  return SORT_BY.DATE;
};

export const parseSortParams = (query: IQuery): ISort => {
  const { sortOrder, sortBy } = query;
  if (!sortOrder || !sortBy)
    return { sortOrder: SORT_ORDER.DESC, sortBy: SORT_BY.DATE };
  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return { sortOrder: parsedSortOrder, sortBy: parsedSortBy };
};
