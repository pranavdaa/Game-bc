// Import the page's CSS. Webpack will know what to do with it.
import "../stylesheets/app.css";

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'
import $ "jquery" ;
// Import our contract artifacts and turn them into usable abstractions.
import tictactoe_artifacts from '../../build/contracts/TicTacToe.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var TicTacToe = contract(tictactoe_artifacts);

// The following code is simple to show off interacting with your contracts.
// As your needs grow you will likely need to change its form and structure.
// For application bootstrapping, check out window.addEventListener below.
var accounts;
var account;
var tictacktoeinstance;

window.App = {
  start: function() {
    var self = this;

    // Bootstrap the MetaCoin abstraction for Use.
    TicTacToe.setProvider(web3.currentProvider);

    // Get the initial account balance so it can be displayed.
    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];


    });
  },

  useAccountOne: function(){
    account = accounts[1];
  }
createNewGame: function() {
  TickTacTow.new({from:account,value.web3.toWei(0.1,"ether"),gas:300000000}).then(instance=> {
tictacktoeinstance = instance;
//seting the onClick handler

for(var i = 0;i<3;i++){
  for(var j=0;j<3;j++){
    //the above is because the site has to be responsive 9 times
    $($("#board")[0].children[i].children[j]).off('click').click({x: i, y:j}, App.setStore);
  }
}

console.log(instance);
}).catch(err => {
  console.log(err)
})
},

joinGame: function() {
  var gameAddress = prompt("address of the game");
  if(gameAddress != null) {
    TicTacToe.at(gameAddress).then( instance =>{
      tictacktoeinstance = instance
return tictacktoeinstance.joinGame({from:account,value.web3.toWei(0.1,"ether"),gas:300000000})
}).then(txResult =>{
  //seting the onClick handler

  for(var i = 0;i<3;i++){
    for(var j=0;j<3;j++){
      //the above is because the site has to be responsive 9 times
      $($("#board")[0].children[i].children[j]).off('click').click({x: i, y:j}, App.setStore);
    }
  }

  console.log(txResult)
})
  }
},
setStone: funtion(event){
  console.log(event);
  tictacktoeinstance..setState.(event.data.x,event.data.y,{from:account}).then(txResult =>{
    console.log(txResult);
  })

},


window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  App.start();
});
