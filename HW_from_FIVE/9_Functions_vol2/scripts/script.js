const task1 = `Arrow to Functions
Переведите любые пять заданий из предыдущего ДЗ по функциям в синтаксис function`
// {
//     function temperature (temp, syst = undefined){
//         return syst.toUpperCase() === `F`? ((temp - 32) * 5/9).toFixed(1) : ((temp * 9/5) + 32).toFixed(1)
//     }
//     const convertedTemp = temperature(451,`f`)
//     console.log(convertedTemp) 
    
//     function rgbToHex (red, green, blue){
//        return `#${red < 16? `0${red.toString(16)}`: red.toString(16)}${green < 16? `0${green.toString(16)}`: green.toString(16)}${blue < 16? `0${blue.toString(16)}`: blue.toString(16)}`
//     } 
//     console.log(rgbToHex(12,13,14))

//     function apartments (floors, apartPerFloor, apartNumber){
//         const tmp = {}
//         tmp.entrance = Math.ceil(apartNumber/(floors*apartPerFloor))
//         tmp.floor = Math.ceil((apartNumber - (tmp.entrance-1)*floors*apartPerFloor)/apartPerFloor)
//         return tmp
//     }
//     const obj = apartments(9,4,81)
//     console.log(obj)  
//     // и т.д. простите, дальше лень копипастить.
// }

const task2 = `createPerson
Создайте функцию createPerson, которая принимает два параметра: name и surname, и возвращает объект с 
ключами name, surname, getFullName. getFullName должна быть функцией, которая работает с объектом через 
this, а так же готова к тому, что в объекте в последствии добавить ключ fatherName`
// {
//     function createPerson (name, surname){
//         return {
//             name,
//             surname,
//             getFullName() {
//                 return this.fatherName? `${this.name} ${this.fatherName} ${this.surname}`: `${this.name} ${this.surname}` 
//             },
//         }
//     }
//     const vasyan = createPerson(`Vasya`, `Pupkin`)
//     console.log(vasyan.getFullName())
//     vasyan.fatherName = `Vasyanovich`
//     console.log(vasyan.getFullName())
// }

const task3 = `createPersonClosure
Задание в целом, аналогично предыдущему, однако, в объект заносить name, surname, fatherName и age не 
нужно. name и surname должны быть параметрами, переменные age и fatherName объявите через let в теле 
createPersonClosure. Внутри createPersonClosure объявите следующие функции:
getName, getSurname, getFatherName, getAge, getFullName
Эти функции должны возвращать переменные, объявленные в функции createPersonClosure
Следующие функции:
setName, setSurname, setFatherName, setAge, setFullName
должны принимать один параметр (newName, newSurname и т.п.), проверять его на корректность и менять 
значение переменных, объявленных внутри createPersonClosure. Проверки на корректность:
имя, фамилия, отчество должно быть строкой с большой буквы
возраст должен быть числом от 0 до 100.
Если проверка на корректность не пройдена, функция не должна менять соответстующую переменную.
Функция setFullName должна разбивать строку по пробелам и заносить части строки в surname, name и fatherName
Все функции set должны возвращать то значение, которое по итогу попало во внутренюю переменную. То есть 
если новое значение некорректно, то функция возвращает старое значение
В объекте-результате createPersonClosure должны быть только эти 10 функций (геттеров и сеттеров). В коде 
функций this не используется`
// {
//     function createPersonClosure(name, surname){
//         let age, fatherName
//         function setName(newName){
//            return name = typeof newName === `string` && newName.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newName: name
//         }
//         function getName(){
//             return name
//         }
//         function setSurname(newSurname){
//             return surname = typeof newSurname === `string` && newSurname.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newSurname: surname
//         }
//         function getSurname(){
//             return surname
//         }
//         function setFatherName(newFatherName){
//             return fatherName = typeof newFatherName === `string` && newFatherName.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newFatherName: fatherName
//         }
//         function getFatherName(){
//             return fatherName
//         }
//         function setAge(newAge){
//             return age = typeof newAge === `number` && newAge >= 0 && newAge <= 100? newAge: age
//         }
//         function getAge(){
//             return age
//         }
//         function setFullName(str){
//             const splitStr = str.split(` `)
//             if (splitStr.length === 3){
//                 setSurname(splitStr[0])
//                 setName(splitStr[1])
//                 setFatherName(splitStr[2])
//             } 
//             return {surname, name, fatherName}// нужен ли тут return? какая от него практическая польза?
//         }
//         function getFullName(){
//             return fatherName? `${name} ${fatherName} ${surname}`: `${name} ${surname}`
//         }
//         return {setName, getName, setSurname, getSurname, setFatherName, getFatherName,
//         setAge, getAge, setFullName, getFullName}
//     }
//     const vasyan = createPersonClosure(`Vasyan`, `Pupa`)
//     console.log(vasyan.getFullName(), vasyan.getAge(), vasyan.getFatherName())
//     vasyan.setFullName(`Пупкин василий Алибабаевич`)
//     vasyan.setAge(56)
//     vasyan.setAge(109)
//     vasyan.setFatherName(`ИванОВич`)
//     console.log(vasyan.getFullName(), vasyan.getAge()) 
// }

