const task1 = `Literals
Найдите несколько окружающих объектов реального мира и создайте соответственные объекты Javascript.`
// {
//     const ship = {
//         name: `Bismarck`,
//         class: `Battleship`,
//         builder: `Blohm & Voss, Hamburg`,
//         launched: new Date(1939,01,14).toLocaleDateString(),
//         displacement: [`41700 tonnes standard`, `50300 tonnes full load`],
//         length: [`241,6 meters waterline`,`251 meters overall`],
//         beam: `36 meters`,
//         speed: `30.01 knots`,
//         crew: {
//             officers: 103,
//             sailors : 1962,
//         },
//         armour: {
//             belt: `320 mm`,
//             turrets: `360 mm`,
//             mainDeck: `100-120 mm`,
//         },
//         armament: {            
//             main: {
//                 info: `4 x 2 380mm SK C/34 naval guns`,
//                 gun:{
//                     name: `380mm SK C/34 naval gun`,
//                     caliber: 380,
//                     barrelLength: () => ship.armament.main.gun.caliber * 51.66,
//                     mass: `111 tonnes`,
//                     rateOfFire: `2.3 rounds per minute`
//                 },
//                 turrets: [`Anton`, `Bruno`, `Caesar`, `Dora`]
//             },
//              secondary: [`12 × 150mm SK C/28 (6 × 2)`, `16 × 105mm SK C/33 (8 × 2)`],
//              aaGuns : [`16 × 37mm SK C/30 (8 × 2)`, `12 × 20mm FlaK 30 (12 × 1)`],
//         },
//         cat: {
//             name: `Unsinkable Sam`,
//             born: `before ${new Date(`1941`).getFullYear()}`,
//             died: new Date(`1955`).getFullYear(),
//             role: `Ship's cat`,
//             employer: [delay(1).then(result => ship.cat.employer[0] = ship.name), //навеяно занятием про
//             //асинхронность. работает )
//             `HMS Cossack`, `HMS Ark Royal`],
//         },
//         status: `sunk ${new Date(1941,4,27,10,39).toLocaleString()}`,
        
//     }
//     console.log(ship)  
//     // console.log(ship.armament.main.gun.barrelLength()) 
//     // console.log(typeof(ship.cat.employer[0])) 
//     // catCallback = () => console.log(typeof(ship.cat.employer[0]))
//     // setTimeout(catCallback,10)
//     function delay(ms){ 
//         function executor(fulfill, reject){  
//             setTimeout(() => fulfill(ms), ms)
//          }           
//         return new Promise(executor) 
//     }
// }

const task2 = `Literals expand
Дайте возможность пользователю добавить любые два свойства в эти объекты с любыми значениями. 
Обеспечьте ввод названия ключа и значения через prompt прямо в литерале объекта {}`
// {
//     const obj = {
//         [prompt(`enter keyname`)]: prompt(`enter value`),
//         [prompt(`enter keyname`)]: prompt(`enter value`),
//     }
//     console.log(obj)
// }

const task3 = `Literals copy
Пусть пользователь введет еще одно свойство в переменную. Вставьте в новый объект эту переменную. 
Скопируйте объект из предыдущего задания в новый объект.`
// {
//     const key = prompt(`enter keyname`)
//     const value = prompt(`enter value`)
//     const obj = {}
//     obj[key] = value
//     Object.assign(obj, {
//         [prompt(`enter keyname`)]: prompt(`enter value`),
//         [prompt(`enter keyname`)]: prompt(`enter value`),
//     })
//     console.log(obj)
// }

const task4 = `Html tree 
Сделайте декларативную JSON-структуру для тэгов выше, в которой:
каждый тэг будет объектом
имя тэга будет полем tagName
вложенные тэги будут в поле children
набор аттрибутов тэга будет в поле attrs.
Выведите значения текста во второй кнопке, используя . и [].
Выведите значение атрибута id во втором input, используя . и [].
<body>
<div>
    <span>Enter a data please:</span><br/>
    <input type='text' id='name'>
    <input type='text' id='surname'>
</div>
<div>
    <button id='ok'>OK</button>
    <button id='cancel'>Cancel</button>
</div>
</body>`
// {
//     const tree = {
//         tagName: `body`,
//         children: [
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `span`,
//                         children: [`enter a data please`],
//                     },
//                     {
//                         tagName: `br`
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `name`,
//                         },
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `surname`,
//                         },
//                     },
//                 ]
//             },
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `ok`,
//                         },
//                         children:[`OK`],
//                     },
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `cancel`,
//                         },
//                         children: [`Cancel`],
//                     },
//                 ],
//             },          
//         ]
//     } 
//     console.log(tree.children[1].children[1].children)
//     console.log(tree.children[0].children[3].attrs.id)   
// }
const task5 = `Parent
Добавьте каждому объекту тэга из предыдущего задания связь с родителем, используя свойство parent и 
присвоение`
// {
//     const tree = {
//         tagName: `body`,
//         children: [
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `span`,
//                         children: [`enter a data please`],
//                     },
//                     {
//                         tagName: `br`
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `name`,
//                         },
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `surname`,
//                         },
//                     },
//                 ]
//             },
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `ok`,
//                         },
//                         children:[`OK`],
//                     },
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `cancel`,
//                         },
//                         children: [`Cancel`],
//                     },
//                 ],
//             },          
//         ]
//     } 
    
