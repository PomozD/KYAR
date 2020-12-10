// 1 задание
function exercise1() {
alert("Вас приветствует учебный центр");
let x=prompt("Введите имя", 'Имя');
alert("Добро пожаловать на наши курсы, " + x);
if(confirm("Хотите стать дизайнером?"))
{
alert("Учите стили CSS и Java Script")

}
else
{
alert("Упускаете время!")
}
}
// 2 задание
function exercise2() {
let a=5;
let b=10;
document.write("<span style='color:blue; font-style:italic'>" + a+b +"</span> <br>");
let z="Меня зовут ";
let y="Даниил";
document.write("<span style='color:blue; font-style:italic'>" + z+y +"</span> <br>");
document.write("<span style='color:blue; font-style:italic'>" + b + " " + y +"</span> <br>");
document.write("<span style='color:blue; font-style:italic'>" + z+a +"</span> <br>");
alert("Результатом сложения строки и числа будет: " +(b + y));
}
//3 задание
function exercise3() {
let e=3;
let r=6;
let t=(35*r-25*e)/27;
let u=((8*r)/(e+5*e))*6;
document.write("<span style='color:blue; font-style:italic'>" + "Остаток от деления:" + u%t + "</span> <br>");
}
// 4 задание
function exercise4() {
let x1=prompt("Введите число:", 'Число');
if (x1 < 20 || (x1 > 40 && x1 != 15 && x1%5==0))
{
  alert("Правильное значение")
}
else
{
  alert("Неправильное значение");
}
}
//5 задание
function exercise5() {
let A=prompt("Введите число A:", "Число");
let B=prompt("Введите число B:", "Число");
if(A>B)
{
  document.write("<span style='color:blue; font-style:italic'>" + "A больше B" +"</span> <br>");
}
else
{
  document.write("<span style='color:blue; font-style:italic'>" + "B больше A" +"</span> <br>");
}
let V=prompt("Угадайте число от 1 до 10: ", "Число");
if(V==10)
{
  document.write("<span style='color:blue; font-style:italic'>" + "Вы угадали с числом" +"</span> <br>");
}
else
{
  document.write("<span style='color:blue; font-style:italic'>" + "Вы не угадали с числом" +"</span> <br>");
}
}
//6 задание
function exercise6() {
let M=prompt("Сегодняшняя дата:", "Дата");
switch (M%7)
{
  case 0: document.write("<span style='color:blue; font-style:italic'>" + "Суббота" +"</span> <br>");break;
  case 1: document.write("<span style='color:blue; font-style:italic'>" + "Воскресенье" +"</span> <br>");break;
  case 2: document.write("<span style='color:blue; font-style:italic'>" + "Понедельник" +"</span> <br>"); break;
  case 3: document.write("<span style='color:blue; font-style:italic'>" + "Вторник" +"</span> <br>");break;
  case 4: document.write("<span style='color:blue; font-style:italic'>" + "Среда" +"</span> <br>");break;
  case 5: document.write("<span style='color:blue; font-style:italic'>" + "Четверг" +"</span> <br>");break;
  case 6: document.write("<span style='color:blue; font-style:italic'>" + "Пятница" +"</span> <br>");break;
}
}
// 7 задание
// с ошибкой
function exercise7err() {
  try {
  alert('Начало try');
  let yyy="lalala";
  alert('Конец try');
} catch(err) {
  alert(`Ошибка!`);
}
}
// без ошибки
function exercise7() {
  try {
  alert('Начало try');
  lalala;
  alert('Конец try');
} catch(err) {
  alert(`Ошибка!`);
}
}
// 2 задание 2 лабы(1 таблица)
function tab1(){
  let X0=prompt("Введите а:", "Число");
  let Y0=prompt("Введите b:", "Число");
  document.write("<table style='border:solid 2px;'>");
  for (let i=1; i<=X0; i++) {
    document.write("<tr>");
    document.write("<td  style='border:solid 1px;'>" + i + "</td>");
    for( let j=2; j<=Y0; j++) {
      document.write("<td style='border:solid 1px;'>" + i * j + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}
//3 задание 2 лабы(2 таблица)
function tab2(){
  let p=prompt("Введите a", 'Число');
  let q=prompt("Введите b", 'Число');
  p1 = new Number(p);
  q1 = new Number(q);
  document.write("<table style='border: solid 2px;'>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'>Радиус</td>");
  document.write("<td style='border:solid 1px;'>Площадь круга</td>");
  document.write("<td style='border:solid 1px;'>Длина окружности</td>");
  document.write("</tr>");
  do
  {
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'>" + p1.toFixed(1) + "</td>");
  document.write("<td style='border:solid 1px;'>" + Math.round(Math.PI*p1*p1) + "</td>");
  document.write("<td style='border:solid 1px;'>" + Math.round(2*Math.PI*p1) + "</td>");
  document.write("</tr  >");
  p1 = p1 + 0.3;
  }
  while(p1 <= q1);
  document.write("/table");
}
//4задание 2 лабы(таблица 3)
function tab3(){
  a=prompt("Введите целое число", 'Число');
  b=prompt("Введите дробное число", 'Число');
  a1 = new Number(a);
  b1 = new Number(b);
  document.write("<table style='border: solid 2px;'>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Число </td>");
  document.write("<td style='border:solid 1px;'> Метод </td>");
  document.write("<td style='border:solid 1px;'> Результат </td>");
  document.write("<td style='border:solid 1px;'> Описание метода </td>")
  document.write("</tr>");
// Здесь целое
  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + a1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toExponential(2)</td>");
  document.write("<td  style='border:solid 1px;'>" + a1.toExponential(2) + "</td>");
  document.write("<td  style='border:solid 1px;'>Представляет число в экспоненциальной форме</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + a1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toFixed(2)</td>");
  document.write("<td  style='border:solid 1px;'>" + a1.toFixed(2) + "</td>");
  document.write("<td  style='border:solid 1px;'>Педставляет число в форме с фиксированным количеством цифр после точки</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + a1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toPrecision(2)</td>");
  document.write("<td  style='border:solid 1px;'>" + a1.toPrecision(2) + "</td>");
  document.write("<td  style='border:solid 1px;'>Представляет число с заданным общим количеством значащих цифр</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + a1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toExponential(2)</td>");
  document.write("<td  style='border:solid 1px;'>" + a1.toString(2) + "</td>");
  document.write("<td  style='border:solid 1px;'>Возвращает строковое представление числа в системе счисления с указанным основанием</td>")
  document.write("</tr>");
  document.write("<tr></td>");
// Здесь дробное
  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + b1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toExponential(2)</td>");
  document.write("<td  style='border:solid 1px;'>" + b1.toExponential(2) + "</td>");
  document.write("<td  style='border:solid 1px;'>Представляет число в экспоненциальной форме</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td  style='border:solid 1px;'>" + b1 + "</td>");
  document.write("<td  style='border:solid 1px;'>toFixed(2)</td>");
  document.write("<td style='border:solid 1px;'>" + b1.toFixed(2) + "</td>");
  document.write("<td style='border:solid 1px;'>Педставляет число в форме с фиксированным количеством цифр после точки</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td style='border:solid 1px;'>" + b1 + "</td>");
  document.write("<td style='border:solid 1px;'>toPrecision(2)</td>");
  document.write("<td style='border:solid 1px;'>" + b1.toPrecision(2) + "</td>");
  document.write("<td style='border:solid 1px;'>Представляет число с заданным общим количеством значащих цифр</td>")
  document.write("</tr>");

  document.write("<tr>");
  document.write("<td style='border:solid 1px;'>" + b1 + "</td>");
  document.write("<td style='border:solid 1px;'>toExponential(2)</td>");
  document.write("<td style='border:solid 1px;'>" + b1.toString(2) + "</td>");
  document.write("<td style='border:solid 1px;'>Возвращает строковое представление числа в системе счисления с указанным основанием</td>")
  document.write("</tr>");
  document.write("</table>");
}
