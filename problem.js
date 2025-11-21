

const twoSum = (numbers,target) =>{
    const numberMap = new Map();
    for(let i =0; i< numbers.length; i++){
        const number = numbers[i]
        const need = target - number;
        if(numberMap.has(need)){
            return [numberMap.get(need),i]
        }
       numberMap.set(number,i)
    }
    return undefined
    // console.log(numberMap)
}

// Input: "banana"
// Output: { b: 1, a: 3, n: 2 }

const countCharacter = (str) =>{
    const map = new Map();
    const strArr = str.split('');
    for(let word of strArr){
       if(map.has(word)){
        const count = map.get(word);
        map.set(word, count+1)
       } else{
        map.set(word,1)
       }
    }
    console.log(map)
}

const result = countCharacter('banana')