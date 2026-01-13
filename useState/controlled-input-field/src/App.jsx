import { useState } from 'react'
function Inputfield() {
  const [text, setText] = useState('');
  function handleInputChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <input type="text" value={text}
        onChange={handleInputChange} />
      <p>Input text:{text}</p>
    </div>
  );
}
export default Inputfield;