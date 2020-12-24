import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewSlider from './components/Slider_2/NewSlider';
import OtherSlider from './components/OtherSlider/OtherSlider';
import Header from './components/Header/Header';
import FloatingGhost from './components/FloatingGhost/FloatingGhost';
import Lighthouse from './components/Lighthouse/Lighthouse';
import WolkingMan from './components/WolkingMan/WolkingMan';
import Main from './components/Main/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
        <Route exact path='/' component={Main} />
          <Route exact path='/OtherSlider' component={OtherSlider} />
          <Route exact path='/NewSlider' component={NewSlider} />
          <Route exact path='/FloatingGhost' component={FloatingGhost} />
          <Route exact path='/Lighthouse' component={Lighthouse} />
          <Route exact path='/WolkingMan' component={WolkingMan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
