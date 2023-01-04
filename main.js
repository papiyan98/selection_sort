function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let infimum = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[infimum]) {
        infimum = j;
      }
    }

    if (infimum != i) {
      [array[i], array[infimum]] = [array[infimum], array[i]];
    }
  }
}

const arr = [12, 7, 19, 3, 2, 8, 14, 10];
console.log(arr);

selection_sort(arr)
console.log(arr);