import etherscan from 'etherscan-api';


const api = etherscan.init('SRWE28CK9FIB457EERW5IE8T3YCMG43GEE');
var balance = await api.account.balance('0x8772f10dfe3d30ce7e01ae9d35C671C9B7D2d430');

console.log(balance);
