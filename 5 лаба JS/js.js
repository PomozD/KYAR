// 1 задание
      for(let i=0; i<(document.all.length); i++)
      {
          document.write('Tag ' + document.all[i].tagName  + ' number ' + i + '; ');
      }
}

// 2 задание
document.write("<h2>" + "2 задание:");
for( i = 0; i < document.body.children.length; i++)
{
let c = document.body.children[i];
document.write(c.tagName + "(" + (i+1) + ")" + "," + " ");
}

// 3 задание
document.write("<h2>" + "3 задание:" +"<br>");
document.write("Через All: ");
let e1 = document.querySelectorAll("span");
document.write(e1[0].innerHTML);

document.write("<br>" + "Через частную колекцию: ");
let e2 = document.getElementsByTagName("span");
document.write(e2[0].innerHTML);

document.write("<br>" + "Через идентификатор: ");
document.write(document.getElementById("span").innerHTML);

let a = document.getElementsByTagName("tr");
let am = 0;
let b = a.length - 3;
for(let i = 3; i < a.length; i++)
{
let c = a[i].getElementsByTagName("th");
am = am+ +c [c.length - 1].textContent;
}
a = document.getElementsByTagName("span");
a[1].innerHTML = "Средний балл: " + (am/b);

// 4 задание
let am=0;
let a=document.getElementsById("table");
for(var i=0;i<a.length;i++)
{
  am+=parseInt(a[i].innerHTML);
}
document.write("<br>" + "Средний балл" + " " + am/4 + "<br>");
let span = document.getElementsByTagName("span");
document.write(span[2].innerHTML + " средний балл =" + am/4);
