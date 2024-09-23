const paginationControls = (
  page: number,
  totalPages: number
): (number | string)[] => {
  const base = Array.from<string | number>({
    length: totalPages < 6 ? totalPages : 6,
  });

  return base.map((_x, i) => {
    if (totalPages <= 6) {
      return i + 1;
    } else {
      if (i === base.length - 1) return totalPages;
      if (i === base.length - 2) return totalPages - 1;
      if (i === base.length - 3 && page < totalPages - 4) return '...';
      if (page > totalPages - base.length + 1)
        return totalPages - base.length + i + 1;
      if (page > 2) return page + i - 1;
      return i + 1;
    }
  });
};

export default paginationControls;
