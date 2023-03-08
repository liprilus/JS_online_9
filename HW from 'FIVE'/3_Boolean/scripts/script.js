const task1 = `Number: odd
С помощью prompt узнайте число, введенное пользователем. С помощью if проверьте что число корректно 
преобразовано из строки. В случае ошибки выведите сообщение Выведите четное число или нет, используя if.`
// {
//     const userTxt = prompt(`Enter number`)
//     if(Number(userTxt)){
//         if(Number(userTxt) % 2 === 0){
//             alert(`${userTxt} is even number`)
//         } else alert(`${userTxt} is odd number`)
//     }  else alert(`entered data is not a number`)
// }

const task2 = `String: lexics
Спросите у пользователя текст, и проверьте его на наличие некорректного слова или нескольких 
некорректных слов. Используйте метод indexOf (или includes) строки:`
// {
//     const resultTask2 = (prompt(`enter text`, `hey you, motherfucker, come here`)).toLowerCase().includes(`fuck`)? alert(`text contain forbidden words`): alert(`text is ok`)
// }

const task3 = `Boolean
Напишите код, который спрашивает те или иные вопросы с ответом "да"/"нет" с помощью confirm, и сохраняет 
ответы в переменных.`
// {    
//     const questionOne = confirm(`пиво будешь?`)
//     const questionTwo = confirm(`2 + 2 = 4?`)
//     const questionThree = confirm(`мелочь есть?`)
//     const questionFour = confirm(`а если найду?`)
//     console.log(questionOne, questionTwo, questionThree, questionFour)
// }

const task4 = `Boolean: if
Расширьте предыдущее задание условиями по полученным переменным условиями (if else). Например, если вы 
спрашиваете пол пользователя с помощью confirm, то по условию сделайте alert("Вы женщина") и 
alert("Вы мужчина")`
// {    
//     const questionOne = confirm(`пиво будешь?`)
//     if(questionOne) alert(`возьми в холодильнике и мне захвати`)
//     else alert(`мне больше достанется`)
//     const questionTwo = confirm(`2 + 2 = 4?`)
//     if(questionTwo) alert(`ok`)
//     else alert(`ne ok`)
//     const questionThree = confirm(`мелочь есть?`)
//     if(questionThree) alert(`гони сюда!`)
//     else alert(`шо?`)
//     const questionFour = confirm(`а если найду?`)
//     if(questionFour) alert(`умница!`)
//     else alert(`сюда иди, motherfucker!`)    
// }

const task5 = `Comparison: sizes
Сделайте перевод перевод из нашей системы размеров в американскую или любую на выбор. 
Используйте prompt, условия сравнения и alert.`
// {
//     let size = Number(prompt(`Enter size. \n(Ukrainian sizes: 42-44, 46-48, 50-52, 54-56, 58-60)`))
//     let usSize
//     if(size >= 42 && size <= 44) usSize = `S`
//     else if(size >= 46 && size <= 48) usSize = `M`
//     else if(size >= 50 && size <= 52) usSize = `L`
//     else if(size >= 54 && size <= 56) usSize = `XL`
//     else if(size >= 58 && size <= 60) usSize = `XXL` 
//     else usSize = `хз чё за размер`
//     alert(`${size} = ${usSize}`)
// }

const task6 = `Ternary
Спросите у пользователя пол (confirm). Выведите с помощью alert "Вы мужчина" или "Вы женщина". 
Используйте тернарный оператор.`
// {
//     alert(confirm(`вы мужского пола?`)?`вы - мужчина!`:`вы - женщина!`)
// }

const task7 = `Training
Просмотрите выражения ниже и попробуйте вычислить в уме их результат. Проверьте себя используя Console`
// {
//     //done
// }

