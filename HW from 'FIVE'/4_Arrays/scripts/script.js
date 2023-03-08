const task1 = `Confirms
Сохраните в массив ответы на вопросы, заданные с помощью confirm. Используйте литеральный (декларативный)
синтаксис массивов ([....,....,....])`
// {
//     const answersArr = [`1 + 1 =2?`, `2 + 2 =4?`, `3 + 3 =7?`, `4 + 4 = 8?`, `5 + 5 = 10?`].map(confirm)
//     alert(answersArr)
//     //или
//     {
//         const answersArr = []
//         answersArr[0] = confirm(`1 + 1 =2?`)
//         answersArr[1] = confirm(`2 + 2 =4?`)
//         answersArr[2] = confirm(`3 + 3 =7?`)
//         answersArr[3] = confirm(`4 + 4 = 8?`)
//         answersArr[4] = confirm(`5 + 5 = 10?`)
//         alert(answersArr)
//     }
// }

const task2 = `Prompts
Сохраните в массив ответы на вопросы, заданные с помощью prompts. Используйте доступ к массиву по 
индексу и присвоение (arr[....] = ....)`
// {
//     const answersArr = []
//     answersArr[0] = prompt(`1 + 1 =`,`8`)
//     answersArr[1] = prompt(`2 + 2 =`,`beer`)
//     answersArr[2] = prompt(`3 + 3 =`, `marlboro`)
//     answersArr[3] = prompt(`4 + 4 =`, `eng`)
//     answersArr[4] = prompt(`5 + 5 =`, `100500`)
//     alert(answersArr)
// }

const task3 = `Item access
Попросите пользователя ввести (prompt) индекс в массиве. Выведите значение элемента по этому индексу. 
Попробуйте так же ввести индекс "length".`
// {
//     const arr = []
//     for(let i = 0; i < Math.floor(Math.random() * 6) + 7; i++) arr[i] = Math.floor(Math.random() * 10) + 1
//     const userData = prompt(`enter index of array (0 - ${arr.length-1})`)
//     alert(`value at index ${userData} = ${arr[userData]}\n array = [${arr}]`)
//     alert(`arr[\`length\`] = ${arr[`length`]}`)    
// }

const task4 = `Item change
Попросите пользователя ввести (prompt) индекс в массиве, а так же значение для этого индекса. 
Присвойте в введенный индекс введенное значение`
// {
//     const arr = []
//     for(let i = 0; i < Math.floor(Math.random() * 6) + 7; i++) arr[i] = Math.floor(Math.random() * 10) + 1
//     const index = prompt(`array = [${arr}]\n Enter index of value you want to change (0 - ${arr.length -1})`)
//     const value = prompt(`enter new value`, `azaza`)
//     arr[index] = value
//     alert(`array with new value = [${arr}]`)
// }

const task5 = `Multiply table
Создайте таблицу умножения 5x5 используя декларативный синтаксис вложенных массивов 
const arr = [[....], [....], [....], .....]. Числа во вложенных массивах должны быть равны произведению 
индекса внешнего массива на индекс внутреннего массива: arr[2][3] === 6`
// {
//     const table = []
//     for (let i = 0; i < 6; i++){
//         //const line = []
//         table[i] = []
//         for (let j = 0; j < 6; j++){
//             // line.push(i * j)
//             table[i][j] = i * j
//         }
//         // table.push(line)
//     }
//     console.log(table)    
// }
const task6 = `Multiply table slice
Используя slice создайте массив массивов (другую таблицу/матрицу) из таблицы умножения, в которой не 
будет нулей`
// {
//     const table = []
//     for (let i = 0; i < 6; i++){        
//         table[i] = []
//         for (let j = 0; j < 6; j++){            
//             table[i][j] = i * j
//         }        
//     }
//     const tableWithoutZeros = table.slice(1).map(lines => lines.slice(1))
//     console.log(tableWithoutZeros) 
//     // в данном конкретном случае slice() удаляет нули просто потому, что они находятся в нулевых элементах
//     // своих массивов. Для более корректного удаления ноликов я бы написал следующее выражение: 
//     const tableWithoutZeros2 = table.map(lines => lines.filter(value => value !==0)).filter(lines => lines.length > 0)
//     console.log(tableWithoutZeros2)
// }

