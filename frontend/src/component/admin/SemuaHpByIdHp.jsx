import { useState } from 'react';
import { useHistory } from 'react-router-dom'

const SemuaHpByIdHp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const his = useHistory()

  const handleSearch = (e) => {
    e.preventDefault();
    his.push(`/adminkonter/${searchQuery}`);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SemuaHpByIdHp;