const task8 = `Prompt: or
Для задания Number: age используя ИЛИ || вывести сообщение об ошибке (alert) если пользователь не введет 
возраст или нажмет отмену (т. е. prompt выдаст пустую строку или null, интерпретируемую как false).`
// {
//     const age = parseInt(prompt(`what is your age?`))||alert(`your age is null`)
//     const date = new Date()
//     alert(`your year of birth is ${date.getUTCFullYear() - age}`)    
// }

const task9 = `Confirm: or this days
C помощью этого же трюка (использование ИЛИ для запуска альтернативы) сделайте капризного робота, 
который в confirm спрашивает "шопинг?", а в случае отказа - выводить alert "ты - бяка".`
// {
//     confirm(`шопинг?`)||alert(`ты - бяка`)
// }

const task10 = `Confirm: if this days
Сделать тоже самое с помощью if.`
// {
//     if(!confirm(`шопинг?`))alert(`ты - бяка`)
// }

const task11 = `Default: or
Попросите пользователя ввести ФИО в три разныe переменныe. Используя ИЛИ || добавьте строки по умолчанию, 
которые будут сохраняться во внутренних переменных если пользователь ввел пустую строку или нажал "Отмена". 
Например, если вы на шаге ввода Фамилии нажмете Escape, фамилия будет "Иванов"`
// {
//     const name = prompt(`enter name`)||`Анон`
//     const lastName = prompt(`enter last name`)||`Иванов`
//     const fatherName = prompt(`enter father name`)||`Алибабаевич`
//     alert(`${name} ${fatherName} ${lastName}`)
// }
const task12 = `Default: if
Сделайте тоже самое с помощью if и else`
{
    // let name = prompt(`enter name`)
    // if(!name) name = `Анон`
    // let lastName = prompt(`enter last name`)
    // if(!lastName) lastName = `Иванов`
    // let fatherName = prompt(`enter father name`)
    // if(!fatherName) fatherName = `Алибабаевич`
    // alert(`${name} ${fatherName} ${lastName}`)
    // //в условии задачи написано "Сделайте тоже самое с помощью if и else". Куда тут else пихать - 
    // //в душе не понимаю.
}
const task13 = `Login and password
Напишите код, который спрашивает логин, проверяет его на верность, в случае если логин верен, просит 
ввести пароль и проверяет его. В случае несовпадения логина или пароля выводить alert с текстом ошибки. 
В случае успешного логина - alert с поздравлением. Правильные логин: admin и пароль: qwerty. Используйте 
вложенные if и else.`
// {
//     const login = prompt(`Enter login`)
//     if(login === `admin`){
//         const password = prompt(`Enter password`)
//         if(password === `qwerty`) alert (`Gratz! You successfully logged`)
//         else alert (`wrong password`)
//     } else alert(`wrong login`)
// }

const task14 = `Currency exchange
Попросите пользователя ввести валюту (например, usd, eur, другие валюты добавить по вкусу) с помощью 
prompt.
Также поинтересуйтесь купить или продать он желает (используйте confirm).
С помощью нескольких if и тернарного оператора внутри каждого из if задайте переменную rate, 
определяющую курс конкретной валюты на покупку или продажу. Обратите внимание на место объявления 
переменной rate - она должна быть доступна в коде после всех этих if.
Попросите пользователя ввести сумму на обмен
Посчитайте и выведите результат путем умножения или деления на rate
Дайте возможность пользователю вводить названия валют в любом регистре (UsD, eUR). Для этого в if 
используйте toUpperCase (или toLowerCase)`
// {
//     const currency = prompt(`enter currency \n USD, EUR, GBP`)
//     const wantToBuy = confirm(`want to buy?`)    
//     let rate    
//     if(currency.toLowerCase() === `usd`) rate = wantToBuy? 37.4531 : 0.027
//     else if(currency.toLowerCase() === `eur`) rate = wantToBuy? 40.00 : 0.026
//     else if(currency.toLowerCase() === `gbp`) rate = wantToBuy? 45.2488 : 0.023
//     else alert(`хз чё за валюта!`)
//     if (rate){
//         let sum = Number(prompt(`Enter sum you want to ${wantToBuy?`buy`:`sell`}`))
//         let exchangeResult = wantToBuy? sum*rate : sum/rate
//         alert(`exchange result = ${exchangeResult.toFixed(2)} (currency = ${currency.toUpperCase()}, ${wantToBuy?`buy`:`sell`}, 
//         rate = ${rate}, summ for exchanhe = ${sum} )`)
//     }
// }

