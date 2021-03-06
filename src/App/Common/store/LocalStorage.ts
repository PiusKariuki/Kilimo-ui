// looks into local storage by key, retreive and parse it as JSON
export const loadState = () => {
  // calls to getItem can fail so we wrap in try-catch
  try {
    const serializedState = localStorage.getItem("kilimo-ui");
    // if serialized state is null means it doesn't exist
    if (serializedState === null) {
      return undefined;
    }
    // convert json state string to js object
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// saves state to local storage
export const saveState = (state:any) => {
  // redux recommends state be serializeable
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("kilimo-ui", serializedState);
  } catch (err) {
    return err;
  }
};
