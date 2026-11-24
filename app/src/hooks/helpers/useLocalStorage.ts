export function useLocalStorage() {
  const setNewItem = (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value));
  const getNewItem = <T = unknown>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item === null) return null;
    try {
      return JSON.parse(item) as T;
    } catch {
      return null;
    }
  };
  const removeSomeItem = (key: string) => localStorage.removeItem(key);
  const clearStorage = () => localStorage.clear();

  return { setNewItem, getNewItem, removeSomeItem, clearStorage };
}
