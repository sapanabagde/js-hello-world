// String Exercise Part-1 for length of string 

let num = 1001;

console.log(num.length);
console.log(typeof num);

let num2 = "123.45";
console.log(num2.length);

let num3 = "123.45";
console.log(num3.length-1);


let num4 = "12345";
if (String(num4).includes('.')){
    console.log(String(num4).length-1);
    } else {
    console.log(String(num4).length);
    }

// String Exercise Part-1 for length of string 

let dna = " TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT ";
let newString = dna.trim();
 console.log(newString);

let dna1 = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna1.trim().toUpperCase();
console.log(dna);

let dna3= " TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT ";
dna4= dna3.replace('GCT','AGG');
console.log(dna4);

let dna5= " TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT ";
let dna6 = dna5.indexOf('ppp');
if (dna6 > 0){
    console.log('CAT found');
    } else {
    console.log('CAT NOT found');
    }


let dna7 = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
             
console.log(dna7.slice(16,19));


let dna8 = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";
             
console.log(`${dna8.slice(4,7).toLowerCase()}o ${dna8.slice(dna8.indexOf('CAT'),dna8.indexOf('CAT')+3).toLowerCase()}`);

// String Exercise Part-1 for length of string 

let language = 'JavaScript';
console.log(language.slice(0,1)+language.slice(4,5));


let language1 = "JavaScript";
let initials = "J.S";

console.log(`The abbreviation for '${language1}' is '${initials}'.`);