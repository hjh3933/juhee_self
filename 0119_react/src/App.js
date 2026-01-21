// import logo from './logo.svg';
import './App.css';
import EventPrac from './components/eventPrac';
import { LifecyclePrac1 } from './components/lifecycle';
import { MapPrac, MapPrac2, MapPrac3 } from './components/map_filter';
import { StatePrac1 } from './components/practice1';
import { PropsFuntion1, PropsFuntion2, PropsFuntion3 } from './components/props';
import { RefPrac1, RefPrac2 } from './components/ref';
import SayFuntion from './components/state';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <PropsFuntion1 name="주희">저녁으로 비빔칼국수</PropsFuntion1>
      <PropsFuntion2 text="내가 좋아하는 요리는 치킨, 초밥, 내일은 칼국수를 먹을거야!"></PropsFuntion2>
      <PropsFuntion3></PropsFuntion3>
      <PropsFuntion3 weather="추워!!"></PropsFuntion3>
      <SayFuntion></SayFuntion>
      <StatePrac1></StatePrac1>
      <hr></hr>
      <EventPrac></EventPrac> */}
      <hr></hr>
      <p>0121_map and filter</p>
      {/* <MapPrac></MapPrac>
      <MapPrac2></MapPrac2> */}
      {/* <MapPrac3></MapPrac3> */}
      <p>Ref</p>
      <RefPrac1></RefPrac1>
      <RefPrac2></RefPrac2>
      <LifecyclePrac1></LifecyclePrac1>
    </div>
  );
}

export default App;
