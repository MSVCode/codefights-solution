/*
You must solve a captcha to prove that you're not a human. Find the sum of all digits that match the next digit in the given number. Let's say that the number is circular, so the digit after the last digit is the first digit of this number.

Example
For a = 11221, the output should be
inverseCaptcha(a) = 4.
The result is 4 (1 + 2 + 1) because the first 1 and 2 matches the next digit, while the last 1 matches the first digit.
*/

inverseCaptcha = a => (a+'').split('').map(v=>Number(v)).reduce((t,v,i,s)=>t+(s[i]==s[(i+1)%s.length]?s[i]:0),0);