interface ListProps {
  items: List[];
  deleteItem: (id: string) => void;
  editItem: (id: string) => void;
}

interface List {
  id: string;
  title: string;
}

const List = ({ items, deleteItem, editItem }: ListProps) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;

        return (
          <div key={id} className="mt-2 flex justify-between">
            <p>{title}</p>
            <div className="flex gap-x-3">
              <button
                onClick={() => editItem(id)}
                className="bg-black text-white rounded-sm px-2 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => deleteItem(id)}
                className="bg-black text-white rounded-sm px-2 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
