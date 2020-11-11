import logo from './logo.svg';// day la cho import maay cai app kia
import './App.css';
import {Header} from './Components/Header'
import {Searchbar} from './Components/Searchbar'
import {Emoji} from './Components/Emoji'
function App() {
  let elist =[]
  for ( let i=0;i<20;i++){
    elist.push(
      <Emoji />
    )
  }
  return (
    <React.Fragment>
    <Header />
    <Searchbar />
    // nhung cai element vao day
    <Emoji />
    </React.Fragment>
  );     
   
}

export default App;
    import { Emoji } from './Components/Emoji';

