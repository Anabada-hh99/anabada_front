import React, { useState } from 'react';

const useMultipleInput = (initObj) => {
  const [obj, setObj] = useState(initObj);

  const handler = (e) => {
    const { value, name } = e.target;
    setObj({ ...obj, [name]: value });
  };

  return [obj, setObj, handler];
};

export default useMultipleInput;
