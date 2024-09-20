const fs = require('fs');

// reading files

fs.readFile('./modules.js', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
// creates a threaed, need to string becuase of the buffer

console.log('last line');
// this gets logged before the read file, BECAUSE readfile is async

// writing files

fs.writeFile('./hello.txt', 'hello world', () => {
    console.log('file was written');
});



// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir("./assets'", (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');

    });
}



// deleting files
if (fs.existsSync('./deleteme.txt')) {

    fs.unlink('./deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file has been deleted');
    })

}