// Custom hook for intersection observer
import { useEffect, useRef, useState } from 'react';

interface UseIntersectionOptions extends IntersectionObserverInit {
  once?: boolean;
}

export const useIntersection = (
  options: UseIntersectionOptions = {}
): [React.RefObject<HTMLDivElement>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { once = false, ...observerOptions } = options;

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsVisible(false);
      }
    }, observerOptions);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once, observerOptions]);

  return [ref, isVisible];
};
