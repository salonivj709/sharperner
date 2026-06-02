// function Anagram(str1,str2) {
//     let str3 = str1.split('');
//     let str4 = str2.split('');

//     str3.sort();
//     str4.sort();
    
//     for(let i=0; i<str3.length; i++) {
//         if(str3[i] !== str4[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(Anagram("ate","eat",))

function AnagramPair(str){
    let result = [];
    for(let i=0; i<str.length; i++) {
        for(let j=i+1; j<str.length; j++) {
            if(str[i].split('').sort().join('') === str[j].split('').sort().join('')) {
                result.push([str[i], str[j]]);
            }else{
                continue;
            }
        }
    }    return result;
}
console.log(AnagramPair(["ate","temp","tap","eat","pat"]));