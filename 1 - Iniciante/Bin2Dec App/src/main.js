

function BinSyscreate()
{
    function convertFromDecimalToBin(inp)
    {
        return (inp >>> 0).toString(2);
    }
    function convertFromBinToDecimal(inp='')
    {
        let res = 0
        let a = inp.length - 1 
        let x = 0
        while(a >= 0)
        {
            res += Number(inp[x])  * (2 ** a)
            console.log(a, x)
            a--
            x++
        }
    
        return res
    }


    return {
        convertFromDecimalToBin:convertFromDecimalToBin,
        convertFromBinToDecimal:convertFromBinToDecimal
    }
}

const bin = BinSyscreate()



const p     = document.querySelectorAll('p')
const inp_e = document.querySelector('#inp')
const res   = document.querySelector('#res')



inp_e.oninput = (e)=>{
    let str = ''
    for(letter of e.target.value)
    {
        str += bin.convertFromDecimalToBin(letter.charCodeAt(0)).toString() + ' '
    }
    res.value = str
}


setInterval(()=>{
    for(n of p){
        n.style.top = Math.round(Math.random() * window.innerHeight) + 'px'
        n.style.left = Math.round(Math.random() * window.innerWidth) + 'px'
    }
}, 500)
setInterval(()=>{
    for(n of p){
        n.innerText =String(bin.convertFromDecimalToBin(Math.round(Math.random() * 1000)))

    }
}, 1)




