export const handleUpdate = (state, setState, item) => {
  if (typeof state != "object") return alert("invalid data/state");
  let index = state.indexOf(item);

  // item found in state
  if (index !== -1) {
    setState((prev) => prev.filter((_item) => _item !== item));
  } else {
    // item not found in state
    setState((prev) => [...prev, item]);
  }
};