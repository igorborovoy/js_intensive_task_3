function createDebounceFunction(callback, timeout) {
    let timerId;
    if (typeof callback!=='function'){
        throw new Error('callback is not a function');
    }
    const funcWrapper = () => {
        callback();
        timerId = null;
    }
    return () => {
        if (!timerId) {
            timerId = setTimeout(funcWrapper, timeout);
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(funcWrapper, timeout);
        }
    }
}

//-------------------------------------------------//

/* function log100() {
    console.log(100);
}
const delay = createDebounceFunction(log100, 2000);
delay();
setTimeout(delay, 1000);
delay();
setTimeout(delay, 900); */