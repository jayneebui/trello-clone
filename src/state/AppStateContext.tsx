import {createContext, useContext, FC, Dispatch} from 'react';
import {Action} from './action';
import {useImmer, useImmerReducer} from 'use-immer';
import {appStateReducer} from './appStateReducer';

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps,
);

type Task = {
  id: string;
  text: string;
};

type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To Do',
      tasks: [{id: 'c0', text: 'Generate app scaffold'}],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{id: 'c2', text: 'Learn Typescript'}],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{id: 'c3', text: 'Begin to use static typing'}],
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export const AppStateProvider: FC<Props> = ({children}) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);
  const {lists} = appData;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
