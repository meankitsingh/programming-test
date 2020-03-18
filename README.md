# Test

## Part 1 - Programming 

## Question 1

Rewrite the following using promises instead of callbacks
```
const​ f ​=​ (firstName​,​ callback) ​=>​ ​{ 
  ​setTimeout​(() ​=>​ ​{    
   ​if​ (​!​firstName) ​return​ ​callback​(​new​ ​Error​(​'firstName is required'​))  
      ​const​ fullName ​=​ ​`${​firstName​} Smith`     ​
      return​ ​callback​(fullName)   ​},​ ​2000​) } 
 f​(​'Andrew'​,​ ​console​.​log​)
 f​(​null​,​ ​console​.​log​) 
```



## Question 2

Design a micro service that accepts two words(beginWord and endWord), and a dictionary's word list to find all shortest transformation sequence(s) from beginWord to endWord, such that:

1. Only one letter can be changed at a time
2. Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Example 1:

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output:
[
  ["hit","hot","dot","dog","cog"],
  ["hit","hot","lot","log","cog"]
]
```

Example 2:

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: []
```

> Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

**_Structure for JS solution:_**

```
/**
* @param {string} beginWord
* @param {string} endWord
* @param {string[]} wordList
* @return {string[][]}
*/
var findLadders = function(beginWord, endWord, wordList) {}
```

---

## Question 3

UI Design 