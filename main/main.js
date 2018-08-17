module.exports = function main(str) {
  // Write your code here
  var n=0;
  var s = str.split('');
  for(var i=0;i<s.length;i++)
	  n += parseInt(s[i]);
  return n;
}; 
