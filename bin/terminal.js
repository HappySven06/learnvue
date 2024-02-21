function write(text){
    process.stdout.write(text);
}

write('\x1B[30m'); write('neeger'); write('\n'); //must
write('\x1B[31m'); write('neeger'); write('\n'); //punane
write('\x1B[32m'); write('neeger'); write('\n'); //roheline
write('\x1B[33m'); write('neeger'); write('\n'); //kollane
write('\x1B[34m'); write('neeger'); write('\n'); //sinine
write('\x1B[35m'); write('neeger'); write('\n'); //lilla
write('\x1B[36m'); write('neeger'); write('\n'); //cyan
write('\x1B[37m'); write('neeger'); write('\n'); //valge

write('\x1B[40m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[41m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[42m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[43m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[44m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[45m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[46m'); write('neeger'); write('\x1B[0m'); write('\n');
write('\x1B[47m'); write('neeger'); write('\x1B[0m'); write('\n');

//256 COLOR

for(let i = 0; i<250; i++){
    if(i%16==0){
        write('\n')
    }
    write(`\x1B[38;5;${i}m`); write(i.toString().padEnd(4, ' '));
}

//TRUECOLOR

for(let i = 0; i<250; i++){
    write(`\x1B[48;2;${i};${i};${i}m`); write(' '); write('\x1B[0m');
}
write('\n')