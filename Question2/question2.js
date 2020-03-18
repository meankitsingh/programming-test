/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {


function Item(word, depth, parent) {
  this.word = word;
  this.depth = depth;
  this.parent = parent;
}
  

  if (!wordList.includes(endWord)) return [];
 
  let minDepth = Number.MAX_SAFE_INTEGER; 
  let copyList = [...wordList];
  let result = [];


  const item = new Item(beginWord, 0, null);
  let activeList = [item];

 

  while (activeList.length > 0) {
    const top = activeList.shift();

    if (result.length > 0 && top.depth > minDepth) {
      return result;
    }

    for (let i = 0; i < top.word.length; i++) {
      const c = top.word[i];
      let charArray = top.word.split("");
      for (var j = "a"; j <= "z"; j = String.fromCharCode(j.charCodeAt(0) + 1)) {
        if (j === c) {
          continue;
        }
        charArray[i] = j;
        const newItem = charArray.join("");

        if (newItem === endWord) {
          const subArray = [endWord];
          let p = top;

          while (p != null) {
            subArray.push(p.word);
            p = p.parent;
          }

          result.push(subArray.reverse());

          if (top.depth <= minDepth) {
            minDepth = top.depth;
          } else {
            return result;
          }
        }

        if (copyList.includes(newItem)) {
          const n = new Item(newItem, top.depth + 1, top);
          activeList.push(n);
          const index = copyList.indexOf(newItem);
          copyList.splice(index, 1);
        }
      }
    }
  }

  return result;
};




var beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"];

console.log("Output",findLadders(beginWord,endWord,wordList));

beginWord = "hit";
endWord = "cog";
wordList = ["hot","dot","dog","lot","log"];

console.log("Output",findLadders(beginWord,endWord,wordList));
