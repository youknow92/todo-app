const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem };
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
};
const removeOneItem = (state, payload) => {
  const todoItem = payload.todoItem;
  const index = payload.index;
  localStorage.removeItem(todoItem);
  state.todoItems.splice(index, 1);
};
const toggleOneItem = (state, payload) => {
  const todoItem = payload.todoItem;
  const index = payload.index;
  state.todoItems[index].completed = !state.todoItems[index].completed;
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
};
const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
