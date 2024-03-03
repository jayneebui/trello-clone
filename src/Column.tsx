import {Card} from './Card';
import {ColumnContainer, ColumnTitle, CardContainer} from './styles';
import {AddNewItem} from './AddNewItem';

type ColumnProps = {
  text: string;
};

export const Column = ({text}: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text='Generate app scaffold' />
      <Card text='Learn TypeScript' />
      <Card text='Finish this trello clone' />
      <AddNewItem
        toggleButtonText='+ Add another card'
        onAdd={console.log}
        dark
      />
    </ColumnContainer>
  );
};