const task7 = `IndexOf Word
Спросите у пользователя строку из нескольких слов. Спросите у него искомое слово. Выведите, каким по 
счету является это слово в строке из нескольких слов. Если слово не найдено, выведите сообщение об этом 
(а не -1)`
// {
//     const userTxt = prompt(`Enter string from several words`, `  Who's the slimy little communist-shit,
//     twinkle-toed cocksucker down here who just signed his own death warrant?`)
//     const word = prompt(`enter search word`,`death`)
//     const arrWords = userTxt.replace(/[^\w\s'-]/g, ``).replace(/\s+/g, ` `).trim().split(` `)
//     // можно ли объединить эти два регулярных выражения в одно? /[^\w\s'-]/ и /\s+/. Пробовал написать
//     // (/[^\w\s'-]|(\s+)/g, ` `) таким образом, но в массиве всё равно остаются лишние пробелы 
//     //и приходится ещё раз запускать .replace(/\s+/g, ` `)       
//     const index = arrWords.indexOf(word)    
//     if(index !== -1){
//         alert(`search word is in position ${index} of array\n[${arrWords}]`)
//     } else alert(`search word not found`)
// }

const task8 = `Reverse
Добавьте в массив пять введенных пользователем через prompt элементов(используйте push). 
Создайте другой массив с этими же элементами в обратном порядке. Для этого извлекайте элементы из 
первого массива используя pop, добавляйте их во второй используя push`
// {
//     const arr = []
//     for (let i = 0; i < 5; i++) arr.push(prompt(`enter some data`))
//     alert(arr)
//     const reverseArr = []
//     for (let i = 0; i < 5; i++) reverseArr.push(arr.pop())
//     alert(reverseArr) 
// }

const task9 = `Reverse 2
Переверните второй массив из предыдущего задания еще раз (последовательность будет как в первом массиве), 
используя shift и unshift`
// {
//     const arr = []
//     for (let i = 0; i < 5; i++) arr.push(prompt(`enter some data`))
//     alert(arr)
//     const reverseArr = []
//     for (let i = 0; i < 5; i++) reverseArr.push(arr.pop())
//     alert(reverseArr) 
//     const reverseArr2 = []
//     for (let i = 0; i < 5; i++) reverseArr2.unshift(reverseArr.shift())
//     alert(reverseArr2) 
// }

const task10 = `Copy
Скопируйте массив созданный в задании Multiply table неглубоко`
// {
//     const table = []
//     for (let i = 0; i < 5; i++){
//         table[i] = []
//         for (let j = 0; j < 5; j++){
//             table[i][j] = (i + 1) * (j + 1)
//         }
//     }
//     const tableCopy = [...table]
//     console.log(tableCopy)
//     tableCopy.push([4,8,15,16,23,42])
//     console.log(tableCopy, table)
//     table[2].push(`lol`,`kek`)
//     console.log(tableCopy, table)
// }

const task11 = `Deep Copy
Скопируйте массив созданный в задании Multiply table включая вложенные массивы (глубокая копия)`
// {
//     const table = []
//     for (let i = 0; i < 5; i++){
//         table[i] = []
//         for (let j = 0; j < 5; j++){
//             table[i][j] = (i + 1) * (j + 1)
//         }
//     }
//     //debugger
//     const tableDeepCopy = [...table.map(elem =>[...elem])]
//     console.log(tableDeepCopy)
//     tableDeepCopy.push([4,8,15,16,23,42])
//     console.log(tableDeepCopy, table)
//     table[2].push(`lol`,`kek`)
//     tableDeepCopy[2].push(`omg`,`gg`)
//     console.log(tableDeepCopy, table)
// }

