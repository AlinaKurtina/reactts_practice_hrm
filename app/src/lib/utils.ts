export { cn } from "cn";

export function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export function timeFormatter(time: number) {
  const convertedTime = Number(time);
  const minutes = Math.floor(convertedTime);
  const seconds = convertedTime % 60;

  return { minutes, seconds };
}

export function debounce<T extends (...args: never[]) => void>(func: T, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  const fn = (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };

  fn.cancel = () => clearTimeout(timeoutId);

  return fn;
}
