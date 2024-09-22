import { useState } from 'react';

const usePages = () => {
  const [page, setPage] = useState<number>(1);
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  return { page, nextPage, prevPage, setPage };
};

export default usePages;
