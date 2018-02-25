/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
    let arr = string.match(/[+-]?([0-9]*[.])?[0-9]+/g);
    let min,max;
  
    for (a of arr){
      a = parseFloat(a);
      if (typeof a === 'number' && !isNaN(a)){
        if (min === undefined || min > a) min = a;
        if (max === undefined || max < a) max = a;
      }
    }
    return {min: min, max: max};
    
  }
  
  //getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
  //getMinMax('1.32 32.2 .3 123 13.0001');