let deepFlat = ([1, [2, [3, [4]], 5]]);
let newFlat = deepFlat.flat(Infinity);
console.log(newFlat);