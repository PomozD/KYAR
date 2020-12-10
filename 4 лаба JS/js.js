// 1 задание
document.write ("<h2>" + "1 задание" + "<br>" + "</h2>");
  function Gruppa(n , spec, amount){  //конструктор со свойствоми и методом
  this.n=n;  //свойства
  this.spec=spec;
  this.amount=amount;

  this.add_stud = function add_stud(i)
  {
  this.amount +=i;
  document.write('В группу ' + this.n + ' добавили '+ i + ' студентов.' + '<br>');
  }

  this.sub_stud = function sub_stud(k)
  {
  this.amount -=k;
  document.write('Из группы ' + this.n + ' исключили '+ k + ' студентов.' + '<br>');
  }

}
  {
    var gr1=new Gruppa(13, "ДЭиВИ", 13); // Создаем экземпляр
    document.write("Номер группы:" + gr1.n + " " + "Специальность:" + gr1.spec + " " + "Количество студентов изначально:" + gr1.amount + "<br>");
    gr1.sub_stud(1); // Вызов метода созданного объекта (исключить 3 студента)
    document.write("Номер группы:" + gr1.n + " " + "Специальность:" + gr1.spec + " " + "Количество студентов после исключения:" + gr1.amount + "<br>" + "<br>");

    var gr2=new Gruppa(1, "ПОИТ", 25);
    document.write("Номер группы:" + gr2.n + " " + "Специальность:" + gr2.spec + " " + "Количество студентов изначально:" + gr2.amount + "<br>");
    gr2.add_stud(3);
    document.write("Номер группы:" + gr2.n + " " + "Специальность:" + gr2.spec + " " + "Количество студентов после исключения:" + gr2.amount + "<br>" + "<br>");

    var gr3=new Gruppa(10, "ПОИБМС", 24);
    document.write("Номер группы:" + gr3.n + " " + "Специальность:" + gr3.spec + " " + "Количество студентов изначально:" + gr3.amount + "<br>");
    gr3.sub_stud(2);
    document.write("Номер группы:" + gr3.n + " " + "Специальность:" + gr3.spec + " " + "Количество студентов после исключения:" + gr3.amount + "<br>" + "<br>");
  }
// 2 задание
document.write ("<h2>" + "2 задание" + "<br>" + "</h2>");
  function Student(name, family, markPhys, markMath, markInform, markOAP)
 {
  this.name= name;
  this.family= family;
  this.markPhys= markPhys;
  this.markMath= markMath;
  this.markInform= markInform;
  this.markOAP= markOAP;

  this.NameFam=function NameFam(name , family)
  {
    alert("Имя и фамилия студента:" + (name + " " + family) );
  }

  this.AverageMark=function AverageMark(markPhys , markMath , markInform, markOAP)
  {
    document.write("Средний балл:" + ((markPhys + markOAP + markMath + markInform)/4) + "<br>");
  }

  }

  var student1 = new Student ("Даниил","Помоз",5, 6, 4, 7);
  student1.NameFam("Даниил","Помоз");
  student1.AverageMark(5, 6, 4, 7);
  Student.prototype.patronymic= this.patronymic;
  student1.patronymic="Сергеевич";
  document.write("Отчество:" + " " + student1.patronymic + "<br>");

  var student2 = new Student ("Пуцик","Никита",7, 5, 7, 8);
  student2.NameFam("Пуцик","Никита");
  student2.AverageMark(7, 5, 7, 8);
  Student.prototype.patronymic= this.patronymic;
  student2.patronymic="Евгеньевич";
  document.write("Отчество:" + " " + student2.patronymic + "<br>");

  var student3 = new Student ("Дмитрий","Млынчик",7, 8, 4, 4);
  student3.NameFam("Дмитрий","Млынчик");
  student3.AverageMark(7, 8, 4, 4);
  Student.prototype.patronymic= this.patronymic;
  student3.patronymic="Степанович";
  document.write("Отчество:" + " " + student3.patronymic + "<br>");

// 3 задание
document.write ("<h2>" + "1 задание" + "<br>" + "</h2>" );
  document.write("Исходный массив:" +"<br>");
  spec = new Array();
  spec[0] = 6*Math.pow(Math.PI,2)+3*Math.exp(2);
  spec[1] = 2*Math.cos(4)+Math.cos(12)+8*Math.exp(3);
  spec[2] = 3*Math.sin(9)+Math.log(5)+Math.sqrt(3);
  spec[3] = 2*Math.tan(5)+6*Math.PI+Math.sqrt(12);
  for(let i=0; i<4; i++) {
    document.write( spec[i] + "<br>" + "<br>" );
  }
  delete spec[2];
  document.write("Полученный массив после удаления элемента под номером 3:" + "<br>")
  for(let i=0; i<spec[i];i++)
  {
  document.write(spec[i] + "<br>");
  }
  document.write("<br>");

  document.write("Проверить, имеется ли у массива 2-й элемент: ");
  document.write(1 in spec);
  document.write("<br>" + "<br>");

  document.write("Проверить, являются ли созданные объекты объектами Array: ");
  document.write(spec instanceof Array);
  document.write("<br>" + "<br>");

  var arr = new Array('sqrt', 'round', 'floor', 'cos');
  document.write("Arr = " + arr + "<br>");
  document.write("Проверить, являются ли объекты Arr объектами Object: ");
  document.write(arr instanceof Object);
  document.write("<br>" + "<br>");

  document.write("Исходная строка : ");
  var mystring="ABCDEFG";
  document.write(mystring + "<br>" + "<br>");
  document.write("Проверить, являются ли объекты объектами String : ");
  document.write(mystring instanceof String);
  document.write("<br>" + "<br>");

  document.write("Тип Arr: " + typeof spec + "<br>");
  document.write("Тип mystring: " + typeof mystring + "<br>" );
  document.write("Тип function gruppa : " + typeof Gruppa + "<br>");
  document.write("Тип n: " + typeof gr1.n + "<br>");
  document.write("Тип spec: " + typeof gr2.spec + "<br>");
  document.write("Тип amount: " + typeof gr3.amount + "<br>" );
