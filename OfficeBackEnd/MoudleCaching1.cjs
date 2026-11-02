const first=require("./ModuleCaching.cjs");
const second=require("./ModuleCaching.cjs")
console.log(first);
console.log(second);
console.log(Object.keys);
console.log(require.resolve("./helper.cjs"));