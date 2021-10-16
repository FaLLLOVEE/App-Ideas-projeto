
let cNum = '0'
let nextNumber = false
let op = ''
const val = document.querySelector('#val')
const current = document.querySelector('#val #current')
const main = document.querySelector('main')

function addNumberInCalc(n){
    if(nextNumber)
    {
        current.innerText = n.innerText
        nextNumber = false
    } else {
        current.innerText += n.innerText
    }

}



function Calc()
{
    switch(op){
        case '+':
            CalcMais()
            break
        case '-':
            CalcMenos()
            break    
        case '*':
            CalcVezes()
            break
        case '**':
            CalcPot()
            break
        case '/':
            CalcDivid()
            break

        default :
            break
        
    }
}

function CalcMais()
{
    cNum = Number(current.innerText) + Number(cNum)
    current.innerText = cNum
    nextNumber = true
    op = '+'

}
function CalcMenos()
{
    cNum = Number(current.innerText) - Number(cNum)
    current.innerText = cNum
    nextNumber = true
    op = '-'
}
function CalcVezes()
{
    if(cNum === '0')
    {
        cNum = Number(current.innerText)
    } else if(current.innerText === ''){
        cNum = Number(cNum) * Number(cNum)
    } else {
        cNum = Number(current.innerText) * Number(cNum)
    }
    current.innerText = cNum
    
    nextNumber = true
    op = '*'

}
function CalcPot()
{
    if(cNum === '0')
    {
        cNum = Number(current.innerText)
    } else if(current.innerText === ''){
        cNum = Number(cNum) ** Number(cNum)
    } else {
        cNum = Number(current.innerText) ** Number(cNum)
    }
    current.innerText = cNum
    
    nextNumber = true
    op = '**'
}
function CalcDivid()
{
    if(cNum === '0')
    {
        cNum = Number(current.innerText)
    } else if(current.innerText === ''){
        cNum = Number(cNum) / Number(cNum)
    } else {
        cNum = Number(current.innerText) / Number(cNum)
    }
    current.innerText = cNum
    
    nextNumber = true
    op = '/'
}