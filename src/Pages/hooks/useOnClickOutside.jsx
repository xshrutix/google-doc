import { useEffect, useRef } from 'react';

// A custom hook that allows to perform a function (handler) when a click is registered outside of the referenced element (ref)
export function useOnClickOutside(ref, handler) {
  
  // This is a mutable ref object whose .current property is initialized to the handler function.
  // It's used to have a mutable copy of the handler that doesn't change between renders.
  const savedHandler = useRef();

  // This effect updates savedHandler.current to the latest version of the handler function,
  // if the handler changes.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Function to handle the click event
    const handleClickOutside = (event) => {
      // If the click was outside the ref element, call the handler function.
      if (ref.current && !ref.current.contains(event.target)) {
        savedHandler.current();
      }
    };

    // Register the event listener for mousedown events
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to unregister the event listener on unmount or if ref changes.
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);  // dependency array includes ref to re-run effect if ref changes
}