const task15 = `Scissors
Сделайте игру "камень-ножницы-бумага". Пользователь вводит свой вариант через prompt, программа 
генерирует свой вариант через Math.random() и выводит через alert. Следующий alert выводит имя 
победителя или "ничья"`
// {
//     // Хронологически массивы и циклы ещё не изучались, но в момент написания ДЗ (26.02.23)
//     // весь этот материал давно изложен в лекциях.
//     // В этой задаче я ввожу цифры, т.к. ткнуть циферку 2 гораздо быстрее, чем набрать `scissors`
//     const figures = [`stone`,`scissors`,`paper`]
//     let userFigure = parseInt(prompt(`select figure\n 1 - stone, 2 - scissors, 3 - paper (input number of figure)`))
//     while(isNaN(userFigure)||userFigure < 1 || userFigure > 3) {
//         userFigure = parseInt(prompt(`!!!Wrong data!!!\nselect figure\n 1 - stone, 2 - scissors, 3 - paper(input number of figure)`))
//     }
//     userFigure = figures[(userFigure)-1]
//     const pcFigure = figures[Math.floor(Math.random()*3)]
//     alert (`pc choice - ${pcFigure}`)
//     if (userFigure === `stone` && pcFigure === `scissors` ||
//         userFigure === `scissors` && pcFigure === `paper` ||
//         userFigure === `paper` && pcFigure === `stone`) alert(`You won! (You - ${userFigure}, PC - ${pcFigure})`)
//     else if (userFigure === pcFigure) alert(`Draw! (You - ${userFigure}, PC - ${pcFigure})`)
//     else alert(`PC won! (You - ${userFigure}, PC - ${pcFigure})`)
// }

const task16 = `Дополнительное задание
Слепить все задания в один текст, таким образом что бы вначале происходил ввод названия задания, а потом 
с помощью if запускался код конкретного задания`
{
    //лень лепить всё в кучу. Логика следующая:
    // const userTxt = prompt(`enter task name`)
    // if (userTxt === taskName1){
    //     some code from task `taskName1`
    // }
    // else if (userTxt === taskName2){
    //     some code from task `taskName2`
    // }
    // ...
    // ...
    // ...
    // else alert(`no such task!`)
}

const task17 = `Задание на черный пояс
Сделайте игру "камень-ножницы-бумага", как описано выше, пользуясь логическими операциями (&&, ||, !), 
не используя if. Задание должно быть решено одним выражением`
let flag = true
while(flag) {
    const figures = [`stone`,`scissors`,`paper`]
    let userFigure = parseInt(prompt(`select figure\n 1 - stone, 2 - scissors, 3 - paper (input number of figure)`))
    while(isNaN(userFigure)||userFigure < 1 || userFigure > 3) {
        userFigure = parseInt(prompt(`!!!Wrong data!!!\nselect figure\n 1 - stone, 2 - scissors, 3 - paper(input number of figure)`))
    }
    userFigure = figures[(userFigure)-1]
    const pcFigure = figures[Math.floor(Math.random()*3)]
    alert ((userFigure === `stone` && pcFigure === `scissors`)||
           (userFigure === `scissors` && pcFigure === `paper`)||
           (userFigure === `paper` && pcFigure === `stone`)? `You won! (You - ${userFigure}, PC - ${pcFigure})`:
           (userFigure === pcFigure)? `Draw! (You - ${userFigure}, PC - ${pcFigure})`:
            `PC won! (You - ${userFigure}, PC - ${pcFigure})`)
    flag = confirm(`play again?`)
}