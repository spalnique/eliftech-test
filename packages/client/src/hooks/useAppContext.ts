import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from 'react';
import type { IQuery } from '../../../shared/types/index.ts';
import { VIEW_MODE } from '../../../shared/types/index.ts';

type Context = {
  query: IQuery;
  setQuery: Dispatch<SetStateAction<IQuery>>;
  prevPage: () => void;
  nextPage: () => void;
  viewMode: VIEW_MODE;
  setViewMode: Dispatch<SetStateAction<VIEW_MODE>>;
};

export const AppContext = createContext({} as Context);

export const useAppContext = (): Context => {
  return useContext(AppContext);
};
