const node = document.getElementById('timer');
let start = 20;

// initial state
node.innerText = start;

const runTimer = setInterval(() => {
    start--;
    node.innerText = start;

    if (start === 0) {
        clearInterval(runTimer);
        node.innerText = '😎';
    }
}, 1000);
