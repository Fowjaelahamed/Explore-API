// JavaScript Object Notation
// JSON 
const user = {id: 11,name:'hero alom', job:'all star'};
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'goriber dokan',
    address: 'barir mor',
    profit: 20000,
    products: ['cha','cosmetics','modir jinis','all jinis'],
    owner: {
        name: 'gorib shajahan khan',
        profession: 'gorib er badsha'
    },
    isExpensiv: false
};
// from object to stringify 
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);

// from stringify to JSON 
const converted = JSON.parse(shopStringified);
console.log(converted);