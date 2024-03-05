type Item = {
  id: string;
};

export const findItemIndexById = <TItem>(items: TItem[], id: string) => {
  return items.findIndex((item: TItem) => id === id);
};

const itemsWithoutId = [{text: 'test'}];
findItemIndexById(itemsWithoutId, 'testId');
