var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
console.log(num)
console.log('O vetor tem ' + num.length + ' posições')
console.log('O primeiro valor do vetor é ' + num[0])

for(var pos = 0 ; pos <num.length ; pos++){
    console.log(num[pos])
}
var pos = num.indexOf(4)
console.log('O valor está na posição ' + pos)

