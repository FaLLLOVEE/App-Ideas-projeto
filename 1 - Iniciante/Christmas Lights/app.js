var html = document.getElementsByTagName('html')[0];



function timeSet(time1, time2)
{
    html.style.setProperty("--time-1", time1 + 's');
    html.style.setProperty("--time-2", time2 + 's');
}

function run()
{
    const time = document.querySelector('#time')
    timeSet(Number(time.value), Number(time.value) + Number(time.value))
}
function off()
{
    document.querySelectorAll('li').forEach(item => item.classList.toggle('p'))
}
function on()
{
    document.querySelectorAll('li').forEach(item => item.classList.toggle('p'))
}