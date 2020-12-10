// 1 задание
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
// 2 задание
let a=5;
let b=10;
document.write(a+b + "<br>");
let z="Меня зовут ";
let y="Даниил";
document.write(z+y + "<br>");
document.write(b + " " + y + "<br>");
document.write(z+a + "<br>");
alert("Результатом сложения строки и числа будет: " +(b + y));
//3 задание
let e=3;
let r=6;
let t=(35*r-25*e)/27;
let u=((8*r)/(e+5*e))*6;
document.write("Остаток от деления:" + u%t + "<br>");
// 4 задание
let x1=prompt("Введите число:", 'Число');
if (x1 < 20 || (x1 > 40 && x1 != 15 && x1%5==0))
{
  alert("Правильное значение")
}
else
{
  alert("Неправильное значение");
}
//5 задание
let A=prompt("Введите число A:", "Число");
let B=prompt("Введите число B:", "Число");
if(A>B)
{
  document.write("A больше B <br>");
}
else
{
  document.write("B больше A <br>");
}
let V=prompt("Угадайте число от 1 до 10: ", "Число");
if(V==10)
{
  document.write("Вы угадали с числом <br>");
}
else
{
  document.write("Вы не угадали с числом <br> ");
}
//6 задание
let M=prompt("Сегодняшняя дата:", "Дата");
switch (M%7)
{
  case 0: document.write("Суббота <br>");break;
  case 1: document.write("Воскресенье <br>");break;
  case 2: document.write("Понедельник <br>"); break;
  case 3: document.write("Вторник <br>");break;
  case 4: document.write("Среда <br>");break;
  case 5: document.write("Четверг <br>");break;
  case 6: document.write("Пятница <br>");break;
}
// 7 задание
// без ошибки
danila();
function danila() {
  try {
  alert('Начало try');
  let yyy="lalala";
  alert('Конец try');
} catch(err) {
  alert(`Ошибка!`);
}
}
// с ошибкой
danil();
function danil() {
  try {
  alert('Начало try');
  lalala;
  alert('Конец try');
} catch(err) {
  alert(`Ошибка!`);
}
}
