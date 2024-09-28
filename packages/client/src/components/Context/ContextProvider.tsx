import { useState, type FC, type PropsWithChildren } from 'react';
import useQuery from '../../hooks/useQuery.ts';
import { VIEW_MODE } from '../../../../shared/types/index.ts';
import { AppContext } from '../../hooks/useAppContext.ts';

export const ContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [viewMode, setViewMode] = useState<VIEW_MODE>(VIEW_MODE.scroll);
  const { query, setQuery, prevPage, nextPage } = useQuery();

  return (
    <AppContext.Provider
      value={{ viewMode, setViewMode, query, setQuery, prevPage, nextPage }}>
      {children}
    </AppContext.Provider>
  );
};
