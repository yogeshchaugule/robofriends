import React, { useState, useEffect } from 'react';
import CardList from './Robo/CardList';
// import { robots } from './Robo/robots';
import SearchBox from './Robo/SearchBox';

function App () {

  const [ robots, setRobots ] = useState([]);
  const [ searchkey, setSearchKey ] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robotsList => { setRobots(robotsList) });
  }, []);
  const onSearchKeyChange = (event) => setSearchKey(event.target.value);
  const onClearSearch = (event) => {
    setSearchKey('');
  }

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLocaleLowerCase().includes(searchkey.toLocaleLowerCase());
  }, []);

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox
        searchKeyValue={searchkey}
        searchKeyChange={onSearchKeyChange}
        clearSearch={onClearSearch}
        resultCount={filteredRobots.length}
        />
      <CardList robots={filteredRobots} />
    </div>
  );

}

export default App;
