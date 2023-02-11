let deepFlat = ([1, [2, [3, [4]], 5]]);
let newFlat = deepFlat.flat(Infinity);
console.log(newFlat);



let secondFlat = (['a', ['b', [['c'], ['d']], 'e']]).flat(Infinity);
console.log(secondFlat);
