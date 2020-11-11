import logo from './logo.svg';
import './App.css';
import {Header} from "./Component/Header"
import {Emoji} from './Component/Emoji'
import {Searchbar} from './Component/Searchbar'
console.log(emojiList)
function App() {
  let elist_ = []
  for (let i = 0; i < 20; i++) {
    elist_.push(
      <Emoji symbol={emojiList[i].symbol} title={emojiList[i].title} />
    )
  }


  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      { elist_}
    </React.Fragment>

  );
}

export default App;
