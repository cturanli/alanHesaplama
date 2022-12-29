const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Yaricapi giriniz: ', function (r) {
    let alan = 2 * Math.PI * r
    console.log(`Yarıçapı (${r}) olan dairenin alanı: (${alan}) şeklinde olmalıdır.`);
    rl.close();
});

rl.on('close', function () {
    process.exit(0);
});