const axios = require('axios').default;
const KeepAddress = `0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC`;
const UrlToFetch = `https://api.ethplorer.io/getTokenInfo/${KeepAddress}?apiKey=freekey`;


module.exports = {
	name: 'help',
	description: 'available commands',
	execute(message) {
		message.channel.send(
		`Start your message with !keep. Try these commands: 
!keep all : Show all network stats
!keep price: $KEEP price
!keep volume: KEEP 24h volume 
!keep stakers : number of stakers on the network 
!keep holders: Amount of holders of KEEP 
!keep staked: Amount of KEEP staked in the random beacon contract 
!keep stakedropreserve: Amount of KEEP in the stakedrop reserve 
!keep liquidityreserve: Amount of KEEP in the liquidity reserve 
!keep beacontransactions: Total number of random beacon transactions
!keep exchanges : show keep balances in exchanges
!keep wen ICO? : (Hint, never)
!keep help: Display available commands
Suggestions welcome, just ping me @StateLayer. Data feeds powered by Ethplorer and SunTzu's subgraph`);
	},
};
