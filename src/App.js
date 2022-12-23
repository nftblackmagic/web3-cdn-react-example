import logo from './logo.svg';
import './App.css';

function App() {
  console.log("App.js");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catchon CDN React example</h1>
        <h3>{"<script> has been insert in public/index.html"}</h3>
        <button connect-button="0">
          Connect wallet
        </button>
        <div className='row'>
          <h3>Name: </h3>
          <h3 function-name="name">
            Name
          </h3>
        </div>
        <div className='row'>
          <h3>balanceOf: </h3>
          <h3 function-name="balanceOf" function-name-args={'["0x4FCEBB7D6688e5Ac0b1Ed543F25f2601CBdb1007"]'}>
            balanceOf
          </h3>
        </div>
        <div className='row'>
          <h3>isMintOn: </h3>
          <h3 function-name="isPublicSaleOn">
            isMintOn
          </h3>
        </div>
        <button function-name="mint">
          Mint
        </button>
      </header>
    </div>
  );
}

export default App;
