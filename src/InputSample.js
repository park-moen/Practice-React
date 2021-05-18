import React, { useRef, useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const focusInput = useRef();

  const { name, nickname } = inputs;

  const onChange = ({ target }) => {
    const { name, value } = target;

    console.log(name);
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({ name: '', nickname: '' });
    focusInput.current.focus();
  };

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        name='name'
        onChange={onChange}
        value={name}
        ref={focusInput}
      />
      <input
        type='text'
        placeholder='nickname'
        name='nickname'
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
