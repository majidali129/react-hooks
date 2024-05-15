

const debounce = (func, delay) => {
    let timer=null;
    return () => {
        if(timer) timer = clearTimeout(timer);
        timer = setTimeout(() => {
            func();
        },delay)
    }
}


function print () {
    console.log('first call')
}

const print1 = debounce(print, 500)

print1()
setTimeout(print1, 300);
setTimeout(print1, 900);
