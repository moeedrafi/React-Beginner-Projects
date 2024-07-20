import { FormEvent, useState } from "react";
import List from "./List";
import Alert from "./Alert";

interface ListTypes {
  id: string;
  title: string;
}

const App = () => {
  const [name, setName] = useState<string>("");
  const [list, setList] = useState<ListTypes[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<null | string>(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const deleteItem = (id: string) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id: string) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem?.title as string);
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const clearItems = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="bg-white shadow-md border px-10 py-5">
        <h1 className="text-3xl font-bold text-center">Grocery Bud</h1>
        <form onSubmit={handleSubmit} className="mb-5 space-y-6">
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <input
            type="text"
            placeholder="Enter Item"
            className="w-80 border px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="bg-blue-400 px-2 py-1 text-white">
            {isEditing ? "Edit" : "submit"}
          </button>
        </form>
        {list.length > 0 && (
          <>
            <List items={list} deleteItem={deleteItem} editItem={editItem} />
            <button onClick={clearItems} className="bg-red-300">
              Clear Items
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
