//  现在要求输入一个整数n，请你输出斐波那契数列的第n项。
function Fibonacci(n) {
  var a = 1; b = 1, temp;
  if (n <= 0) return 0;
  for (var i = 2; i <= n; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }
  return a;
}