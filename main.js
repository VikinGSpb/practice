function fillArray(quantity) {
    let arr = [];
    for(let i = 0; i < quantity; i++)
    {
        arr[i] = Math.round(Math.random() * 1000);
    }
}