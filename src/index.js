
// You should implement your task here.

module.exports = function towelSort (matrix) {

  function compareDownToUp(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  function compareUpToDown(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
  }
  if (matrix === undefined)
  return [];
  else{
    let order = 0;
    let newArr = [];
    matrix.forEach(function(row){
      row.sort(compareDownToUp);
      if (order % 2 !== 0){
        row.reverse();
      }
      row.forEach(function(num){
        newArr.push(num);
      });
      order++;
    });
    return newArr;
  }

  
}
