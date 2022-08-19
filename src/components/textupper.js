import {useState} from 'react';

const TextUpper = () => {
  const [message, setMessage] = useState('');

  const handleChange = event => {
    const result = event.target.value.toUpperCase();

    setMessage(result);
  };

  return (
    <div>
      <div>hello world</div>

      <input
        id="message"
        name="message"
        type="text"
        value={message}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextUpper;
