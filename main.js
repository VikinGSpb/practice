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

function selectionSort(array) {
    let arr = array;
    for(let i = 0; i < arr.length - 1; i++)
    {
        let min = i;
        for(let j = i + 1; j < arr.length; j++)
        {
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let k = arr[i];
        arr[i] = arr[min];
        arr[min] = k;
    }
}

function insertionSort(array) {
    let arr = array;
    for(let i = 1; i < arr.length; i++)
    {
        for(let j = i; (j > 0) && (arr[j - 1] > arr[j]); j--)
        {
            let k = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = k;
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
        let startTime = performance.now();//new Date().getTime();
        //bubbleSort(arr);
        //selectionSort(arr);
        insertionSort(arr);
        let time = performance.now() - startTime;//new Date().getTime() - startTime;
        output.innerHTML += 'Time = ' + time + '<br>After Sort<br>';
        for(let i = 0; i < arr.length; i++) {
            output.insertAdjacentHTML('beforeend', ' ' + arr[i] + '<br>');
        }
    }
})