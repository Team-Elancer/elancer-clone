import { useEffect, useRef } from 'react';

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });

  return domNode;
};

export default useClickOutside;
