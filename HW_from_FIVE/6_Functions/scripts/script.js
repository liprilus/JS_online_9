const task1 = `Temperature
Оформите Temperature как функцию, в которую параметром передается температура в одной системе, 
а возвращается в другой. Никаких prompt и console.log в коде быть не должно, если вы хотите в 
дальнейшем пользоваться этой функцией где угодно в коде удобно. Нужен ли блок кода в функции для 
решения этой задачи?`
// {
//     const temperature = (temp, syst = undefined) => syst.toUpperCase() === `F`? ((temp - 32) * 5/9).toFixed(1) : ((temp * 9/5) + 32).toFixed(1)
//     const convertedTemp = temperature(451,`f`)
//     console.log(convertedTemp)  
//     //если не проводить проверку на корректность введённой единицы измерения температуры, 
//     //то и блок кода не нужОн. В данном случае проверка только на фаренгейты, при значених syst отличных
//     //от `f` сработает правая часть тернарного оператора т.е. конвертация C -> F    
// }

const task2 = `RGB
Оформите Number: RGB как функцию, в которую параметрами передаются три числа (r,g,b) => . 
Функция должна возвращать строку в нотации #RRGGBB. Используя условия или тернарный оператор добейтесь 
что бы в результате всегда было 7 символов, даже когда значение цвета меньше 15ти. Нужен ли блок кода 
этой функции?`
// {    
//     const rgbToHex = (red, green, blue) => `#${red < 16? `0${red.toString(16)}`: red.toString(16)}${green < 16? `0${green.toString(16)}`: green.toString(16)}${blue < 16? `0${blue.toString(16)}`: blue.toString(16)}`
//     const azaza = rgbToHex(12,13,14)
//     console.log(azaza)
//     //можно без блока кода, но выглядит не очень :)
// }

const task3 = `Flats
Оформите Number: flats как функцию. Продумайте достаточное количество параметров для решения задачи. 
Функция должна возвращать объект вида {entrance, floor}, где entrance - номер падика, floor - номер 
этажа на котором находится квартира.`
// {
//     const apartments = (floors, apartPerFloor, apartNumber) =>{
//         const tmp = {}
//         tmp.entrance = Math.ceil(apartNumber/(floors*apartPerFloor))
//         tmp.floor = Math.ceil((apartNumber - (tmp.entrance-1)*floors*apartPerFloor)/apartPerFloor)
//         return tmp
//     }
//     const obj = apartments(9,4,81)
//     console.log(obj)    
// }

const task4 = `Credentials
Оформите задание String: credentials как функцию без параметров. Используйте функцию capitalize из 
домашнего задания по массивам. Функция должна содержать вызовы prompt и возвращать объект вида {name, 
surname, fatherName, fullName}`
// {
//     const credentials = () =>{
//         const tmp = {}
//         tmp.name = capitalize(prompt(`enter name`, ` васиЛИЙ`).trim())
//         tmp.surname = capitalize(prompt(`enter surname`, `  пупкиН   `).trim())
//         tmp.fatherName = capitalize(prompt(`enter fatername`, `алибабаевич  `).trim())
//         tmp.fullName = `${tmp.name} ${tmp.fatherName} ${tmp.surname}`
//         return tmp
//     }
//     const capitalize = str =>str[0].toUpperCase() + str.slice(1).toLowerCase()
//     const obj = credentials()
//     console.log(obj) 
// }

const task5 = `New line
Оформите задание String: new line как функцию с параметром-строкой. Функция должна возвращать строку с 
настоящими переносами.`
// {
//     const txt = `А сегодня в завтрашний день\\n не все могут смотреть.\\n Вернее, смотреть могут не только лишь все,\\n мало кто может это делать.`
//     const newLine = (str) => str.split(`\\n`).join(`\n`)
//     const txtNew = newLine(txt)
//     console.log(txtNew)
// }

const task6 = `Prompt OR
Оформите задание Prompt: OR как функцию, которая принимает строку для prompt и значение по умолчанию. 
Функция должна возвращать введенный текст или значение по умолчанию в случае отказа пользователя 
вводить что-либо. Используйте функцию без блока кода (функцию в одно выражение)`
// {
//     const promptOr = (str, alert) => Number(prompt(str))||alert    
//     const a = promptOr(`what is your age?`,`!!!Achtung!!!`)
//     console.log(`${!isNaN(a)?`your year of birth is ${new Date().getFullYear() - a}`:`${a}ты ввёл какую-то дичь`}`)   
// }

const task7 = `Login And Password
Оформите задание Login And Password как функцию, которая принимает два параметра - правильный логин и 
пароль и возвращает true если логин и пароль введенные пользователями верны, или false если 
пользователь не смог. Функция должна содержать в себе вызовы prompt для ввода логина и пароля 
пользователем.`
// {
//     const logAndPass = (login, pass) => {
//         let userData = prompt(`Enter login`)
//         if(userData === login){
//             userData= prompt(`Enter password`)
//             if(userData === pass) return true
//             else return false
//         } else return false
//     }
//     console.log(logAndPass(`admin`,`qwerty`))
// }

