import './css/PSone.css';
import './css/custom.css';
import FvmLogo from './img/fvm-logo.png';
import FvmAnime from './img/fvm-anime.gif';
import MetamaskAnime from './img/matamask-anime.gif';
import Screen1 from './img/screen1.png';
import Screen2 from './img/screen2.png';
import Screen3 from './img/screen3.png';
import Screen4 from './img/screen4.png';
import Screen5 from './img/screen5.png';
import Screen6 from './img/screen6.png';
import Screen7 from './img/screen7.png';
import Screen8 from './img/screen8.png';
import Screen9 from './img/screen9.png';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{position: 'relative'}}>
        <div style={{}}>
        <img class="logo" src={FvmLogo} style={{width: '100%'}} />
          <h2 class="play">The "If you are game..." Quest</h2>
        </div>
      </header>

      <div class="content" style={{isplay: 'flex', alignItems: 'center', flexFlow: 'row wrap'}}>
        <section class="container with-title">
          <br/>
          <h2 class="title">The Goal</h2>
          <p>In this quest, you will need to create your own ERC20 cryto coin and send it to your own wallet. </p>
          <br/>

          <img src={FvmAnime} style={{display: 'inline-block'}} />
            
          <p><a href="https://fvm.filecoin.io/" target="_blank">Filecoin Virtual Machine</a> is a EVM compatible virtual machine that runs completely on Filecoin that is able to deploy smart contracts that connects to your wallet.</p>
          <div style={{margin: '1rem'}} class="buttons">

            <a href="#quest"><button type="button" class="btn" disabled="" >GET STARTED</button></a>
          </div>
        </section>

        <section class="container">
          <br/>
          <h2 class="title" id="quest">The Quest</h2>
          <div class="containers">

            <div class="container">
              <br/>
              <label class="title">Step 1</label>              
              <p><i class="icon start" style={{display: 'inline-block', height: '3px'}}/> Create a Metamask Wallet</p>
              <br/>

              <img src={MetamaskAnime} style={{display: 'inline-block'}} />

              <div style={{margin: '1rem'}} class="buttons">
                <a href="https://metamask.io" target="_blank">
                  <button type="button" style={{marginBottom: '.4em'}} class="btn warning">💳 GO TO METAMASK 🦊</button>
                </a>
              </div>

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> Go to Chainlist.com and add <a>"Filecoin Calibration Net"</a></p>
              <br/>

              <img class="center" src={Screen1} style={{}} />
              
              <div style={{margin: '1rem'}} class="buttons">
                <a href="https://chainlist.org/?testnets=true&search=calibration" target="_blank">
                  <button type="button" style={{marginBottom: '.4em'}} class="btn">⛓️ CHAINLIST.ORG 📝</button>
                </a>
              </div>

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/>  Go to <a href="https://faucet.calibration.fildev.network/funds.html" target="_blank">Filecoin Faucet</a> to request for some test Filecoins (tFIL)</p>
              <br/>

              <img class="center" src={Screen2} style={{display: 'inline-block'}} />

              <div style={{margin: '1rem'}} class="buttons">
                
                <a href="https://faucet.calibration.fildev.network/funds.html" target="_blank">
                  <button type="button" style={{marginBottom: '.4em'}} class="btn warning">🚰 GO TO FAUCET 🪙</button>
                </a>
              </div>
            </div>

            <div class="container dark">
              <br/>
              <label class="title">Step 2</label>
              <p><i class="icon start" style={{display: 'inline-block', height: '3px'}}/> Go to Remix IDE for solidity</p>
              <br/>

              <div style={{margin: '1rem'}} class="buttons">
                <a href="https://remix.ethereum.org/#lang=en" target="_blank">
                  <button type="button" style={{marginBottom: '.4em'}} class="btn primary">♦ REMIX IDE ♦</button>
                </a>
              </div>

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> Create a new ERC20 contract</p>
              <br/>

              <img src={Screen3} style={{display: 'inline-block'}} />
              <br/>

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> Rename the coin to whatever name you like e.g. <a>JenksCoin</a></p>
              <br/>

              <img src={Screen4} style={{display: 'inline-block'}} />
              
              
              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> After deployment copy and save the <a>deployed Smart Contract address via "Injected Provider Metamask</a></p>
              <br/>

              <img src={Screen5} style={{display: 'inline-block'}} />
              <br />

              <img src={Screen6} style={{display: 'inline-block'}} />
              <br />

            </div>

            <div class="container light">
            <br/>
              <label class="title">Step 3</label>
              <p><i class="icon start" style={{display: 'inline-block', height: '3px'}}/> Go to Metamask Wallet <a>manually add a new token</a> asset</p>
              
              <img src={Screen7} style={{display: 'inline-block'}} />
              <br />

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> Give it a money code e.g. <a>JKC</a></p>
              <br />

              <img src={Screen8} style={{display: 'inline-block'}} />
              <br />

              <p><i class="icon arrow-right" style={{display: 'inline-block', height: 10}}/> Show your <a>Metamask wallet screen</a> with the balance of your crypto token there</p>
              <br />

              <img src={Screen9} style={{display: 'inline-block'}} />
              <br />

              <div style={{margin: '1rem'}} class="buttons">
                <a href="#">
                  <button type="button" class="btn error"> ☝️ GO BACK 🔝</button>
                </a>
              </div>

            </div>
          </div>
        </section>
        <footer class="footer">
          <p>
            Made with ♥ by <a href="https://github.com/jenks-guo-filecoin">Jenks Guo</a>.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
