function sort(arr) {
  var len = arr.length;       
  var tmp, i, j;                  
  
  for(i = 1; i < len; i++) {
  
    tmp = arr[i]
    j = i - 1
    while (j >= 0 && arr[j] > tmp) {
     
      arr[j+1] = arr[j]
      j--
    }
    
    arr[j+1] = tmp
  }
  return arr
}
var arr = [9, 7 ,6 , 8, 2, 4, 6];
sort(arr);
console.log(arr);


