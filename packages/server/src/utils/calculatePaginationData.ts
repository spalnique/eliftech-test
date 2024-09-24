export const calculatePaginationData = (
  count: number,
  page: number,
  perPage: number
) => {
  const totalPages = Math.ceil(count / perPage);
  const hasNextPage = totalPages - page > 0;
  const hasPrevPage = page > 1;

  return {
    page,
    perPage,
    totalEvents: count,
    totalPages,
    hasNextPage,
    hasPrevPage,
  };
};