const task12 = `Array Equals
Создайте код, в котором будет две переменных с массивами (arr1 и arr2), 
которые равны друг другу (arr1 === arr2)`
// {
//     const arr1 = [1,2,3]
//     const arr2 = arr1
//     console.log(arr1 === arr2)
// }

const task13 = `Flat
Соберите все элементы всех вложенных массивов из задания Multiply table в один массив. 
Его длина должна быть равна 25. Используйте spread-оператор`
// {
//     const table = []
//     for (let i = 0; i < 5; i++){
//         table[i] = []
//         for (let j = 0; j < 5; j++){
//             table[i][j] = (i + 1) * (j + 1)
//         }
//     }
//     const flat = [...table[0], ...table[1], ...table[2], ...table[3], ...table[4]]
//     console.log(flat, flat.length)
// }

const task14 = `Destruct
Извлеките первую, пятую и девятую букву из строки, введенной пользователем, используя деструктуризацию. 
Выведите их`
// {
//     const userTxt = prompt(`Enter string`, `многабукаф`)
//     const [one,,,,five,,,,nine] = userTxt.split(``)
//     alert(`string = ${userTxt}\nfisrt letter = ${one}\nfifth letter = ${five}\nninth letter = ${nine}`)
// }

const task15 = `Destruct default
Извлеките вторую, четвертую и пятую букву из строки, введенной пользователем, используя деструктуризацию. 
Если в строке таких букв не окажется задайте переменным значение по умолчанию ! (восклицательный знак). 
Выведите эти переменные`
// {
//     const userTxt = prompt(`Enter string`)
//     const [,two = `!`,,four = `!`,five = `!`,,,,] = userTxt.split(``)
//     alert(`string = ${userTxt}\nsecond letter = ${two}\nfourth letter = ${four}\nfifth letter = ${five}`)
// }

const task16 = `Multiply table rest
Реализуйте задание Multiply table slice, используя оператор rest при деструктуризации. Используйте 
вложенную деструктуризацию. После получения четырех обрезанных вложенных массивов - соберите общий 
массив без нулей`
// {
//     // решительно не ясно, почему "четырех обрезанных вложенных массивов", ведь у нас таблица умножения
//     // 5х5. Цитата: "Создайте таблицу умножения 5x5"
//     const table = []
//     for (let i = 0; i < 6; i++){
//         table[i] = []
//         for (let j = 0; j < 6; j++){
//             table[i][j] = i * j
//         }
//     }
//     console.log(table)
//     const [,[,...line1],[,...line2],[,...line3],[,...line4],[,...line5]] = table
//     const restTable = [line1, line2, line3, line4, line5]
//     console.log(restTable)
// }

const task17 = `For Alert
Есть массив ["John", "Paul", "George", "Ringo"]. Выведите каждое имя отдельным alert(), используя цикл 
for .... of`
// {
//     const arr = [`John`, `Paul`, `George`, `Ringo`]//мне кажется я даже знаю фамилии этих людей ;-)
//     for (let name of arr) alert(name)
// }

const task18 = `For Select Option
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<select>"
for (let currency of currencies){
//    YOUR MAGIC HERE
}
str+= "</select>"
document.write(str) //document.write отобразит ваш HTML на странице
Используя заготовку выше, создайте выпадающий список с валютами. Элементы выпадающего списка создаются 
с помощью тэга <option>`
// {
//     const currencies = [`USD`, `EUR`, `GBP`, `UAH`]
//     let   str = `<select>`
//     for (let currency of currencies){
//         str += `<option>${currency}</option>`
//     }
//     str += `</select>`
//     document.write(str)
// }