const task4 = `createPersonClosureDestruct
Сделайте набор параметров функции из предыдущего задания объектом, используйте деструктуризацию для 
извлечения параметров. Задайте значения по умолчанию`

function createPersonClosureDestruct({name = `John`, surname = `Doe`, fatherName = `Anonymous`, age = Math.floor(Math.random() * 100)} = {}){
    function setName(newName){
       return name = typeof newName === `string` && newName.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newName: name
    }
    function getName(){
        return name
    }
    function setSurname(newSurname){
        return surname = typeof newSurname === `string` && newSurname.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newSurname: surname
    }
    function getSurname(){
        return surname
    }
    function setFatherName(newFatherName){
        return fatherName = typeof newFatherName === `string` && newFatherName.match(/^[A-Z|А-Я][a-z|а-я]*$/)? newFatherName: fatherName
    }
    function getFatherName(){
        return fatherName
    }
    function setAge(newAge){
        return age = typeof +newAge === `number` && newAge >= 0 && newAge <= 100? newAge: age
    }
    function getAge(){
        return age
    }
    function setFullName(str){
        const splitStr = str.split(` `)
        if (splitStr.length === 3){
            setSurname(splitStr[0])
            setName(splitStr[1])
            setFatherName(splitStr[2])
        } 
        return `${surname} ${name} ${fatherName}`
    }
    function getFullName(){
        return fatherName? `${surname} ${name} ${fatherName} `: `${surname} ${name} `
    }
    return {setName, getName, setSurname, getSurname, setFatherName, getFatherName,
    setAge, getAge, setFullName, getFullName,}
}    
// const anon = createPersonClosureDestruct()
// console.log(anon.getFullName(), anon.getAge())
// const person = createPersonClosureDestruct(createPerson(`Vasyan`, `Petrenko`))
// console.log(person.getFullName(), person.getAge())

function createPerson (name, surname){
    return {
        name,
        surname,
        getFullName() {
            return this.fatherName? `${this.name} ${this.fatherName} ${this.surname}`: `${this.name} ${this.surname}` 
        },
    }
}    


const task5 = `isSorted
Напишите функцию isSorted, которая принимает набор параметров любого размера, и возвращает true, когда 
все параметры - это числа, и каждое из них больше предыдущего параметра.`
// {
//     function isSorted(...params){        
//         return params.length > 1 && params.every((elem, index) => !isNaN(+elem) && (index === 0 || +elem > +params[index - 1]))? true : false
//     }
//     console.log(isSorted(4,8,15,16,23,42))
//     console.log(isSorted(4,8,15,15,23,42))
//     console.log(isSorted(4,8,15,16,`azaza`,42))
//     console.log(isSorted(1))
// }

const task6 = `Test isSorted
Используя циклический ввод в массив (задание array fill), обеспечьте ввод данных для isSorted`
// {
//     let userTxt
//     const arr = []
//     while(userTxt = prompt(`enter something`)){
//         arr.push(userTxt)
//     }    
//     console.log(isSorted(...arr))

//     function isSorted(...params){        
//         return params.length > 1 && params.every((elem, index) => !isNaN(+elem) && (index === 0 || +elem > +params[index - 1]))? true : false
//     }
// }

const task7 = `personForm
Напишите функцию, которая принимает два параметра: родительский DOM-элемент и объект-результат работы 
createPersonClosure (или createPersonClosureDestruct, результаты у обоих этих функций одинаковые) и 
рисует форму, которая позволяет редактировать данные о персоне.
В начале работы personForm создает 5 полей ввода (имя, фамилия, отчество, возраст, ФИО) в родительском 
DOM-элементе и устанавливает туда значения, прочитанные с помощью getName, getSurname и т.д.
По событию oninput в любом из полей ввода нужно запускать соответствующий set..... Например при 
изменении поля ввода имени должен запускаться setName(какой-то инпут.value). Функции set... возвращают 
значение, и его нужно занести обратно в input. Таким образом в полях ввода невозможно будет ввести 
некорректные значения (например возраст не сможет выйти за пределы 0-100 лет)`

