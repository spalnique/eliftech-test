const paginationControls = (
  page: number,
  totalPages: number
): (number | string)[] => {
  const base = Array.from<string | number>({ length: 6 });

  return base.map((_x, i) => {
    if (i === 4) return totalPages - 1;
    if (i === 5) return totalPages;
    if (i === 3 && page < totalPages - base.length + 2) return '...';
    if (page > totalPages - base.length + 1)
      return totalPages - base.length + i + 1;
    if (page > 2) return page + i - 1;

    return i + 1;
  });
};

export default paginationControls;