const task19 = `For Table Horizontal
const names = ["John", "Paul", "George", "Ringo"]
let   str = "<table>"
for (const name of names){
//    YOUR MAGIC HERE
}
str+= "</table>"
document.write(str) //document.write отобразит ваш HTML на странице
Аналогично, добейтесь вывода имен в ячейки таблицы по горизонтали (одна строка с четырьмя ячейками)`
// {
//     const names = [`John`, `Paul`, `George`, `Ringo`]
//     let   str = `<table border = "1">`
//     for (const name of names){
//         str += `<td>${name}</td>`
//     }
//     str += `</table>`
//     document.write(str)
// }

const task20 = `For Table Vertical 
Аналогично, добейтесь вывода имен в ячейки таблицы по вертикали(одна колонка с четырьмя строками, в 
каждой строке - одна ячейка)`
// {
//     const names = [`John`, `Paul`, `George`, `Ringo`]
//     let   str = `<table border = "1">`
//     for (const name of names){
//         str += `<tr><td>${name}</td></tr>`
//     }
//     str += `</table>`
//     document.write(str)
// }

const task21 = `For Table Letters
const currencies = ["USD", "EUR", "GBP", "UAH"]
let   str = "<table>"
for (let currency of currencies){ //цикл создает строки
    //одна итерация цикла создает ОДНУ СТРОКУ
    console.log(currency)
    for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
        //одна итерация цикла создает ОДНУ ЯЧЕЙКУ
        console.log(letter)
    }
}
str+= "</table>"
document.write(str) //document.write отобразит ваш HTML на странице
Используя заготовку выше, создайте таблицу 3x4. В каждой строке по три ячейки с буквами, четыре строки, 
так как 4 валюты в массиве.`
// {
//     const currencies = [`USD`, `EUR`, `GBP`, `UAH`]
//     let   str = `<table border = "1">`
//     for (let currency of currencies){ 
//         str += `<tr>`
//     for (let letter of currency){ 
//         str += `<td>${letter}</td>`
//         }
//         str += `</tr>`
//     }
// str+= `</table>`
// document.write(str)
// }

const task22 = `For Multiply Table
Выведите таблицу умножения 5x5 из задания Multiply table в таблицу, используя вложенные for .... of 
и document.write. Сделайте черезстрочную подсветку - задавайте четным строкам один цвет фона, 
нечетным - другой`
// {
//     const table = []
//     for (let i = 0; i < 5; i++){
//         table[i] = []
//         for (let j = 0; j < 5; j++){
//             table[i][j] = (i + 1) * (j + 1)
//         }
//     }
//     let index = 0
//     let str = `<table border = "1">`
//     for(const elem of table){
//         if (index % 2 ===0) str += `<tr bgcolor = gray>`
//         else str += `<tr bgcolor = red>`
//         for(const innerElem of elem){            
//             str += `<td width = "50" height = "50" style="font-size:20px; text-align: center;">${innerElem}</td>`
//         }
//         str += `</tr>`
//         index++
//     }
//     str += `</table>`
//     document.write(str)
// }

const task23 = `Function Capitalize
Реализуйте задачу String: capitalize как отдельную функцию:`

    const capitalize = str => {
        return str[0].toUpperCase() + str.slice(1).toLowerCase()
    }
    //console.log(capitalize(`cANBerRa`))


const task24 = `Map Capitalize
Пусть пользователь вводит строку. Разбейте её по пробелам. Используя map и capitalize создайте массив в 
котором каждое слово будет с большой буквы. Соберите массив в строку обратно`
// {
//     const defaultTxt = `i am gunnery sergeant hartman, your senior drill instructor. from now on, you will speak only when spoken to and the first and last words out of your filthy sewers will be "sir."`
//     const userTxt = prompt(`enter string`, defaultTxt)
//     const resultArr = userTxt.split(` `).map(elem => capitalize(elem))
//     const resultStr = resultArr.join(` `)
//     console.log(resultStr)
// }

