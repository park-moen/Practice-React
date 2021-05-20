import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback(({ target }) => {
    const { name, value } = target;

    setForm(form => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChange, reset];
}

export default useInputs;
