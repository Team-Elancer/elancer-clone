import { useEffect } from 'react';

const useBeforeUnload = () => {
  useEffect(() => {
    const listner = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', listner);

    return () => {
      window.removeEventListener('beforeunload', listner);
    };
  }, []);
};

export default useBeforeUnload;
