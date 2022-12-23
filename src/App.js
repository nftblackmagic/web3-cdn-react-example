import logo from './logo.svg';
import './App.css';

function App() {
  console.log("App.js");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Catchon CDN React example (React 17 only)</h1>
        <h3>{"<script> has been insert in public/index.html"}</h3>
        <h3 style={{ color: "red" }}> {"This app is required to run on goerli testnet"}</h3>
        <button connect-button="0">
          Connect wallet
        </button>
        <div className='row'>
          <h3>NFT Name: </h3>
          <h3 function-name="name">
            Not loaded yet
          </h3>
        </div>
        <div className='row'>
          <h3>NFT minted: </h3>
          <h3 function-name="totalSupply">
            Not loaded yet
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
    </div >
  );
}

export default App;
