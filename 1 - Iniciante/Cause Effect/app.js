class Pessoa 
{
    constructor(Name, Street, City, State, Country, Telephone, Birthday)
    {
        this.Name = Name
        this.Street = Street
        this.City = City
        this.State = State
        this.Country = Country
        this.Telephone = Telephone
        this.Birthday = Birthday
    }
}

const Clients = [
    new Pessoa('Davi', 'Rua 7', 'Montes Claros', 'Minas Gerais', 'Brasil', '99987020', '26/01/2007'),
    new Pessoa('Roberto', 'Rua 2', 'Montes Claros', 'Minas Gerais', 'Brasil', '9931231', '26/01/2009'),
    new Pessoa('João', 'Rua 5', 'Montes Claros', 'Minas Gerais', 'Brasil', '99983152', '26/01/2007'),
    new Pessoa('Palin', 'Rua 3', 'Montes Claros', 'Minas Gerais', 'Brasil', '9992313', '12/05/2010')
]



function makeSideBarOptions(options)
{
    const sidebar = document.querySelector('.side-bar')
    sidebar.innerHTML =''
    
    function createOptionElement(option, main)
    {
        const div = document.createElement('div')
        div.innerText = option[main]
        
        return div
    }
    
    for(const n of options)
    {
        const element = createOptionElement(n, "Name")
        element.onclick = ()=>{
            showTheContent(n)
        }
        sidebar.appendChild(element)
    }
}

function showTheContent(pessoa)
{
    const informacao = document.querySelector('.informacao')
    informacao.innerHTML = ''
    for(const attr in pessoa)
    {
        informacao.innerHTML += `<p><strong>${attr}: </strong> ${pessoa[attr]}</p>`
    }
}

makeSideBarOptions(Clients)