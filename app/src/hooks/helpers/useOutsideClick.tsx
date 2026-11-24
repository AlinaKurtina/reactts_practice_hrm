import { useEffect, useRef } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  handler: (event: PointerEvent) => void,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        handler(event);
      }
    };

    document.addEventListener("pointerdown", handleClick);
    return () => document.removeEventListener("pointerdown", handleClick);
  }, [handler]);

  return ref;
}