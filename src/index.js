module.exports = function check(str, bracketsConfig) {
  let arr = [];
   for (let i = 0, len = str.length; i < len; i++) {
     for (let j = 0, length = bracketsConfig.length; j < length; j++) {
      if (bracketsConfig[j][1] == bracketsConfig[j][0]) {
        if (str[i] == bracketsConfig[j][0] ) {
         
        }
      } else {
        if (str[i] == bracketsConfig[j][0]) {
         
        }
        if (str[i] == bracketsConfig[j][1]) {
          if ((arr.length == 0) || (arr[arr.length - 1] != bracketsConfig[j][0])) return false;
          arr.pop();
          break;
        }
      }
     }
   }
   return (arr.length == 0);
}
