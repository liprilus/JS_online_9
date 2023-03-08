const task1 = "Даний об'єкт з містами та країнами. Вивести масив значення в якому будуть рядки перетворені на цей формат: <Столиця> - це <Країна>.";
console.log(task1);

const countries = {
    'Honduras': 'Tegucigalpa',
    'Liechtenstein': 'Vaduz',
    'Madagascar': 'Antananarivo',
    'Barbados': 'Bridgetown',
    'Republic of Korea': 'Seoul'
}
const countriesArr = new Array()
for(let key in countries){
    countriesArr.push(`${countries[key]} is ${key}`)    
}
console.log(countriesArr)

const task2 = "Створити функцію яка виведе багатовимірний масив A. Даний масив містить список інших масивів B. Масиви B повинні містити по 3 значення. Та вивести його максимальне значення";
console.log(task2);

function randomizer(maxNum) {    // ліньки заповнювати масиви вручну. Рандом від 1 до maxNum
    // let randomNum = Math.round(Math.random() * maxNum);
    // if(randomNum === 0){
    //     return 1;
    // } 
    let randomNum = Math.floor(Math.random() * maxNum);
    return randomNum + 1;
}
function multiArray(lines, columns){
    console.log(`Array of ${lines} lines and ${columns} columns:`)
  const multiArr = [];
  let maxVal = 0, posI, posJ;
  for (i = 0;i < lines; i++){
    multiArr[i] = [];
    for (j = 0; j < columns; j++){
    multiArr[i].push(randomizer(100))    
    if(multiArr[i][/*multiArr[i].length-1*/j] > maxVal){
        maxVal = multiArr[i][/*multiArr[i].length-1*/j];//як коректніше записати, просто [j] чи [multiArr[i].length-1]?
        posI = i;
        posJ = j;
    }
    }
    console.log(multiArr[i])
  }
//   console.log(x)
  console.log(`Max value = ${maxVal} (line ${posI}, column ${posJ})`);
}
let lines = 5, columns = 3;
multiArray(lines,columns);  

const task3 = "Створити об'єкт із назвами днів тижня. Де ключами будуть uk і en, a значенням властивості uk буде масив із назвами днів тижня українською, а en - англійською. Після написати функцію яка буде виводити в консоль назву дня тижня, користуючись вище створеним об'єктом. Усі дні тижня починаються з 1 і закінчуються цифрою 7 (1- понеділок, 7 - неділя). Функція отримує змінну lang – назву мови дня тижня та змінну day – число дня тижня.";
console.log(task3);

const dayLang = {
    en: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    uk: ['Понеділок','Вівторок','Середа','Четвер','П\'ятниця','Субота','Неділя'],
}
function getDay(lang, day){
    console.log(dayLang[lang][day-1])
}
getDay('en', 7)
getDay('uk', 5)
getDay('en', 1)
getDay('uk', 3)

const task4 = "Створіть функцію, яка повертає суму двох найменших позитивних чисел із масиву мінімум 4 позитивних цілих чисел. Не передаються числа з плаваючою комою або непозитивні цілі числа.";
console.log(task4);

function valueIsInt(value){
    return value === parseInt(value) && value > 0
}
function compareNumbers(a, b) {//функція сортування чисел чесно вкрадена з MDn web docs. 
    return a - b;
}
function sumFromArray(numberInts){//передаємо в функцію мінімум позитивних чисел в масиві
    let count = numberInts + randomizer(3)
    let countNegAndFloat = count //обмежувач негативних та з плаваючою точкою чисел
    // console.log(`Number of positive numbers is ${count}`)
    const arrayTask4 = new Array()
    // const rndArray = new Array()//це для самоконтролю
    while(count){//заповнюємо масив позитивними(rnd = 1), з плаваючою точкою (rnd =2) та негативними (rnd = 3) числами
        let rnd = randomizer (3)
        // rndArray.push(rnd)
        if(rnd === 1){//fill array by integer
            arrayTask4.push(randomizer(100))
            count--
        }
        if(rnd === 2 && countNegAndFloat){//float
            arrayTask4.push(parseFloat((Math.random()*100).toFixed(2)))
            countNegAndFloat--
        } 
        if(rnd === 3 && countNegAndFloat){//negative
            arrayTask4.push(-1*randomizer(100))
            countNegAndFloat--
        } 
    }
    // console.log(rndArray)
    console.log(arrayTask4)
    tmpArr = new Array()
    for(i = 0; i < arrayTask4.length; i++){
        if(valueIsInt(arrayTask4[i])){
            tmpArr.push(arrayTask4[i])
        }
    }    
    tmpArr.sort(compareNumbers)
    // console.log(tmpArr)    
    return [tmpArr[0],tmpArr[1],tmpArr[0]+tmpArr[1]]
}
const array4 = sumFromArray(4)
console.log(`${array4[0]} + ${array4[1]} = ${array4[2]}`)

const task5 = "Даний масив одиниць і нулів, перетворіть еквівалентне двійкове значення ціле число. Наприклад: [0, 0, 0, 1] розглядається як 0001 двійкове уявлення 1.";
console.log(task5);

function binToDec(someData){
    // const tmpData = someData.slice()
    const tmpData = [...someData]
    let tmpDec = 0
    for(x = 0; x < someData.length; x++){
        if(tmpData[tmpData.length-1]){
            tmpDec += Math.pow(2, x)
        }
        tmpData.pop()
    }
    return tmpDec
}
function delComma(arrayWithComma){
    let str = ''
    for(x = 0; x < arrayWithComma.length; x++){
        str += arrayWithComma[x].toString(10)
    }
    return str
}

const binArray = [[1,0,0],[1,0,0,0],[1,1,1,1],[1,0,0,0,0],[1,0,1,1,1],[1,0,1,0,1,0]]
console.log(binArray)
const decArray = new Array()
for(i = 0; i < binArray.length; i++){
    decArray.push(binToDec(binArray[i]))
    console.log(`Binary ${delComma(binArray[i])} in decimal = ${decArray[i]}`)
}
// const mk = [0,0,0,0,1,0,1,1]
// let o = (parseInt(delComma(mk)))
// const oArr = new Array()
// while(Math.round(o) > 0){
//     oArr.unshift(o % 10)
//     o = parseInt(o / 10)
// }
// console.log(oArr)
// let oo = binToDec(oArr)
// console.log(oo)