const task8 = `For Table
Оформите задание For Multiply Table как функцию, которая принимает любой массив с массивами, 
а возвращает строку HTML с тэгом <table> и всякими tr и td.`
// {
//     const forTable = (arr) => {
//         let index = 0
//         let str = `<table border = "1">`
//         for(const elem of arr){
//             if (index % 2 ===0) str += `<tr bgcolor = gray>`
//             else str += `<tr bgcolor = red>`
//             for(const innerElem of elem){            
//                 str += `<td width = "50" height = "50" style="font-size:20px; text-align: center;">${innerElem}</td>`
//             }
//             str += `</tr>`
//             index++
//         }
//         str += `</table>`
//         return(str)
//     }
//     const table = []
//         for (let i = 0; i < 5; i++){
//             table[i] = []
//             for (let j = 0; j < 5; j++){
//                 table[i][j] = (i + 1) * (j + 1)
//             }
//         }
//     document.write(forTable(table))
// }

const task9 = `Filter Lexics
Оформите задание Filter Lexics как функцию, принимающую любую строку для проверки и массив некорректных 
слов (['бляха', 'муха', "пляха", "шабля"], например). Функция должна возвращать строку без этих 
некорректных слов.`
// {
//     const filterLexics = (str, arr) =>{
//         const arrWords = str.split(/\b/)
//         const filteredArr = arrWords.filter(elem => !arr.includes(elem.toLowerCase()))
//         return filteredArr.join(``).replace(/\s+/g, ` `)        
//     }
//     const txt = `Who the fuck said that? Who's the slimy little communist-shit,
//     twinkle-toed cocksucker down here who just signed his own death warrant?`
//     const forbiddenWords = [`shit`,`cocksucker`,`fuck`]
//     console.log(filterLexics(txt, forbiddenWords))    
// }

const task10 = `Currency Table
Оформите задание Currency Table как функцию, без параметров, которая складывает полученные данные во 
внутренний двумерный массив, после чего отображает его используя функцию из задания For Table`
// {
//     const currencyTable = () =>{
//         fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//             .then(data => {            
//             const arr = [[`XXX`]]
//             for (let i = 0; i < Object.keys(data.rates).length; i++){
//                 arr[0].push(Object.keys(data.rates)[i])
//             }      
//             for(let i = 0; i < Object.keys(data.rates).length; i++){
//                 arr[i + 1] = [Object.keys(data.rates)[i]]
//                 for(let j = 0; j < Object.values(data.rates).length; j++){
//                     arr[i + 1][j + 1] = (Object.values(data.rates)[j]/Object.values(data.rates)[i]).toFixed(2)                    
//                 }
//             }           
//             document.write(forTable(arr))
//         })  
//     }
//     const forTable = (arr) => {
//         let index = 0
//         let str = `<table border = "1">`
//         for(const elem of arr){
//             if (index % 2 ===0) str += `<tr bgcolor = gray>`
//             else str += `<tr bgcolor = silver>`
//             for(const innerElem of elem){            
//                 str += `<td width = "50" height = "50" style="font-size:20px; text-align: center;">${innerElem}</td>`
//             }
//             str += `</tr>`
//             index++
//         }
//         str += `</table>`
//         return(str)
//     }
//     currencyTable()
// }

const task11 = `Form
Оформите задание Form как функцию, которая принимает любой объект как параметр и создает форму на экране.`
// {
//     const form = obj => {
//         let str = `<form>`
//         for (const item in obj){    
//             str += `<label>${item}: `
//             if(typeof obj[item] === `string`|| typeof obj[item] === `number`){
//             str += `<input type="${typeof obj[item] === `number`? `number`: `text`}" value="${obj[item]}"/></label>`
//         }
//             else if(typeof obj[item] === `boolean`){
//             str += `<input type="checkbox" ${obj[item]? `checked`: undefined} /></label>`
//         }
//     }
//         str += `</form>`  
//         document.write(str)
//     }
//     const car = {
//         "Name":"chevrolet chevelle malibu",
//         "Cylinders":8,
//         "Displacement":307,
//         "Horsepower":130,
//         "Weight_in_lbs":3504,
//         "Origin":"USA",
//         "in_production": false
//     }  
//     form(car)
// }

const task12 = `Array of objects sort
Сделайте обобщенную функцию сортировки массива с объектами. Функция позволяет отсортировать любой набор 
данных по имени поля (второй параметр). Третьим параметром идет необязательный Boolean, который в 
случае true делает сортировку по возрастанию, в случае false - по убыванию. По умолчанию (без третьего 
параметра) происходит сортировка по возрастанию.`
// {
//     const sort = (arr, key, bool = true) => {
//         arr.sort((a, b) => {
//           if (a[key] < b[key]) {
//             return bool ? -1 : 1
//           }
//           if (a[key] > b[key]) {
//             return bool ? 1 : -1
//           }      
//           return 0
//         })
//         //return arr
//         console.log(arr)
//       }
//       var persons = [
//         {name: "Иван", age: 17},
//         {name: "Мария", age: 35},
//         {name: "Алексей", age: 73},
//         {name: "Яков", age: 12},
//     ]    
    
