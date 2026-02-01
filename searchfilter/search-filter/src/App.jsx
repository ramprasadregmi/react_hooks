import { useState } from 'react'
const items = ['Apple', 'Banana', 'Grape', 'carrot', 'cabbage'];
function searchFilter() {
  const [search, setSearch] = useState('');
  function handleInputchange(event) {
    setSearch(event.target.value);
  }

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input type="text" value={search} onChange={handleInputChange} />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;


