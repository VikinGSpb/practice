let button = document.querySelector('#button');

function fillArray(quantity) {
    let arr = [];
    for(let i = 0; i < quantity; i++)
    {
        arr[i] = Math.round(Math.random().toFixed(4) * 10000);
    }
    return arr;
}

function bubbleSort(array) {
    let arr = array;
    for(let i = arr.length - 1; i > 0; i--)
        for(let j = 0; j < i; j++)
        {
            if(arr[j] > arr[j + 1]){
                let k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
        }
}

button.addEventListener('click', () => {
    let quantity = document.querySelector('#quantity').value;
    if(quantity < 3) alert('wrong number! try again.');
    else {
        let arr = fillArray(quantity);
        let output = document.querySelector('#output');
        output.innerHTML = '';
        for(let i = 0; i < arr.length; i++) {
            output.insertAdjacentHTML('beforeend', ' ' + arr[i] + '<br>');
        }
        bubbleSort(arr);
        output.innerHTML += 'After Sort<br>';
        for(let i = 0; i < arr.length; i++) {
            output.insertAdjacentHTML('beforeend', ' ' + arr[i] + '<br>');
        }
    }
})