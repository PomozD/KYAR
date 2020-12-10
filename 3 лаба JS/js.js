// 1 задание
function exercise1 (){
alert("1 задание");
spec = new Array();
spec[0] = 6*Math.pow(Math.PI,2)+3*Math.exp(8);
spec[1] = 2*Math.cos(4)+Math.cos(12)+8*Math.exp(3);
spec[2] = 3*Math.sin(9)+Math.log(5)+Math.sqrt(3);
spec[3] = 2*Math.tan(5)+6*Math.PI+Math.sqrt(12);
for(let i=0; i<4; i++) {
  document.write( spec[i] + "<br>" );
}
let x1=Math.max.apply(null, spec);
let x2=Math.min.apply(null, spec);
document.write("Максимальное:" + x1 + "<br>");
document.write("Минимальное:" + x2 + "<br>");
}
// 2 задание
function exercise2 (){
alert("2 задание");
spec = new Array();
document.write("Массив:" + "<br>");
spec[0] = "pow";
spec[1] = "round";
spec[2] = "floor";
spec[3] = "pop";
spec[4] = "push";
spec[5] = "shift";
spec[6] = "slice";
spec[7] = "sort";
for(let i=0; i<8; i++) {
  document.write( spec[i] + "<br>");
}
document.write("Длина массива: " + spec.length + "<br>");
let newSpec1 = spec.slice(0, 3);
let newSpec2 = spec.slice(3,8);
document.write( "Массив с методами объекта Math:" + "<br>" );
document.write( newSpec1 + "<br>" );
document.write( "Длина массива с методами объекта Math:" + "<br>" );
document.write( newSpec1.length + "<br>" );
document.write( "Массив с методами объекта Array:" + "<br>" );
document.write( newSpec2 + "<br>");
document.write( "Длина массива с методами объекта Array:" + "<br>" );
document.write( newSpec2.length + "<br>");
newSpec1.push("log");
newSpec2.unshift("concat");
document.write( "Добавление метода 'log' в конец массива с методами объекта Math:" + "<br>" );
document.write(newSpec1 + "<br>");
document.write( "Длина массива с методами объекта Math с добавленным методом 'log' в конец:" + "<br>" );
document.write(newSpec1.length + "<br>");
document.write( "Добавление метода 'concat' в начало массива с методами объекта Array:" + "<br>" );
document.write(newSpec2 + "<br>");
document.write( "Длина массива с методами объекта Array с добавленным методом 'concat' в начало:" + "<br>" );
document.write(newSpec2.length + "<br>");
}
// 3 4задание
function exercise3 (){
alert("3 задание");
mystring = "Помоз Даниил Сергеевич , Помоз Владислав Сергеевич, Помоз Алексей Сергеевич, Помоз Елена Анатольевна, Помоз Сергей Владимирович";
document.write("Исходная строка:" + "<br>");
document.write("<span style='color:green;'>" + mystring + "</span> <br>");
document.write("Длина исходной строки:" + "<br>");
document.write("<span style='color:green;'>" + mystring.length + "</span> <br>");
let mystringup=mystring.toUpperCase();
document.write("Строка в верхнем регистре:" + "<br>");
document.write("<span style='color:green;'>" + mystringup + "</span> <br>");
document.write("Длина cтроки в верхнем регистре:" + "<br>");
document.write("<span style='color:green;'>" + mystringup.length + "</span> <br>");
let mystringlower=mystring.toLowerCase();
document.write("Строка в нижнем регистре:" + "<br>");
document.write("<span style='color:green;'>" + mystringlower + "</span> <br>");
document.write("Длина cтроки в нижнем регистре:" + "<br>");
document.write("<span style='color:green;'>" + mystringlower.length + "</span> <br>");
let mystringtwo=mystringup.concat(mystringlower);
document.write("Объединение строк в верхнем и нижнем регистрах:" + "<br>");
document.write("<span style='color:green;'>" + mystringtwo + "</span> <br>");
document.write("Длина объединенных строк в верхнем и нижнем регистрах:" + "<br>");
document.write("<span style='color:green;'>" + mystringtwo.length + "</span> <br>");
document.write("Замена Фамилии Имя Отчества на ФИО :" + "<br>");
document.write("<span style='color:green;'>" + mystring.replace("Помоз Даниил Сергеевич" , "Помоз Д.С.") + "</span> <br>");
}
// 4 4задание
function exercise4() {
  x=new Date();
  s = x.getMonth()+1;
  document.write("<table style='border: solid 2px;'>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Год </td>");
  document.write("<td style='border:solid 1px;'>" + x.getFullYear() + "</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Месяц </td>");
  document.write("<td style='border:solid 1px;'>" + s + "</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> День </td>");
  document.write("<td style='border:solid 1px;'>" + x.getDate() + "</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Час </td>");
  document.write("<td style='border:solid 1px;'>" + x.getHours() + "</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Минуты </td>");
  document.write("<td style='border:solid 1px;'>" + x.getMinutes() + "</td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td style='border:solid 1px;'> Секунды </td>");
  document.write("<td style='border:solid 1px;'>" + x.getSeconds() + "</td>");
  document.write("</tr>");
}
