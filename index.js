const Airtable = require('airtable');

const base = Airtable.base('appQ8QiUpCs67Re58');

const baseString = 'abcdefghigklmnopqrstuvwxyz';

let s = baseString;

for (let i = 0; i< 100; i++) {
    s += baseString;
}


let count = 0;

let interval = setInterval(() => {
    count ++;
    base('Table 1').create({"Name": s}, function(err, record) {
        if (err) { console.error(err); return; }
        console.log(record.getId());
    });

    if (count > 1000) {
        clearInterval(interval)
    }
}, 250);