import { useState } from "react";

export function useStorageState<V>(storageKey: string, initialValue: V) {
  const [value, setValue] = useState<V>(() => {
    const fromStorage = localStorage.getItem(storageKey);

    if(fromStorage) {
      return JSON.parse(fromStorage) as V;
    }

    localStorage.setItem(storageKey, JSON.stringify(initialValue));
    return initialValue;
  });

  function updateValue(newValue: V) {
    localStorage.setItem(storageKey, JSON.stringify(newValue));
    setValue(newValue);
  }

  function deleteValue() {
    localStorage.removeItem(storageKey);
    setValue(initialValue);
  }

  return [value, updateValue, deleteValue] as const;
}