const task25 = `Filter Lexics
Пусть пользователь вводит строку. Разбейте её по пробелам. Используя filter верните true если элемент 
массива не состоит в определенном массиве недопустимых слов. Если же элемент массива - недопустимое 
слово, функция, переданная в filter должна возвращать false. Соберите массив в строку обратно.`
// {
//     const defaultTxt = `Who the fuck said that? Who's the slimy little communist-shit,
//     twinkle-toed cocksucker down here who just signed his own death warrant?`
//     const forbiddenWords = [`communist-shit`,`cocksucker`,`fuck`]
//     const userTxt = prompt(`enter string`, defaultTxt)
//     const arrWords = userTxt.replace(/[^\w\s'-]/g, ``).replace(/\s+/g, ` `).trim().split(` `)
//     const filteredArr = arrWords.filter(elem => !forbiddenWords.includes(elem.toLowerCase()))
//     const filteredStr = filteredArr.join(` `)
//     console.log(filteredStr)
// }

const task26 = `Beep Lexics
Пусть пользователь вводит строку. Разбейте её по пробелам. Используя map и тернарный оператор верните из 
функции слово без изменений, если оно не состоит в каком-то другом массиве запрещенных слов. Если же 
слово состоит в этом списке, функция должна вернуть слово BEEP. Соберите массив обратно в строку через 
пробел. Таким образом вы сможете реализовать замену нескольких запрещенных слов на BEEP.`
// {
//     const defaultTxt = `Who the fuck said that? Who's the slimy little communist-shit,
//     twinkle-toed cocksucker down here who just signed his own death warrant?
    
//     Yippee-ki-yay, motherfucker!`
//     const forbiddenWords = [`shit`,`cocksucker`,`fuck`]
//     const userTxt = prompt(`enter string`, defaultTxt)
//     const arrWords = userTxt.split(/\b/)
//     console.log(arrWords)
//     const filteredArr = arrWords.map(elem => forbiddenWords.includes(elem.toLowerCase())? `BEEP`: elem)
//     const filteredStr = filteredArr.join(``).replace(/\s+/g, ` `)
//     console.log(filteredStr)
//     //var2
//     const reg = new RegExp(forbiddenWords.join(`|`), `gi`)
//     const filteredStr2 = userTxt.replace(reg, `BEEP!`).replace(/\s+/g, ` `)
//     console.log(filteredStr2)//так проще, кажЫсь. Но без тернарного оператора.
// }

const task27 = `Reduce HTML
Реализуйте задачу For Select Option используя reduce:`
// {
//     const currencies = ["USD", "EUR", "GBP", "UAH"]
//     let str = "<select>"
//     str += currencies.reduce( (a,b) => a + `<option>${b}</option>`, ``)
//     str += "</select>"  
//     document.write(str)
// }

const task28 = `For Brackets Hell Check
Пусть пользователь вводит строку с любыми парными скобками в ней, например [ [ ] () {{{[]()}}}]. 
Найдите место возможной ошибки (непарности) в этой строке. Для этого, каждую открывающую скобку 
добавляйте в стек. При нахождении закрывающей она должна соответствовать вершине стека. Если она не 
соответстует, выведите сообщение об ошибке и позицию в строке. Если соответствует - уберите скобку из 
стека. Если строка ошибок не содержит, порадуйте пользователя.
Например, строки с проблемой: [(}], [(()()()], {() () [()()}]{{{}}}`
{
    const line = prompt()
    const bracketsStack = []
    let i = 0
    for (let character of line){
        if(character === `[` || character === `(` || character === `{`){
            bracketsStack.push(character)
            i++
        } 
        else if(character === `]` || character === `)` || character === `}`){            
            if(character === `]` && bracketsStack[bracketsStack.length - 1] !== `[`||
            character === `)` && bracketsStack[bracketsStack.length - 1] !== `(` ||
            character === `}` && bracketsStack[bracketsStack.length - 1] !== `{`) {
                alert(`ERROR at position ${++i}`)
                break
            }
            bracketsStack.pop()
            i++
        }        
    }
    if(bracketsStack.length === 0) alert(`Кросавчег!`)
}