const task1 = `while confirm
Сделайте цикл с confirm, который продолжается по Отмена и заканчивается по ОК.`
// {
//     while(!confirm(`again?`)){}
// }

const task2 = `array fill
Создайте пустой массив и добавляйте в него элементы, введенные пользователем, пока пользователь не 
нажмет Отмена в очередном prompt. Используйте push для удобства: push В массиве не должно быть null 
после работы цикла`
// {
//     let userTxt
//     const arr = []
//     while(userTxt = prompt(`enter something`)){
//         arr.push(userTxt)
//     }
//     console.log(arr)
// }

const task3 = `array fill nopush
Сделайте предыдущее задание, не используя push, а обращаясь к элементам по индексу.`
// {
//     let userTxt
//     const arr = []
//     for (let i = 0; userTxt = prompt(`enter something`); i++){
//         arr[i] = userTxt
//     }
//     console.log(arr)
// }

const task4 = `infinite probability
Создайте бесконечный цикл, который прерывается с помощью конструкции break, когда Math.random() > 0.9. 
Код должен подсчитывать количество итераций и вывести это число с помощью alert.`
// {
//     let i = 0
//     while(true){
//         i++
//         if(Math.random() > 0.9) break
//     }
//     alert(i)
// }

const task5 = `empty loop
Сделайте цикл с prompt, который прерывается по нажатию OK и продолжается по нажатию "Отмена" c пустым 
телом цикла.`
// {
//     while(prompt() === null){}
// }

const task6 = `progression sum
Подсчитать сумму арифметической прогрессии от 1 до N c шагом 3 (1,4,7....) используя цикл for. 
Метод Гаусса не применять, наоборот, сделать максимально наивное решение.`
// {
//     let sum = 0
//     const n = 1e4   
//     for (let i = 1; i <= n; i += 3){
//         sum += i   
//     }    
//     console.log(sum)
// }

const task7 = `chess one line
Сформировать строку " # # # # # " с помощью цикла for. Длина строки может быть четной и нечетной, и 
указывается в одном месте в коде.`
// {
//     const strLength = 15
//     let str = ``
//     for(let i = 0; i < strLength; i++){
//         i % 2 === 0? str += ` `: str += `#`
//     }
//     console.log(str)
// }

const task8 = `numbers
Сформировать строку c помощью вложенных циклов. Для перевода строки используйте \n.`
// {
//     let str = ``
//     for (let i = 0; i < 10; i++){
//         for (let j = 0; j < 10; j++){
//             str += j
//         }
//         str += `\n`
//     }
//     console.log(str)
// }

const task9 = `chess
Сформируйте строку с шахматной доской из вложенных циклов. Для перевода строки используйте \n. 
Код должен поддерживать легкое изменение размеров доски.
 . # . #
 # . # .`
// {
//     let str = ``
//     const side = 15
//     for(let i = 0; i < side; i++){
//         for(let j = 0; j < side; j++){
//             (i + j) % 2 === 0? str += `. `: str += `# ` //с пробелами красивее смотрится
//         }
//         str += `\n`
//     }
//     console.log(str)
// }

const task10 = `cubes
Сформируйте массив из N элементов, содержащий в себе кубы индексов`
// {
//     const arr = []
//     n = 15
//     for(i = 0; i < n; i++){
//         arr[i] = Math.pow(i, 3)
//     }
//     console.log(arr)
// }

const task11 = `multiply table
C помощью вложенного цикла сформируйте массив массивов "таблица умножения". Для инициализации вложенных массивов используйте
arr[i] = [] //в i-тый элемент массива заносится новый пустой массив
arr[5][6] должен быть равен, соответственно, 30, arr[7][2] == 14 и так далее.`
// {
//     const table = []
//     for (let i = 0; i < 10; i++){
//         table[i] = []
//         for(let j = 0; j < 10; j++){
//             //table[i][j] = (i + 1) * (j + 1) //вот так должна выглядеть нормальная таблица умножения (Пифагора).
//             //без нулей (на обратной стороне тетрадей школьных, по крайней мере, так и было)
//             //но в таком случае arr[5][6] === 42, а не 30, поэтому ->
//             table[i][j] = i * j
//         }
//     }
//     console.log(table[5][6], table[7][2])
// }

const task12 = `read array of objects
Напишите функцию readArrayOfObjects, которая циклически добавляет в массив объекты, которые ввел пользователь. 
Пользователь вводит ключи и значения (их в каждом объекте может быть любое количество), используя prompt. 
Когда пользователь нажимает "Отмена" в окне prompt, ввод объекта заканчивается и объект добавляется в 
массив. Перед вводом следующего объекта пользователю задается вопрос (используя confirm), хочет ли он 
продолжить это мучение ввод объектов. При утвердительном ответе, опять работает ввод любюго количества 
ключей для создания нового объекта
Функция должна возвращать созданный массив с объектами.`
// {
//     const readArrayOfObjects = () =>{
//         const arr = []  
//         while (true) {
//           const obj = {}     
//           while (true) {
//             const key = prompt(`enter key`)
//             if (key === null) break  
//             const value = prompt(`enter value for key ${key}`)
//             if (value === null) break  
//             obj[key] = value
//           }  
//           arr.push(obj)  
//           if (!confirm(`do you want to add another object?`))break
//         }  
//         return arr
//     }
//     const arr = readArrayOfObjects() 
//     console.log(arr)
// }

