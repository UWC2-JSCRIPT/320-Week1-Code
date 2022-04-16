console.log(this);

setTimeout(function() {
    console.log(this);
    console.log('done!');
}, 1000);

// setTimeout(() => {
//     console.log(this);
//     console.log('done!');
// }, 1000);
