/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
    let arr = string.match(/[+-]?([0-9]*[.])?[0-9]+/g);
    if (typeof string != 'string' || arr === null) return {min: NaN, max: NaN};
    arr = arr.map(a => parseFloat(a)).filter(a => !isNaN(a));
    return {min: Math.min.apply(null, arr), max: Math.max.apply(null, arr)};
  }
  
  /*
  console.log(getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028'));
  console.log(getMinMax('1.32 32.2 .3 123 13.0001'));
  console.log(getMinMax('1'));
  console.log(getMinMax(''));
 */
  /* ============================================= */
  
  /**
   * Напишите рекурсивную функцию вычисления чисел Фибоначчи
   * @param {number} x номер числа
   * @return {number} число под номером х
   */
  function fibonacciSimple(x) {
    if (x === 1) return 1;
    if (x === 0) return 0;
    if (x < 0){
      return fibonacciSimple(x+2) - fibonacciSimple(x+1);
    }else{
      return fibonacciSimple(x-2) + fibonacciSimple(x-1);
    }
  }
  
  /* ============================================= */
  
  /**
   * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
   * при повторных вызовах функция не вычисляет значения, а достает из кеша.
   * @param {number} x номер числа
   * @return {number} число под номером х
   */
  //'use strict';
  function fibonacciWithCache(x) {
    //console.log(fibonacciWithCache.cache, x, fibonacciWithCache);
    if (fibonacciWithCache.cache === undefined){
      fibonacciWithCache.cache = {};
    }
    if (x in fibonacciWithCache.cache){
      return fibonacciWithCache.cache[x];
    }else{
      if (x >= 0){
        fibonacciWithCache.cache[x] = x <= 1 ? x : fibonacciWithCache(x-2) + fibonacciWithCache(x-1);
      }else{
        fibonacciWithCache.cache[x] = fibonacciWithCache(x+2) - fibonacciWithCache(x+1);

      }
      return fibonacciWithCache.cache[x];
    }
  }
  
  //console.log(fibonacciWithCache(50));
  //console.log(fibonacciWithCache(32));
  /* ============================================= */
  
  /**
   * Напишите функцию printNumbers, выводящую числа в столбцах
   * так, чтобы было заполнено максимальное число столбцов при
   * минимальном числе строк.
   * Разделитель межу числами в строке - один пробел,
   * на каждое число при печати - отводится 2 символа
   * Пример работы: printNumbers(11, 3)
   *  0  4  8
   *  1  5  9
   *  2  6 10
   *  3  7 11
   * @param  {number} max  максимальное число (до 99)
   * @param  {number} cols количество столбцов
   * @return {string}
   */
  function printNumbers(max, cols) {
    let output = '', count_numbers = max + 1, n = 0;
    const lines = Math.ceil(count_numbers/cols);
  
    const format = (s) => {
      if (s <= 9) return ' ' + s;
      return s;
    }
  
    if (cols === 0) return ;
  
    let arr = Array.from({ length: lines }).map(a => Array.from({ length: cols }));
  
    for (let i = 0; i < lines; i++)
      for (let j = 0; j < cols; j++){
        arr[i][j] = n < count_numbers;
        n++;
      }
    n = 0;
    for (let j = 0; j < cols; j++){
      for (i = 0; i < lines; i++) {
        if (arr[i][j]){
          arr[i][j] = format(n);
          n++;
        }else{
          arr[i][j] = '';
        }
      }
    }
  
  
    output = arr.map(s => s.join(' '));
    
    return output.join('\n');
  
  }
  //console.log(printNumbers(10, 1),'\n');
  //console.log(printNumbers(0, 3),'\n');
  //console.log(printNumbers(1, 3),'\n');
  //console.log(printNumbers(11, 3),'\n');
  //console.log(printNumbers(12, 3),'\n');
  
  //printNumbers(11, 1);
  //printNumbers(11, 2);
  //printNumbers(7, 2);
  /* ============================================= */
  
  /**
   * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
   * @param  {string} value
   * @return {string}
   */
  const rle = (input) => input.replace(/(.)\1+/ig,(x,s) => s + x.length);
  
  //console.log(rle('AAAB'));
  //console.log(rle('BCCDDDEEEE'));
  
  module.exports = {getMinMax,fibonacciSimple,fibonacciWithCache,printNumbers,rle};
