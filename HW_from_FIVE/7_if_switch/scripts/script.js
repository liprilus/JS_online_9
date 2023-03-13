const task1 = `Ответьте на вопросы в комментариях и сверьтесь с отладчиком. console.log специально 
не писал`
// {
//     let a = 10
//     {
//         let b = 20
//         {
//             let c = 30
//             //какие тут будут значения переменных a,b,c,d
//             //a = 10, b = 20, c = 30, d = переменная не объявлена, её попросту нет, далее = hz
//             b++
//             a *= 10            
//         }
//         {
//             let c = 50
//             //какие тут будут значения переменных a,b,c,d
//             //a = 100, b = 21, c = 50, d = hz
//             b += 500            
//         }
//         {
//             const a = 100500
//             const d = "value"
//             //какие тут будут значения переменных a,b,c,d
//             //a = 100500, b = 521, c = hz, d = `value`
//             {
//                 let a = -50
//                 b     = 1000
//                 //какие тут будут значения переменных a,b,c,d
//                 //a = -50, b = 1000, c = hz, d = `value`
//             }
//             //какие тут будут значения переменных a,b,c,d
//             //a = 100500, b = 1000, c = hz, d = `value`
//         }
//         //какие тут будут значения переменных a,b,c,d
//         //a = 100, b = 1000, c = hz, d = hz
//     }
//     //какие тут будут значения переменных a,b,c,d
//     //a = 100, b = hz, c = hz, d = hz
// }

const task2 = `comparison if
Разберите пример. Добавьте условие отрицательного возраста в пример выше. Расставьте недостающие 
(но синтаксически необязательные) фигурные скобки. Выкиньте лишнее из текущего кода`
// {
//     const age = +prompt(`сколько вам лет?`)
//     if (age >= 0 && age < 18){
//         alert(`школьник`)
//     }
//     else{
//         if (age > 18 && age < 30){
//             alert(`молодёжЬ`)
//         }
//         else{
//             if(age > 30 && age < 45){
//                 alert(`зрелость`)
//             }
//             else{
//                 if(age > 45 && age < 60){
//                     alert(`закат`)
//                 }
//                 else{
//                     if(age > 60){
//                         alert(`как пенсия?`)
//                     }
//                     else{
//                         if(age < 0){
//                             alert(`unborn`)
//                         }
//                         else{
//                             alert(`то ли киборг, то ли KERNESS`) 
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     //в prompt выкинул default (,"") (хотя пишут, что для IE это обязательный параметр) и все ; из кода. 
       //Больше ничего лишнего не вижу. Хотя я очень сомневаюсь, что ; были лишними
// }

const task3 = `switch: sizes
Сделайте задание Comparison: sizes используя switch`
// {
//     const size = Number(prompt(`Enter size. \n(Ukrainian sizes: 42-44, 46-48, 50-52, 54-56, 58-60)`))
//     let usSize
//     switch(size){
//         case 42:
//         case 43:
//         case 44:
//             usSize = `S`
//             break
//         case 46:
//         case 47:
//         case 48:
//             usSize = `M`
//             break
//         case 50:
//         case 51:
//         case 52:
//             usSize = `L`
//             break
//         case 54:
//         case 55:
//         case 56:
//             usSize = `XL`
//             break
//         case 58:
//         case 59:
//         case 60:
//             usSize = `XXL`
//             break
//         default: usSize = `хз чё за размер`
//     }
//     alert(`${size} = ${usSize}`)
// }

const task4 = `switch: if
Перепишите пример ниже, используя if.
!!!Обратите внимание на пропуски break!!!`
// {
//     // let color = prompt("Введите цвет","");
//     // switch (color){
//     // case "red": document.write("<div style='background-color: red;'>красный</div>");
//     // case "black": document.write("<div style='background-color: black; color: white;'>черный</div>");
//     //             break;
//     // case "blue": document.write("<div style='background-color: blue;'>синий</div>");
//     // case "green": document.write("<div style='background-color: green;'>зеленый</div>");
//     //             break;
//     // default: document.write("<div style='background-color: gray;'>Я не понял</div>");
//     // }
//     let color = prompt(`Введите цвет`)
//     if (color === `red`){
//         document.write("<div style='background-color: red;'>красный</div>")
//         document.write("<div style='background-color: black; color: white;'>черный</div>")
//     }
//     else if(color === `black`){
//         document.write("<div style='background-color: black; color: white;'>черный</div>")
//     }
//     else if(color === `blue`){
//         document.write("<div style='background-color: blue;'>синий</div>")
//         document.write("<div style='background-color: green;'>зеленый</div>")
//     }
//     else if(color === `green`){
//         document.write("<div style='background-color: green;'>зеленый</div>")
//     }
//     else {
//         document.write("<div style='background-color: gray;'>Я не понял</div>")
//     }
// }

const task5 = `noswitch
Напишите функцию noSwitch, которая принимает объект со значениями-функциями, ключ для объекта и 
запускает одну из функций из объекта если ключ найден, иначе - запускает default:`
// {
//     const noSwitch = (key, cases, defaultKey='default') => {        
//         if(key in cases) {                       
//             return cases[key]()
//         }
//         else{            
//             return cases[defaultKey]()
//         }
//         //с какой целью нужно возвращать андефайнд? решительно не ясно.        

//         //проверка наличия key в cases
//         //если есть - достать значение по ключу. это будет функция. Запустить ее
//         //если нет - извлечь из объекта cases значение по ключу, имя которого лежит в переменной defaultKey. Запустить 
//         //пущай функция noSWitch возвращает то, что возвращает одна из функций из объекта
//     }
    
