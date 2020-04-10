const task3Element = document.getElementById('task-3');

function f1() {
    alert('function 1')
}

function f2(f2Name) {
  alert(f2Name);
}

f1();
f2('function 2')

task3Element.addEventListener('click', f1);

function f3(str1, str2, str3) {
    let combinedString = str1 + ' ' + str2 + ' ' + str3;
    return combinedString;
}

alert(f3("I", "love", "Javascript"));
