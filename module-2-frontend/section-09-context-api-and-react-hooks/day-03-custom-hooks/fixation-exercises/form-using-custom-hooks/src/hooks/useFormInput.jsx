import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClear() {
    setValue('');
  };

  return {
    value: value,
    onChange: handleChange,
    handleClear,
  };
}

export default useFormInput;
