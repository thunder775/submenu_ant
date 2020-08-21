const a = {
    1: 2, 3: 4, 5: 6
}
console.log(Object.entries(a).map(([key,val],index)=>{
    console.log(index)
    return val
}))