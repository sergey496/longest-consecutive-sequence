module.exports = function longestConsecutiveLength(array) {
     if (array.length==0){return 0;}
   if (array.length==1){return 1;}
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}



array.sort(compareNumeric);
var sum=[];
var j=0;
var count=1;
for (var i=1; i<array.length;i++){
	if ((array[i]-array[i-1])==1){
		sum[j]=count;
		count++;
		j++;
	}
	else {count =1;}
	
}
sum.sort(compareNumeric);
 
return (sum[sum.length-1]+1); 
}
