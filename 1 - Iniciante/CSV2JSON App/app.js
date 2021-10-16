const txta = document.querySelector('#txta')
const json = document.querySelector('#json')

function CSVToJSON(stri='')
{
    const str = stri + '\n'
    const csvTables = str.split('\n', 1)[0].split(',').map((item)=>{return item.match(/[a-z|A-Z|0-9]/) !== null?item.trim():null})
    const csvValuesLines = str.substr(str.search('\n') + 1, str.length).split('\n')

    const res = {
        content:[{}],
        tables:csvTables
    }
    let i = 0
    let x = 0
    let v = 0

    while(i < csvValuesLines.length - 1){
        const ValuesInLine = csvValuesLines[i].split(',')
        for(const n in ValuesInLine){
            if(csvTables[Number(n)] !== undefined){
                ValuesInLine[n].match(/[a-z|A-Z|0-9]/) !== null?res.content[i][csvTables[Number(n)]] = ValuesInLine[n]:null
            }
        }
        
        i++
        res.content[i] = {}

    }
    res.content.pop()
    return res
}
txta.oninput = (e)=>{
    json.value = JSON.stringify(CSVToJSON(e.target.value), true, 4)
} 