//     function walkerModify(obj/*,parent = tree*/) { 
//         if(obj.children){
//             for (let item of obj.children) {
//                 item.parent = obj
//                  walkerModify(item/*, item*/)                
//               }
//         }        
//       }      
//       walkerModify(tree)
//      console.log(tree)// как эту задачу порешать можно было, если рекурсию проходили гораздо позже? хз 
// }

const task6 = `Change OK
Добавьте(или измените) любой введенный пользователем атрибут тэга <button id='ok'> из задания HTML Tree. 
Пользователь также вводит значение этого атрибута.`
// {
//     const tree = {
//         tagName: `body`,
//         children: [
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `span`,
//                         children: [`enter a data please`],
//                     },
//                     {
//                         tagName: `br`
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `name`,
//                         },
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `surname`,
//                         },
//                     },
//                 ]
//             },
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `ok`,
//                         },
//                         children:[`OK`],
//                     },
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `cancel`,
//                         },
//                         children: [`Cancel`],
//                     },
//                 ],
//             },          
//         ]
//     } 
//     const key = prompt(`enter key`)
//     const value = prompt(`enter value`)
//     tree.children[1].children[0].attrs[key] = value
//     console.log(tree.children[1].children[0].attrs)
// }

const task7 = `Destructure
Используя деструктуризацию структуры из задания HTML Tree, Выведите значения текста в тэге span, 
Выведите значения текста во второй кнопке и Выведите значение атрибута id во втором input.`
// {
//     const tree = {
//         tagName: `body`,
//         children: [
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `span`,
//                         children: [`enter a data please`],
//                     },
//                     {
//                         tagName: `br`
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `name`,
//                         },
//                     },
//                     {
//                         tagName: `input`,
//                         attrs: {
//                             type: `input`,
//                             id: `surname`,
//                         },
//                     },
//                 ]
//             },
//             {
//                 tagName: `div`,
//                 children: [
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `ok`,
//                         },
//                         children:[`OK`],
//                     },
//                     {
//                         tagName: `button`,
//                         attrs: {
//                             id: `cancel`,
//                         },
//                         children: [`Cancel`],
//                     },
//                 ],
//             },          
//         ]
//     }     
//     const { children: [ { children: [ { children: [spanTxt] } ] } ] } = tree
//     const { children: [butTxt] } = tree.children[1].children[1]
//     const {attrs:{id: idValue}} = tree.children[0].children[3]
//     console.log(`${spanTxt}\n${butTxt}\n${idValue}`)    
// }

const task8 = `Destruct array
напишите код, который используя деструктуризацию положит:
четные числа в переменные even1, even2, нечетные в odd1, odd2, odd3,буквы в отдельный массив`
// {
//     let arr = [1,2,3,4,5, "a", "b", "c"]
//     const [odd1, even1, odd2, even2, odd3, ...letterArr] = arr
//     console.log(letterArr, even1, even2, odd1, odd2, odd3)
// }

const task9 = `Destruct string
напишите код, который используя деструктуризацию положит:
число в переменную number
букву a в переменную s1
букву b в переменную s2
букву c в переменную s3`
// {
//     let arr = [1, "abc"]
//     const [number, [s1, s2, s3]] = arr
//     console.log(s3, s2, s1, number)
// }

const task10 = `Destruct 2
извлеките используя деструктуризацию имена детей в переменные name1 и name2`
// {
//     let obj = {name: 'Ivan',
//            surname: 'Petrov',
//            children: [{name: 'Maria'}, {name: 'Nikolay'}]}
//     const {children:[{name: name1}, {name: name2}]} = obj
//     console.log(name2, name1)
// }

const task11 = `Destruct 3
извлеките используя деструктуризацию объектов два первых элемента и длину массива в 
переменные a, b и length`
// {
//     let arr = [1,2,3,4,5,6,7,10]
//     const {0: a, 1: b, length} = arr
//     console.log(length, b, a)
// }