const task13 = `ромбик
Сформировать следующую строку - ромбик:`
{
    //в этом задании комменты (ход размышлений своих) я тереть не буду. Не обращайте на них внимания.
    //вариант №1, работает корректно, но он мне не нравится
    // const diag = 11
    // let str =``
    // for (let i = 0; i < diag; i++){    
    //         for (let j = 0; j < diag; j++){ 
    //             if ((j >= Math.floor(diag / 2) - i && j <= Math.floor(diag / 2) + i) &&
    //             (j >= Math.abs(Math.floor(diag / 2) - i) && j <= diag - Math.abs(Math.floor(diag / 2) - i) - 1)){
    //                 str += `# ` //с пробелами краше! :)
    //             }   
    //              else {
    //                  str += `. `
    //              }      
    //         }   
    //     str += `\n`
    // }
    // console.log(str)
    //j >= 2 && j <= 2  i = 0       . . # . .
    //j >= 1 && j <= 3  i = 1       . # # # .
    //j >= 0 && j <= 4  i = 2       # # # # #
    //j >= 1 && j <= 3  i = 3       . # # # .  -> diag - abs(Math.floor(diag/2) - i)???
    //j >= 2 && j <= 2  i = 4       . . # . .


    //.    .    0,2; .    .
    //.    1,1; 1,2; 1,3; .
    //2,0; 2,1; 2,2; 2,3; 2,4;       0 2    0 1    0 0    0 -1    0 -2
    //.    3,1; 3,2; 3,3; .         -1 2   -1 1   -1 0   -1 -1   -1 -2  fal tr tr tr fl!!!!!!
    //.    .    4,2; .    .          4      3        2      3       4


    // for (let i = 0; i < 5; i++) {                    
    //     for (let j = 0; j < 5; j++) { 
    //       console.log(`i = ${i}, j = ${j}, ${2 - i}, ${2 - j}`)      
    //     }    
    //   }

    //вариант №2  - гораздо лаконичнее первого.
    { 
        const diag = 11
        let str = ``    
        for (let i = 0; i < diag; i++) {                    
          for (let j = 0; j < diag; j++) { 
            //console.log(`i = ${i}, j = ${j}, ${Math.floor(diag / 2) - i}, ${Math.floor(diag / 2) - j}`)       
            Math.abs(Math.floor(diag / 2) - i) + Math.abs(Math.floor(diag / 2) - j) <= Math.floor(diag / 2)? str += `# `: str += `. `  
          }  
          str += `\n`   
        }
        console.log(str)    
    }
}

const task14 = `DOM: multiply table
Сделать таблицу умножения, используя DOM createElement и innerText. Создайте таблицу, вложенные строки и 
ячейки в циклах. Должно получится что-то вроде этого:`
//тут же задание № 15
const task15 = `DOM: highlight cell
Подсветить ячейку, над которой находится курсор мыши. Используйте события mouseover и mouseout, и 
style.backgroundColor для подсветки. Для того, что бы подсветить правильную ячейку, добавьте обработчики 
событий во вложенный цикл, и используйте в них ту переменную, которая хранит <td>. В таком случае 
замыкания вам помогут.`
// {  
//     const table = document.createElement(`table`)
//     table.setAttribute(`border`, `1`)
//     document.body.append(table)
//     for(let i = 0; i < 10; i++){
//         const line = document.createElement(`tr`)
//         table.append(line)
//         for(let j = 0; j < 10; j++){
//             const cell = document.createElement(`td`)
//             cell.setAttribute(`width`, `50`)
//             cell.setAttribute(`height`, `50`)
//             cell.setAttribute(`style`, `font-size:20px; text-align: center; background-color: #dae0e0;`)
//             cell.innerText = (i + 1) * (j + 1)
//             line.append(cell)
//             cell.onmouseover = () => cell.style.backgroundColor = `#15e6ed`
//             cell.onmouseout = () => cell.style.backgroundColor = `#dae0e0`
//         }
//     }
// }

const task16 = `DOM: Highlight cross
Подсветить строку и столбец, в которой находится подсвеченная ячейка. Если у вас обработчики событий 
объявлены во вложенном цикле, то вы можете пользоваться счетчиками цикла (обычно i и j) и другими 
переменными, например переменной, содержащей в себе DOM-элемент строки.`
{   
    const table = document.createElement(`table`)
    table.setAttribute(`border`, `1`)
    document.body.append(table)
    for(let i = 0; i < 10; i++){
        const line = document.createElement(`tr`)
        line.id = `${i}`
        table.append(line)
        for(let j = 0; j < 10; j++){
            const cell = document.createElement(`td`)
            cell.setAttribute(`width`, `50`)
            cell.setAttribute(`height`, `50`)
            cell.setAttribute(`style`, `font-size:20px; text-align: center; background-color: #dae0e0;`)
            cell.innerText = (i + 1) * (j + 1)
            line.append(cell)
            cell.onmouseover = () => {                
                for(let k = 0; k < 10; k++){
                    const lineCells = table.rows[i].cells[k] //вопрос внизу*               
                    const colCells = table.rows[k].cells[j]
                    lineCells.style.backgroundColor = `#15e6ed`
                    colCells.style.backgroundColor = `#15e6ed`
                }
            }
            cell.onmouseout = () => {                
                for(let k = 0; k < 10; k++){
                    const lineCells = table.rows[i].cells[k]
                    const colCells = table.rows[k].cells[j]
                    lineCells.style.backgroundColor = `#dae0e0`
                    colCells.style.backgroundColor = `#dae0e0`
                }
            }
        }
    }
    //* битый час прошёл, пока я на MDN нашёл https://developer.mozilla.org/ru/docs/Web/API/HTMLTableElement ,
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement и увязал всё это в кучу. 
    // Я не нашёл способа сделать это проще или более понятными мне методами. А они есть? в методичке про пять 
    //столпов ДЖыЭса ответа не нашёл.
}










