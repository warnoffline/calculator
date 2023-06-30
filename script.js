const a = document.getElementById('a')
const b = document.getElementById('b')
const result = document.getElementById('result')

document.getElementById('pl').addEventListener('click', function(){
    Plus(a.value, b.value)
})
document.getElementById('min').addEventListener('click', function(){
    Min(a.value, b.value)
})

document.getElementById('umn').addEventListener('click', function(){
    Umn(a.value, b.value)
})

document.getElementById('del').addEventListener('click', function(){
    Del(a.value, b.value)
})


function Plus(c, d){
    const res = parseFloat(c) + parseFloat(d)
    result.textContent = 'Результат: ' + res
}
function Min(c, d){
    const res = parseFloat(c) - parseFloat(d)
    result.textContent = 'Результат: ' + res
}
function Umn(c, d){
    const res = parseFloat(c) * parseFloat(d)
    result.textContent = 'Результат: ' + res
}
function Del(c, d){
    const res = parseFloat(c) / parseFloat(d)
    result.textContent = 'Результат: ' + res
}