const task12 = `Copy delete
Сделайте копию одного из объектов из задания Literals без ключа, который введет пользователь.`
// {
    // const ship = {
    //     name: `Bismarck`,
    //     class: `Battleship`,
    //     builder: `Blohm & Voss, Hamburg`,
    //     launched: new Date(1939,01,14).toLocaleDateString(),
    //     displacement: [`41700 tonnes standard`, `50300 tonnes full load`],
    //     length: [`241,6 meters waterline`,`251 meters overall`],
    //     beam: `36 meters`,
    //     speed: `30.01 knots`,
    //     crew: {
    //         officers: 103,
    //         sailors : 1962,
    //     },
    //     armour: {
    //         belt: `320 mm`,
    //         turrets: `360 mm`,
    //         mainDeck: `100-120 mm`,
    //     },
    //     armament: {            
    //         main: {
    //             info: `4 x 2 380mm SK C/34 naval guns`,
    //             gun:{
    //                 name: `380mm SK C/34 naval gun`,
    //                 caliber: 380,
    //                 barrelLength: () => ship.armament.main.gun.caliber * 51.66,
    //                 mass: `111 tonnes`,
    //                 rateOfFire: `2.3 rounds per minute`
    //             },
    //             turrets: [`Anton`, `Bruno`, `Caesar`, `Dora`]
    //         },
    //          secondary: [`12 × 150mm SK C/28 (6 × 2)`, `16 × 105mm SK C/33 (8 × 2)`],
    //          aaGuns : [`16 × 37mm SK C/30 (8 × 2)`, `12 × 20mm FlaK 30 (12 × 1)`],
    //     },
    //     cat: {
    //         name: `Unsinkable Sam`,
    //         born: `before ${new Date(`1941`).getFullYear()}`,
    //         died: new Date(`1955`).getFullYear(),
    //         role: `Ship's cat`,
    //         employer: [`Bismarck`,`HMS Cossack`, `HMS Ark Royal`],
    //     },
    //     status: `sunk ${new Date(1941,4,27,10,39).toLocaleString()}`,  
    // } 
//     delete ship[prompt(`enter key to delete\n${Object.keys(ship)}`)]
//     function walker(obj) {
//         document.write('<ul>')
//         for(const item in obj){
//           if(typeof obj[item] === 'object'){
//             document.write(`<li>${item}: `)
//             walker(obj[item])
//             document.write('</li>')
//           } else{
//             if(isNaN(item))document.write(`<li>${item}: ${obj[item]}</li>`)
//             else document.write(`<li>${obj[item]}</li>`)
//           }
//         }
//         document.write('</ul>')
//       }  //нафига я постоянно пытаюсь сделать то, о чём никто не просил?  
//       walker(ship)          
// }

const task13 = `Currency real rate
Ниже приведен код, который скачивает актуальную информацию о курсах валют. Скопируйте ссылку из него вставьте в браузер интереса ради. Реализуйте калькулятор обмена валют следующим образом:
Пользователь вводит исходную валюту
Пользователь вводит валюту, в которую происходит конвертация
Пользователь вводит сумму в исходной валюте
Пользовател видит результат конвертации
Учтите, что пользователь может ввести какую-то дичь или название валют в неверном регистре`
// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {
//         //console.log(data.rates)        
//         let currency = prompt(`enter currency`).toUpperCase()        
//         while(!Object.keys(data.rates).includes(currency)){
//             currency = prompt(
//                 `!!!wrong data!!!\n enter currency\n${Object.keys(data.rates)}`).toUpperCase()
//         }
//         let currency2 = prompt(`enter currency to convert`).toUpperCase() 
//         while(!Object.keys(data.rates).includes(currency2)){
//             currency2 = prompt(
//                 `!!!wrong data!!!\n enter currency to convert\n${Object.keys(data.rates)}`).toUpperCase()
//         } 
//         let summ = Number(prompt(`enter amount to convert`))
//         while(isNaN(summ)){
//             summ = Number(prompt(`!!!wrong data!!!\nenter amount to convert`))
//         }
//         alert(`${summ} ${currency} = ${(data.rates[currency2]/data.rates[currency]*summ).toFixed(2)} ${currency2}`)
//      })
// }

const task14 = `Currency drop down
Сделайте выпадающий список с названиями всех валют, используя код из прошлого задания и накопление 
HTML-тэгов в строковой переменной. Для выпадающих списков в HTML предусмотрены тэги <select> и <option>`
// {
//     fetch('https://open.er-api.com/v6/latest/USD')
//     .then(res => res.json())
//     .then(data => {
//         let str = "<select>"
//         str += Object.keys(data.rates).reduce( (a,b) => a + `<option>${b}</option>`, ``)
//         str += "</select>"  
//         document.write(str)       
//     });
// }

