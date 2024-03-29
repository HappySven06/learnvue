/*setInterval(() => {
    let date = new Date();
    write('\x1B[?25l');
    write('\x1B[8D');
    write(date.toTimeString().substring(0,8));
    write('\x1B[?25h');
}, 100);*/

/* eslint-disable no-undef */

function write(text) {
    process.stdout.write(text);
}

import readline from 'node:readline';

readline.emitKeypressEvents(process.stdin);
console.clear();

write('@');

process.stdin.on('keypress', (ch, key) => {
    //console.log('got "keypress"', ch, key);
    if (key &&  key.name == 'q') {
        //process.stdin.pause();
        process.exit();
    }

    if (key &&  key.name == 'w') {
        write('\x1B[1D');
        write(' ');
        write('\x1B[1D');
        write('\x1B[1A');
        write('@');
    }
    if (key &&  key.name == 's') {
        write('\x1B[1D');
        write(' ');
        write('\x1B[1D');
        write('\x1B[1B');
        write('@');
    }
    if (key && key.name == 'a') {
        write('\x1B[2D');
        write('@');
        write(' ');
        write('\x1B[1D');
    }
    if (key && key.name == 'd') {
        write('\x1B[1D');
        write(' ');
        write('@');
    }

});

process.stdin.setRawMode(true);