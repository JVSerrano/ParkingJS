class Client {
    constructor(number, time) {
        this.number = number,
            this.time = time
    }
}

let num = 1
let list = []
let lu = document.getElementById('lu')

let moneyTotal = 0
let clientsFree = 0
let clientsTotal = 0


let checkTrue = document.getElementById('checkbox')
checkTrue.checked = false

let countTotalMembers = 0
let totalMoneyMembers = 0
let avgMoneyMembers = 0


function pay() {

    let numRandom = Math.floor(Math.random() * 120) + 1


    if (numRandom < 30) {
        if (checkTrue.checked) {
            alert('Primera media hora gratis')
            countTotalMembers += 1
            checkTrue.checked = false
        }
        else {
            alert('Primera media hora gratis')
        }

    } else if (numRandom >= 30 && numRandom < 60) {
        if (checkTrue.checked) {
            let calculateDiscount = 4 / 100 * (3)
            let finalPrice = 3 - calculateDiscount
            alert("Pago con descuento de socio: " + finalPrice.toFixed(2) + '€')
            checkTrue.checked = false
            totalMoneyMembers += finalPrice
            moneyTotal += finalPrice
            countTotalMembers += 1
        } else {
            alert("Son 3€")
            moneyTotal += 3
        }

    } else if (numRandom > 60) {
        if (checkTrue.checked) {
            let calculateDiscount = 4 / 100 * (6)
            let finalPrice = 6 - calculateDiscount
            alert("Pago con descuento de socio: " + finalPrice.toFixed(2) + '€')
            checkTrue.checked = false
            totalMoneyMembers += finalPrice
            moneyTotal += finalPrice
            countTotalMembers += 1
        } else {
            alert('Son 6€')
            moneyTotal += 6
        }
    }

    let client = new Client(num, numRandom)
    list.push(client)
    num += 1
    console.log(list)

    showList()
    updateMoneyTotal()
    avg()
    infMember()
    prices()
}


function infMember() {
    let totalMembers = document.getElementById('totalMembers')
    let avgTMembers = document.getElementById('avgTMembers')

    totalMembers.textContent = countTotalMembers

    if (countTotalMembers >= 1) {
        avgMoneyMembers = totalMoneyMembers / countTotalMembers

        avgTMembers.textContent = avgMoneyMembers.toFixed(2) + '€'
    }


    console.log(avgMoneyMembers)
}


function showList() {
    lu.innerHTML = ' '

    list.forEach(element => {
        let li = document.createElement('li')
        li.innerHTML += ` <img = src='iconB.svg'> Cliente ${element.number} , tiempo: ${element.time} minutos <br><br>`
        lu.appendChild(li)
    })

}


function updateMoneyTotal() {
    clientsFree = 0
    clientsTotal = list.length

    let cTotal = document.getElementById('cTotal')
    let cFree = document.getElementById('cFree')
    let mTotal = document.getElementById('mTotal')


    mTotal.textContent = moneyTotal.toFixed(2) + '€'

    clientsFree = list.filter(client => client.time < 30).length

    cTotal.textContent = clientsTotal
    cFree.textContent = clientsFree
}


function avg() {
    let avgSc = document.getElementById('avgSc')
    let avgTc = document.getElementById('avgTc')

    if (clientsTotal > 0) {
        let spendCust = moneyTotal / clientsTotal
        let timeCust = list.reduce((sum, client) => sum + client.time, 0) / clientsTotal

        avgSc.textContent = spendCust.toFixed(2) + '€'
        avgTc.textContent = timeCust.toFixed(2) + ' min'
    } else {
        avgSc.textContent = '0€'
        avgTc.textContent = '0 min'
    }
}

function showElements(){
    let classTab = document.getElementById('table')

    let btn = document.getElementById('btnShow')

    if(classTab.style.display ==='none'){
        classTab.style.display = 'block'
        btn.style.backgroundColor = 'orange'
        btn.textContent = 'Ocultar Datos'
    }else{
        classTab.style.display = 'none'
        btn.style.backgroundColor = 'rgb(8, 106, 109)'
        btn.textContent = 'Mostrar Datos'
    }

    
    
}

function prices(){
    let element = document.getElementById('phraseElement')
    let p = document.createElement('p')
    let btnPayDisabled = document.getElementById('btnPay')

    btnPayDisabled.disabled = true

     p.textContent= `Gracias por su visita, ¡Vuelvan pronto!`
     showP.appendChild(p)

    if(element.style.display='block'){
        element.style.display='none'
        setTimeout(()=>{
            p.style.display='none'
            element.style.display='block'
            btnPayDisabled.disabled = false
         },1500)
    }

}