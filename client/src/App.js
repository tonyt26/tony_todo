import React from 'react';
import './App.css';
import WeekContainer from './components/WeekContainer/WeekContainer';
import EventListContainer from './components/EventListContainer/EventListContainer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
              tony's<b>ToDo</b>
            </span>
          </div>
        </header>
        <main>
          <WeekContainer />
        </main>
        <main>
          <EventListContainer />
        </main>
      </div>
    );
  }
}

export default App;
