import { useEffect, useRef } from 'react';

export const useClickOutside = <T>(callback: () => void) => {
  const wrapperRef = useRef<T>(null);

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (
        wrapperRef.current &&
        wrapperRef.current instanceof HTMLElement &&
        e.target instanceof HTMLElement &&
        !wrapperRef.current.contains(e.target)
      ) {
        callback();
      }
    }

    window.addEventListener('click', handleClickOutside);

    return () => window.removeEventListener('click', handleClickOutside);
  }, [callback]);

  return wrapperRef;
};
