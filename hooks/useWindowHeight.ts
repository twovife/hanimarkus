import { useEffect, useState } from 'react';

const useWindowHeight = () => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    if (typeof window !== 'undefined') {
      setHeight(window.innerHeight);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  return height;
};

export default useWindowHeight;
