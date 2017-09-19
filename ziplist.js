const testAlpha = ['a', 'b', 'c'];
const testNumb = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(testAlpha, testNumb));
