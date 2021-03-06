/* 

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

var [prevNum, currentNum, term, evenSum] = [0,1,0,0];

while(term < 4000000){
    term = currentNum + prevNum; 
    term%2 == 0? (evenSum+=term): null;
    prevNum = currentNum;
    currentNum = term;
}

console.log(evenSum);