//     const drink = prompt("Что вы любите пить")
//     noSwitch(drink, {
//         воду: () =>  console.log('Самый здоровый выбор!'),
//         чай(){ 
//             console.log('Вкусная и полезная штука. Не переусердствуйте с сахаром')
//         },
//         "пиво": () => console.log('Хорошо летом, да в меру'),
//         виски: function(){
//             console.log('Да вы, батенька, эстет! Не забудьте лед и сигару')
//         },
//         default(){
//             console.log('шото я не понял')
//         }
//     })  
// }

const task6 = `closure calc
Напишите внутри анонимной функции, переданной в then (data =>):
цикл, который перебирает курсы;
на каждой итерации создается кнопка (document.createElement)
текст кнопки - название валюты (innerHTML или innerText)
Назначьте обработчик события на этой кнопке (onclick = () => {.....}). Функция-обработчик должна быть 
написана прямо в теле цикла
Обработчик должен спрашивать сумму используя prompt и переводить эту суммы из валюты, написанной на 
кнопке в USD
Найдите замыкания. Для доступа к валютам из data.rates используйте [], . тут не поможет. 
Кнопки добавляйте в специальный контейнер (div например), созданный в HTML, или, на худой конец, в body`
// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {            
//             const divBtn = document.createElement(`div`)
//             document.body.append(divBtn)
//             const divRes = document.createElement(`div`)
//             document.body.append(divRes)
//             for(const curr in data.rates){//замыкания вот тут
//                 const btn = document.createElement(`button`)
//                 btn.innerText = curr
//                 btn.onclick = () =>{
//                     const value = Number(prompt(`enter summ in ${curr}`))
//                     const result = value/data.rates[curr]                    
//                     divRes.innerHTML = (`${value} ${curr} = ${result.toFixed(2)} USD`)
//                 }
//                 divBtn.append(btn)
//             }
//         })
// }

const task7 = `closure calc 2
Создайте HTML файл с :
<select id='from'> - исходная валюта
<select id='to'> - валюта в которую происходит обмен
<div id='rate'> - кросскурс между валютами
<input type='number' id='amount' /> - сумма в исходной валюте
<div id='result'> - сумма в валюте, в которую хотим поменять
Используя заготовку из предыдущего задания, наполните select-ы тэгами option с названиями валют, используя цикл
document.createElement
innerText для option
from.append или to.append
За пределами цикла назначьте обработчики onchange для элементов select и oninput для элемента input, 
используя их id. По этим событиям обновляйте текст в div#rate и div#result
Для чтения текущего значения select используйте свойство value: from.value или to.value`
{
    fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
     .then(data => {            
            const selFrom = document.createElement(`select`)
            //selFrom.id = `from` после консультации в ТГ решили, что id и нафиг не нужОн
            const selTo = document.createElement(`select`)
            //selTo.id = `to`
            const divRate = document.createElement(`div`)
            //divRate.id = `rate`
            const input = document.createElement(`input`)
            input.type = `number`
            //input.id = `amount`
            const divRes = document.createElement(`div`)
            //divRes.id = `result`
            document.body.append(selFrom, selTo, divRate, input, divRes) 
              
            for(const curr in data.rates){
                const optionFrom = document.createElement(`option`)
                optionFrom.innerText = curr
                const optionTo = document.createElement(`option`)
                optionTo.innerText = curr              
                selFrom.append(optionFrom)
                selTo.append(optionTo)
            }                       
            exchange = () => {
                divRate.innerHTML = `1 ${selFrom.value} = ${(data.rates[selTo.value]/data.rates[selFrom.value]).toFixed(2)} ${selTo.value}`
                divRes.innerHTML = `${input.value} ${selFrom.value} = ${(input.value * (data.rates[selTo.value]/data.rates[selFrom.value])).toFixed(2)} ${selTo.value}`
            }
            selFrom.onchange = selTo.onchange = input.oninput = exchange             
        })
//общий вывод следующий: с DOM-ом надо основательно разбираться, потому как принцип работы функции exchange
//я честно скопипастил из ДЗ по функциям и слегка переделал. shame on me.
// задать вопросы про: (если не разберусь)
// 1) selFrom.id = `from` нафига айди, если и без него всё работает?
// 2) можно ли было создать элементы option не наплодив их две штуки?
// 3) корректно ли было запихивать сразу 2 иннерХТМЛ в функцию и как разнести её по частям в разные? и надо ли?
// 4) каким боком if switch к этой задаче? к предыдущей тот же вопрос
// - удалять вопросы не буду, оставлю пока для себя. ситуация с ДОМом выглядит удручающе :(
}

const task8 = `countries and cities
По аналогии с предыдущем заданием, реализуйте интерфейс выбора страны и города:
по закрузке данных наполняйте select#countries элементами option с названиями стран;
так же назначьте обработчик события onchange в select#countries, который:
удаляет старый контент select#cities (достаточно занести в innerHTML или innerText пустую строку)
добавляет в select#cities элементы option с городами из выбранной только что страны.
Таким образом, при изменении страны будет меняться список городов в select#cities`
// {
//     fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.min.json').then(res => res.json())
//      .then(data => {            
//             const selCountries = document.createElement(`select`)
//             selCountries.id = `countries`
//             const selCities = document.createElement(`select`)
//             selCities.id = `cities`
//             document.body.append(selCountries,selCities)
//             for(const item in data){
//                 const country = document.createElement(`option`)
//                 country.innerText = item
//                 selCountries.append(country)
//             }
//             selCountries.onchange = () =>{
//                 selCities.innerText = ''
//                 for (const elem of data[selCountries.value]){
//                     const cities = document.createElement(`option`)         
//                     cities.innerText = elem
//                     selCities.append(cities)
//                 }                
//             }            
//         })
// }