const task15 = `Currency table
Сделайте двумерную таблицу с курсами между всеми возможными парами валют по типу таблицы Пифагора, 
используя заготовку из задания Currency real rate:`
// {
//     fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
//      .then(data => {            
//             let  str = `<table border = "1"><tr><td></td>`
//             for (const item in data.rates){
//                 str += `<td>${item}</td>`
//             }
//             str += `</tr>`            
//             for(let i = 0; i < Object.keys(data.rates).length; i++){
//                 str += `<tr><td>${Object.keys(data.rates)[i]}</td>`
//                 for(let j = 0; j < Object.values(data.rates).length; j++){
//                     str += `<td>${(Object.values(data.rates)[j]/Object.values(data.rates)[i]).toFixed(2)}</td>`                    
//                 }
//                 str +=`</tr>`
//             }
//             str += `</table>`            
//             document.write(str)
//         })//чёт как-то коряво, но ничего умнее не придумал.
// }

const task16 = `Form
Напишите код, который их любого объекта создает форму HTML. Например для такого объекта
На экране должна появиться форма из 7 строк, с названиями полей, взятыми из ключей и полями ввода 
соответствующих типов. Значениями полей ввода должны быть значения из объекта.
Для создания правильного типа тэга input используйте оператор typeof Javascript:
console.log(typeof 5)//number -> number
console.log(typeof "5") //string -> text
console.log(typeof (5 > 2)) //boolean -> checkbox
Учтите, что для checkbox начальное значение задается через свойство checked, а не value
<form>
    <label>Name: <input type="text" value="chevrolet chevelle malibu"/></label>
    <label>Cylinders: <input type="number" value="8"/></label>
    ...
    <label>in_production: <input type="checkbox" /></label>
</form>`
// {
//     const car = {
//         "Name":"chevrolet chevelle malibu",
//         "Cylinders":8,
//         "Displacement":307,
//         "Horsepower":130,
//         "Weight_in_lbs":3504,
//         "Origin":"USA",
//         "in_production": false
//   }
//   let str = `<form>`
//   for (const item in car){    
//     str += `<label>${item}: `
//     if(typeof car[item] === `string`|| typeof car[item] === `number`){
//         str += `<input type="${typeof car[item] === `number`? `number`: `text`}" value="${car[item]}"/></label>`
//     }
//     else if(typeof car[item] === `boolean`){
//         str += `<input type="checkbox" ${car[item]? `checked`: undefined} /></label>`
//     }
//   }
//   str += `</form>`  
//   document.write(str)
// }

const task17 = `Table
Даден любой массив с объектами
Сформировать таблицу (используя накопление тэгов HTML в строке):`
{
    const shoto = [
        {
           "Name":"chevrolet chevelle malibu",
           "Cylinders":8,
           "Displacement":307,
           "Horsepower":130,
           "Weight_in_lbs":3504,
           "Origin":"USA"
        },
        {
           "Name":"buick skylark 320",
           "Miles_per_Gallon":15,
           "Cylinders":8,
           "Displacement":350,
           "Horsepower":165,
           "Weight_in_lbs":3693,
           "Acceleration":11.5,
           "Year":"1970-01-01",
        },
        {
           "Miles_per_Gallon":18,
           "Cylinders":8,
           "Displacement":318,
           "Horsepower":150,
           "Weight_in_lbs":3436,
           "Year":"1970-01-01",
           "Origin":"USA"
        },
        {
           "Name":"amc rebel sst",
           "Miles_per_Gallon":16,
           "Cylinders":8,
           "Displacement":304,
           "Horsepower":150,
           "Year":"1970-01-01",
           "Origin":"USA"
        },        
     ]    
     const objNames = []
     for (const obj of shoto){
        for(const item in obj){
            if(!objNames.includes(item)) objNames.push(item)
        }
     }    
     let str = `<table border = "1"><tr bgcolor = silver>`
     objNames.forEach(elem => str += `<td>${elem}</td>`)
     str += `</tr>`
     for(const obj of shoto){        
        str += `<tr>`
        for(const elem in objNames){
            if(Object.keys(obj).includes(objNames[elem])){
                str +=`<td>${obj[objNames[elem]]}</td>`
            }else str += `<td></td>`
        }
        str +=`</tr>`
     }
     str += `</table>`
     document.write(str)     
}