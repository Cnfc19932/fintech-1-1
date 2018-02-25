/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
    if (x === 1) return 1;
    if (x === 0) return 0;
    return fibonacciSimple(x-2) + fibonacciSimple(x-1);
  }