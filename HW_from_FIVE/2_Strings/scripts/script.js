const task1 = `String: greeting
Спросите у пользователя имя, и поприветствуйте его с помощью alert.`
// {
//     const name = prompt(`Enter your name`)
//     alert(`Превед, ${name}!`)   
// }

const task2 = `String: gopni4ek
Попросите пользователя ввести строку через prompt. Используя split и join сделайте что бы после любой 
запятой следовало слово блин, .`
// {
//     const userStr = prompt(`Enter string`,`Опа, пацанчик, ты чё, предъявить мне хочешь?`)
//     const gopStr = userStr.split(`,`).join(`, блин,`)
//     alert(gopStr)
// }

const task3 = `String: capitalize
Преобразуйте строку, введенную пользователем, таким образом, что бы первая буква становилась большой, 
а остальные - маленькими:
let str = "cANBerRa"
let result
..... ваш код
console.log(result) //Canberra`
// {
//     const str = `cANBerRa`
//     const result = str[0].toUpperCase() + str.slice(1).toLowerCase()
//     console.log(result)
// }

const task4 = `String: word count
Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, 
как и длина строки.`
// {
//     const str = `Посчитайте количество слов в строке. Используйте разбиение по пробелам. Длина массива называется так же, как и длина строки.`
//     const strLenght = str.split(` `).length
//     console.log(strLenght)
// }

const task5 = `String: credentials
Спросите у пользователя ФИО, используя prompt трижды. Выкиньте лишние пробелы, используя .trim
Используя String: capitalize сделайте так, что бы каждое слово в ФИО было с большой буквы, 
а остальные - маленькие
Объедините эти три строки в одну переменную fullName и выведите куда-то(alert, console.log). 
Не забудьте пробелы между словами.`
// {
//     let fullName = new String()
//     let tmp = prompt(`Enter last name`, `pupkIN `).trim()
//     tmp = tmp[0].toUpperCase() + tmp.slice(1).toLowerCase()
//     fullName += tmp +` `
//     tmp = prompt(`Enter name`, `vasILIy    `).trim()
//     tmp = tmp[0].toUpperCase() + tmp.slice(1).toLowerCase()
//     fullName += tmp +` `
//     tmp = prompt(`Enter father name`, `   aliBABAevich`).trim()
//     tmp = tmp[0].toUpperCase() + tmp.slice(1).toLowerCase()
//     fullName += tmp
//     console.log(fullName)
// }

const task6 = `String: beer
Не используя .replace замените слово пиво в строке на слово чай
let str = "Было жарко. Василий пил пиво вприкуску с креветками"
let result
........ //ваша магия
console.log(result) //"Было жарко. Василий пил чай вприкуску с креветками"`
// {
//     const str = `Было жарко. Василий пил пиво вприкуску с креветками`
//     const result = str.split(`пиво`).join(`чай`)
//     console.log(result)
// }

const task7 = `String: no tag
Найдите в строке HTML тэг. Удалите, т. е. вырежьте его - создайте другую строку, в которой будет все 
символы до тэга и после него Тэг может быть любым. split и join не используйте, вместо этого используйте 
indexOf и slice. .replace не используйте`
// {
//     const str = `какой-то текст в котором есть один тэг <br /> и всякое другое`
//     const openTag = str.indexOf(`<`)
//     const closeTag = str.indexOf(`>`)    
//     const result = str.slice(0, openTag) + str.slice(closeTag + 1)
//     console.log(result)
// }

const task8 = `String: big tag
На основе предыдущего задания сделайте тэг большими буквами. replace, split и join не используйте, 
вместо этого используйте indexOf и slice,`
// {
//     const str = `какой-то текст в котором есть один тэг <br /> и всякое другое`
//     const openTag = str.indexOf(`<`)
//     const closeTag = str.indexOf(`>`)
//     const result = str.slice(0, openTag) +str.slice(openTag, closeTag + 1).toUpperCase() + str.slice(closeTag + 1)
//     console.log(result)
// }

const task9 = `String: new line
Попросите пользователя ввести строку через prompt. prompt не позволяет вводить многострочные строки. 
Дадим пользователю такую возможность - Пользователь может вводить \n в качестве маркера новой строки.
Используя split и join сделайте эту строку воистину многострочной и выведите в консоль или через alert.`
// {
//     const userTxt = prompt(`Enter text. use \\n to split lines`, `Попросите пользователя ввести строку через prompt. \n prompt не позволяет вводить многострочные строки. \n Дадим пользователю такую возможность`)
//     const tmp = userTxt.split(`\\n`)
//     const result = tmp.join(`\n`)
//     console.log(result)
// }

 const task10 = `String: youtube
 Пусть пользователь введет любой текст с ссылкой на youtube. Используя регулярное выражение извлеките из ссылки идентификатор видоса и создайте строку с встраиваемым блоком HTML. Добавьте блок на страницу.
 объявите константу с регулярным выражением
 используйте метод match, который вернет вам массив
 извлеките из массива элемент с идентификатором видео
 изучите HTML код встраивания видео в страницу на youtube.
 используя интерполяцию строк вклейте идентификатор видео в HTML код встраивания видео
 используя document.write отправьте полученную строку на страницу.`
 {
    const regYTexp = /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/
    const userTxt = prompt(`enter youtube link`,`https://youtu.be/68n8e94iXZU`)
    const result = userTxt.match(regYTexp)
    //console.log(result)
    if (result) {
        const videoID = result[1]
        const videoHtml = `<iframe width="560" height="315" 
          src="https://www.youtube.com/embed/${videoID}" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
          picture-in-picture" allowfullscreen></iframe>`
        document.write(videoHtml)
      } else alert("entered text doesn't contain youtube link :-(")      
 }