const anon2 = createPersonClosureDestruct()
// const personDiv = document.createElement(`div`)
// console.log(anon2)
// function personForm(parent, person){     
//     document.body.append(parent)      
//     const name = document.createElement(`input`)
//     name.value = person.getName()
//     const surname = document.createElement(`input`)
//     surname.value = person.getSurname()
//     const fatherName = document.createElement(`input`)
//     fatherName.value = person.getFatherName()
//     const age = document.createElement(`input`)
//     age.value = person.getAge()
//     const fullName = document.createElement(`input`)
//     fullName.value = person.getFullName()    
//     name.oninput = () => {        
//         name.value = person.setName(name.value)
//         fullName.value = person.getFullName()
//     }
//     surname.oninput = () =>{
//         surname.value = person.setSurname(surname.value)
//         fullName.value = person.getFullName()
//     }
//     fatherName.oninput = () => {
//         fatherName.value = person.setFatherName(fatherName.value)
//         fullName.value = person.getFullName()
//     }
//     age.oninput = () => {
//         age.value = person.setAge(age.value)
//     }
//     fullName.oninput = () => {
//         fullName.value = person.setFullName(fullName.value)
//         name.value = person.getName()
//         surname.value = person.getSurname()
//         fatherName.value = person.getFatherName()
//     }
//     parent.append(surname, name, fatherName, age, fullName) 
    
// }

// personForm(personDiv, anon2)

const task8 = `getSetForm`
{
    function getSetForm(parent, getSet){
        const inputs = {} //реестр        
        
        const updateInputs = () => {
            for(const keys in inputs){
                const getter = `get${keys}`
                if (getter in getSet) {
                  inputs[keys].value = getSet[getter](inputs[keys].value)
                }
              }
            
            //функция обновления полей ввода согласно всяким get....
            //тут должен быть перебор
        }
        
        for (const getSetName in getSet){
            if(!Object.keys(inputs).includes(getSetName.match(/^get/i)) && getSetName.match(/^get/i)){
                const fieldName = getSetName.replace(/^get/i, ``)
                const inputField = document.createElement(`input`)
                if(!Object.keys(getSet).includes(`set${fieldName}`)) inputField.disabled = true
                inputField.type = typeof getSet[getSetName]() === `number`? `number`: typeof getSet[getSetName]() === `boolean`? `checkbox`: `text`
                inputField.placeholder = fieldName
                inputField.value = getSet[getSetName]()          
                inputField.oninput = () => {
                    inputField.value = getSet[`set${fieldName}`](inputField.value)
                    updateInputs()
                }
                inputs[fieldName] = inputField
                parent.append(inputField) 
            } 
            //const setKey    = `set` + fieldName
            //const getKey    = `get` + fieldName
            
            //допишите тут все шо надо, и не только тут
        }
        console.log(inputs)
        //updateInputs()
    }
    getSetForm(document.body, anon2)


    let car;
{
    let brand = 'BMW', model = 'X5', volume = 2.4
    car = {
        getBrand(){
            return brand
        },
        setBrand(newBrand){
            if (newBrand && typeof newBrand === 'string'){
                brand = newBrand
            }
            return brand
        },
        
        getModel(){
            return model
        },
        setModel(newModel){
            if (newModel && typeof newModel === 'string'){
                model = newModel
            }
            return model
        },
        
        getVolume(){
            return volume
        },
        setVolume(newVolume){
            newVolume = +newVolume
            if (newVolume && newVolume > 0 && newVolume < 20){
                volume = newVolume
            }
            return volume
        },
        
        getTax(){
            return volume * 100
        }
    }
}
getSetForm(document.body, car)
}

function noGet (str) {
    return str.replace(/^get/i, '').toLowerCase()
  }


    // const personLabel = document.createElement(`label`)    
    // parent.append(personLabel)

    // personLabel.textContent = `DIV им. товарища ${person.getFullName()}, ${person.getAge()} годиков от роду.`       
    // const PersonLabelText = () => {
    //     personLabel.textContent = `DIV им. товарища ${person.getFullName()}, ${person.getAge()} годиков от роду.`
    // }    
    // fullName.addEventListener(`input`, PersonLabelText)
    // age.addEventListener(`input`, PersonLabelText)
    // surname.addEventListener(`input`, PersonLabelText)
    // name.addEventListener(`input`, PersonLabelText)
    // fatherName.addEventListener(`input`, PersonLabelText)


    