//     sort(persons, "age"); //сортирует по возрасту по возрастанию
//     sort(persons, "name", false); //сортирует по имени по убыванию
// }

const task13 = `Table
Оформите задание Table как функцию, которая принимает следующие параметры:
любой массив объектов для отображения
поле, по которому сортировать
порядок сортировки (убывание/возрастание)
Перед отображением:
скопируйте исходный массив, что бы сортировка не изменила оригинал;
отсортируйте с помощью функции из предыдущего задания
Отображение возьмите из задания Table`
// {
//     const tableSort = (arr, key, bool = true) => {
//         const tmp = sort([...arr],key, bool)
//         const objNames = []
//         for (const obj of tmp){
//            for(const item in obj){
//                if(!objNames.includes(item)) objNames.push(item)
//            }
//         }    
//         let str = `<table border = "1"><tr bgcolor = silver>`
//         objNames.forEach(elem => str += `<td>${elem}</td>`)
//         str += `</tr>`
//         for(const obj of tmp){        
//            str += `<tr>`
//            for(const elem in objNames){
//                if(Object.keys(obj).includes(objNames[elem])){
//                    str +=`<td>${obj[objNames[elem]]}</td>`
//                }else str += `<td></td>`
//            }
//            str +=`</tr>`
//         }
//         str += `</table>`
//         document.write(str)
//     }
//     const sort = (arr, key, bool = true) => {
//         arr.sort((a, b) => {
//           if (a[key] < b[key]) {
//             return bool ? -1 : 1
//           }
//           if (a[key] > b[key]) {
//             return bool ? 1 : -1
//           }      
//           return 0
//         })
//         return arr        
//       }
//       const shoto = [
//         {
//            "Name":"chevrolet chevelle malibu",
//            "Cylinders":8,
//            "Displacement":307,
//            "Horsepower":130,
//            "Weight_in_lbs":3504,
//            "Origin":"USA"
//         },
//         {
//            "Name":"buick skylark 320",
//            "Miles_per_Gallon":15,
//            "Cylinders":8,
//            "Displacement":350,
//            "Horsepower":165,
//            "Weight_in_lbs":3693,
//            "Acceleration":11.5,
//            "Year":"1970-01-01",
//         },
//         {
//            "Miles_per_Gallon":18,
//            "Cylinders":8,
//            "Displacement":318,
//            "Horsepower":150,
//            "Weight_in_lbs":3436,
//            "Year":"1970-01-01",
//            "Origin":"USA"
//         },
//         {
//            "Name":"amc rebel sst",
//            "Miles_per_Gallon":16,
//            "Cylinders":8,
//            "Displacement":304,
//            "Horsepower":150,
//            "Year":"1970-01-01",
//            "Origin":"USA"
//         },        
//      ]      
//      tableSort(shoto,`Displacement`,false)
// }

const task14 = `Реализуйте задание Number: divide в HTML:`
// {    
//     document.write(`<input type='number' id="firstNumber" /><input type='number' id="secondNumber" />
//     <div id="divisionResult">текст в div</div>`)
//     const calcResult = () => {
//         console.log(firstNumber.value, secondNumber.value, divisionResult.innerHTML)
//         divisionResult.innerHTML = secondNumber.value !== 0 ? Math.round(firstNumber.value/secondNumber.value): `Can't divide by zero`
//     }    
//     firstNumber.oninput = secondNumber.oninput = calcResult
// }

const task15 = `Calc Func
Вспомните первое ДЗ по Javascript, в котором вы делали всякие расчеты используя код на Javascript. Оформите это как функцию:
найдите все входящие данные, сделайте из них параметры
найдите переменную с результатом расчетов и сделайте так, что бы ваша функция возвращала этот результат.
Если результатов несколько, создайте объект из этих результатов и верните его.`
// {
//     const kWtoUAH = (daykW, nightkW) => daykW + nightkW > 250? (daykW * 1.68 + nightkW * 1.68 * 0.5).toFixed(2): (daykW * 1.44 + nightkW * 1.44 * 0.5).toFixed(2)
//     //перевод кВт в грн.    
// }

const task16 = `Calc Live
Используя пример из задания Divide и функцию из Calc Func сделайте несколько полей ввода в HTML, 
меняя которые вы будете получать результат калькуляции в каком-то div.`
{
    document.write(`<label for="daykW">Day kW: </label><input type='number' id="daykW" />
    <label for="nightkW">Night kW: </label><input type='number' id="nightkW" />
    <div id="funcResult">ща тут будет резалт</div>`)
    const kWtoUAH = () => {        
        funcResult.innerHTML = Number(daykW.value) + Number(nightkW.value) > 250? 
        `${Number(daykW.value) + Number(nightkW.value)} kW = ${(daykW.value * 1.68 + nightkW.value * 1.68 * 0.5).toFixed(2)} UAH`:
        `${Number(daykW.value) + Number(nightkW.value)} kW = ${(daykW.value * 1.44 + nightkW.value * 1.44 * 0.5).toFixed(2)} UAH`
    }
    daykW.oninput = nightkW.oninput = kWtoUAH
}