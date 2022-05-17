export default [

    {
        topic: 'Numbers',
        content:
            `
      <h1>Numbers</h1>

<div>
    <div>&nbsp;</div>
    <p><strong>TYPES OF NUMBERS</strong>&nbsp;<br>&nbsp;</p>
    <ol>
        <li><strong>Integers :</strong> All numbers whose fractional part is 0 (zero) like -3, -2, 1, 0, 10, 100 are integers.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/natural-numbers/"><strong >Natural Numbers</strong></a><strong>&nbsp;:</strong> Counting numbers like 1, 2, 3, 4, 5, 6 &hellip; Basically, all integers greater than 0 are natural numbers.</li>
        <li><strong>Whole Numbers :</strong> All natural numbers and 0 (zero) are whole numbers.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/prime-numbers/"><strong >Prime Numbers</strong></a><strong>&nbsp;:</strong> All numbers having only two distinct factors, the number itself and 1, are called prime numbers. Some prime numbers are 2, 3, 53, 67 and 191.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/composite-number/"><strong >Composite Number</strong></a><strong>&nbsp;:</strong> All numbers greater than 1 which are NOT prime are composite numbers. Some composite numbers are 4, 60, 91 and 100.</li>
    </ol>
    <p>&nbsp;</p>
    <div>&nbsp;</div>
    <p><strong>IMPORTANT POINTS ON PRIME NUMBERS</strong>&nbsp;<br>&nbsp;</p>
    <ul>
        <li>1 is neither prime, nor composite.</li>
        <li>2 is the only even prime number.</li>
        <li>There are 25 prime numbers less than 100. They are : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.</li>
        <li>To check if a number &lsquo;p&rsquo; is prime, find a number &lsquo;n&rsquo; such that &lsquo;n&rsquo; is the smallest&nbsp;natural number which satisfies n<sup>2</sup> &gt;= p. Now, check if &lsquo;p&rsquo; is divisible by any of the prime numbers less than or equal to &lsquo;n&rsquo;. If &lsquo;p&rsquo; is NOT divisible by any such prime numbers, &lsquo;p&rsquo; is a prime number. Otherwise, p is not a prime number.</li>
        <li>Co-primes : Two numbers &lsquo;a&rsquo; and &lsquo;b&rsquo; are called co-prime if their highest common factor (HCF) is 1.</li>
    </ul>
    <p><strong>DIVISIBILITY TESTS</strong>&nbsp;<br>&nbsp;</p>
    <ul>
        <li><strong>Divisibility By 2 :</strong> A number is divisible by 2 if the last digit is any of 0, 2, 4, 6, 8.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-3-not/"><strong >Divisibility By 3</strong></a><strong>:</strong> A number is divisible by 3 if the sum of its digits is divisible by 3. For example, 12321 is divisible by 3 because 1 + 2 + 3 + 2 + 1 = 9 and 9 is divisible by 3.</li>
        <li><strong>Divisibility By 4 :</strong> A number is divisible by 4 if the last two digits are divisible by 4. For example, 1234 is not divisible by 4 as the last two digits 34 is not divisible by 4. But, 1232 is divisible by 4 as the last two digits 32 is divisible by 4.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-5-not/"><strong >Divisibility By 5</strong></a><strong>&nbsp;:</strong> A number is divisible by 5 if the last digit is either 0 or 5.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-6-not/"><strong >Divisibility By 6</strong></a><strong>&nbsp;:</strong> A number is divisible by 6 if it is divisible by both 2 and 3. For example, 114 is divisible by 6 as it is divisible by both 2(last digit is 4) and 3 (1+1+4=6, 6 is divisible by 3).</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/divisibility-by-7/"><strong >Divisibility By 7&nbsp;</strong></a><strong>:</strong> A number is divisible by 7 if repeatedly doing following steps until a single digit left leaves the single digit as 0 or 7. (1) Remove the last digit. (2) Subtract double of last digit from the number obtained after step 1 (number with last digit removed). Example, given number is 196. After removing last digit, we get 19. After subtracting 12 (double of removed digit), we get 7. Since the last left digit is 7, number is multiple of 7.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-8-not/"><strong >Divisibility By 8</strong></a><strong>&nbsp;:</strong>A number is divisible by 8 if the last three digits are divisible by 8. For example, 1234 is not divisible by 8 as the last three digits 234 is not divisible by 8. But, 1232 is divisible by 8 as the last three digits 232 is divisible by 8.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-9-not/"><strong >Divisibility By 9&nbsp;</strong></a><strong>:</strong> A number is divisible by 9 if the sum of its digits is divisible by 9. For example, 12321 is divisible by 3 because 1 + 2 + 3 + 2 + 1 = 9 and 9 is divisible by 9.</li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-large-number-divisible-11-not/"><strong >Divisibility By 11</strong></a><strong>&nbsp;:</strong> A number is divisible by 11 if the difference between the sum of numbers at even positions and odd positions is either 0 or a multiple of 11.</li>
    </ul>
    <p><strong>NOTE :</strong> If &lsquo;p&rsquo; and &lsquo;q&rsquo; are co-primes and we have a number &lsquo;n&rsquo; that is divisible by both &lsquo;p&rsquo; and &lsquo;q&rsquo;, &lsquo;n&rsquo; will be divisible by p x q.&nbsp;<br>For example, 48 is divisible by both 3 and 8 and also by 3 x 8 = 24.&nbsp;<br>But, if &lsquo;p&rsquo; and &lsquo;q&rsquo; are NOT co-prime, then the fact that &lsquo;n&rsquo; would be divisible by p x q given that &lsquo;n&rsquo; is divisible by both &lsquo;p&rsquo; and &lsquo;q&rsquo; is not necessary. For example, 144 is divisible by both 8 and 12 (not co-prime), but it is not divisible by 8 x 12 = 96.&nbsp;<br><strong>DIVISION THEOREM</strong>&nbsp;<br>&nbsp;</p>
    <div><br></div>
    <ul>
        <li>Dividend = (Divisor x Quotient) + Remainder</li>
        <li>(x<sup>n</sup> &ndash; a<sup>n</sup>) is divisible by (x &ndash; a) for all values of n.&nbsp;<br>For example, for n = 2, x<sup>2</sup> &ndash; a<sup>2</sup> = (x &ndash; a) (x + a), which is divisible by (x &ndash; a).&nbsp;<br>Similarly, for n = 3, x<sup>3</sup> &ndash; a<sup>3</sup> = (x &ndash; a) (x<sup>2</sup> + a<sup>2</sup> + xa), which is divisible by (x &ndash; a).</li>
        <li>(x<sup>n</sup> &ndash; a<sup>n</sup>) is divisible by (x + a) for all even values of n.&nbsp;<br>For example, for n = 2, x<sup>2</sup> &ndash; a<sup>2</sup> = (x &ndash; a) (x + a), which is divisible by (x+a).&nbsp;<br>Similarly, for n = 3, x<sup>3</sup> &ndash; a<sup>3</sup> = (x &ndash; a) (x<sup>2</sup> + a<sup>2</sup> + xa), which is not divisible by (x + a).</li>
        <li>(x<sup>n</sup> + a<sup>n</sup>) is divisible by (x + a) for all odd values of n.&nbsp;<br>For example, for n = 3, x<sup>3</sup> + a<sup>3</sup> = (x + a) (x<sup>2</sup> + a<sup>2</sup> &ndash; xa), which is divisible by (x + a).</li>
    </ul>
    <p>&nbsp;&nbsp;<br>&nbsp;</p>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :</strong> When a number is successively divided by 2, 3, 7, we get 1, 2, 3 as the remainder respectively. What is the smallest such number ?&nbsp;<br><strong>Solution :</strong> The number is of the form 2a+1, 3b+2, 7c+3. So, we put c=1 and proceed as follows :&nbsp;<br>&nbsp;</p>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/03/sample-problem-1.png" alt="sample problem 1"></p>
    <p>Basically, we successively multiply the divisors with the result of the previous stage and add the corresponding remainder.&nbsp;<br>7 x 1 + 3 = 10&nbsp;<br>3 x 10 + 2 = 32&nbsp;<br>2 x 32 + 1 = 65&nbsp;<br>Thus, 65 is the required answer.&nbsp;<br><strong>NOTE : The answer would differ if we change the order of divisors. For smallest number, arrange the divisors in decreasing order.</strong>&nbsp;</p>
    <p><strong>Question 2 :&nbsp;</strong>When a number is successively divided by 2, 4, 8, we get 1, 1, 0 as the remainder respectively. What is the smallest such number ?&nbsp;<br><strong>Solution :&nbsp;</strong>Proceeding in the similar manner as the above question,&nbsp;<br>8 x 1 + 0 = 8&nbsp;<br>4 x 8 + 1 = 33&nbsp;<br>2 x 33 + 1 = 67&nbsp;<br>Thus, 67 is the required answer.&nbsp;<br>&nbsp;</p>
    <div>&nbsp;</div>
    <p><strong>Question 3 :&nbsp;</strong>What would be the maximum value of &lsquo;B&rsquo; in the following equation :&nbsp;<br>&nbsp;</p>
    <pre>  1 2 B
+ B 4 C
+ C 6 7
--------
  1035
--------</pre>
    <p><strong>Solution :&nbsp;</strong>Only the leftmost part of the number can be of two or more digits. So, we split the answer as :&nbsp;<br>&nbsp;</p>
    <pre>  1 2 B
+ B 4 C
+ C 6 7
--------
 10 3 5
--------</pre>
    <p>Now, from column 1, we can easily infer that B + C = 8.&nbsp;<br>First, let us consider B + C = 18. This is the case possible if and only if B = C = 9. So, the equation would be 129 + 949 + 967 = 2045, but we need 1035 as the answer. Thus, this is not the required case.&nbsp;<br>So, B + C = 8. For maximum &lsquo;B&rsquo;, we put C = 0. Therefore, B = 8.&nbsp;<br>Now, to verify our answer, we put B = 8 and C = 0 in the given equation.&nbsp;<br>&nbsp;</p>
    <pre>  1 2 8
+ 8 4 0
+ 0 6 7
--------
 10 3 5
--------</pre>
    <p>Therefore, our answer B = 8 is correct.&nbsp;</p>
    <p><strong>Question 4 :&nbsp;</strong>Which of the following are prime numbers ?&nbsp;<br>(i) 247&nbsp;<br>(ii) 397&nbsp;<br>(iii) 423&nbsp;<br><strong>Solution :&nbsp;</strong><br>(i) 16<sup>2</sup> = 256 &gt; 247. Prime numbers less than 16 are 2, 3, 5, 7, 11, 13 and 247 is divisible by 13. Therefore, 247 is not a prime number. It is a composite number.&nbsp;<br>(ii) 20<sup>2</sup> = 400 &gt; 397. Prime numbers less than 20 are 2, 3, 5, 7, 11, 13, 17, 19 but 397 is not divisible by any of these. Therefore, 397 is a prime number.&nbsp;<br>(iii) 21<sup>2</sup> = 441 &gt; 423. Prime numbers less than 21 are 2, 3, 5, 7, 11, 13, 17, 19 and 423 is divisible by 3. Therefore, 423 is not a prime number. It is a composite number.&nbsp;</p>
    <p><strong>Question 5 :&nbsp;</strong>Find the unit&rsquo;s digit in the product (17)<sup>153</sup> x (31)<sup>62</sup>.&nbsp;<br><strong>Solution :&nbsp;</strong>The unit&rsquo;s digit of the given equation would be the same as the unit&rsquo;s digit of the equation 7<sup>153</sup> x 1<sup>62</sup>.&nbsp;<br>Now, we need to find a pattern in the unit&rsquo;s digit when we gradually increase the powers of 7. 7<sup>1</sup> gives 7, 7<sup>2</sup> gives 9, 7<sup>3</sup> gives 3, 7<sup>4</sup> gives 1. So, at the fourth power, we get the unit&rsquo;s digit as 1. Therefore, to make our work easy, we need to write the original power (153) in multiples of 4 to the closest extent possible. We multiply this power (4) by a number such that we get nearest to 153. So, 4 x 38 = 152 and 7<sup>152</sup> also has 1 in the unit&rsquo;s place.&nbsp;<br>Now, (17)<sup>153</sup> has 7 at unit&rsquo;s place and (31)<sup>62</sup> has 1 at the unit&rsquo;s place.&nbsp;<br>Therefore, the problem simply reduces to 7 x 1 = 7.&nbsp;<br>Hence, the unit&rsquo;s digit is 7.&nbsp;</p>
    <p><strong>Question 6 :&nbsp;</strong>Find the unit&rsquo;s digit in (17)<sup>153</sup> + (31)<sup>62</sup>.&nbsp;<br><strong>Solution :&nbsp;</strong>The unit&rsquo;s digit of the given equation would be the same as the unit&rsquo;s digit of the equation 7<sup>153</sup> + 1<sup>62</sup>.&nbsp;<br>Now, we need to find a pattern in the unit&rsquo;s digit when we gradually increase the powers of 7. 7<sup>1</sup> gives 7, 7<sup>2</sup> gives 9, 7<sup>3</sup> gives 3, 7<sup>4</sup> gives 1. So, at the fourth power, we get the unit&rsquo;s digit as 1. Therefore, to make our work easy, we need to write the original power (153) in multiples of 4 to the closest extent possible. We multiply this power (4) by a number such that we get nearest to 153. So, 4 x 38 = 152 and 7<sup>152</sup> also has 1 in the unit&rsquo;s place.&nbsp;<br>Now, (17)<sup>153</sup> has 7 at unit&rsquo;s place and (31)<sup>62</sup> has 1 at the unit&rsquo;s place.&nbsp;<br>Therefore, the problem simply reduces to 7 + 1 = 8.&nbsp;<br>Hence, the unit&rsquo;s digit is 8.&nbsp;</p>
    <p><strong>Question 7 :&nbsp;</strong>Find the total number of prime factors in the expression (14)<sup>11</sup> x (7)<sup>2</sup> x (11)<sup>3</sup> .&nbsp;<br><strong>Solution :&nbsp;</strong>(14)<sup>11</sup> x (7)<sup>2</sup> x (11)<sup>3</sup> = (2 x 7)<sup>11</sup> x (7)<sup>2</sup> x (11)<sup>3</sup> = (2)<sup>11</sup> x (7)<sup>11</sup> x (7)<sup>2</sup> x (11)<sup>3</sup> = (2)<sup>11</sup> x (7)<sup>13</sup> x (11)<sup>3</sup><br>Therefore, total number of prime factors = 11 + 13 + 3 = 27&nbsp;</p>
    <p><strong>Question 8 :&nbsp;</strong>Which digits should come in place of * and # such that the number 12386*# is divisible by both 8 and 5 ?&nbsp;<br><strong>Solution :&nbsp;</strong>Since the given number should be divisible by 5, 0 or 5 must come in place of #. But, a number ending with 5 is never divisible by 8. So, 0 will replace #.&nbsp;<br>Now, the number formed by the last three digits is 6*0, which becomes divisible by 8, if * is replaced by 0 or 4 or 8.&nbsp;<br>Hence, digits in place of * and # are 0 or 4 or 8 and 0 respectively.&nbsp;</p>
    <p><strong>Question 9 :&nbsp;</strong>What is the least number that must be subtracted from 9999 to make it exactly divisible by 19 ?&nbsp;<br><strong>Solution :&nbsp;</strong>On dividing 9999 by 19, we get 5 as remainder. Therefore, number to be subtracted = 5.&nbsp;</p>
    <p><strong>Question 10 :&nbsp;</strong>What is the least number that must be added to 9999 to make it exactly divisible by 19 ?&nbsp;<br><strong>Solution :&nbsp;</strong>On dividing 9999 by 19, we get 5 as remainder. Therefore, number to be added = 19 &ndash; 5 = 14.&nbsp;</p>
    <p><strong>Question 11 :</strong> A number when divided by 340 gives a remainder 47. What would be the remainder when the same number is divided by 17 ?&nbsp;<br><strong>Solution :&nbsp;</strong>The number is of the form 340a + 47 = 17 * (20a) + 17 * (2) + 13 = 17 * (20a + 2) + 13.&nbsp;<br>Therefore, on dividing this number by 17, we would get 13 as the remainder.&nbsp;</p>
    <p><strong>Question 12 :&nbsp;</strong>Find the remainder when 3<sup>21</sup> is divided by 5.&nbsp;<br><strong>Solution :&nbsp;</strong>3<sup>4</sup> = 81. So, the unit&rsquo;s digit of 3<sup>4</sup> is 1.&nbsp;<br>Therefore, the unit&rsquo;s digit of 3<sup>20</sup> = 1 and thus, the unit&rsquo;s digit of 3<sup>21</sup> = 1*3 = 3.&nbsp;<br>3 when divided by 5 gives 3 as the remainder.&nbsp;<br>So, the remainder when 3<sup>21</sup> is divided by 5 is 3.&nbsp;</p>
</div>
<div>
    <p><br></p>
</div>
      `
    },

    {
        topic: "LCM and HCF",
        content: `
        <h1>LCM and HCF</h1>

<div>
    <ul>
        <li><strong>Factors and Multiples:&nbsp;</strong>All the numbers that divide a number completely, i.e., without leaving any remainder, are called factors of that number. For example, 24 is completely divisible by 1, 2, 3, 4, 6, 8, 12, 24. Each of these numbers is called a factor of 24 and 24 is called a multiple of each of these numbers.</li>
        <li><strong>LCM:&nbsp;</strong>The least number which is exactly divisible by each of the given numbers is called the least common multiple of those numbers. For example, consider the numbers 3, 31 and 62 (2 x 31). The LCM of these numbers would be 2 x 3 x 31 = 186.<br>To find the LCM of the given numbers, we express each number as a product of prime numbers. The product highest power of the prime numbers that appear in prime factorization of any of the numbers gives us the LCM.<br>For example, consider the numbers 2, 3, 4 (2 x 2), 5, 6 (2 x 3). The LCM of these numbers is 2 x 2 x 3 x 5 = 60. The highest power of 2 comes from prime factorization of 4, the highest power of 3 comes from prime factorization of 3 and prime factorization of 6 and the highest power of 5 comes from prime factorization of 5.</li>
                                <li><strong>HCF :&nbsp;</strong>The largest number that divides two or more numbers is the highest common factor (HCF) for those numbers. For example, consider the numbers 30 (2 x 3 x 5), 36 (2 x 2 x 3 x 3), 42 (2 x 3 x 7), 45 (3 x 3 x 5). 3 is the largest number that divides each of these numbers, and hence, is the HCF for these numbers.<br>HCF is also known as Greatest Common Divisor (GCD).<br>&nbsp;<br>To find the HCF of two or more numbers, express each number as product of prime numbers. The product of the least powers of common prime terms gives us the HCF. This is the method we illustrated in the above step.<br>Also, for finding the HCF of two numbers, we can also proceed by long division method. We divide the larger number by the smaller number (divisor). Now, we divide the divisor by the remainder obtained in the previous stage. We repeat the same procedure until we get zero as the remainder. At that stage, the last divisor would be the required HCF.<br>For example, we find the HCF of 30 and 42.<br><a target="_blank"  href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/03/hcf-long-division.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/03/hcf-long-division.png" alt="hcf-long-division" width="341" height="342"></a></li>
        <li>For two numbers &lsquo;a&rsquo; and &lsquo;b&rsquo;,&nbsp;<strong>LCM x HCF = a x b</strong></li>
        <li>HCF of co-primes = 1</li>
        <li>For two fractions,<br>HCF = HCF (Numerators) / LCM (Denominators)<br>LCM = LCM (Numerators) / HCF (Denominators)</li>
        <li><strong>A natural number , greater than 1, can always be written as sum of greatest common divisor(gcd) and lowest common multiple (lcm) of two natural numbers , i.e. ,<br>x=gcd(a,b)+lcm(a,b).</strong>
            <p>Let&rsquo;s prove it. Let x be any natural number, greater than 1, and a and b are also two natural numbers(greater than or equal to 1).</p>
            <p>Let&rsquo;s take<br>a=x-1 and b=1</p>
            <p>now we find lcm of a and b ,<br>lcm(a,b)=a &mdash;-1</p>
            <p>which is simply a because lcm of any natural number with 1 is the number itself.<br>now we find gcd of a and b<br>gcd(a,b)=1 &mdash;-2<br>since gcd of any natural number with 1 is 1 since 1 is the highest common factor of both numbers.</p>
            <div><br></div>
            <p>adding equation 1 and 2 we get<br>lcm(a,b)+gcd(a,b)=a+1</p>
            <p>putting values of a and b<br>lcm(a,b)+gcd(a,b)=x-1+1<br><strong>lcm(a,b)+gcd(a,b)=x</strong></p>
        </li>
    </ul>
    <p>&nbsp;</p>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :&nbsp;</strong>Two numbers are in the ratio of 5:11. If their HCF is 7, find the numbers.<br><strong>Solution :&nbsp;</strong>Let the numbers be 5m and 11m. Since 5:11 is already the reduced ratio, &lsquo;m&rsquo; has to be the HCF. So, the numbers are 5 x 7 = 35 and 11 x 7 = 77.<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the length of the plank which can be used to measure exactly the lengths 4 m 50 cm, 9 m 90 cm and 16 m 20 cm in the least time.<br><strong>Solution :&nbsp;</strong>Let us first convert each length to cm. So, the lengths are 450 cm, 990 cm and 1620 cm. Now, we need to find the length of the largest plank that can be used to measure these lengths as the largest plank will take the least time. For this, we need to take the HCF of 450, 990 and 1620.<br>450 = 2 x 3 x 3 x 5 x 5 = 2 x 3<sup>2</sup> x 5<sup>2</sup><br>990 = 2 x 3 x 3 x 5 x 11 = 2 x 3<sup>2</sup> x 5 x 11<br>1620 = 2 x 2 x 3 x 3 x 3 x 3 x 5 = 2<sup>2</sup> x 3<sup>4</sup> x 5<br>Therefore, HCF (450, 990, 1620) = 2 x 3 x 3 x 5 = 90<br>Thus, we need a plank of length 90 cm to measure the given lengths in the least time.<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>Find the greatest number which on dividing 70 and 50 leaves remainders 1 and 4 respectively.<br><strong>Solution :&nbsp;</strong>The required number leaves remainders 1 and 4 on dividing 70 and 50 respectively. This means that the number exactly divides 69 and 46.<br>So, we need to find the HCF of 69 (3 x 23) and 46 (2 x 23).<br>HCF (69, 46) = 23<br>Thus, 23 is the required number.<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>Find the largest number which divides 64, 136 and 238 to leave the same remainder in each case.<br><strong>Solution :&nbsp;</strong>To find the required number, we need to find the HCF of (136-64), (238-136) and (238-64), i.e., HCF (72, 102, 174).<br>72 = 2<sup>3</sup> x 3<sup>2</sup><br>102 = 2 x 3 x 17<br>174 = 2 x 3 x 29<br>Therefore, HCF (72, 102, 174) = 2 x 3 = 6<br>hence, 6 is the required number.<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>Find the least number which when divided by 5,7,9 and 12, leaves the same remainder 3 in each case<br><strong>Solution :&nbsp;</strong>In these type of questions, we need to find the LCM of the divisors and add the common remainder (3) to it.<br>So, LCM (5, 7, 9, 12) = 1260<br>Therefore, required number = 1260 + 3 = 1263<br>&nbsp;<br><strong>Question 6 :&nbsp;</strong>Find the largest four digit number exactly divisible by 15,21 and 28.<br><strong>Solution :&nbsp;</strong>The largest four digit number is 9999.<br>Now, LCM (15, 21, 28) = 420<br>On dividing 9999 by 420, we get 339 as the remainder.<br>Therefore, the required number is 9999-339 = 9660<br>&nbsp;<br><strong>Question 7:&nbsp;</strong>The policemen at three different places on a ground blow a whistle after every 42 sec, 60 sec and 78 sec respectively. If they all blow the whistle simultaneously at 9:30:00 hours, then at what time do they whistle again together?<br><strong>Solution:&nbsp;</strong>They all will whistle again at the same time after an interval that is equal to the LCM of their individual whistle blowing cycles.<br>So, LCM (42, 60, 78) = 2 x 3 x 7 x 10 x 13 = 5460<br>Therefore, they will blow the whistle again simultaneously after 5460 sec, i.e., after 1 hour 31 minutes, i.e., at 11:01:00 hours.<br>&nbsp;<br><strong>Question 8 :&nbsp;</strong>Find the least number which when divided by 6,7,8 leaves a remainder 3, but when divided by 9 leaves no remainder .<br><strong>Solution :&nbsp;</strong>LCM (6, 7, 8) = 168<br>So, the number is of the form 168m + 3.<br>Now, 168m + 3 should be divisible by 9.<br>We know that a number is divisible by 9 if the sum of its digits is a multiple of 9.<br>For m = 1, the number is 168 + 3 = 171, the sum of whose digits is 9.<br>Therefore, the required number is 171.<br>&nbsp;<br><strong>Question 9 :&nbsp;</strong>Two numbers are in the ratio 2:3. If the product of their LCM and HCF is 294, find the numbers.<br><strong>Solution :&nbsp;</strong>Let the common ratio be &lsquo;m&rsquo;. So, the numbers are 2m and 3m.<br>Now, we know that Product of numbers = Product of LCM and HCF.<br>=&gt; 2m x 3m = 294<br>=&gt; m<sup>2</sup> = 49<br>=&gt; m = 7<br>Therefore, the numbers are 14 and 21.<br>&nbsp;<br><strong>Question 10 :&nbsp;</strong>A rectangular field of dimension 180m x 105m is to be paved by identical square tiles. Find the size of each tile and the number of tiles required.<br><strong>Solution:&nbsp;</strong>We need to find the size of a square tile such that a number of tiles cover the field exactly, leaving no area unpaved.<br>For this, we find the HCF of the length and breadth of the field.<br>HCF (180, 105) = 15<br>Therefore, size of each tile = 15m x 15m<br>Also, number of tiles = area of field / area of each tile<br>=&gt; Number of tiles = (180 x 105) / (15 x 15)<br>=&gt; Number of tiles = 84<br>Hence, we need 84 tiles, each of size 15m x 15m.<br>&nbsp;<br><strong>Question 11 :&nbsp;</strong>Three rectangular fields having area 60 m<sup>2</sup>, 84 m<sup>2</sup> and 108 m<sup>2</sup> are to be divided into identical rectangular flower beds, each having length 6 m. Find the breadth of each flower bed.<br><strong>Solution :&nbsp;</strong>We need to divide each large field into smaller flower beds such that the area of each bed is same.<br>So, we find the HCF of the larger fields that gives us the area of the smaller field.<br>HCF (60, 84, 108) = 12<br>Now, this HCF is the area (in m<sup>2</sup>) of each flower bed.<br>Also, area of a rectangular field = Length x Breadth<br>=&gt; 12 = 6 x Breadth<br>=&gt; Breadth = 2 m<br>Hence, each flower bed would be 2 m wide.<br>&nbsp;<br><strong>Question 12:&nbsp;</strong>Find the maximum number of students among whom 182 chocolates and 247 candies can be distributed such that each student gets same number of each. Also, find the number of chocolates and candies each student will get.<br><strong>Solution:&nbsp;</strong>We need to find the HCF of the number of chocolates and candies available, which would give us the number of students.<br>HCF (182, 247) = 13<br>So, there can be 13 students.<br>Also, Number of chocolates for each student = 182 / 13 = 14<br>Number of toffees for each student = 247 / 13 = 19<br>&nbsp;</p>
                            <h3><a target="_blank"  href="https://www.geeksforgeeks.org/problem-on-hcf-and-lcm/" rel="noopener" target="_blank">Problem on HCF and LCM | Set-2</a></h3>
    <p><strong>Program on LCM</strong></p>
    <ul>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/program-to-find-lcm-of-two-numbers/">Program to find LCM of two numbers</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/lcm-of-given-array-elements/">LCM of given array elements</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/finding-lcm-two-array-numbers-without-using-gcd/">Finding LCM of more than two (or array) numbers without using GCD</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/program-to-find-lcm-of-2-numbers-without-using-gcd/">Program to find LCM of 2 numbers without using GCD</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/check-lcm-array-elements-divisible-prime-number-not/">Check if LCM of array elements is divisible by a prime number or not</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/find-lcm-rational-numbers/">Find LCM of rational numbers</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/lcm-digits-given-number/">LCM of digits of a given number</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/prime-factors-lcm-array-elements/">Prime factors of LCM of array elements</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/maximum-sum-distinct-number-lcm-n/">Maximum sum of distinct numbers with LCM as N</a></li>
    </ul>
    <p><strong>Program on HCF</strong></p>
    <ul>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/program-find-hcf-iteratively/">Program to find HCF iteratively</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/program-to-find-hcf-highest-common-factor-of-2-numbers/">Program to find HCF (Highest Common Factor) of 2 Numbers</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/c-program-find-gcd-hcf-two-numbers/">Program to find GCD or HCF of two numbers</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/find-the-other-number-when-lcm-and-hcf-given/">Find the other number when LCM and HCF given</a></li>
                                <li><a target="_blank"  href="https://www.geeksforgeeks.org/hcf-of-array-of-fractions-or-rational-numbers/">HCF of array of fractions (or rational numbers)</a></li>
    </ul>
                            <h3><a target="_blank"  href="https://www.geeksforgeeks.org/lcm-gq/">Quiz on LCM</a></h3>
                            <h3><a target="_blank"  href="https://www.geeksforgeeks.org/hcf-gq/">Quiz on HCF</a></h3>
    <p>&nbsp;<br>This article has been contributed by&nbsp;<strong>Nishant Arora</strong></p>
</div>
        
        `
    },
    {
        topic: "Work and Wages",
        content: `
        <h1>Work and Wages</h1>

<div>
    <ul>
        <li>If a person can do a piece of work in&nbsp;<strong>&lsquo;n&rsquo;</strong> days, then in one day, the person will do&nbsp;<strong>&lsquo;1/n&rsquo;</strong> work. Conversely, if the person does&nbsp;<strong>&lsquo;1/n&rsquo;</strong> work in one day, the person will require&nbsp;<strong>&lsquo;n&rsquo;</strong> days to finish the work.</li>
        <li>In questions where there is a comparison of work and efficiency, we use the formula&nbsp;<br><strong>M<sub>1</sub> D<sub>1</sub> H<sub>1</sub> E<sub>1</sub> / W<sub>1</sub> = M<sub>2</sub> D<sub>2</sub> H<sub>2</sub> E<sub>2</sub> / W<sub>2</sub></strong>, where&nbsp;<br>M = Number of workers&nbsp;<br>D = Number of days&nbsp;<br>H = Number of working hours in a day&nbsp;<br>E = Efficiency of workers&nbsp;<br>W = Units of work&nbsp;<br>&nbsp;</li>
        <li>In case we have more than one type of workers, then the formula modifies to&nbsp;<br><strong>&sum;(M<sub>i</sub> E<sub>i</sub>) D<sub>1</sub> H<sub>1</sub> / W<sub>1</sub> = &sum;(M<sub>j</sub> E<sub>j</sub>) D<sub>2</sub> H<sub>2</sub> / W<sub>2</sub></strong>, where &lsquo;i&rsquo; and &lsquo;j&rsquo; may vary as per the number of workers.</li>
        <li>If a person A is &lsquo;n&rsquo; times more efficient than person B, then&nbsp;<br>Ratio of work done by A and B in one day (Ratio of efficiencies) =&nbsp;<strong>n : 1</strong>&nbsp;<br>Ratio of time taken by A and B =&nbsp;<strong>1 : n</strong>&nbsp;<br>&nbsp;</li>
        <li>Total work = No. of Days x Efficiency</li>
        <li>If a group of people are given salary for a job they do together, their individual salaries are in the ratio of their individual efficiencies if they work for same number of days. Otherwise, salaries are divided in the ratio of units of work done.</li>
    </ul>
    <p>In this topic, the way of attempting the questions is the deciding factor for getting accurate answer in less time. We shall try to cover all the types of questions asked in this topic with detailed explanation of way of attempting them.&nbsp;<br>&nbsp;&nbsp;<br>&nbsp;</p>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :&nbsp;</strong>To complete a work, a person A takes 10 days and another person B takes 15 days. If they work together, in how much time will they complete the work ?&nbsp;<br><strong>Solution :&nbsp;</strong>Method 1 :&nbsp;<br>A&rsquo;s one day work (efficiency) = 1/10&nbsp;<br>B&rsquo;s one day work (efficiency) = 1/15&nbsp;<br>Total work done in one day = 1/10 + 1/15 = 1/6&nbsp;<br>Therefore, working together, they can complete the total work in 6 days.&nbsp;<br>&nbsp;&nbsp;<br>Method 2 (Short Method):&nbsp;<br>Let the total work be LCM (10, 15) = 30 units&nbsp;<br>=&gt; A&rsquo;s efficiency = 30/10 = 3 units / day&nbsp;<br>=&gt; B&rsquo;s efficiency = 30/15 = 2 units / day&nbsp;<br>Combined efficiency of A and B = 3+2 = 5 units / day&nbsp;<br>=&gt; In one day, A and B working together can finish of 5 units of work, out of the given 30 units.&nbsp;<br>Therefore, time taken to complete total work = 30 / 5 = 6 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 2 :&nbsp;</strong>Two friends A and B working together can complete an assignment in 4 days. If A can do the assignment alone in 12 days, in how many days can B alone do the assignment ?&nbsp;<br><strong>Solution :&nbsp;</strong>Let the total work be LCM (4, 12) = 12&nbsp;<br>=&gt; A&rsquo;s efficiency = 12/12 = 1 unit / day&nbsp;<br>=&gt; Combined efficiency of A and B = 12/4 = 3 units / day&nbsp;<br>Therefore, B&rsquo;s efficiency = Combined efficiency of A and B &ndash; A&rsquo;s efficiency = 2 units / day&nbsp;<br>So, time taken by B to complete the assignment alone = 12/2 = 6 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 3 :&nbsp;</strong>Three people A, B and C are working in a factory. A and B working together can finish a task in 18 days whereas B and C working together can do the same task in 24 days and A and C working together can do it in 36 days. In how many days will A, B and C finish the task working together and working separately?&nbsp;<br><strong>Solution :&nbsp;</strong>Let the total work be LCM (18, 24, 36) = 72&nbsp;<br>=&gt; Combined efficiency of A and B = 72/18 = 4 units / day&nbsp;<br>=&gt; Combined efficiency of B and C = 72/24 = 3 units / day&nbsp;<br>=&gt; Combined efficiency of A and C = 72/36 = 2 units / day&nbsp;<br>Summing the efficiencies,&nbsp;<br>2 x (Combined efficiency of A, B and C) = 9 units / day&nbsp;<br>=&gt; Combined efficiency of A, B and C = 4.5 units / day&nbsp;<br>Therefore, time required to complete the task if A, B and C work together = 72/4.5 = 16 days&nbsp;<br>&nbsp;&nbsp;<br>Also, to find the individual times, we need to find individual efficiencies. For that, we subtract the combined efficiency of any two from combined efficiency of all three.&nbsp;<br>So, Efficiency of A = Combined efficiency of A, B and C &ndash; Combined efficiency of B and C = 4.5 &ndash; 3 = 1.5 units / day&nbsp;<br>Efficiency of B = Combined efficiency of A, B and C &ndash; Combined efficiency of A and C = 4.5 &ndash; 2 = 2.5 units / day&nbsp;<br>Efficiency of C = Combined efficiency of A, B and C &ndash; Combined efficiency of A and B = 4.5 &ndash; 4 = 0.5 units / day&nbsp;<br>&nbsp;&nbsp;<br>Therefore, time required by A to complete the task alone = 72/1.5 = 48 days&nbsp;<br>Time required by B to complete the task alone = 72/2.5 = 28.8 days&nbsp;<br>Time required by C to complete the task alone = 72/0.5 = 144 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 4 :&nbsp;</strong>Two friends A and B are employed to do a piece of work in 18 days. If A is twice as efficient as B, find the time taken by each friend to do the work alone.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the efficiency of B be 1 unit / day.&nbsp;<br>=&gt; Efficiency of A = 2 unit / day.&nbsp;<br>=&gt; Combined efficiency of A and B = 2+1 = 3 units / day&nbsp;<br>=&gt; Total work = No. of Days x Efficiency = 18 days x 3 units / day = 54 units&nbsp;<br>Therefore, time required by A to complete the work alone = 54/2 = 27 days&nbsp;<br>Time required by B to complete the work alone = 54/1 = 54 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 5 :&nbsp;</strong>Two workers A and B are employed to do a cleanup work. A can clean the whole area in 800 days. He works for 100 days and leaves the work. B working alone finishes the remaining work in 350 days. If A and B would have worked for the whole time, how much time would it have taken to complete the work?&nbsp;<br><strong>Solution :&nbsp;</strong>Let the total work be 800 units.&nbsp;<br>=&gt; A&rsquo;s efficiency = 800/800 = 1 unit / day&nbsp;<br>=&gt; Work done by A in 100 days = 100 units&nbsp;<br>=&gt; Remaining work = 700 units&nbsp;<br>Now, A leaves and B alone completes the remaining 700 units of work in 350 days.&nbsp;<br>=&gt; Efficiency of B = 700/350 = 2 units / day&nbsp;<br>Therefore, combined efficiency of A and B = 3 units / day&nbsp;<br>So, time taken to complete the work if both A and B would have worked for the whole time = 800 / 3 = 266.667 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 6 :&nbsp;</strong>Three workers A, B and C are given a job to paint a room. At the end of each day, they are given Rs. 800 collectively as wages. If A worked alone, the work would be completed in 6 days. If B worked alone, the work would be completed in 8 days.If C worked alone, the work would be completed in 24 days. Find their individual daily wages.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the total work be LCM (6, 8, 24) = 24 units.&nbsp;<br>=&gt; A&rsquo;s efficiency = 24/6 = 4 units / day&nbsp;<br>=&gt; B&rsquo;s efficiency = 24/8 = 3 units / day&nbsp;<br>=&gt; C&rsquo;s efficiency = 24/24 = 1 unit / day&nbsp;<br>We know that ratio of efficiencies = Ratio of wages&nbsp;<br>=&gt; Ratio of daily wages of A, B, C = 4:3:1&nbsp;<br>Also, it is given that they get Rs. 800 collectively at the end of each day.&nbsp;<br>Therefore, A&rsquo;s daily wages = Rs. 400&nbsp;<br>B&rsquo;s daily wages = Rs. 300&nbsp;<br>C&rsquo;s daily wages = Rs. 100&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 7 :&nbsp;</strong>A person A can do a piece of work in 9 days, whereas another person B can do the same piece of work in 12 days. Because of busy schedule, they decide to work one day alternately. If B is the first one to start, find the time required for the work to be completed. Consider that if a part of day is used, the whole day is to be counted.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the total work be LCM (9, 12) = 36 units&nbsp;<br>=&gt; A&rsquo;s efficiency = 36/9 = 4 units / day&nbsp;<br>=&gt; B&rsquo;s efficiency = 36/12 = 3 units / day&nbsp;<br>Now, since they work alternately, they would complete 7 units of work in two days.&nbsp;<br>=&gt; In 5 such cycles of alternate working, i.e., 10 days, they would have completed 35 units of work.&nbsp;<br>Now, work left = 1 unit&nbsp;<br>Now, B would do that in less than one day but we have to take into account one full day even if work goes on for some part of the day.&nbsp;<br>Therefore, time required for the work to be completed = 10+1 = 11 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 8 :&nbsp;</strong>45 men can dig a canal in 16 days. Six days after they started working, 30 more men joined them. In how many more days will the remaining work be completed ?&nbsp;<br><strong>Solution :&nbsp;</strong>Let the efficiency of each man be 1 unit / day.&nbsp;<br>Let the total work = 45 x 16 = 720 units&nbsp;<br>=&gt; Work done in 6 days by 45 men = 45 x 6 = 270 units&nbsp;<br>=&gt; Remaining work = 720-270 = 450 units&nbsp;<br>Now, we have 75 men with efficiency 1 unit / day each to complete the work.&nbsp;<br>Thus, More days required to complete the work = 450/75 = 6 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Alternate Method</strong>&nbsp;<br>Here, we can use the formula for comparison of work and efficiency&nbsp;<br><strong>M<sub>1</sub> D<sub>1</sub> H<sub>1</sub> E<sub>1</sub> / W<sub>1</sub> = M<sub>2</sub> D<sub>2</sub> H<sub>2</sub> E<sub>2</sub> / W<sub>2</sub></strong>&nbsp;<br>Here, M1 = 45 (initial number of men)&nbsp;<br>D1 = 6 (number of days 45 men work)&nbsp;<br>W1 = 270 (work done by 45 men in 6 days)&nbsp;<br>E1 = E2 = 1 (efficiency of each man)&nbsp;<br>We assume H1 = H2 = Number of working hours in a day&nbsp;<br>M2 = 75 (number of men after 6 days)&nbsp;<br>D2 = Number of days 75 men work or Number of more days required&nbsp;<br>W2 = 450 (work to be done by 75 men)&nbsp;<br>&nbsp;&nbsp;<br>So, we have (45 x 6 x 1) / 270 = (75 x D<sub>2</sub> x 1) / 450&nbsp;<br>Therefore, D<sub>2</sub> = 6 days&nbsp;<br>Hence, 6 more days are required to complete the work.&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 9 :&nbsp;</strong>2 Men and 3 Women working together can finish a job in 10 days. It takes 8 days to finish the same job if 3 Men and 2 Women are employed. If only 2 Men and 1 Woman are employed, find the time they would take to complete the job.&nbsp;<br><strong>Solution :&nbsp;</strong>Here, we need to use the summation formula for comparison of work and efficiency&nbsp;<br><strong>&sum;(M<sub>i</sub> E<sub>i</sub>) D<sub>1</sub> H<sub>1</sub> / W<sub>1</sub> = &sum;(M<sub>j</sub> E<sub>j</sub>) D<sub>2</sub> H<sub>2</sub> / W<sub>2</sub></strong>&nbsp;<br>Here, &sum;(M<sub>i</sub> E<sub>i</sub>) = 2M + 3W, where M is the efficiency of each Man and W is the efficiency of each Woman&nbsp;<br>&sum;(M<sub>j</sub> E<sub>j</sub>) = 3M + 2W&nbsp;<br>D<sub>1</sub> = 10&nbsp;<br>D<sub>2</sub> = 8&nbsp;<br>Also, H1 = H2 and W1 = W2&nbsp;<br>So, we have (2M + 3W) x 10 = (3M + 2W) x 8&nbsp;<br>=&gt; M:W = 7:2&nbsp;<br>Assume the constant of proportionality to be &lsquo;k&rsquo; here.&nbsp;<br>=&gt; M = 7k and W = 2k&nbsp;<br>&nbsp;&nbsp;<br>Now, we again apply the summation formula with LHS being any of the given set of values and RHS being the set of values corresponding to 2 Men and 1 Woman.&nbsp;<br>Therefore, (2M + 3W) x 10 = (2M + 1W) x D, where D is the number of days required to complete the work if 2 Men and 1 woman are employed.&nbsp;<br>=&gt; 20k x 10 = 16k x D&nbsp;<br>=&gt; D = 12.5 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 10 :&nbsp;</strong>To complete a job, A alone takes 2 more days than A and B together. B alone takes 18 more days than A and B together. Find the time taken if they work together.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the time required if A and B work together be &lsquo;n&rsquo; days.&nbsp;<br>=&gt; A alone takes n+2 days&nbsp;<br>=&gt; B alone takes n+18 days&nbsp;<br>So, work done by A in one day alone = 1 / (n+2)&nbsp;<br>Work done by B in one day alone = 1 / (n+18)&nbsp;<br>Total work done by both A and B in one day alone = 1/(n+2) + 1/(n+18)&nbsp;<br>But, total work done in one day if both A and B work together = 1/n&nbsp;<br>Therefore, 1/(n+2) + 1/(n+18) = 1/n&nbsp;<br>=&gt; (2n + 20) / [(n+2) x (n+18)] = 1/n&nbsp;<br>=&gt; 2n<sup>2</sup> + 20n = n<sup>2</sup> + 20n + 36&nbsp;<br>=&gt; n<sup>2</sup> = 36&nbsp;<br>=&gt; n = 6 (Since &lsquo;n&rsquo; is the number of days and cannot be negative)&nbsp;<br>Therefore, time taken to complete the job if both A and B work together = 6 days&nbsp;<br>&nbsp;&nbsp;<br><strong>Short Method</strong>&nbsp;<br>In these type of questions, we can simply do as :&nbsp;<br>n<sup>2</sup> = d<sub>1</sub> x d<sub>2</sub>, where d<sub>1</sub> is the additional days required by A and d<sub>2</sub> is the additional days required by B.&nbsp;<br>(<strong>NOTE :</strong> This short cut is applicable if only two people are working on a job)&nbsp;<br>So, n<sup>2</sup> = 2 x 18 = 36&nbsp;<br>=&gt; n = 6.&nbsp;<br>Therefore, time taken to complete the job if both A and B work together = 6 days&nbsp;</p>
</div>
<div><br></div>
        `
    },

    {
        topic: "Pipes and Cisterns",
        content: `<h1>Pipes and Cisterns</h1>
    
        <div>
                                    <p>Pipes and Cisterns are somewhat similar to the concepts of&nbsp;<a target="_blank"  href="https://www.geeksforgeeks.org/work-and-wages/">Work and Wages</a>.</p>
            <ul>
                <li>The problems of pipes and cisterns usually have two kinds of pipes, Inlet pipe and Outlet pipe / Leak. Inlet pipe is the pipe that fills the tank/reservoir/cistern and Outlet pipe / Leak is the one that empties it.</li>
                <li>If a pipe can fill a tank in &lsquo;n&rsquo; hours, then in 1 hour, it will fill &lsquo;1 / n&rsquo; parts. For example, if a pipe takes 6 hours to fill a tank completely, say of 12 liters, then in 1 hour, it will fill 1 / 6 th of the tank, i.e., 2 liters.</li>
                <li>If a pipe can empty a tank in &lsquo;n&rsquo; hours, then in 1 hour, it will empty &lsquo;1 / n&rsquo; parts. For example, if a pipe takes 6 hours to empty a tank completely, say of 18 liters, then in 1 hour, it will empty 1 / 6 th of the tank, i.e., 3 liters.</li>
                <li>If we have a number of pipes such that some fill the tank and some empty it, and we open all of them together, then in one hour, part of the tank filled/emptied = &sum; (1 / m<sub>i</sub>) &ndash; &sum; (1 / n<sub>j</sub>), where &lsquo;m<sub>i</sub>&lsquo; is the time taken by inlet pipe &lsquo;i&rsquo; to fill the tank completely if only it were open and &lsquo;n<sub>j</sub>&lsquo; is the time taken by outlet pipe &lsquo;j&rsquo; to empty the tank completely if only it were open. If the sign of this equation is positive, the tank would be filled and if the sign is negative, the tank would be emptied.</li>
            </ul>
                                    <p>This topic is really simple if you are able to solve the&nbsp;<a target="_blank"  href="https://www.geeksforgeeks.org/work-and-wages-gq/">problems in Work and Wages</a>.</p>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :</strong> Two pipes A and B can fill a tank separately in 12 and 16 hours respectively. If both of them are opened together when the tank is initially empty, how much time will it take to completely fill the tank?<br><strong>Solution :</strong> Part of tank filled by pipe A in one hour working alone = 1 / 12<br>Part of tank filled by pipe B in one hour working alone = 1 / 16<br>=&gt; Part of tank filled by pipe A and pipe B in one hour working together = (1 / 12) + (1 / 16) = 7 / 48<br>Therefore, time taken to completely fill the tank if both A and B work together = 48 / 7 hours<br>&nbsp;<br><strong>Another Method</strong><br>Let the capacity of tank be LCM (12, 16) = 48 units<br>=&gt; Efficiency of pipe A = 48 / 12 = 4 units / hour<br>=&gt; Efficiency of pipe B = 48 / 16 = 3 units / hour<br>=&gt; Combined efficiency of pipes A and B = 7 units / hour<br>Therefore, time taken to completely fill the tank = 48 / 7 hours<br>&nbsp;<br><strong>Question 2 :</strong> Three pipes A, B and C are connected to a tank. Out of the three, A and B are the inlet pipes and C is the outlet pipe. If opened separately, A fills the tank in 10 hours, B fills the tank in 12 hours and C empties the tank in 30 hours. If all three are opened simultaneously, how much time does it take to fill / empty the tank ?<br><strong>Solution :</strong> Part of tank filled by pipe A in one hour working alone = 1 / 10<br>Part of tank filled by pipe B in one hour working alone = 1 / 12<br>Part of tank emptied by pipe C in one hour working alone = 1 / 30<br>=&gt; Part of tank filled by pipes A,B and C in one hour working together = (1 / 10) + (1 / 12) &ndash; (1 / 30) = 3 / 20<br>Therefore, time taken to completely fill the tank if both A and B work together = 20 / 3 hours = 6 hours 40 minutes<br>&nbsp;<br><strong>Another Method</strong><br>Let the capacity of tank be LCM (10, 12, 30) = 60 units<br>=&gt; Efficiency of pipe A = 60 / 10 = 6 units / hour<br>=&gt; Efficiency of pipe B = 60 / 12 = 5 units / hour<br>=&gt; Efficiency of pipe C = &ndash; 60 / 30 = &ndash; 2 units / hour (Here, &lsquo;-&lsquo; represents outlet pipe)<br>=&gt; Combined efficiency of pipes A, B and C = 6 + 5 &ndash; 2 = 9 units / hour<br>Therefore, time taken to completely fill the tank = 60 / 9 = 6 hours 40 minutes<br>&nbsp;<br><strong>Question 3 :</strong> Three pipes A, B and C are connected to a tank. Out of the three, A is the inlet pipe and B and C are the outlet pipes. If opened separately, A fills the tank in 10 hours, B empties the tank in 12 hours and C empties the tank in 30 hours. If all three are opened simultaneously, how much time does it take to fill / empty the tank ?<br><strong>Solution :</strong> Part of tank filled by pipe A in one hour working alone = 1 / 10<br>Part of tank emptied by pipe B in one hour working alone = 1 / 12<br>Part of tank emptied by pipe C in one hour working alone = 1 / 30<br>=&gt; Part of tank filled by pipes A, B and C in one hour working together = (1 / 10) &ndash; (1 / 12) &ndash; (1 / 30) = -1 / 60<br>Therefore, time taken to completely empty the tank if all pipes are opened simultaneously = 1 / 60 hours = 60 hours<br>&nbsp;<br><strong>Another Method</strong><br>Let the capacity of tank be LCM (10, 12, 30) = 60 units<br>=&gt; Efficiency of pipe A = 60 / 10 = 6 units / hour<br>=&gt; Efficiency of pipe B = &ndash; 60 / 12 = &ndash; 5 units / hour (Here, &lsquo;-&lsquo; represents outlet pipe)<br>=&gt; Efficiency of pipe C = &ndash; 60 / 30 = &ndash; 2 units / hour (Here, &lsquo;-&lsquo; represents outlet pipe)<br>=&gt; Combined efficiency of pipes A, B and C = 6 &ndash; 5 &ndash; 2 = &ndash; 1 units / hour (Here, &lsquo;-&lsquo; represents outlet pipe)<br>Therefore, time taken to completely empty the tank = 60 / (1) = 60 hours<br>&nbsp;<br><strong>Question 4 :</strong> A cistern has two pipes. Both working together can fill the cistern in 12 minutes. First pipe is 10 minutes faster than the second pipe. How much time would it take to fill the cistern if only second pipe is used ?<br><strong>Solution :</strong> Let the time taken by first pipe working alone be &lsquo;t&rsquo; minutes.<br>=&gt; Time taken by second pipe working alone = t + 10 minutes.<br>Part of tank filled by pipe A in one hour working alone = 1 / t<br>Part of tank filled by pipe B in one hour working alone = 1 / (t + 10)<br>=&gt; Part of tank filled by pipe A and B in one hour working together = (1 / t) + (1 / t+10) = (2t + 10) / [t x (t + 10)]<br>But we are given that it takes 12 minutes to completely fill the cistern if both pipes are working together.<br>=&gt; (2t + 10) / [t x (t + 10)] = 1 / 12<br>=&gt; t x (t + 10) / (2t + 10) = 12<br>=&gt; t<sup>2</sup> + 10t = 24t + 120<br>=&gt; t<sup>2</sup> &ndash; 14t &ndash; 120 = 0<br>=&gt; (t &ndash; 20) (t + 6) = 0<br>=&gt; t = 20 minutes (Time cannot be negative)<br>Therefore, time taken by second pipe working alone = 20 + 10 = 30 minutes<br>&nbsp;<br><strong>Another Method</strong><br>Let the time taken by first pipe working alone be &lsquo;t&rsquo; minutes.<br>=&gt; Time taken by second pipe working alone = t + 10 minutes.<br>Let the capacity of cistern be t x (t + 10) units.<br>=&gt; Efficiency of first pipe = t x (t + 10) / t = (t + 10) units / minute<br>=&gt; Efficiency of second pipe = t x (t + 10) / (t + 10) = t units / minute<br>=&gt; Combined efficiency of pipes = (2t + 10) units / minute<br>=&gt; Time taken to fill the cistern completely = t x (t + 10) / (2t + 10)<br>But we are given that it takes 12 minutes to completely fill the cistern if both pipes are working together.<br>=&gt; t x (t + 10) / (2t + 10) = 12<br>=&gt; t<sup>2</sup> + 10t = 24t + 120<br>=&gt; t<sup>2</sup> &ndash; 14t &ndash; 120 = 0<br>=&gt; (t &ndash; 20) (t + 6) = 0<br>=&gt; t = 20 minutes (Time cannot be negative)<br>Therefore, time taken by second pipe working alone = 20 + 10 = 30 minutes<br>&nbsp;<br><strong>Question 5 :</strong> Three pipes A, B and C are connected to a tank. Out of the three, A and B are the inlet pipes and C is the outlet pipe. If opened separately, A fills the tank in 10 hours and B fills the tank in 30 hours. If all three are opened simultaneously, it takes 30 minutes extra than if only A and B are opened. How much time does it take to empty the tank if only C is opened?<br><strong>Solution :</strong> Let the capacity of tank be LCM (10, 30) = 30 units<br>=&gt; Efficiency of pipe A = 30 / 10 = 3 units / hour<br>=&gt; Efficiency of pipe B = 30 / 30 = 1 units / hour<br>=&gt; Combined efficiency of pipes A and B = 4 units/hour<br>Therefore, time taken to completely fill the tank if only A and B are opened = 30 / 4 = 7 hours 30 minutes<br>=&gt; Time taken to completely fill the tank if all pipes are opened = 7 hours 30 minutes + 30 minutes = 8 hours<br>=&gt; Combined efficiency of all pipes = 30 / 8 = 3.75 units / hour<br>Now, efficiency of pipe C = Combined efficiency of all three pipes &ndash; Combined efficiency of pipes A and B<br>Therefore, efficiency of pipe C = 4 &ndash; 3.75 = 0.25 units / hour<br>Thus, time taken to empty the tank if only C is opened = 30 / 0.25 = 120 hours<br>&nbsp;<br><strong>Question 6 :</strong> Time required by two pipes A and B working separately to fill a tank is 36 seconds and 45 seconds respectively. Another pipe C can empty the tank in 30 seconds. Initially, A and B are opened and after 7 seconds, C is also opened. In how much more time the tank would be completely filled ?<br><strong>Solution :</strong> Let the capacity of the tank be LCM (36, 45, 30) = 180 units<br>=&gt; Efficiency of pipe A = 180 / 36 = 5 units / second<br>=&gt; Efficiency of pipe B = 180 / 45 = 4 units / second<br>=&gt; Efficiency of pipe C = &ndash; 180 / 30 = &ndash; 6 units / second<br>Now, for the first 7 seconds, A and B were open.<br>=&gt; Combined efficiency of A and B = 5 + 4 = 9 units / second<br>=&gt; Part of the tank filled in 7 seconds = 7 x 9 = 63 units<br>=&gt; Part of tank empty = 180 &ndash; 63 = 117 units<br>Now, all pipes are opened.<br>=&gt; Combined efficiency of all pipes = 5 + 4 &ndash; 6 = 3 units / second<br>Therefore, more time required = 117 / 3 = 39 seconds<br>&nbsp;<br><strong>Question 7 :</strong> Two pipes A and B can fill a tank in 20 hours and 30 hours respectively. If both the pipes are opened simultaneously, find after how much time should pipe B be closed so that the tank is full in 18 hours?<br><strong>Solution :</strong> Let the capacity of the tank be LCM (20, 30) = 60 units<br>=&gt; Efficiency of pipe A = 60 / 20 = 3 units / hour<br>=&gt; Efficiency of pipe B = 60 / 30 = 2 units / hour<br>=&gt; Combined efficiency of pipes A and B = 5 units / hour<br>Let both A and B be opened for &lsquo;n&rsquo; hours and then, B be closed and only A be opened for the remaining &rsquo;18 &ndash; n&rsquo; hours.<br>=&gt; 5n + 3 x (18 &ndash; n) = 60<br>=&gt; 2n + 54 = 60<br>=&gt; 2n = 6<br>=&gt; n = 3<br>Therefore, B should be closed after 3 hours.</p>
        </div>
        <div><br></div>`
    },
    {
        content: `
        <h1>Time Speed Distance</h1>

<div>
    <p>Time, Speed and Distance (popularly known as TSD) is an important topic for written round of placements for any company.&nbsp;</p>
    <ul>
        <li><strong>Distance = Speed x Time</strong></li>
        <li>To convert from km / hour to m / sec, we multiply by 5 / 18. So, 1 km / hour = 5 / 18 m / sec</li>
        <li>To convert from m / sec to km / hour, we multiply by 18 / 5. So, 1 m / sec = 18 / 5 km / hour = 3.6 km / hour</li>
        <li>For a certain distance, if the ratio of speeds is x : y, then the ratio of times taken to cover the distance would be y : x and vice versa.</li>
        <li>If a person covers a certain same distance multiple times with different speeds, then&nbsp;<br>Average speed = n / &sum; (1/s<sub>i</sub>), where n is the number of times the distance is covered and s<sub>i</sub> are the respective speeds of covering the distance.&nbsp;<br>For example, if a person travels a distance of 10 km three times at the speeds of 4 km/h, 5 km/h and 6 km/h, then the average speed would be 3 / [ (1 / 4) + (1 / 5) + (1 / 6) ] = 3 / (37 / 60) = 180 / 37 &amp;approx; 4.86 km/h</li>
        <li><strong>Relative Speed</strong>&nbsp;<ul>
                <li>If two people / objects are moving in same direction with speeds x km / h and y km / h (x &gt; y), then their relative speed would be (x &ndash; y) km / h</li>
                <li>If two people / objects are moving in opposite direction with speeds x km / h and y km / h, then their relative speed would be (x + y) km / h</li>
                <li>Relative speed is the rate at which two moving bodies are separating from / coming closer to each other. For example, if two persons are moving at 10 km/h and 20 km/h in opposite directions, then their relative speed would be 10 + 20 = 30 km / h, i.e., the distance between them after one hour would be 30 km. Similarly, if they were moving in the same direction, their relative speed would be 20 &ndash; 10 = 10 km / h, i.e., the distance between them after one hour would be 10 km.</li>
            </ul>
        </li>
    </ul>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :</strong> A runner can complete a 750 m race in two and a half minutes. Will he be able to beat another runner who runs at 17.95 km / hr ?&nbsp;<br><strong>Solution :&nbsp;</strong>We are given that the first runner can complete a 750 m race in 2 minutes and 30 seconds or 150 seconds.&nbsp;<br>=&gt; Speed of the first runner = 750 / 150 = 5 m / sec&nbsp;<br>We convert this speed to km / hr by multiplying it by 18/5.&nbsp;<br>=&gt; Speed of the first runner = 18 km / hr&nbsp;<br>Also, we are given that the speed of the second runner is 17.95 km / hr.&nbsp;<br>Therefore, the first runner can beat the second runner.&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 2 :</strong> A man decided to cover a distance of 6 km in 84 minutes. He decided to cover two thirds of the distance at 4 km / hr and the remaining at some different speed. Find the speed after the two third distance has been covered.&nbsp;<br><strong>Solution :&nbsp;</strong>We are given that two thirds of the 6 km was covered at 4 km / hr.&nbsp;<br>=&gt; 4 km distance was covered at 4 km / hr.&nbsp;<br>=&gt; Time taken to cover 4 km = 4 km / 4 km / hr = 1 hr = 60 minutes&nbsp;<br>=&gt; Time left = 84 &ndash; 60 = 24 minutes&nbsp;<br>Now, the man has to cover remaining 2 km in 24 minutes or 24 / 60 = 0.4 hours&nbsp;<br>=&gt; Speed required for remaining 2 km = 2 km / 0.4 hr = 5 km / hr&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 3 :</strong> A postman traveled from his post office to a village in order to distribute mails. He started on his bicycle from the post office at the speed of 25 km / hr. But, when he was about to return, a thief stole his bicycle. As a result, he had to walk back to the post office on foot at the speed of 4 km / hr. If the traveling part of his day lasted for 2 hours and 54 minutes, find the distance between the post office and the village.&nbsp;<br><strong>Solution :&nbsp;</strong>Let time taken by postman to travel from post office to village=t minutes.&nbsp;<br>According to the given situation, distance from post office to village, say d1=25/60*t km {25 km/hr = 25/60 km/minutes}&nbsp;<br>And&nbsp;<br>distance from village to post office, say d2=4/60*(174-t) km {2 hours 54 minutes = 174 minutes}&nbsp;<br>Since distance between village and post office will always remain same i.e. d1 = d2&nbsp;<br>=&gt; 25/60*t = 4/60*(174-t) =&gt; t = 24 minutes.&nbsp;<br>=&gt; Distance between post office and village = speed*time =&gt;25/60*24 = 10km&nbsp;</p>
    <p>&nbsp;<strong>Question 4 :</strong> Walking at the speed of 5 km / hr from his home, a geek misses his train by 7 minutes. Had he walked 1 km / hr faster, he would have reached the station 5 minutes before the actual departure time of the train. Find the distance between his home and the station.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the distance between his home and the station be &lsquo;d&rsquo; km.&nbsp;<br>=&gt; Time required to reach the station at 5 km / hr = d/5 hours&nbsp;<br>=&gt; Time required to reach the station at 6 km / hr = d/6 hours&nbsp;<br>Now, the difference between these times is 12 minutes = 0.2 hours. (7 minutes late &ndash; 5 minutes early = (7) &ndash; (-5) = 12 minutes)&nbsp;<br>Therefore, (d / 5) &ndash; (d / 6) = 0.2&nbsp;<br>=&gt; d / 30 = 0.2&nbsp;<br>=&gt; d = 6&nbsp;<br>Thus, the distance between his home and the station is 6 km.&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 5 :</strong> Two stations B and M are 465 km distant. A train starts from B towards M at 10 AM with the speed 65 km / hr. Another train leaves from M towards B at 11 AM with the speed 35 km / hr. Find the time when both the trains meet.&nbsp;<br><strong>Solution :&nbsp;</strong>The train leaving from B leaves an hour early than the train that leaves from M.&nbsp;<br>=&gt; Distance covered by train leaving from B = 65 km / hr x 1 hr = 65 km&nbsp;<br>Distance left = 465 &ndash; 65 = 400 km&nbsp;<br>Now, the train from M also gets moving and both are moving towards each other.&nbsp;<br>Applying the formula for relative speed,&nbsp;<br>Relative speed = 65 + 35 = 100 km / hr&nbsp;<br>=&gt; Time required by the trains to meet = 400 km / 100 km / hr = 4 hours&nbsp;<br>Thus, the trains meet at 4 hours after 11 AM, i.e., 3 PM.&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 6 :</strong> A policeman sighted a robber from a distance of 300 m. The robber also noticed the policeman and started running at 8 km / hr. The policeman also started running after him at the speed of 10 km / hr. Find the distance that the robber would run before being caught.&nbsp;<br><strong>Solution :&nbsp;</strong>Since both are running in the same direction, relative speed = 10 &ndash; 8 = 2 km / hr&nbsp;<br>Now, to catch the robber if he were stagnant, the policeman would have to run 300 m. But since both are moving, the policeman needs to finish off this separation of 300 m.&nbsp;<br>=&gt; 300 m (or 0.3 km)is to be covered at the relative speed of 2 km / hr.&nbsp;<br>=&gt; Time taken = 0.3 / 2 = 0.15 hours&nbsp;<br>Therefore, distance run by robber before being caught = Distance run in 0.15 hours&nbsp;<br>=&gt; Distance run by the robber = 8 x 0.15 = 1.2 km&nbsp;<br>&nbsp;&nbsp;<br><strong>Another Solution :&nbsp;</strong><br>Time of running for both the policeman and the robber is same.&nbsp;<br>We know that Distance = Speed x Time&nbsp;<br>=&gt; Time = Distance / Speed&nbsp;<br>Let the distance run by the robber be &lsquo;x&rsquo; km at the speed of 8 km / hr.&nbsp;<br>=&gt; Distance run by policeman at the speed of 10 km / hr = x + 0.3&nbsp;<br>Therefore, x / 8 = (x + 0.3) / 10&nbsp;<br>=&gt; 10 x = 8 (x + 0.3)&nbsp;<br>=&gt; 10 x = 8 x + 2.4&nbsp;<br>=&gt; 2 x = 2.4&nbsp;<br>=&gt; x = 1.2&nbsp;<br>Therefore, Distance run by the robber before getting caught = 1.2 km&nbsp;</p>
    <p><strong>Question 7 :</strong> To cover a certain distance, a geek had two options, either to ride a horse or to walk. If he walked one side and rode back the other side, it would have taken 4 hours. If he had walked both ways, it would have taken 6 hours. How much time will he take if he rode the horse both ways ?&nbsp;<br><strong>Solution :&nbsp;</strong>Time taken to walk one side + Time taken to ride one side = 4 hours&nbsp;<br>Time taken to walk both sides = 2 x Time taken to walk one side = 6 hours&nbsp;<br>=&gt; Time taken to walk one side = 3 hours&nbsp;<br>Therefore, time taken to ride one side = 4 &ndash; 3 = 1 hour&nbsp;<br>Thus, time taken to ride both sides = 2 x 1 = 2 hours&nbsp;</p>
</div>
<div><br></div>
        `,
        topic: "Time Speed Distance"
    },
    {
        content: `<h1>Trains, Boats and Streams</h1>
 
        <div>
                                    <p>We recommend that you read about&nbsp;<a target="_blank"  href="https://www.geeksforgeeks.org/time-speed-distance/">Time Speed Distance</a> before proceeding on with this topic.&nbsp;<br>&nbsp;</p>
            <h3>Trains</h3>
            <p>&nbsp;</p>
            <ul>
                <li>If two trains are moving in same direction with speeds a km / hr and b km / hr, then their relative speed would be |a &ndash; b| km / hr.</li>
                <li>If two trains are moving in different directions, i.e., coming towards each other or going away from each other, with speeds a km / hr and b km / hr, then their relative speed would be (a + b) km / hr.</li>
                <li>Time taken by a train, &lsquo;t&rsquo; meters long, to pass a stationary object of length &lsquo;l&rsquo; meters would be the time taken by the train to travel &lsquo;t + l&rsquo; meters. For example, to cover a platform of 800 m, a train of length 200 m moving at the speed of 10 m / s would be the time taken by the train to cover 800 + 200 = 1000 m at the speed of 10 m / s, i.e., 1000 / 10 = 100 s.</li>
                <li>To pass a pole or a man or a post (or any stationary object with negligible length as compared to the length of the train, like if the train is 500 m long and a pole is 1 m in length), the time taken by the train would be the time it takes to travel the length of the train. For example, if a train of length 100 m is moving at the speed of 10 m / s, it would take 100 / 10 = 10 s to pass a pole / man / post.</li>
                <li>If two trains of lengths L1 and L2 are moving in the same direction with speeds S1 and S2, then the time required by faster train to overtake the slower train would be the time taken to cover an equivalent distance of L1 + L2, with relative speed |S1 &ndash; S2|, i.e., Time = (L1 + L2) / |S1 &ndash; S2|.</li>
                <li>If two trains of lengths L1 and L2 are moving in opposite directions with speeds S1 and S2, then the time required by the trains to cross each other completely would be the time taken to cover an equivalent distance of L1 + L2, with relative speed (S1 + S2), i.e., Time = (L1 + L2) / (S1 + S2).</li>
                <li>If two trains started moving towards each other at the same time with speeds S1 and S2 respectively and after meeting, they take &lsquo;T1&rsquo; and &lsquo;T2&rsquo; seconds respectively, then S1 : S2 = T2<sup>1/2</sup> : T1<sup>1/2</sup></li>
            </ul>
            <p>&nbsp;</p>
            <h3>Boats and Streams</h3>
            <p>&nbsp;</p>
            <ul>
                <li>If the boat is moving in the direction of the stream, it is said to be going downstream. And if the boat is moving opposite to the direction of stream, it is said to be going upstream.</li>
                <li>If the speed of boat in still water is B km / hr and speed of the stream is S km / hr,&nbsp;<ol>
                        <li>Speed Upstream = B &ndash; S km / hr</li>
                        <li>Speed Downstream = B + S km / hr</li>
                    </ol>
                </li>
                <li>If the speed upstream is U km / hr and speed downstream is D km / hr,&nbsp;<ol>
                        <li>Speed of boat in still water = 0.5 x (D + U) km / hr</li>
                        <li>Speed of stream = 0.5 x (D &ndash; U) km / hr</li>
                    </ol>
                </li>
            </ul>
            <p>&nbsp;</p>
            <div><br></div>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>A 100 m long train moving at a speed of 60 km / hr passes a man standing on a pavement near a railway track. Find the time taken by the train to pass the man.&nbsp;<br><strong>Solution :&nbsp;</strong>Length of the train = 100 m = 0.1 km&nbsp;<br>Speed of the train = 60 km / hr&nbsp;<br>So, time taken by the train to pass the man = time taken to cover 0.1 km at the speed of 60 km / hr&nbsp;<br>Therefore, time taken by the train to pass the man = 0.1 / 60 hour = (0.1 / 60) x 3600 sec = 6 sec&nbsp;</p>
            <p><strong>Question 2 :&nbsp;</strong>How long does a train 1000 m long moving at a speed of 90 km / hr would take to pass through a 500 m long bridge?&nbsp;<br><strong>Solution :&nbsp;</strong>Here, time taken by the train to pass the bridge completely would be the time it takes to cover 1000 + 500 = 1500 m at the speed of 90 km / hr = 90 x (5/18) = 25 m / sec.&nbsp;<br>Therefore, time required = 1500 / 25 = 60 sec = 1 minute&nbsp;</p>
            <p><strong>Question 3 :&nbsp;</strong>A man standing near a railway track observes that a train passes him in 80 seconds but to pass by a 180 m long bridge, the same train takes 200 seconds. Find the speed of the train.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the length of the train be L meters.&nbsp;<br>=&gt; The train covers L meters in 80 seconds and L + 180 meters in 200 seconds, with the same speed.&nbsp;<br>We know that Speed = Distance / Time.&nbsp;<br>=&gt; Speed = L / 80 = (L + 180) / 200&nbsp;<br>=&gt; L / 80 = (L + 180) / 200&nbsp;<br>=&gt; 2.5 L = L + 180&nbsp;<br>=&gt; 1.5 L = 180&nbsp;<br>=&gt; L = 120&nbsp;<br>Thus, speed of the train = 120 / 80 = 1.5 m / sec&nbsp;</p>
            <p><strong>Question 4 :&nbsp;</strong>Two trains 140 m and 160 m long are moving towards each other on parallel tracks with speeds 40 km / hr and 50 km / hr respectively. How much time would they take to pass each other completely ?&nbsp;<br><strong>Solution :&nbsp;</strong>Total distance to be covered = 140 + 160 m = 300 m&nbsp;<br>Relative speed = 40 + 50 = 90 km / hr = 90 x (5 / 18) m / sec = 25 m / sec&nbsp;<br>Therefore, time taken to pass each other = 300 / 25 = 12 sec&nbsp;</p>
            <p><strong>Question 5 :&nbsp;</strong>Two trains 140 m and 160 m long are moving in the same direction on parallel tracks with speeds 40 km / hr and 50 km / hr respectively. How much time would the faster train require to overtake the slower train ?&nbsp;<br><strong>Solution :&nbsp;</strong>Total distance to be covered = 140 + 160 m = 300 m&nbsp;<br>Relative speed = 50 &ndash; 40 = 10 km / hr = 10 x (5 / 18) m / sec = 50 / 18 m / sec&nbsp;<br>Therefore, time taken by faster train to overtake the slower train = 300 / (50/18) = 108 sec&nbsp;</p>
            <p><strong>Question 6 :&nbsp;</strong>A 500 m long train takes 36 seconds to cross a man walking in the opposite direction at the speed of 10 km / hr. Find the speed of the train.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the speed of the train be T km / hr.&nbsp;<br>=&gt; Relative speed = T + 10 km / hr&nbsp;<br>=&gt; Length of the train = 500 m = 0.5 km&nbsp;<br>We know that Distance = Speed x Time&nbsp;<br>=&gt; 0.5 = (T + 10) x (36 / 3600)&nbsp;<br>=&gt; 50 = T + 10&nbsp;<br>=&gt; T = 40 km / hr&nbsp;<br>Therefore, speed of the train is 40 km / hr.&nbsp;</p>
            <p><strong>Question 7 :&nbsp;</strong>A non &ndash; stop train started from Delhi towards Mumbai and at the same time, another non &ndash; stop train started from Mumbai towards Delhi. If after meeting in Bhopal they took 9 and 16 hours respectively to reach their destinations, find the speed of the train that started from Delhi, given that the speed of the train that started from Mumbai was moving at a speed of 90 km / hr.&nbsp;<br><strong>Solution :&nbsp;</strong>We know that for two trains starting at the same time, S1 : S2 = T2<sup>1/2</sup> : T1<sup>1/2</sup><br>Here, S2 = 90 km / hr&nbsp;<br>T1 = 9 &nbsp;hrs&nbsp;<br>T2 = 16 &nbsp;hrs&nbsp;<br>=&gt; S1 : 90 = 4 : 3&nbsp;<br>=&gt; S1 = 120 km / hr&nbsp;<br>Therefore, speed of train that started from Delhi = 120 km / hr&nbsp;</p>
            <p><strong>Question 8 :&nbsp;</strong>A boatman can row a boat upstream at 14 km / hr and downstream at 20 km / hr. Find the speed of the boat in still water and speed of the stream.&nbsp;<br><strong>Solution :&nbsp;</strong>We are given that speed downstream, D = 20 km / hr and speed upstream, U = 14 km / hr&nbsp;<br>Therefore, Speed of boat in still water = 0.5 x (D + U) km / hr = 0.5 x (14 + 20) = 17 km / hr&nbsp;<br>Also, speed of the stream = 0.5 x (D &ndash; U) km / hr = 0.5 x (20 &ndash; 14) = 3 km / hr&nbsp;</p>
            <p><strong>Another method :&nbsp;</strong><br>Speed of the stream = 0.5 x (D &ndash; U) = 0.5 x 6 = 3 km / hr&nbsp;<br>Speed of the boat in still water = Speed of the stream + Speed Upstream = 3 + 14 = 17 km / hr&nbsp;<br><strong>Question 9 :&nbsp;</strong>A boatman can row a boat at the speed of 5 km upstream and 15 km downstream. To cover upstream he needs 2.5 hours and to cover downstream, he needs 1.5 hours. Find the speed of the stream and speed of the boat in still water.&nbsp;<br><strong>Solution :&nbsp;</strong>We are given that the boatman covers 5 km upstream in 2.5 hours and 15 km downstream in 10 hours.&nbsp;<br>=&gt; Speed upstream, U = 5 / 2.5 = 2 km / hr&nbsp;<br>=&gt; Speed downstream, D = 15 / 1.5 = 10 km / hr&nbsp;<br>Therefore, Speed of boat in still water = 0.5 x (D + U) km / hr = 0.5 x (10 + 2) = 6 km / hr&nbsp;<br>Also, speed of the stream = 0.5 x (D &ndash; U) km / hr = 0.5 x (10 &ndash; 2) = 4 km / hr&nbsp;</p>
            <p><strong>Question 10 :&nbsp;</strong>A man has to go from a port to an island and return. He can row a boat with the speed 7 km / hr in still water. The speed of the stream is 2 km / hr. If he takes 56 minutes to complete the round trip, find the distance between the port and the island.&nbsp;<br><strong>Solution :&nbsp;</strong>Speed upstream = 7 &ndash; 2 = 5 km / hr&nbsp;<br>Speed downstream = 7 + 2 = 9 km / hr&nbsp;<br>Let the distance for the complete round trip be D km. Also, we know that Time = Distance / Speed&nbsp;<br>=&gt; (D/5) + (D/9) = 56/60&nbsp;<br>=&gt; (14 D) / 45 = 56 / 60&nbsp;<br>=&gt; D = 3 km&nbsp;</p>
            <p>Distance in between the port and the island = D/2</p>
            <p>=&gt; &nbsp;3/2 = 1.5 km<br>Therefore, the distance between the port and the island = 1.5 km&nbsp;</p>
            <p><strong>Question 11 :&nbsp;</strong>In a boat race, a person rows a boat 6 km upstream and return to the starting point in 4 hours. If the speed of the stream is 2 km / hr, find the speed of the boat in still water.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the speed of the boat in still water be B km / hr.&nbsp;<br>=&gt; Speed upstream = (B &ndash; 2) km / hr&nbsp;<br>=&gt; Speed downstream = (B + 2) km / hr&nbsp;<br>We know that Time = Distance / Speed&nbsp;<br>=&gt; 6/(B-2) + 6/(B+2) = 4&nbsp;<br>=&gt; 6 B + 12 + 6 B &ndash; 12 = 4 (B &ndash; 2) (B + 2)&nbsp;<br>=&gt; 12 B = 4 (B &ndash; 2) (B + 2)&nbsp;<br>=&gt; 3 B = B<sup>2</sup> &ndash; 4&nbsp;<br>=&gt; B<sup>2</sup> &ndash; 3 B &ndash; 4 = 0&nbsp;<br>=&gt; (B + 1) (B &ndash; 4) = 0&nbsp;<br>=&gt; B = 4 km / hr (Speed cannot be negative)&nbsp;</p>
            <p><strong>Question 12 :&nbsp;</strong>A racer can row a boat 30 km upstream and 44 km downstream in 10 hours. Also, he can row 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water and speed of the stream.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the speed upstream be U km / hr and speed downstream be D km / hr.&nbsp;<br>We know that Distance / Speed = Time&nbsp;<br>=&gt; (30 / U) + (44 / D) = 10 and (40 / U) + (55 / D) = 13&nbsp;<br>Solving the above pair of linear equations, we get&nbsp;<br>D = 11 km / hr&nbsp;<br>U = 5 km / hr&nbsp;<br>Therefore, Speed of boat in still water = 0.5 x (D + U) km / hr = 0.5 x (11 + 5) = 8 km / hr&nbsp;<br>Also, speed of the stream = 0.5 x (D &ndash; U) km / hr = 0.5 x (11 &ndash; 5) = 3 km / hr&nbsp;</p>
            <p>&nbsp;</p>
        </div>
        <div><br></div>`,
        topic: "Trains, Boats and Streams"
    },
    {
        content: `<h1>Percentages</h1>
  
        <div>
            <p>Percentages is an important topic not only from QA point of view, but also because of its extensive use in Data Interpretation.</p>
            <ul>
                <li>Percentage means per 100, i.e., p% means p / 100</li>
                <li>To convert a fraction to percentage, we multiply by 100 and add the &ldquo;%&rdquo; sign. For example, to express 1 / 5 in percentage, we simply multiply by 100, (1 / 5) x 100 = 20 %</li>
                <li>To convert a percentage to fraction, we simply divide by 100. For example, 25 % = 25 / 100 = 1 / 4</li>
                <li>Expenditure = Price x Consumption<ol>
                        <li>If price of an article increases by P %, the necessary reduction in consumption to avoid increase in expenditure = [( P / (100 + P) ) x 100] %</li>
                        <li>If price of an article decreases by P %, the necessary increase in consumption to keep the same expenditure = [( P / (100 &ndash; P) ) x 100] %</li>
                    </ol>
                </li>
                <li>Population : If the population of a group/community/country/place(etc.) is currently P and if it increases by R % every year, then :<ol>
                        <li>Population after &lsquo;n&rsquo; years = P x [1 + (R / 100)]<sup>n</sup></li>
                        <li>Population before &lsquo;n&rsquo; years = P / [1 + (R / 100)]<sup>n</sup></li>
                    </ol>
                </li>
                <li>Depreciation : If the price (or value) of an article is currently P and if it depreciates by R % every year, then:<ol>
                        <li>Price (or value) after &lsquo;n&rsquo; years = P x [1 &ndash; (R / 100)]<sup>n</sup></li>
                        <li>Price (or value) before &lsquo;n&rsquo; years = P / [1 &ndash; (R / 100)]<sup>n</sup></li>
                    </ol>
                </li>
                <li>x % of y and y % of x are same. For example, 10 % of 100 and 100 % of 10 are same.</li>
                <li>A successive increase of a% and b% is equivalent to a net increase of a + b + ((a x b) / 100) %</li>
                <li>A successive decrease of a% and b% is equivalent to a net decrease of a + b &ndash; ((a x b) / 100) %</li>
                <li>A successive increase of a% and decrease of b% is equivalent to a net change of a &ndash; b + ((a x (-b) / 100) % = a &ndash; b &ndash; ((a x b) / 100) %</li>
                <li>A successive decrease of a% and increase of b% is equivalent to a net change of b &ndash; a + (((-a) x b) / 100) % = b &ndash; a &ndash; ((a x b) / 100) %</li>
                <li>An increase by n % and a successive decrease by n % is equal to an equivalent decrease of (n/10)<sup>2</sup> %. For example, if the price of an article is increased by 10 %, and is then successively decreased by 10 %, then this is equal to a decrease of (10/10)<sup>2</sup> = 1 %</li>
            </ul>
            <p><strong>Note &ndash;</strong> If there is % decrease instead of % increase, then we take (-) negative sign.</p>
            <h3>Sample Problems &ndash;</h3>
            <p><strong>Question 1 :&nbsp;</strong>A defect finding machine rejects 0.085% of all the cricket bats. Find the number of bats manufactured on a particular day if it is given that on that day, the machine rejected only 34 bats.<br><strong>Solution :&nbsp;</strong>Let the total number of bats on that day be n.<br>=&gt; 0.085 % of n = 34<br>=&gt; (0.085 / 100) x n = 34<br>=&gt; n = 34 x (100 / 0.085)<br>=&gt; n = 40,000<br>Therefore, total number of bats manufactured on the day = 40,000<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>25 % of a number is 8 less than one third of that number. Find the number.<br><strong>Solution :&nbsp;</strong>Let the number be n.<br>=&gt; (n / 3) &ndash; 25 % of n = 8<br>=&gt; (n / 3) &ndash; (n / 4) = 8<br>=&gt; n / 12 = 8<br>=&gt; n = 96<br>Thus, 96 is the required number.<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>Difference of two numbers &lsquo;x&rsquo; and &lsquo;y&rsquo; (x &gt; y) is 100. Also, 10 % of &lsquo;x&rsquo; is equal to 15 % of &lsquo;y&rsquo;. Find the numbers.<br><strong>Solution :&nbsp;</strong>We are given that x &ndash; y = 100 and 10 % of x = 15 % of y<br>=&gt; x &ndash; y = 100 and (10 / 100) x = (15 / 100) y<br>=&gt; x &ndash; y = 100 and 10 x = 15 y<br>=&gt; x &ndash; y = 100 and 2 x = 3 y<br>=&gt; x &ndash; y = 100 and x = 1.5 y<br>=&gt; 1.5 y &ndash; y = 100<br>=&gt; 0.5 y = 100<br>=&gt; y = 200<br>=&gt; x = 1.5 y = 300<br>Thus, the required numbers are 300 and 200.<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>In a gaming event, 75 % of the registered participants actually turned up. Out of those, 2 % were declared unfit for participation. The winner defeated 9261 participants which is 75 % of the total valid participations. Find the number of registered participants.<br><strong>Solution :&nbsp;</strong>Let the number of registered participants be n.<br>Number of participants who actually turned up = 75 % of n<br>Number of valid participations = 98 % of (75 % of n) [because 2% were invalid]<br>Number of participants defeated by the winner = 75 % of 98 % of (75 % of n) = 9261<br>=&gt; 0.75 x 0.98 x 0.75 x n = 9261<br>=&gt; 0.55125 x n = 9261<br>=&gt; n = 16800<br>Therefore, number of registered participants = 16800<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>In a test, a geek could answer 70 % C++ questions, 40 % C questions and 60 % Java questions correctly. The test had a total of 75 questions, 10 from C++, 30 from C and 35 from Java. A minimum of 60 % in aggregate was required to be considered for interview. The geek could not clear the test and was not shortlisted for interview. Find by how much marks did the geek miss the interview call, given that each question was of 1 mark and there was no negative marking for incorrect answers.<br><strong>Solution :&nbsp;</strong>We are given that the geek could answer 70 % C++ questions, 40 % C questions and 60 % Java questions correctly and there were total 75 questions : 10 from C++, 30 from C and 35 from Java.<br>=&gt; C++ questions answered correctly = 70 % of 10 = 7<br>=&gt; C questions answered correctly = 40 % of 30 = 12<br>=&gt; Java questions answered correctly = 60 % of 35 = 21<br>=&gt; Total questions answered correctly = 7 + 12 + 21 = 40<br>=&gt; Marks secured = 40 x 1 = 40<br>Now, marks required = 60 % of 75 = 45<br>=&gt; Shortfall in marks = 45 &ndash; 40 = 5<br>Therefore, the geek missed the interview call by 5 marks.<br>&nbsp;<br><strong>Question 6 :&nbsp;</strong>A geek gave 40% of his retirement money to his wife. He also gave 20 % of the remaining amount to each of his 3 sons. 50 % of the amount now left was spent on miscellaneous items and the remaining amount of Rs. 1,20,000 was deposited in the bank. How much money did the geek got as the retirement money?<br><strong>Solution :&nbsp;</strong>Let the retirement money be Rs. 100 n<br>=&gt; Money given to wife = 40 % of 100 n = 40 n, Balance = 60 n<br>=&gt; Money given to 3 sons = 3 x (20 % of 60 n) = 3 x 12 n = 36 n, Balance = 24 n<br>=&gt; Money spent on miscellaneous items = 50 % of 24 n = 12 n, Balance = 12 n<br>Now, this remaining 12 n is the money deposited in the bank, i.e., Rs. 1,20,000<br>=&gt; 12 n = 1,20,000<br>=&gt; n = 10,000<br>Therefore, geek&rsquo;s retirement money = 100 n = Rs. 10,00,000<br>&nbsp;<br><strong>Question 7 :&nbsp;</strong>A broker charges commission of 5% on all orders upto Rs.10,000 and 4% on all orders exceeding Rs. 10,000. He remits Rs. 31,100 to his client after deducting his commission. Find the order amount.<br><strong>Solution :&nbsp;</strong>Let the order amount be Rs. n<br>=&gt; Commission charged = 5 % of Rs. 10,000 + 4 % of (Rs. n &ndash; 10,000) = Rs. 500 + 0.04 n &ndash; 400<br>=&gt; Commission charged = Rs. 100 + 0.04 n<br>Now, amount remitted = Rs. n &ndash; (100 + 0.04 n) = 31,100<br>=&gt; 0.96 n &ndash; 100 = 31,100<br>=&gt; 0.96 n = 31200<br>=&gt; n = 32500<br>Therefore, order amount = Rs. 32,500<br>&nbsp;<br><strong>Question 8 :&nbsp;</strong>A seller marked up the price of an article by 20 % and then gave a discount of 20 %. Find what percent did he lose in the transaction.<br><strong>Solution :&nbsp;</strong>We know that an increase by n % and a successive decrease by n % is equal to an equivalent decrease of (n/10)<sup>2</sup> %.<br>=&gt; Net decrease or loss of the seller = (20/10)<sup>2</sup> = 4 %<br>&nbsp;<br><strong>Question 9 :&nbsp;</strong>The price of a commodity increased by 25 %. By what percent should the consumption be reduced so as to keep the expenditure same ?<br><strong>Solution :&nbsp;</strong>We know that if price of increases by P %, the necessary reduction in consumption to avoid increase in expenditure = [( P / (100 + P) ) x 100] %<br>Therefore, reduction in consumption required = (25 / 125) x 100 = 20 %<br>&nbsp;<br><strong>Question 10 :&nbsp;</strong>If the numerator of a fraction is decreased by 15% and its denominator is diminished by 10% , the value of the fraction is 2 / 9. Find the original fraction.<br><strong>Solution :&nbsp;</strong>Let the fraction be N / D, where N is the numerator and D is the denominator.<br>=&gt; (N &ndash; 15 % of N) / (D &ndash; 10 % of D) = 2 / 9<br>=&gt; 0.85 N / 0.9 D = 2 / 9<br>=&gt; 85 N / 90 D = 2 / 9<br>=&gt; N / D = 4 / 17<br>Therefore, the original fraction is 4 / 17<br>&nbsp;<br><strong>Question 11 :&nbsp;</strong>The population of a town is 1,60,000 in the current year. If it increases at the rate of 5% per annum, what will be the population 3 years from now ?<br><strong>Solution :&nbsp;</strong>We know that if the population is currently P and it increases by R % every year, then, population after &lsquo;n&rsquo; years = P x [1 + (R / 100)]<sup>n</sup><br>=&gt; Population after 3 years = 1,60,000 x [1 + (5 / 100)]<sup>3</sup><br>=&gt; Population after 3 years = 1,60,000 x (1.05)<sup>3</sup><br>=&gt; Population after 3 years = 1,60,000 x 1.157625 = 185220<br>&nbsp;<br><strong>Question 12 :&nbsp;</strong>The value of a car is Rs 1,60,000 in the current year. If it depreciates at the rate of 5% per annum, what will be the value of the car 3 years from now ?<br><strong>Solution :&nbsp;</strong>We know that if the value is currently P and it depreciates by R % every year, then, value after &lsquo;n&rsquo; years = P x [1 &ndash; (R / 100)]<sup>n</sup><br>=&gt; Value after 3 years = 1,60,000 x [1 &ndash; (5 / 100)]<sup>3</sup><br>=&gt; Value after 3 years = 1,60,000 x (0.95)<sup>3</sup><br>=&gt; Value after 3 years = 1,60,000 x 0.857375 = Rs. 1,37,180<br>&nbsp;<br><strong>Question 13 :&nbsp;</strong>How much sugar (in KG) must be added to 50 KG of a 2 % sugar solution so as to make the concentration 10 % ?<br><strong>Solution :&nbsp;</strong>Sugar in initial solution = 2 % of 50 KG = 1 KG<br>Let the sugar added be n KG.<br>=&gt; (1 + n) / (50 + n) = 10 / 100<br>=&gt; n = 40 / 9<br>Therefore, 40 / 9 KG of sugar should be added.<br>&nbsp;<br><strong>Question 14 :&nbsp;</strong>In an examination , 80% of the students passed in English , 85% in Mathematics and 75% in both English and Mathematics. If 40 students failed in both the subjects, find the total number of students who appeared in the examination.<br><strong>Solution :&nbsp;</strong>Let the total number of students be 100 n.<br>=&gt; Students passed in English = 80 % of 100 n = 80 n<br>=&gt; Students passed in Mathematics = 85 % of 100 n = 85 n<br>=&gt; Students passed in both English and Mathematics = 75 % of 100 n = 75 n<br>=&gt; Total number of students passed in atleast one subject = 80 n + 85 n &ndash; 75 n = 90 n<br>=&gt; Number of students who failed in both the subjects = 100 n &ndash; 90 n = 10 n = 40 (given)<br>=&gt; n = 4<br>Therefore, total number of students who appeared in the examination = 100 n = 400</p>
        </div>
        <div><br></div>`,
        topic: "Percentages"
    },
    {
        content: `<h1>Ratio Proportion and Partnership</h1>

        <div>
            <h3>Ratio and Proportion</h3>
            <ul>
                <li>Ratio of two quantities &lsquo;a&rsquo; and &lsquo;b&rsquo; having same units is simply a / b and is usually written as a:b</li>
                <li>The equivalence of two ratios is called proportion. If a : b = c : d, then a, b, c, d are said to be in proportion. Here, a x d = b x c</li>
                <li>Mean proportional is the geometric mean. For example, the mean proportional of &lsquo;a&rsquo; and &lsquo;b&rsquo; is square root of (a x b)</li>
                <li>If we have two ratios, say a : b and c : d, then (a x c) : (b x d) is called the compounded ratio</li>
                <li>If a : b = c : d, i.e., a/b = c/d, then (a + b) / (a &ndash; b) = (c + d) / (c &ndash; d)<br>This is called Componendo and Dividendo</li>
                <li>If we say that &lsquo;a&rsquo; is directly proportional to &lsquo;b&rsquo;, it means that a = k x b, where &lsquo;k&rsquo; is the constant of proportionality</li>
                <li>If we say that &lsquo;a&rsquo; is inversely proportional to &lsquo;b&rsquo;, it means that a = k / b or a x b = k, where &lsquo;k&rsquo; is the constant of proportionality</li>
                <li>If a ratio is multiplied or divided by a certain number, the properties of the ratio do not change. For example, if we multiply 1 : 2 by 5, we get 5 : 10, which is same as 1 : 2</li>
            </ul>
            <h3>Partnership</h3>
            <ul>
                <li>When more than one person is involved in a business, it is said to be running in partnership.</li>
                <li>The gains/losses from the business are divided in the ratio of their inputs, where input is calculated as the product of amount of investment and time period of investment.<br>If A and B invest Rs. V1 and Rs. V2 in a business for a time period of T1 and T2 respectively, then the profit/loss from the business is divided in the ratio (V1 x T1) : (V2 x T2)<br>The formula gets a summation if some amount is invested for a part of the total time period and some other amount is invested for the remaining time period.</li>
                <li>For same period of investment, the profit/loss from the business is divided in the ratio of value of investments, i.e., V1 : V2<h3>Sample Problems</h3>
                    <p><strong>Question 1 :&nbsp;</strong>If a : b = 5 : 9 and b : c = 7 : 4, then find a : b : c.<br><strong>Solution :&nbsp;</strong>Here, we make the common term &lsquo;b&rsquo; equal in both ratios.<br>Therefore, we multiply the first ratio by 7 and the second ratio by 9.<br>So, we have a : b = 35 : 63 and b : c = 63 : 36<br>Thus, a : b : c = 35 : 63 : 36<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the mean proportional between 0.23 and 0.24 .<br><strong>Solution :&nbsp;</strong>We know that the mean proportional between &lsquo;a&rsquo; and &lsquo;b&rsquo; is the square root of (a x b).<br>=&gt; Required mean proportional =&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-7b41445c1793acc072456c7bd87f002c_l3.svg" alt="\sqrt(0.23 \times 0.24)" title="Rendered by QuickLaTeX.com" height="33" width="168">&nbsp;= 0.234946802<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>Divide Rs. 981 in the ratio 5 : 4<br><strong>Solution :&nbsp;</strong>The given ratio is 5 : 4<br>Sum of numbers in the ratio = 5 + 4 = 9<br>We divide Rs. 981 in 9 parts.<br>981 / 9 = 109<br>Therefore, Rs. 981 in the ratio 5 : 4 = Rs. 981 in the ratio (5 / 9) : (4 / 9)<br>=&gt; Rs. 981 in the ratio 5 : 4 = (5 x 109) : (4 x 109) = 545 : 436<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>A bag contains 50 p, 25 p and 10 p coins in the ratio 2 : 5 : 3, amounting to Rs. 510. Find the number of coins of each type.<br><strong>Solution :&nbsp;</strong>Let the common ratio be 100 k.<br>Number of 50 p coins = 200 k<br>Number of 25 p coins = 500 k<br>Number of 10 p coins = 300 k<br>Value of 50 p coins = 0.5 x 200 k = 100 k<br>Value of 25 p coins = 0.25 x 500 k = 125 k<br>Value of 10 p coins = 0.1 x 300 k = 30 k<br>=&gt; Total value of all coins = 100 k + 125 k + 30 k = 255 k = 510 (given)<br>=&gt; k = 2<br>Therefore, Number of 50 p coins = 200 k = 400<br>Number of 25 p coins = 500 k = 1000<br>Number of 10 p coins = 300 k = 600<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>A mixture contains sugar solution and colored water in the ratio 4 : 3. If 10 liters of colored water is added to the mixture, the ratio becomes 4 : 5. Find the initial quantity of sugar solution in the given mixture.<br><strong>Solution :&nbsp;</strong>The initial ratio is 4 : 3.<br>Let &lsquo;k&rsquo; be the common ratio.<br>=&gt; Initial quantity of sugar solution = 4 k<br>=&gt; Initial quantity of colored water = 3 k<br>=&gt; Final quantity of sugar solution = 4 k<br>=&gt; Final quantity of colored water = 3 k + 10<br>Final ratio = 4 k : 3 k + 10 = 4 : 5<br>=&gt; k = 5<br>Therefore, initial quantity of sugar solution in the given mixture = 4 k = 20 liters<br>&nbsp;<br><strong>Question 6 :&nbsp;</strong>Two friends A and B started a business with initial capital contribution of Rs. 1 lac and Rs. 2 lacs. At the end of the year, the business made a profit of Rs. 30,000. Find the share of each in the profit.<br><strong>Solution :&nbsp;</strong>We know that if the time period of investment is same, profit/loss is divided in the ratio of value of investment.<br>=&gt; Ratio of value of investment of A and B = 1,00,000 : 2,00,000 = 1 : 2<br>=&gt; Ratio of share in profit = 1 : 2<br>=&gt; Share of A in profit = (1/3) x 30,000 = Rs. 10,000<br>=&gt; Share of B in profit = (2/3) x 30,000 = Rs. 20,000<br>&nbsp;<br><strong>Question 7 :&nbsp;</strong>Three friends A, B and C started a business, each investing Rs. 10,000. After 5 months A withdrew Rs. 3000, B withdrew Rs. 2000 and C invested Rs. 3000 more. At the end of the year, a total profit of Rs. 34,600 was recorded. Find the share of each.<br><strong>Solution :</strong> We know that if the period of investment is not uniform, the gains/losses from the business are divided in the ratio of their inputs, where input is calculated as the product of amount of investment and time period of investment.<br>So, input = value of investment x period of investment, and here, period of investment would be broken into parts as the investment is not uniform throughout the time period.<br>A&rsquo;s input = (10,000 x 5) + (7,000 x 7) = 99,000<br>B&rsquo;s input = (10,000 x 5) + (8,000 x 7) = 1,06,000<br>C&rsquo;s input = (10,000 x 5) + (13,000 x 7) = 1,41,000<br>=&gt; A : B : C = 99000 : 106000 : 141000<br>=&gt; A : B : C = 99 : 106 : 141<br>=&gt; A : B : C = (99 / 346) : (106 / 346) : (141 / 346)<br>Thus, A&rsquo;s share = (99 / 346) x 34600 = Rs. 9900<br>B&rsquo;s share = (106 / 346) x 34600 = Rs. 10600<br>C&rsquo;s share = (141 / 346) x 34600 = Rs. 14100<br>&nbsp;<br><strong>Question 8 :&nbsp;</strong>A invested Rs. 70,000 in a business. After few months, B joined him with Rs. 60,000. At the end of the year, the total profit was divided between them in ratio 2 : 1. After how many months did B join?<br><strong>Solution :&nbsp;</strong>Let A work alone for &lsquo;n&rsquo; months.<br>=&gt; A&rsquo;s input = 70,000 x 12<br>=&gt; B&rsquo;s input = 60,000 x (12 &ndash; n)<br>So, (70,000 x 12) / [60,000 x (12 &ndash; n)] = 2 / 1<br>=&gt; (7 x 12) / [6 x (12 &ndash; n)] = 2 / 1<br>=&gt; 12 &ndash; n = 7<br>=&gt; n = 5<br>Therefore, B joined after 5 months.</p>
                </li>
            </ul>
        </div>
        <div><br></div>`,
        topic: "Ratio Proportion and Partnership"
    },
    {
        content: `<h1>Mixture and Alligation</h1>

        <div>
            <ul>
                <li>Mixture is a combination of two or more elements to form a third element. The questions from mixture are usually based on&nbsp;<a target="_blank" sty
                         href="https://www.geeksforgeeks.org/ratio-proportion-and-partnership/">Ratio and Proportion</a> and do not require any special formula.</li>
                <li>Alligation is a rule that enables us to quickly calculate the price of a mixture, given that it is a mix of two elements having different prices.</li>
                <li>Alligation Rule :<br><a target="_blank" sty
                         href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation-formula.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation-formula-1024x112.png" alt="alligation formula" width="665" height="73"></a><br><a target="_blank" sty
                         href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation.jpeg"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation-1024x368.jpeg" alt="alligation" width="665" height="239"></a><br>Here, mean price is the price of 1 unit of the mixture. Please note that in the above formula, everything has to be calculated by considering one unit only.<br>Another point to be noted is that mean price would always be between cheaper price and dearer price.</li>
                <li>In questions of replacement where we initially have some quantity of pure element (like petrol), and we keep on replacing a fixed portion of this pure liquid every time with some other element (like water) thus making it a mixture, we apply the following formula for finding the quantity of pure element after &lsquo;n&rsquo; replacements :<br>P x [1 &ndash; (R / P)]<sup>n</sup>, where<br>P is the initial quantity of pure element<br>R is the quantity replaced every time<br>n is the number of replacements</li>
            </ul>
            <h3>Sample Problems</h3>
                                    <p><strong>Question 1 :&nbsp;</strong>From a vessel of 20 liters pure milk, 1 liter is taken out and replaced with water, so as to keep the volume constant to 20 liters. This process is repeated 5 times. Find the percentage of pure milk left in the vessel after 5 replacements.<br><strong>Solution :&nbsp;</strong>Here, we need to apply the formula P x [1 &ndash; (R / P)]<sup>n</sup><br>P = Initial quantity of pure element = 20 liters<br>R = Quantity replaced every time = 1 liter<br>n = Number of replacements = 5<br>So, quantity of pure milk after 5 replacements = 20 x [1 &ndash; (1 / 20)]<sup>5</sup><br>Quantity of pure milk after 5 replacements = 20 x (0.95)<sup>5</sup> = 20 x 0.773780938 = 15.4756 liters<br>Therefore, percentage of pure milk left in the vessel after 5 replacements = (15.4756 / 20) x 100 = 77.378 %<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>A dishonest shopkeeper mixed cheaper quality of rice, priced at Rs. 10 / KG with good quality rice, priced at Rs. 25 / KG and sells the mixture at Rs. 15 / KG. Find the ratio in which he mixes the two qualities of rice.<br><strong>Solution :</strong><br><a target="_blank"  href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation-q2.jpeg"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/alligation-q2-1024x368.jpeg" alt="alligation q2" width="665" height="239"></a><br>Thus, ratio of quantities of cheaper and good quality rice = 10 : 5 = 2 : 1</p>
        </div>
        <div><br></div>`,
        topic: "Mixture and Alligation"
    },
    {
        content: `<h1>Algebra | Set -1</h1>

        <div>
            <p>Algebra questions basically involve modeling word problems into equations and then solving them. Some of the very basic formulae that come handy while solving algebra questions are :</p>
            <ul>
                <li>(a + b)&nbsp;<sup>2</sup> = a&nbsp;<sup>2</sup> + b&nbsp;<sup>2</sup> + 2 a b</li>
                <li>(a &ndash; b)&nbsp;<sup>2</sup> = a&nbsp;<sup>2</sup> + b&nbsp;<sup>2</sup> &ndash; 2 a b</li>
                <li>(a + b)&nbsp;<sup>2</sup> &ndash; (a &ndash; b)&nbsp;<sup>2</sup> = 4 a b</li>
                <li>(a + b)&nbsp;<sup>2</sup> + (a &ndash; b)&nbsp;<sup>2</sup> = 2 (a&nbsp;<sup>2</sup> + b&nbsp;<sup>2</sup> )</li>
                <li>(a<sup>2</sup> &ndash; b<sup>2</sup> ) = (a + b) (a &ndash; b)</li>
                <li>(a + b + c)&nbsp;<sup>2</sup> = a&nbsp;<sup>2</sup> + b&nbsp;<sup>2</sup> + c&nbsp;<sup>2</sup> + 2 (a b + b c + c a)</li>
                <li>(a&nbsp;<sup>3</sup> + b&nbsp;<sup>3</sup> ) = (a + b) (a&nbsp;<sup>2</sup> &ndash; a b + b&nbsp;<sup>2</sup> )</li>
                <li>(a&nbsp;<sup>3</sup> &ndash; b&nbsp;<sup>3</sup> ) = (a &ndash; b) (a&nbsp;<sup>2</sup> + a b + b&nbsp;<sup>2</sup> )</li>
                <li>(a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> &ndash; 3 a b c) = (a + b + c) (a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> &ndash; a b &ndash; b c &ndash; c a)</li>
                <li>If a + b + c = 0, then a<sup>3</sup> + b<sup>3</sup> + c<sup>3</sup> = 3 a b c</li>
                <li>For a quadratic equation ax<sup>2</sup> + bx + c = 0,&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-5477e9e4e2ce4d2b26e4806d4a40c606_l3.svg" alt="x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}" title="Rendered by QuickLaTeX.com" height="37" width="176"></li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>A number is as much greater than 46 as is less than 78. Find the number.<br><strong>Solution :&nbsp;</strong>In these type of questions, we simply add the two given numbers and divide it by 2 so as to obtain the required number.<br>So, required number = (46 + 78) / 2 = 124 / 2 = 62<br>&nbsp;<br><strong>Long Method :</strong><br>Let the required number be &lsquo;n&rsquo;.<br>=&gt; n &ndash; 46 = 78 &ndash; n<br>=&gt; 2 n = 46 + 78<br>=&gt; 2 n = 124<br>=&gt; n = 62<br>Thus, the required number is 62.<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find a number such that when 55 is subtracted from 4 times the number, the result is 5 more than twice the number.<br><strong>Solution :&nbsp;</strong>Let the required number be &lsquo;n&rsquo;.<br>=&gt; 4 n &ndash; 55 = 2 n + 5<br>=&gt; 2 n = 60<br>=&gt; n = 30<br>Thus, 30 is the required number.<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>The sum of a number and its reciprocal is 41 / 20. Find the number.<br><strong>Solution :&nbsp;</strong>Let the number be &lsquo;n&rsquo;.<br>=&gt; n + (1/n) = 41 / 20<br>=&gt; 20 (n<sup>2</sup> + 1) = 41 n<br>=&gt; 20 n<sup>2</sup> &ndash; 41 n + 20 = 0<br>=&gt; 20 n<sup>2</sup> &ndash; 16 n &ndash; 25 n + 20 = 0<br>=&gt; (5 n &ndash; 4) (4 n &ndash; 5) = 0<br>=&gt; n = 4/5 or 5/4<br>Thus, the required number is 4/5 or 5/4<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>The sum of two numbers is 132. If one-third of the smaller exceeds one-sixth of the larger by 8, find the numbers.<br><strong>Solution :&nbsp;</strong>Let the two numbers be &lsquo;x&rsquo; an &lsquo;y&rsquo; such that x &gt; y.<br>=&gt; x + y = 132 and (y/3) = (x/6) + 8<br>=&gt; x + y = 132 and 2 y &ndash; x = 48<br>=&gt; x = 72 and y = 60<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>The sum of two numbers is 24 and their product is 128. Find the absolute difference of numbers.<br><strong>Solution :&nbsp;</strong>Let the numbers be &lsquo;x&rsquo; and &lsquo;y&rsquo;.<br>=&gt; x + y = 24 and x y = 128<br>Here, we need to apply the formula (x + y)&nbsp;<sup>2</sup> &ndash; (x &ndash; y)&nbsp;<sup>2</sup> = 4xy<br>=&gt; (24)<sup>2</sup> &ndash; (x &ndash; y)&nbsp;<sup>2</sup> = 4 x (128)<br>=&gt; (x &ndash; y)&nbsp;<sup>2</sup> = (24)<sup>2</sup> &ndash; 4 x (128)<br>=&gt; (x &ndash; y)&nbsp;<sup>2</sup> = 576 &ndash; 512<br>=&gt; (x &ndash; y)&nbsp;<sup>2</sup> = 64<br>=&gt; |x &ndash; y| = 8<br>Therefore, absolute difference of the two numbers = 8<br>&nbsp;<br><strong>Question 6 :&nbsp;</strong>The sum of a two digit number &lsquo;n&rsquo; and the number obtained by interchanging digits of n is 88. The difference of the digits of &lsquo;n&rsquo; is 4, with the tens place being larger than the units place. Find the number &lsquo;n&rsquo;.<br><strong>Solution :&nbsp;</strong>Let the number be &lsquo;xy&rsquo;, where x and y are single digits.<br>=&gt; The number is 10x + y<br>=&gt; Reciprocal of the number = yx = 10y + x<br>=&gt; Sum = 11 x + 11 y = 11 (x + y) = 88 (given)<br>=&gt; x + y = 8<br>Also, we are given that the difference of the digits is 4 and x &gt; y.<br>=&gt; x &ndash; y = 4<br>Therefore, x = 6 and y = 2<br>Thus, the number is 62.</p>
        </div>
        <div><br></div>`,
        topic: "Algebra | Set -1"
    },
    {
        content: `
     <h1>Age</h1>

<div>
    <p>Problems on ages basically use formulae from&nbsp;<a href="https://www.geeksforgeeks.org/learn-algebra-set-1/">Algebra</a> and do not require any special formula. It is like a question type of algebra.</p>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :&nbsp;</strong>A&rsquo;s age after 15 years would be equal to 5 times his age 5 years ago. Find his age 3 years hence.<br><strong>Solution :&nbsp;</strong>Let A&rsquo;s present age be &lsquo;n&rsquo; years.<br>According to the question,<br>n + 15 = 5 (n &ndash; 5)<br>=&gt; n + 15 = 5 n &ndash; 25<br>=&gt; 4n = 40<br>=&gt; n = 10<br>=&gt; A&rsquo;s present age = 10 years<br>Therefore, A&rsquo;s age 3 years hence = 10 + 3 = 13 years<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>The product of the ages of A and B is 240. If twice the age of B is more than A&rsquo;s age by 4 years, what was B&rsquo;s age 2 years ago?<br><strong>Solution :&nbsp;</strong>Let A&rsquo;s present age be x years. Then, B&rsquo;s present age = 240 / x years<br>So, according to question<br>2 (240 / x ) &ndash; x = 4<br>=&gt; 480 &ndash; x<sup>2</sup> = 4 x<br>=&gt; x<sup>2</sup> + 4 x &ndash; 480 = 0<br>=&gt; (x + 24) (x &ndash; 20) = 0<br>=&gt; x = 20<br>=&gt; B&rsquo;s present age = 240 / 20 = 12 years<br>Thus, B&rsquo;s age 2 years ago = 12 &ndash; 2 = 10 years<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>The present age of a mother is 3 years more than three times the age of her daughter. Three years hence, mother&rsquo;s age will be 10 years more than twice the age of the daughter. Find the present age of the mother.<br><strong>Solution :&nbsp;</strong>Let the daughter&rsquo;s present age be &lsquo;n&rsquo; years.<br>=&gt; Mother&rsquo;s present age = (3n + 3) years<br>So, according to the question<br>(3n + 3 + 3) = 2 (n + 3) + 10<br>=&gt; 3n + 6 = 2n + 16<br>=&gt; n = 10<br>Hence, mother&rsquo;s present age = (3n + 3) = ((3 x 10) + 3) years = 33 years<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>The ratio of present ages of A and B is 6 : 7. Five years hence, this ratio would become 7 : 8. Find the present age of A and B.<br><strong>Solution :&nbsp;</strong>Let the common ratio be &lsquo;n&rsquo;.<br>=&gt; A&rsquo;s present age = 6 n years<br>=&gt; B&rsquo;s present age = 7 n years<br>So, according to the question<br>(6 n + 5) / (7 n + 5) = 7 / 8<br>=&gt; 48 n + 40 = 49 n + 35<br>=&gt; n = 5<br>Thus, A&rsquo;s present age = 6 n = 30 years and B&rsquo;s present age = 7 n = 35 years</p>
</div>
     
     `,
        topic: "Age"
    },
    {
        content: `<h1>Profit and Loss</h1>

        <div>
            <p>Profit and Loss is a topic that is definitely asked in every placement exam. While the questions are not too tricky, some require deeper understanding of concepts, but most of them are based on certain well known formulas.</p>
            <ul>
                <li>Cost Price (CP) : The price at which an article is purchased. This is the cost of the article incurred to the seller in buying the article for re-selling.</li>
                <li>Selling Price (SP) : The price at which the article is sold to the customer/buyer.</li>
                <li>Marked Price or List Price (MP) : The price mentioned on the article</li>
                <li>Profit or Gain (P) : The extra money that the seller gets on selling an article.<br>P = SP &ndash; CP<br>Profit percent = (P / CP) x 100</li>
                <li>Loss (L) : The less money a seller gets on selling an article.<br>L = CP &ndash; SP<br>Loss percent = (L / CP) x 100</li>
                <li>Discount (D) : The reduction in price offered by the seller is called discount.<br>D = MP &ndash; SP<br>Discount percent = (D / MP) x 100</li>
                <li>Profit or Loss is always calculated on the cost price. Discount is calculated on marked price or list price.</li>
                <li>If two articles are sold at the same selling price, one at a gain of A% and one at the loss of A%, then the seller always incurs a percentage loss of (A / 10)<sup>2</sup>.</li>
                <li>If a seller claims to sell at cost price but uses false weights, then<br>Profit percent = [ (True Value &ndash; Given Value) / Given Value ] x 100 %</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>A person buys a pen from a wholesaler at Rs. 10 for 20 pens. He sells those pens at Rs. 10 for 15 pens. Find his profit or loss percent.<br><strong>Solution :&nbsp;</strong>CP for each pen = 10 / 20 = Rs. 0.50<br>SP for each pen = 10 / 15 = Rs. 2 / 3<br>Profit = SP &ndash; CP = Rs. (2 / 3) &ndash; 0.50 = Rs. 1 / 6<br>Therefore, profit percent = [ (1/6) / (0.50) ] x 100 = 33.334%</p>
            <p><strong>Question 2 :&nbsp;</strong>A dealer incurs a loss of 5 % if he sells an article for Rs. 1805. What price must he sell the article so as to gain 5 % on that article ?<br><strong>Solution :&nbsp;</strong>Let the cost price of the article be Rs. C<br>=&gt; SP = CP &ndash; Loss<br>=&gt; 1805 = C &ndash; 0.05 C<br>=&gt; 0.95 C = 1805<br>=&gt; C = 1900<br>Therefore, to gain 5 %, SP = 1900 + (0.05 x 1900) = 1900 + 95 = Rs. 1995</p>
            <p><strong>Question 3 :&nbsp;</strong>If the cost price of an article is 67 % of the selling price, what is the profit percent ?<br><strong>Solution :&nbsp;</strong>Let the selling price of the article be Rs. S<br>=&gt; Cost price of the article = 67 % of S = 0.67 S<br>=&gt; Profit = SP &ndash; CP = 0.33 S<br>Therefore, profit percent = (0.33 S / 0.67 S) x 100 = 49.25 %</p>
                                    <p><strong>Question 4 :&nbsp;</strong>A shopkeeper purchased two varieties of rice, 80 KG at Rs. 13.50 per KG and 120 KG at Rs. 16 per KG. The shopkeeper being greedy, mixed the two varieties of rice and sold the mixture at a gain of 16 %. Find the per KG selling price of the mixture.<br><strong>Solution :&nbsp;</strong>We are given that the shopkeeper bought 80 Kg at Rs. 13.50 per KG and 120 KG at Rs. 16 per KG.<br>=&gt; Total cost price = (80 x 13.50) + (120 x 16) = 1080 + 1920 = Rs. 3000 and total rice = 80 + 120 = 200 KG<br>Now, total selling price = Total cost price + 16 % of total cost price<br>=&gt; Total selling price = 3000 + (0.16 x 3000) = Rs. 3480<br>Thus, selling price per KG = 3480 / 200 = Rs. 17.40<br><strong>Another method :</strong><br>We can do this question by alligation also.<br><a target="_blank"  href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/pnl-q4-alt.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/pnl-q4-alt.png" alt="pnl q4 alt" width="416" height="249"></a><br>=&gt; (m &ndash; 13.50) / (16 &ndash; m) = 120 / 80<br>=&gt; m = 15, where &lsquo;m&rsquo; is the per KG cost price of the mixture<br>Therefore, per KG selling price of the mixture = Rs. 15 + 16% of 15 = Rs. 17.40</p>
            <div><br></div>
            <p><strong>Question 5 :&nbsp;</strong>A seller claims to sell at cost price but gives 750 gm for each KG. Find his gain percent.<br><strong>Solution :&nbsp;</strong>Profit percent = [ (True Value &ndash; Given Value) / Given Value ] x 100 %<br>Here, True Value = 1 KG = 1000 gm<br>Given Value = 750 gm<br>Therefore, profit percent = [ (1000 &ndash; 750) / 750 ] x 100 = (250 / 750) x 100 = 33.334 %</p>
            <p><strong>Question 6 :&nbsp;</strong>A man sold two watches at the same price, one at 10 % profit and other at 10 % loss. Find his overall gain or loss percent.<br><strong>Solution :&nbsp;</strong>We know that if two articles are sold at the same selling price, one at a gain of A% and one at the loss of A%, then the seller always incurs a loss of (A / 10)<sup>2</sup>.<br>=&gt; Loss percent = (10 / 10)<sup>2</sup> = 1 %<br><strong>Long Method :</strong><br>Let the selling price of each watch be Rs. 99 S<br>=&gt; Total SP = Rs. 198 S<br>CP of first watch = SP &ndash; Profit = Rs. 99 S- 10 % of CP = Rs. 90 S<br>CP of second watch = SP + Loss = Rs. 99 S + 10 % of CP = Rs. 110 S<br>=&gt; Total CP = Rs. 90 S + 110 S = Rs. 200 S<br>=&gt; Loss = Total CP &ndash; Total SP = 200 &ndash; 198 = Rs. 2 S<br>Therefore, loss percent = (Loss / CP) x 100 = (2 S / 200 S) x 100 % = 1 %</p>
            <p><strong>Question 7 :&nbsp;</strong>A shopkeeper gives two successive discounts of 20 % and 10 % on surplus stock. Further, he also gives 5 % extra discount on cash payment. If a person buys a shirt from the surplus stock and pays in cash, what overall discount percent will he get on the shirt ?<br><strong>Solution :&nbsp;</strong>Let the marked price of the shirt be Rs. 1000<br>=&gt; Price after first discount = Rs. 1000 &ndash; 20 % of Rs. 1000 = Rs. 1000 &ndash; 200 = Rs. 800<br>=&gt; Price after second discount = Rs. 800 &ndash; 10 % of Rs. 800 = Rs. 800 &ndash; 80 = Rs. 720<br>=&gt; Price after cash discount = Rs. 720 &ndash; 5 % of Rs. 720 = Rs. 720 &ndash; 36 = Rs. 684<br>Therefore, total discount = Rs. 1000 &ndash; 684 = Rs. 316<br>=&gt; Overall discount percent = (316 / 1000) x 100 = 31.60 %</p>
            <p><strong>Question 8 :&nbsp;</strong>A dealer wants to mark the price of an article such that on offering a 5 % discount, he is able to get 33 % profit. Find the percent of CP above which the article should be marked.<br><strong>Solution :&nbsp;</strong>Let the cost price of the article be Rs. 100<br>=&gt; Selling price of the article = Rs. 100 + 33% of CP = Rs. 133<br>Let the marked price be Rs. M<br>=&gt; Selling price = Marked Price &ndash; Discount<br>=&gt; 133 = M &ndash; 0.05 M<br>=&gt; 133 = 0.95 M<br>=&gt; M = 140<br>=&gt; M &ndash; CP = 140 &ndash; 100 = 40<br>Therefore, percent of CP above which the article should be marked = (40 / 100) x 100 = 40 %</p>
        </div>
        <div><br></div>`,
        topic: "Profit and Loss"
    },
    {
        content: `<h1>Simple Interest</h1>

            <ul>
                <li>The amount which is lent / deposited is called Principal</li>
                <li>The money that the principal generates is called Interest. This is the money generated as a result of borrowing/lending.</li>
                <li>Simple Interest is the interest calculated on the Principal amount, rather than being calculated on cumulative amount.</li>
                <li>Simple Interest, SI = P x R x T / 100, where P is the principal, R is the rate of interest per unit time period and T is the time period.</li>
                <li>Final Amount = Principal + SI</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>What would be the annual interest accrued on a deposit of Rs. 10,000 in a bank that pays 4 % per annum rate of simple interest ?<br><strong>Solution :&nbsp;</strong>Here, P = 10000, R = 4, T = 1<br>=&gt; SI = P x R x T / 100<br>=&gt; SI = 10000 x 4 x 1 / 100<br>=&gt; SI = 400<br>Thus, the annual interest would be Rs. 400<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>A sum of money amounts to Rs. 28,000 in 2 years at 20 % simple interest per annum. Find the sum.<br><strong>Solution :&nbsp;</strong>Here, A = 28000, T = 2, R = 20<br>=&gt; A = P + SI<br>=&gt; A = P + (P x R x T / 100)<br>=&gt; A = P [1 + (R x T / 100)]<br>=&gt; 28000 = P [1 + 0.4]<br>=&gt; P = 28000 / 1.4<br>=&gt; P = 20000<br>Thus, the required sum is Rs. 20,000<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>A man borrowed a certain sum of money at the rate of 6 % per annum for the first two years , 9% per annum for the next three years, and 14% per annum for the period beyond 5 years. If he pays a total interest of Rs. 22,800 at the end of 9 years, find the amount he borrowed.<br><strong>Solution :&nbsp;</strong>Let the borrowed sum be P.<br>=&gt; SI for first 2 years + SI for next 3 years + SI for next 4 years = 22800<br>=&gt; (P x 6 x 2 / 100) + (P x 9 x 3 / 100) + (P x 14 x 4 / 100) = 22800<br>=&gt; 95 P / 100 = 22800<br>=&gt; P = 24000<br>Therefore, Borrowed sum = Rs. 24,000<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>At what annual rate of interest will a sum of money be thrice in 10 years?<br><strong>Solution :&nbsp;</strong>Amount = Principal + SI<br>If the sum of money would be thrice the principal after 10 years, the SI would be twice the principal.<br>=&gt; SI = 2 x P<br>=&gt; (P x R x T / 100) = 2 X P<br>=&gt; R x T / 100 = 2<br>=&gt; R x T = 200<br>=&gt; R x 10 = 200<br>=&gt; R = 20 %<br>Thus, the required rate of interest is 20 %<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>The simple interest on a sum of money in 5 years at 12 % per annum is Rs. 400 less than the simple interest accrued on the same sum in 7 years at 10 % per annum. Find the sum.<br><strong>Solution :&nbsp;</strong>Let the sum be P.<br>=&gt; SI in 5 years at 12 % per annum = P x 12 x 5 / 100 = 0.6 P<br>=&gt; SI in 7 years at 10 % per annum = P x 10 x 7 / 100 = 0.7 P<br>Now, according to the question,<br>0.7 P &ndash; 0.6 P = 400<br>=&gt; 0.1 P = 400<br>=&gt; P = 4000<br>Thus, the required sum is Rs. 4000<br>&nbsp;<br><strong>Question 6 :&nbsp;</strong>A sum of Rs. 1000 was lent to two people, one at the rate of 5 % and other at the rate of 8 %. If the simple interest after one year is Rs. 62, find the sum lent at each rate.<br><strong>Solution :&nbsp;</strong>Let the sum lent at 5 % be P.<br>=&gt; Sum lent at 8 % = 1000 &ndash; P<br>Now, according to the question,<br>SI for 5 % + SI for 8 % = 62<br>=&gt; (P x 5 x 1 / 100) + ((1000 &ndash; P) x 8 x 1 / 100) =62<br>=&gt; 5 P + 8 (1000 &ndash; P) = 6200<br>=&gt; 5 P + 8000 &ndash; 8 P = 6200<br>=&gt; 3 P = 1800<br>=&gt; P = 600<br>Therefore, sum lent at 5 % = P = Rs. 600<br>Sum lent at 8 % = 1000 &ndash; P = Rs. 400</p>
        </div>
        <div><br></div>`,
        topic: "Simple Interest"
    },
    {
        content: `<h1>Compound Interest</h1>

        <div>
            <ul>
                <li>The amount which is lent / deposited is called Principal</li>
                <li>The money that the principal generates is called Interest. This is the money generated as a result of borrowing/lending.</li>
                <li>Compound Interest is the interest calculated on the cumulative amount, rather than being calculated on the principal amount only.</li>
                <li>Amount, A = P [1 + (R / 100)]<sup>n</sup>, where P is the principal, R is the rate of interest per unit time period and n is the time period.</li>
                <li>Compound Interest, CI = Amount &ndash; Principal</li>
                <li>If compounding period is not annual, rate of interest is divided in accordance with the compounding period. For example, if interest is compounded half yearly, then rate of interest would be R / 2, where &lsquo;R&rsquo; is the annual rate of interest.<ol>
                        <li>If interest is compounded daily, rate of interest = R / 365 and A = P [ 1 + ( {R / 365} / 100 ) ]<sup>T</sup>, where &lsquo;T&rsquo; is the time period. For example, if we have to calculate the interest for 1 year, then T = 365. For 2 years, T = 730.</li>
                        <li>If interest is compounded monthly, rate of interest = R / 12 and A = P [ 1 + ( {R / 12} / 100 ) ]<sup>T</sup>, where &lsquo;T&rsquo; is the time period. For example, if we have to calculate the interest for 1 year, then T = 12. For 2 years, T = 24.</li>
                        <li>If interest is compounded half yearly, rate of interest = R / 2 and A = P [ 1 + ( {R / 2} / 100 ) ]<sup>T</sup>, where &lsquo;T&rsquo; is the time period. For example, if we have to calculate the interest for 1 year, then T = 2. For 2 years, T = 4.</li>
                    </ol>
                </li>
                <li>For finding the time period in which a sum of money will double itself at R % rate of compound interest compounded annually, we generally use either of the following two formulas :<ol>
                        <li>Time, T = 72 / R Years</li>
                        <li>Time, T = 0.35 + (69 / R) Years</li>
                    </ol>
                </li>
                <li>When rate of interest is different for different years, say R1, R2, R3 and so on, the amount is calculated as A = P [1 + (R1 / 100)] [1 + (R2 / 100)] [1 + (R3 / 100)] &hellip;</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Find the compound interest on Rs. 10,000 at 10% per annum for a time period of three and a half years.<br><strong>Solution :&nbsp;</strong>Time period of 3 years and 6 months means for 3 years, the interest is compounded yearly and for the remaining 6 months, the interest is compounded compounded half yearly. This means that we have 3 cycles of interest compounded yearly and 1 cycle of interest compounded half yearly.<br>So, Amount = P [1 + (R / 100)]<sup>3</sup> [1 + ( {R/2} / 100 )]<br>=&gt; Amount = 10000 [1 + 0.1]<sup>3</sup> [1 + 0.05]<br>=&gt; Amount = 10000 (1.1)<sup>3</sup> (1.05)<br>=&gt; Amount = Rs. 13975.50<br>=&gt; Compound Interest, CI = Amount &ndash; Principal = 13975.50 &ndash; 10000<br>Therefore, CI = Rs. 3975.50</p>
            <p><strong>Question 2 :&nbsp;</strong>If Rs. 5000 amounts to Rs. 5832 in two years compounded annually, find the rate of interest per annum.<br><strong>Solution :&nbsp;</strong>Here, P = 5000, A = 5832, n = 2<br>A = P [1 + (R / 100)]<sup>n</sup><br>=&gt; 5832 = 5000 [1 + (R / 100)]<sup>2</sup><br>=&gt; [1 + (R / 100)]<sup>2</sup> = 5832 / 5000<br>=&gt; [1 + (R / 100)]<sup>2</sup> = 11664 / 10000<br>=&gt; [1 + (R / 100)] = 108 / 100<br>=&gt; R / 100 = 8 / 100<br>=&gt; R = 8 %<br>Thus, the required rate of interest per annum in 8 %</p>
            <p><strong>Question 3 :&nbsp;</strong>The difference between the SI and CI on a certain sum of money at 10 % rate of annual interest for 2 years is Rs. 549. Find the sum.<br><strong>Solution :&nbsp;</strong>Let the sum be P.<br>R = 10 %<br>n = 2 years<br>SI = P x R x n / 100 = P x 10 x 2 / 100 = 0.20 P<br>CI = A &ndash; P = P [1 + (R / 100)]<sup>n</sup> &ndash; P = 0.21 P<br>Now, it is given that CI &ndash; SI = 549<br>=&gt; 0.21 P &ndash; 0.20 P = 549<br>=&gt; 0.01 P = 549<br>=&gt; P = 54900<br>Therefore, the required sum of money is Rs. 54,900</p>
            <p><strong>Question 4 :&nbsp;</strong>A sum of Rs. 1000 is to be divided among two brothers such that if the interest being compounded annually is 5 % per annum, then the money with the first brother after 4 years is equal to the money with the second brother after 6 years.<br><strong>Solution :&nbsp;</strong>Let the first brother be given Rs. P<br>=&gt; Money with second brother = Rs. 1000 &ndash; P<br>Now, according to the question,<br>P [1 + (5 / 100)]<sup>4</sup> = (1000 &ndash; P) [1 + (5 / 100)]<sup>6</sup><br>=&gt; P (1.05)<sup>4</sup> = (1000 &ndash; P) (1.05)<sup>6</sup><br>=&gt; 0.9070 P = 1000 &ndash; P<br>=&gt; 1.9070 P = 1000<br>=&gt; P = 524.38<br>Therefore, share of first brother = Rs. 524.38<br>Share of second brother = Rs. 475.62</p>
            <p><strong>Question 5 :&nbsp;</strong>A sum of money amounts to Rs. 669 after 3 years and to Rs. 1003.50 after 6 years on compound interest. Find the sum.<br><strong>Solution :&nbsp;</strong>Let the sum of money be Rs. P<br>=&gt; P [1 + (R/100)]<sup>3</sup>= 669 and P [1 + (R/100)]<sup>6</sup>= 1003.50<br>Dividing both equations, we get<br>[1 + (R/100)]<sup>3</sup> = 1003.50 / 669 = 1.50<br>Now, we put this value in the equation P [1 + (R/100)]<sup>3</sup>= 669<br>=&gt; P x 1.50 = 669<br>=&gt; P = 446<br>Thus, the required sum of money is Rs. 446</p>
            <div><br></div>
            <p><strong>Question 6 :&nbsp;</strong>An investment doubles itself in 15 years if the interest is compounded annually. How many years will it take to become 8 times?<br><strong>Solution :&nbsp;</strong>it is given that the investment doubles itself in 15 years.<br>Let the initial investment be Rs. P<br>=&gt; At the end of 15 years, A = 2 P<br>Now, this 2 P will be invested.<br>=&gt; Amount after 15 more years = 2 x 2 P = 4 P<br>Now, this 4 P will be invested.<br>=&gt; Amount after 15 more years = 2 x 4 P = 8 P<br>Thus, the investment (P) will become 8 times (8 P) in 15 + 15 + 15 = 45 years</p>
        </div>
        <div><br></div>`,
        topic: "Compound Interest"
    },
    {
        content: `
        <h1>Mensuration 2D</h1>
<div>
    <div>
        <ul>
            <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
            <li>Last Updated :&nbsp;02 Sep, 2021</li>
        </ul>
    </div>
</div>
<div>
    <p>Mensuration 2D mainly deals with problems on perimeter and area. The shape is two dimensional, such as triangle, square, rectangle, circle, parallelogram, etc. This topic does not has many variations and most of the questions are based on certain fixed formulas.&nbsp;</p>
    <ul>
        <li>Perimeter: The length of the boundary of a 2D figure is called the perimeter.</li>
        <li>Area: The region enclosed by the 2D figure is called the area.</li>
        <li>Pythagoras Theorem: In a right angled triangle, (Hypotenuse)<sup>2</sup> = (Base)<sup>2</sup> + (Height)<sup>2</sup></li>
    </ul>
    <h3>Triangle</h3>
    <p>Let the three sides of the triangle be a, b and c. &nbsp;</p>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/2-25-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = a + b + c</li>
        <li>Area&nbsp;<ol>
                <li>2s = a + b + c&nbsp;<br>Area = <img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-c71c80d03108de01f597cee9355414c3_l3.svg" alt="\sqrt{s (s - a) (s - b) (s - c) }" title="Rendered by QuickLaTeX.com" height="33" width="269"></li>
                <li>Area = 0.5 x Base x Perpendicular Height&nbsp;</li>
            </ol>
        </li>
    </ul>
    <h3>Rectangle&nbsp;</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/1-min-1-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = 2 x (length + Breadth)</li>
        <li>Area = Length x Breadth</li>
    </ul>
    <h3>Square</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/5-min-1-1-300x221.png" alt=""></p>
    <div><br></div>
    <ul>
        <li>Perimeter = 4 x Side Length</li>
        <li>Area = (Side Length)<sup>2</sup> = 0.5 x (Diagonal Length)<sup>2</sup></li>
    </ul>
    <h3>Parallelogram</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/3-min-1-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = 2 x Sum of adjacent sides</li>
        <li>Area = Base x Perpendicular Height&nbsp;</li>
    </ul>
    <h3>Rhombus&nbsp;</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/7-7-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = 4 x Side Length</li>
        <li>Area = 0.5 x Product of diagonals</li>
    </ul>
    <h3>Trapezium</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/4-min-1-1-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = Sum of all sides</li>
        <li>Area = 0.5 x Sum of parallel sides x Perpendicular Height</li>
    </ul>
    <h3>Circle</h3>
    <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/6-min-1-1-300x221.png" alt=""></p>
    <ul>
        <li>Perimeter = 2 &pi; Radius</li>
        <li>Area = &pi; (Radius)<sup>2</sup></li>
        <li>Length of an arc that subtends an angle &theta; at the center of the circle = (&pi; x Radius x &theta;) / 180</li>
        <li>Area of a sector that subtends an angle &theta; at the center of the circle = (&pi; x Radius<sup>2</sup> x &theta;) / 360</li>
    </ul>
    <h3>Sample Problems</h3>
    <p><strong>Question 1 :&nbsp;</strong>Find the perimeter and area of an isosceles triangle whose equal sides are 5 cm and height is 4 cm.&nbsp;<br><strong>Solution :&nbsp;</strong>Applying Pythagoras theorem,&nbsp;<br>(Hypotenuse)<sup>2</sup> = (Base)<sup>2</sup> + (Height)<sup>2</sup><br>=&gt; (5)<sup>2</sup> = (0.5 x Base of isosceles triangle)<sup>2</sup> + (4)<sup>2</sup><br>=&gt; 0.5 x Base of isosceles triangle = 3&nbsp;<br>=&gt; Base of isosceles triangle = 6 cm&nbsp;<br>Therefore, perimeter = sum of all sides = 5 + 5 + 6 = 16 cm&nbsp;<br>Area of triangle = 0.5 x Base x Height = 0.5 x 6 x 4 = 12 cm<sup>2</sup><br>&nbsp;&nbsp;<br><strong>Question 2 :&nbsp;</strong>A rectangular piece of dimension 22 cm x 7 cm is used to make a circle of largest possible radius. Find the area of the circle such formed.&nbsp;<br><strong>Solution:&nbsp;</strong>In questions like this, diameter of the circle is lesser of length and breadth.&nbsp;<br>Here, breadth Diameter of the circle = 7 cm&nbsp;<br>=&gt; Radius of the circle = 3.5 cm&nbsp;<br>Therefore, area of the circle = &pi; (Radius)<sup>2</sup> = &pi; (3.5)<sup>2</sup> = 38.50 cm<sup>2</sup><br>&nbsp;&nbsp;<br><strong>Question 3 :&nbsp;</strong>A pizza is to be divided in 8 identical pieces. What would be the angle subtended by each piece at the centre of the circle ?&nbsp;<br><strong>Solution :&nbsp;</strong>By identical pieces, we mean that area of each piece is same.&nbsp;<br>=&gt; Area of each piece = (&pi; x Radius<sup>2</sup> x &theta;) / 360 = (1/8) x Area of circular pizza&nbsp;<br>=&gt; (&pi; x Radius<sup>2</sup> x &theta;) / 360 = (1/8) x (&pi; x Radius<sup>2</sup>)&nbsp;<br>=&gt; &theta; / 360 = 1 / 8&nbsp;<br>=&gt; &theta; = 360 / 8 = 45&nbsp;<br>Therefore, angle subtended by each piece at the centre of the circle = 45 degrees&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 4 :&nbsp;</strong>Four cows are tied to each corner of a square field of side 7 cm. The cows are tied with a rope such that each cow grazes maximum possible field and all the cows graze equal areas. Find the area of the ungrazed field.&nbsp;<br><strong>Solution :&nbsp;</strong>For maximum and equal grazing, the length of each rope has to be 3.5 cm.&nbsp;<br>=&gt; Area grazed by 1 cow = (&pi; x Radius<sup>2</sup> x &theta;) / 360&nbsp;<br>=&gt; Area grazed by 1 cow = (&pi; x 3.5<sup>2</sup> x 90) / 360 = (&pi; x 3.5<sup>2</sup>) / 4&nbsp;<br>=&gt; Area grazed by 4 cows = 4 x [(&pi; x 3.5<sup>2</sup>) / 4] = &pi; x 3.5<sup>2</sup><br>=&gt; Area grazed by 4 cows = 38.5 cm<sup>2</sup><br>Now, area of square field = Side<sup>2</sup> = 7<sup>2</sup> = 49 cm<sup>2</sup><br>=&gt; Area ungrazed = Area of field &ndash; Area grazed by 4 cows&nbsp;<br>=&gt; Area ungrazed = 49 &ndash; 38.5 = 10.5 cm<sup>2</sup><br>&nbsp;&nbsp;<br><strong>Question 5 :&nbsp;</strong>Find the area of largest square that can be inscribed in a circle of radius &lsquo;r&rsquo;.&nbsp;<br><strong>Solution :&nbsp;</strong>The largest square that can be inscribed in the circle will have the diameter of the circle as the diagonal of the square.&nbsp;<br>=&gt; Diagonal of the square = 2 r&nbsp;<br>=&gt; Side of the square = 2 r / 2<sup>1/2</sup><br>=&gt; Side of the square = 2<sup>1/2</sup> r&nbsp;<br>Therefore, area of the square = Side<sup>2</sup> = [2<sup>1/2</sup> r]<sup>2</sup> = 2 r<sup>2</sup><br>&nbsp;&nbsp;<br><strong>Question 6 :&nbsp;</strong>A contractor undertakes a job of fencing a rectangular field of length 100 m and breadth 50 m. The cost of fencing is Rs. 2 per meter and the labour charges are Re. 1 per meter, both paid directly to the contractor. Find the total cost of fencing if 10 % of the amount paid to the contractor is paid as tax to the land authority.&nbsp;<br><strong>Solution :&nbsp;</strong>Total cost of fencing per meter = Rs. 2 + 1 = Rs. 3&nbsp;<br>Length of fencing required = Perimeter of the rectangular field = 2 (Length + Breadth)&nbsp;<br>=&gt; Length of fencing required = 2 x (100 + 50) = 300 meter&nbsp;<br>=&gt; Amount paid to the contractor = Rs. 3 x 300 = 900&nbsp;<br>=&gt; Amount paid to the land authority = 10 % of Rs. 900 = Rs. 90&nbsp;<br>therefore, total cost of fencing = Rs. 900 + 90 = Rs. 990&nbsp;</p>
</div>
        `,
        topic: "Mensuration 2D"
    },
    {
        content: `<h1>Mensuration 3D</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/medium/">Medium</a></li>
                    <li>Last Updated :&nbsp;04 Feb, 2022</li>
                </ul>
            </div>
        </div>
        <div>
            <p>Mensuration 3D deals with shapes like cube, cuboid, sphere etc. The problems are generally based on volume and surface area.&nbsp;<br>&nbsp;</p>
            <h3>Cuboid</h3>
            <p>Let the length, breadth and height of the cuboid be &lsquo;L&rsquo;, &lsquo;B&rsquo; and &lsquo;H&rsquo; respectively.&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/8-min-1-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = L x B x H</li>
                <li>Curved Surface area = 2 H (L + B)</li>
                <li>Total surface area = 2 (L B + B H + H L)</li>
                <li>Length of diagonal = (L<sup>2</sup> + B<sup>2</sup> + H<sup>2</sup>)<sup>1/2</sup></li>
            </ul>
            <p>&nbsp;</p>
            <div><br></div>
            <h3>Cube</h3>
            <p>Let the side of the cube be &lsquo;a&rsquo;&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/9-min-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = a<sup>3</sup></li>
                <li>Curved Surface area = 4 a<sup>2</sup></li>
                <li>Total surface area = 6 a<sup>2</sup></li>
                <li>Length of diagonal = <img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-517db5b2db691a9c21004931bf7ab19c_l3.svg" alt="\sqrt{3} " title="Rendered by QuickLaTeX.com" height="27" width="35">a</li>
            </ul>
            <p>&nbsp;</p>
            <h3>Cylinder (Right Circular Cylinder)</h3>
            <p>Let the radius of the base and height of the right circular cylinder be &lsquo;R&rsquo; and &lsquo;H&rsquo; respectively.&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/7-min-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = &pi; R<sup>2</sup> H</li>
                <li>Curved Surface area = 2 &pi; R H</li>
                <li>Total surface area = 2 &pi; R H + 2 &pi; R<sup>2</sup></li>
            </ul>
            <p>&nbsp;</p>
            <h3>Hollow Cylinder (Hollow Right Circular Cylinder)</h3>
            <p>Let the inner radius of the base, outer radius of the base and height of the hollow right circular cylinder be &lsquo;r&rsquo;, &lsquo;R&rsquo; and &lsquo;H&rsquo; respectively.&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/6-min-1-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = &pi; H (R<sup>2</sup> &ndash; r<sup>2</sup>)</li>
                <li>Curved Surface area = 2 &pi; R H + 2 &pi; r H = 2 &pi; H (R + r)</li>
                <li>Total surface area = 2 &pi; H (R + r) + 2 &pi; (R<sup>2</sup> &ndash; r<sup>2</sup>)</li>
            </ul>
            <p>&nbsp;</p>
            <h3>Cone</h3>
            <p>Let the radius of the base, slant height and height of the cone be &lsquo;R&rsquo;, &lsquo;L&rsquo; and &lsquo;H&rsquo; respectively.&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/1-min-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>L<sup>2</sup> = R<sup>2</sup> + H<sup>2</sup></li>
                <li>Volume = &pi; R<sup>2</sup> H / 3</li>
                <li>Curved Surface area = &pi; R L</li>
                <li>Total surface area = &pi; R L + &pi; R<sup>2</sup></li>
            </ul>
            <p>&nbsp;</p>
            <h3>Sphere</h3>
            <p>Let the radius of the sphere be &lsquo;R&rsquo;&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/12-min-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = (4 / 3) &pi; R<sup>3</sup></li>
                <li>Surface area = 4 &pi; R<sup>2</sup></li>
            </ul>
            <p>&nbsp;</p>
            <h3>Hemisphere</h3>
            <p>Let the radius of the hemisphere be &lsquo;R&rsquo;&nbsp;<br>&nbsp;</p>
            <p><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/5-1-3-300x221.png" alt=""></p>
            <p>&nbsp;</p>
            <ul>
                <li>Volume = (2 / 3) &pi; R<sup>3</sup></li>
                <li>Curved Surface area = 2 &pi; R<sup>2</sup></li>
                <li>Total Surface area = 3 &pi; R<sup>2</sup></li>
            </ul>
            <p>Please note that whenever it is mentioned to find &ldquo;Surface Area&rdquo;, we calculate the total surface area.&nbsp;<br>&nbsp;</p>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Find the length of the largest rod that can be kept in a cuboidal room of dimensions 10 x 15 x 6 m.&nbsp;<br><strong>Solution :&nbsp;</strong>Largest rod would lie along the diagonal.&nbsp;<br>=&gt; Length of largest rod = Length of diagonal of the room = (L<sup>2</sup> + B<sup>2</sup> + H<sup>2</sup>)<sup>1/2</sup><br>=&gt; Length of the largest rod = (10<sup>2</sup> + 15<sup>2</sup> + 6<sup>2</sup>)<sup>1/2</sup> = (100 + 225 + 36)<sup>1/2</sup> = (361)<sup>1/2</sup><br>=&gt; Length of the largest rod = 19 m&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the number of bricks of dimension 24 x 12 x 8 cm each that would be required to make a wall 24 m long, 8 m high and 60 cm thick.&nbsp;<br><strong>Solution :&nbsp;</strong>Volume of 1 brick = 24 x 12 x 8 = 2304 cm&nbsp;<sup>3</sup><br>Volume of wall = 2400 x 800 x 60 = 115200000 cm&nbsp;<sup>3</sup><br>Therefore, number of bricks required = 115200000 / 2304 = 50000&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 3 :&nbsp;</strong>A rectangular sheet of paper measuring 22 cm x 7 cm is rolled along the longer side to make a cylinder. Find the volume of the cylinder formed.&nbsp;<br><strong>Solution :&nbsp;</strong>Let the radius of the cylinder be &lsquo;R&rsquo;.&nbsp;<br>The sheet is rolled along the longer side.&nbsp;<br>=&gt; 2 &pi; R = 22&nbsp;<br>=&gt; R = 3.5 cm&nbsp;<br>Also, height = 7 cm&nbsp;<br>Therefore, volume of the cylinder = &pi; R<sup>2</sup> H = &pi; (3.5)<sup>2</sup> 7 = 269.5 cm<sup>3</sup><br>&nbsp;&nbsp;<br><strong>Question 4 :&nbsp;</strong>If each edge of a cube is increased by 10 %, what would be the percentage increase in volume ?&nbsp;<br><strong>Solution :&nbsp;</strong>Let the original edge length be &lsquo;a&rsquo;&nbsp;<br>=&gt; Original volume = a<sup>3</sup><br>Now, new edge length = 1.1 a&nbsp;<br>=&gt; New volume = (1.1 a)<sup>3</sup> = 1.331 a<sup>3</sup><br>=&gt; Increase in volume = 1.331 a<sup>3</sup> &ndash; 1 a<sup>3</sup> = 0.331 a<sup>3</sup><br>Therefore, percentage increase int eh volume = (0.331 a<sup>3</sup> / a<sup>3</sup>) x 100 = 33.1 %&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 5 :&nbsp;</strong>Three metal cubes of edge length 3 cm, 4 cm, 5 cm are melted to form a single cube. Find the edge length of such cube.&nbsp;<br><strong>Solution :&nbsp;</strong>Volume of new cube = Volume of metal generated on melting the cubes = Sum of volumes of the three cubes&nbsp;<br>=&gt; Volume of new cube = 3&nbsp;<sup>3</sup> + 4&nbsp;<sup>3</sup> + 5&nbsp;<sup>3</sup> = 216&nbsp;<br>=&gt; Edge length of new cube = (216)<sup>1/3</sup> = 6 cm&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 6 :&nbsp;</strong>Find the length of a 1.25 m wide metal sheet required to make a conical machine of radius 7 m and height 24 m.&nbsp;<br><strong>Solution :&nbsp;</strong>The sheet would be shaped into cone.&nbsp;<br>=&gt; Area of sheet = Area of conical machine&nbsp;<br>=&gt; 1.25 x Length = &pi; x R x L&nbsp;<br>=&gt; 1.25 x Length = &pi; x R x (7<sup>2</sup> + 24<sup>2</sup>)<sup>1/2</sup><br>=&gt; 1.25 x Length = &pi; x 7 x 25&nbsp;<br>=&gt; Length = 440 m&nbsp;<br>Thus, 440 m long metal sheet is required to make the conical machine.&nbsp;<br>&nbsp;&nbsp;<br><strong>Question 7 :&nbsp;</strong>From a cylindrical vessel having radius of the base 7 cm and height 6cm, water is poured into small hemispherical bowls each of radius 3.5 cm. Find the minimum number of bowls that would be required to empty the cylindrical vessel.&nbsp;<br><strong>Solution :&nbsp;</strong>Volume of cylindrical vessel = &pi; R<sup>2</sup> H = &pi; (7<sup>2</sup>) 6 = 924 cm<sup>3</sup><br>Volume of each bowl = (2 / 3) &pi; R<sup>3</sup> = (2 / 3) &pi; 3.5<sup>3</sup> = 269.5 / 3&nbsp;<br>=&gt; Number of bowls required = (924) / (269.5 / 3) = 10.28&nbsp;<br>But since number of bowls cannot be in fraction, we need atleast 11 such bowls to empty the cylindrical vessel.&nbsp;</p>
            <p>&nbsp;</p>
        </div>`,
        topic: "Mensuration 3D"
    },
    {
        content: `
        <h1>Trigonometry &amp; Height and Distances</h1>
<div>
    <div>
        <ul>
            <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
            <li>Last Updated :&nbsp;07 Feb, 2019</li>
        </ul>
    </div>
</div>
<div>
    <p>From this topic, usually, questions from heights and distances is asked. Sometimes, it has been observed that straight forward questions from trigonometric ratios such as questions based on quadrants, small simplification questions, etc. have also been asked in addition to heights and distances. Concepts of trigonometry are applicable if and only if the triangle is a right angled triangle.</p>
    <ul>
        <li>&pi; radian = 180 degrees</li>
        <li>sin &theta; = Perpendicular / Hypotenuse<br>cos &theta; = Base / Hypotenuse<br>tan &theta; = Perpendicular / Base</li>
        <li>In the first quadrant, all trigonometric ratios (sin, cos, tan, cosec, sec, cot) are positive.<br>In second quadrant, only sin and cosec are positive.<br>In third quadrant, only tan and cot are positive.<br>In fourth quadrant, only cos and sec are positive.</li>
        <li>sin<sup>2</sup>&theta; + cos<sup>2</sup>&theta; = 1<br>1 + tan<sup>2</sup>&theta; = sec<sup>2</sup>&theta;<br>1 + cot<sup>2</sup>&theta; = cosec<sup>2</sup>&theta;</li>
        <li>sin(- &theta;) = &ndash; sin &theta;<br>cos(- &theta;) = cos &theta;<br>tan(- &theta;) = &ndash; tan &theta;<br>cosec(- &theta;) = &ndash; cosec &theta;<br>sec(- &theta;) = sec &theta;<br>cot(- &theta;) = &ndash; cot &theta;<h3>Heights and Distances</h3>
            <p>Problems on height and distances are simply word problems that use trigonometry.</p>
            <ul>
                <li>Here, &theta;1 is called the angle of elevation and &theta;2 is called the angle of depression.<br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-ED.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-ED-300x287.png" alt="trigo-HD-ED" width="300" height="287"></a></li>
                <li>For one specific type of problem in height and distances, we have a generalized formula.<br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-SF.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-SF-300x268.png" alt="trigo-HD-SF" width="300" height="268"></a><br>Height = Distance moved / [cot(original angle) &ndash; cot(final angle)]<br>=&gt; h = d / (cot &theta;1 &ndash; cot &theta;2)<br><strong>Example :</strong> A man was standing at a point 100 m away from the building. From that point, the angle of elevation of the top of the building was 30 degrees. On moving 30 m towards the building, the angle of elevation changed to 45 degrees. Find the height of the building.<br><strong>Solution :</strong> Height = 30 / (cot 30 &ndash; cot 45) = 30 / (<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;&ndash; 1) = 15&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;+ 15 m</li>Sample Problems
            </ul>
            <h3></h3>
            <p><strong>Question 1 :&nbsp;</strong>Simplify : [ (cos 80) / (sin 10) ] + cos 59 cosec 31<br><strong>Solution :&nbsp;</strong>[ (cos 80) / (sin 10) ] + cos 59 cosec 31 = [ (cos (90 &ndash; 10)) / (sin 10) ] + cos 59 cosec (90 &ndash; 59)<br>=&gt; [ (cos 80) / (sin 10) ] + cos 59 cosec 31 = (sin 10 / sin 10) + cos 59 sec 59<br>=&gt; [ (cos 80) / (sin 10) ] + cos 59 cosec 31 = (sin 10 / sin 10) + cos 59 (1 / cos 59)<br>=&gt; (sin 10 / sin 10) + cos 59 sec 59 = 1 + 1 = 2<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>From the top of alight house, the angles of depression of two ships are 30 and 45 degrees. The two ships, as it was observed from the top of the light house, were 100 m apart. Find the height of the light house.<br><strong>Solution :&nbsp;</strong>here, we can apply the formula Height = Distance / [cot(original angle) &ndash; cot(final angle)]<br>=&gt; Height of the light house = 100 / (cot 30 &ndash; cot 45) = 100 / (<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;&ndash; 1) = 50&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;+ 50 m<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>A 80 m long ladder is leaning on a wall. If the ladder makes an angle of 45 degrees with the ground, find the distance of the ladder from the wall.<br><strong>Solution :</strong><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-q3.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-q3.png" alt="trigo-HD-q3" width="243" height="232"></a><br>Here, cos &theta; = Base / Hypotenuse<br>=&gt; cos 45 = Base / 80<br>=&gt; Base = 80 cos 45 = 80 /&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-bce060126936d099ad5c11c9aa2625fd_l3.svg" alt="\sqrt{2}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;= 40&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-bce060126936d099ad5c11c9aa2625fd_l3.svg" alt="\sqrt{2}" title="Rendered by QuickLaTeX.com" height="28" width="35"><br>=&gt; Distance of the ladder from the wall = 40&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-bce060126936d099ad5c11c9aa2625fd_l3.svg" alt="\sqrt{2}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;m<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>There are two poles, one on each side of the road. The higher pole is 54 m high. From the top of this pole, the angle of depression of top and bottom of the shorter pole is 30 and 60 degree respectively. Find the height of the shorter pole.<br><strong>Solution :</strong><br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-q4.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/trigo-HD-q4-300x228.png" alt="trigo-HD-q4" width="300" height="228"></a><br>Let AB and CD be the two poles.<br>Let AC = x m and CD = h m<br>Now, in triangle ABC,<br>tan 60 = AB / AC<br>=&gt;&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;= 54 / AC<br>=&gt; AC = 18&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;m<br>Clearly, AC = DE = 18&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;m<br>In triangle BED,<br>tan 30 = BE / DE<br>=&gt; BE = DE tan 30<br>=&gt; BE = 18&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;/&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-332ac30ddf0b10ba7bf09f3f7ebe189f_l3.svg" alt="\sqrt{3}" title="Rendered by QuickLaTeX.com" height="28" width="35">&nbsp;m<br>=&gt; BE = 18 m<br>=&gt; CD = AE = AB &ndash; BE<br>=&gt; CD = 54 &ndash; 18 = 36 m<br>Therefore, height of the shorter pole = 36 m</p>
        </li>
    </ul>
</div>
<div><br></div>`,
        topic: "Trigonometry & Height and Distances"
    },
    {
        content: `<h1>Progressions (AP, GP, HP)</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;07 Feb, 2019</li>
                </ul>
            </div>
        </div>
        <div>
            <p>Progressions (or Sequences and Series) are numbers arranged in a particular order such that they form a predictable order. By predictable order, we mean that given some numbers, we can find next numbers in the series.</p>
            <h3><a href="https://www.geeksforgeeks.org/arithmetic-progression/" target="_blank">Arithmetic Progression (AP)</a></h3>
            <p>A sequence of numbers is called an arithmetic progression if the difference between any two consecutive terms is always same. In simple terms, it means that next number in the series is calculated by adding a fixed number to the previous number in the series. This fixed number is called the common difference.<br>For example, 2,4,6,8,10 is an AP because difference between any two consecutive terms in the series (common difference) is same (4 &ndash; 2 = 6 &ndash; 4 = 8 &ndash; 6 = 10 &ndash; 8 = 2).</p>
            <ul>
                <li>If &lsquo;a&rsquo; is the first term and &lsquo;d&rsquo; is the common difference,</li>
                <li>nth term of an AP = a + (n-1) d</li>
                <li>Arithmetic Mean = Sum of all terms in the AP / Number of terms in the AP</li>
                <li>Sum of &lsquo;n&rsquo; terms of an AP = 0.5 n (first term + last term) = 0.5 n [ 2a + (n-1) d ]</li>
            </ul>
            <h3><a href="https://www.geeksforgeeks.org/geometric-progression/" target="_blank">Geometric Progression (GP)</a></h3>
            <p>A sequence of numbers is called a geometric progression if the ratio of any two consecutive terms is always same. In simple terms, it means that next number in the series is calculated by multiplying a fixed number to the previous number in the series. This fixed number is called the common ratio.<br>For example, 2,4,8,16 is a GP because ratio of any two consecutive terms in the series (common difference) is same (4 / 2 = 8 / 4 = 16 / 8 = 2).</p>
            <ul>
                <li>If &lsquo;a&rsquo; is the first term and &lsquo;r&rsquo; is the common ratio,<div><br></div>
                </li>
                <li>nth term of a GP = a r<sup>n-1</sup></li>
                <li>Geometric Mean = nth root of product of n terms in the GP</li>
                <li>Sum of &lsquo;n&rsquo; terms of a GP (r &lt; 1) = [a (1 &ndash; r<sup>n</sup>)] / [1 &ndash; r]</li>
                <li>Sum of &lsquo;n&rsquo; terms of a GP (r &gt; 1) = [a (r<sup>n</sup> &ndash; 1)] / [r &ndash; 1]</li>
                <li>Sum of infinite terms of a GP (r &lt; 1) = (a) / (1 &ndash; r)</li>
            </ul>
            <h3><a href="https://www.geeksforgeeks.org/harmonic-progression/" target="_blank">Harmonic Progression (HP)</a></h3>
            <p>A sequence of numbers is called a harmonic progression if the reciprocal of the terms are in AP. In simple terms, a,b,c,d,e,f are in HP if 1/a, 1/b, 1/c, 1/d, 1/e, 1/f are in AP.</p>
            <ul>
                <li>For two terms &lsquo;a&rsquo; and &lsquo;b&rsquo;,</li>
                <li>Harmonic Mean = (2 a b) / (a + b)</li>
            </ul>
            <p>For two numbers, if A, G and H are respectively the arithmetic, geometric and harmonic means, then</p>
            <ul>
                <li>A &ge; G &ge; H</li>
                <li>A H = G<sup>2</sup>, i.e., A, G, H are in GP</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Find the nth term for the AP : 11, 17, 23, 29, &hellip;<br><strong>Solution :&nbsp;</strong>Here, a = 11, d = 17 &ndash; 11 = 23 &ndash; 17 = 29 &ndash; 23 = 6<br>We know that nth term of an AP is a + (n &ndash; 1) d<br>=&gt; nth term for the given AP = 11 + (n &ndash; 1) 6<br>=&gt; nth term for the given AP = 5 + 6 n<br>We can verify the answer by putting values of &lsquo;n&rsquo;.<br>=&gt; n = 1 -&gt; First term = 5 + 6 = 11<br>=&gt; n = 2 -&gt; Second term = 5 + 12 = 17<br>=&gt; n = 3 -&gt; Third term = 5 + 18 = 23<br>and so on &hellip;<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the sum of the AP in the above question till first 10 terms.<br><strong>Solution :&nbsp;</strong>From the above question,<br>=&gt; nth term for the given AP = 5 + 6 n<br>=&gt; First term = 5 + 6 = 11<br>=&gt; Tenth term = 5 + 60 = 65<br>=&gt; Sum of 10 terms of the AP = 0.5 n (first term + last term) = 0.5 x 10 (11 + 65)<br>=&gt; Sum of 10 terms of the AP = 5 x 76 = 380<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>For the elements 4 and 6, verify that A &ge; G &ge; H.<br><strong>Solution :&nbsp;</strong>A = Arithmetic Mean = (4 + 6) / 2 = 5<br>G = Geometric Mean =&nbsp;<img src="https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-c70d5414c845fe35ba5800eeb63e3624_l3.svg" alt="\sqrt{{4}\times{6}}" title="Rendered by QuickLaTeX.com" height="28" width="80">&nbsp;= 4.8989<br>H = Harmonic Mean = (2 x 4 x 6) / (4 + 6) = 48 / 10 = 4.8<br>Therefore, A &ge; G &ge; H<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>Find the sum of the series 32, 16, 8, 4, &hellip; upto infinity.<br><strong>Solution :&nbsp;</strong>First term, a = 32<br>Common ratio, r = 16 / 32 = 8 / 16 = 4 / 8 = 1 / 2 = 0.5<br>We know that for an infinite GP, Sum of terms = a / (1 &ndash; r)<br>=&gt; Sum of terms of the GP = 32 / (1 &ndash; 0.5) = 32 / 0.5 = 64<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>The sum of three numbers in a GP is 26 and their product is 216. ind the numbers.<br><strong>Solution :&nbsp;</strong>Let the numbers be a/r, a, ar.<br>=&gt; (a / r) + a + a r = 26<br>=&gt; a (1 + r + r<sup>2</sup>) / r = 26<br>Also, it is given that product = 216<br>=&gt; (a / r) x (a) x (a r) = 216<br>=&gt; a<sup>3</sup> = 216<br>=&gt; a = 6<br>=&gt; 6 (1 + r + r<sup>2</sup>) / r = 26<br>=&gt; (1 + r + r<sup>2</sup>) / r = 26 / 6 = 13 / 3<br>=&gt; 3 + 3 r + 3 r<sup>2</sup> = 13 r<br>=&gt; 3 r<sup>2</sup> &ndash; 10 r + 3 = 0<br>=&gt; (r &ndash; 3) (r &ndash; (1 / 3) ) = 0<br>=&gt; r = 3 or r = 1 / 3<br>Thus, the required numbers are 2, 6 and 18.</p>
        </div>
        <div><br></div>`,
        topic: "Progressions (AP, GP, HP)"
    },


    {
        topic: "Permutation and Combination"
        , content: `<h1>Permutation and Combination</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;07 Feb, 2019</li>
                </ul>
            </div>
        </div>
        <div>
            <ul>
                <li>Permutation : It is the different arrangements of a given number of elements taken one by one, or some, or all at a time. For example, if we have two elements A and B, then there are two possible arrangements, AB and BA.</li>
                <li>Number of permutations when &lsquo;r&rsquo; elements are arranged out of a total of &lsquo;n&rsquo; elements is&nbsp;<sup>n</sup> <strong>P<sub>r</sub> = n! / (n &ndash; r)!</strong>. For example, let n = 4 (A, B, C and D) and r = 2 (All permutations of size 2). The answer is 4!/(4-2)! = 12. The twelve permutations are AB, AC, AD, BA, BC, BD, CA, CB, CD, DA, DB and DC.</li>
                <li>Combination : It is the different selections of a given number of elements taken one by one, or some, or all at a time. For example, if we have two elements A and B, then there is only one way select two items, we select both of them.</li>
                <li>Number of combinations when &lsquo;r&rsquo; elements are selected out of a total of &lsquo;n&rsquo; elements is&nbsp;<sup>n</sup> C&nbsp;<sub>r</sub> = n! / [ (r !) x (n &ndash; r)! ]. For example, let n = 4 (A, B, C and D) and r = 2 (All combinations of size 2). The answer is 4!/((4-2)!*2!) = 6. The six combinations are AB, AC, AD, BC, BD, CD.</li>
                <li><sup>n</sup> C&nbsp;<sub>r</sub> =&nbsp;<sup>n</sup> C&nbsp;<sub>(n &ndash; r)</sub>
                    <p>NOTE : In the same example, we have different cases for permutation and combination. For permutation, AB and BA are two different things but for selection, AB and BA are same.</p>
                    <h3>Sample Problems</h3>
                    <p><strong>Question 1 :&nbsp;</strong>How many words can be formed by using 3 letters from the word &ldquo;DELHI&rdquo; ?<br><strong>Solution :&nbsp;</strong>The word &ldquo;DELHI&rdquo; has 5 different words.<br>Therefore, required number of words =&nbsp;<sup>5</sup> P&nbsp;<sub>3</sub> = 5! / (5 &ndash; 3)!<br>=&gt; Required number of words = 5! / 2! = 120 / 2 = 60<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>How many words can be formed by using the letters from the word &ldquo;DRIVER&rdquo; such that all the vowels are always together ?<br><strong>Solution :&nbsp;</strong>In these type of questions, we assume all the vowels to be a single character, i.e., &ldquo;IE&rdquo; is a single character.<br>So, now we have a total of 5 characters in the word, namely, D, R, V, R, IE.<br>But, R occurs 2 times.<br>=&gt; Number of possible arrangements = 5! / 2! = 60<br>Now, the two vowels can be arranged in 2! = 2 ways.<br>=&gt; Total number of possible words such that the vowels are always together= 60 x 2 = 120<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>In how many ways, can we select a team of 4 students from a given choice of 15 ?<br><strong>Solution :&nbsp;</strong>Number of possible ways of selection =&nbsp;<sup>15</sup> C&nbsp;<sub>4</sub> = 15 ! / [(4 !) x (11 !)]<br>=&gt; Number of possible ways of selection = (15 x 14 x 13 x 12) / (4 x 3 x 2 x 1) = 1365<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>In how many ways can a group of 5 members be formed by selecting 3 boys out of 6 and 2 girls out of 5 ?<br><strong>Solution :&nbsp;</strong>Number of ways 3 boys can be selected out of 6 =&nbsp;<sup>6</sup> C&nbsp;<sub>3</sub> = 6 ! / [(3 !) x (3 !)] = (6 x 5 x 4) / (3 x 2 x 1) = 20<br>Number of ways 2 girls can be selected out of 5 =&nbsp;<sup>5</sup> C&nbsp;<sub>2</sub> = 5 ! / [(2 !) x (3 !)] = (5 x 4) / (2 x 1) = 10<br>Therefore, total number of ways of forming the group = 20 x 10 = 200<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>How many words can be formed by using the letters from the word &ldquo;DRIVER&rdquo; such that all the vowels are never together ?<br><strong>Solution :&nbsp;</strong>we assume all the vowels to be a single character, i.e., &ldquo;IE&rdquo; is a single character.<br>So, now we have a total of 5 characters in the word, namely, D, R, V, R, IE.<br>But, R occurs 2 times.<br>=&gt; Number of possible arrangements = 5! / 2! = 60<br>Now, the two vowels can be arranged in 2! = 2 ways.<br>=&gt; Total number of possible words such that the vowels are always together = 60 x 2 = 120<br>Also, total number of possible words = 6! / 2! = 720 / 2 = 360<br>Therefore, total number of possible words such that the vowels are never together = 360 &ndash; 120 = 240</p>
                </li>
            </ul>
        </div>
        <div><br></div>`
    },
    {
        content: `<h1>Probability</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;07 Feb, 2019</li>
                </ul>
            </div>
        </div>
        <div>
            <ul>
                <li>Sample Space (S) : The set of all possible outcomes of an event</li>
                <li>Probability : The likeness of an event to happen</li>
                <li>Probability = Number of favorable outcomes / Total Number of outcomes</li>
                <li>0 &le; P &le; 1</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Three unbiased coins are tossed. What is the probability that atmost one head occurs ?<br><strong>Solution :&nbsp;</strong>S = {HHH, HHT, HTH, THH, HTT, THT, TTH, TTT}<br>Favorable outcomes = {HTT, THT, TTH, TTT}<br>Total number of outcomes = 8<br>Number of favorable outcomes = 4<br>Required probability = 4 / 8 = 0.50<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the probability of getting a red card when a card is drawn from a well shuffled pack of cards.<br><strong>Solution :&nbsp;</strong>Total number of outcomes = 52<br>Number of favorable outcomes = Number of red cards = 26<br>=&gt; Required probability = 26 / 52 = 0.50<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>A bag contains 6 white and 4 black balls. Two balls are drawn at random from the bag. Find the probability that both the balls are of the same color.<br><strong>Solution :&nbsp;</strong>Outcome will be favorable if the two balls drawn are of the same color.<br>=&gt; Number of favorable outcomes =&nbsp;<sup>6</sup> C&nbsp;<sub>2</sub> +&nbsp;<sup>4</sup> C&nbsp;<sub>2</sub> = 21<br>Total number of outcomes =&nbsp;<sup>10</sup> C&nbsp;<sub>2</sub> = 45<br>Therefore, required probability = 21 / 45 = 7 / 15<br>&nbsp;<br><strong>Question 4 :&nbsp;</strong>An unbiased die is tossed. Find the probability of getting an even number.<br><strong>Solution :&nbsp;</strong>S = {1, 2, 3, 4, 5, 6}<br>Favorable outcomes = {2, 4, 6}<br>Required probability = 3 / 6 = 0.50<br>&nbsp;<br><strong>Question 5 :&nbsp;</strong>From a bag containing red and blue balls, 10 each, 2 balls are drawn at random. Find the probability that one of them is red and the other is blue.<br><strong>Solution :&nbsp;</strong>Total number of outcomes =&nbsp;<sup>20</sup> C&nbsp;<sub>2</sub> = 190<br>Number of favorable outcomes =&nbsp;<sup>10</sup> C&nbsp;<sub>1</sub> x&nbsp;<sup>10</sup> C&nbsp;<sub>1</sub> = 100<br>Therefore, required probability = 100 / 190 = 10 / 19</p>
        </div>
        <div><br></div>`,
        topic: " probability"
    },
    {

        topic:'Probability 2',
        content:`
        
        <h1>Probability | Set-2</h1>
<div>
    <div>
        <ul>
            <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/medium/">Medium</a></li>
            <li>Last Updated :&nbsp;04 Feb, 2021</li>
        </ul>
    </div>
</div>
<div>
    <p><strong>Question 1:</strong> If a card is picked up random from the a pack of 52 cards. Find the probability that it is a king or queen.&nbsp;<br><strong>Solution :</strong> In a pack of 52 cards, 4 kings and 4 queens present.&nbsp;<br>Hence, probability of getting a king or queen = 8/52&nbsp;<br>= 2/13&nbsp;</p>
    <p><strong>Question 2:</strong> In a throw of 2 dice, find the probability of getting one odd number and one even number.&nbsp;<br><strong>Solution :</strong> Total number of outcomes in throw of 2 dice = 36&nbsp;<br>Number of outcomes when one number is odd and one is even {(1, 2)(1, 4)(1, 6), (2, 1)(2, 3)(2, 5), (3, 2)(3, 4)(3, 6), (4, 1)(4, 3)(4, 5), (5, 2)(5, 4)(5, 6), (6, 1)(6, 3)(6, 5)}&nbsp;<br>Hence, Required probability = 18/36 = 1/2&nbsp;</p>
    <p><strong>Question 3:</strong> What will be the probability that a leap year chosen at random will have 53 Sundays.&nbsp;<br><strong>Solution :</strong> A leap year has 366 days.&nbsp;<br>To find number of weeks = 366/7 = 52 weeks complete&nbsp;<br>2 days left in the year either of them can be Sunday.&nbsp;<br>(Saturday or Sunday), (Sunday or Monday)&nbsp;<br>So possibility of 53 Sundays in a leap year = 2/7&nbsp;</p>
    <p><strong>Question 4:</strong> There are 5 women and 3 men applicants for a job.Only two out of eight are selected for a job.The probability that at least one of the selected person will be a women is:&nbsp;<br><strong>Solution :</strong> Selection can be done like that&nbsp;<br>First is a woman and second is a man&nbsp;<br>OR first is a man and second is a woman&nbsp;<br>OR both woman&nbsp;<br>Required probability = (5/8)(3/7) + (3/8)(5/7) + (5/8)(4/7)&nbsp;<br>= 15/56 + 15/56 + 20/56&nbsp;<br>= 50/56&nbsp;<br>= 25/28<em>&nbsp;</em><br><em><strong>Alternate Explanation</strong></em><strong>&nbsp;1</strong><br>Find the probability of men i-e&nbsp;<br>3C2 / 8C2 = 3/28&nbsp;<br>Now , the probability of women selected will be&nbsp;<br>1 &ndash; p(men) = 1 &ndash; 3/28 = 25/28&nbsp;</p>
    <p><strong>Alternate Explanation 2</strong></p>
    <div><br></div>
    <p>Number of favourable outcomes = 5C2 + (5C1 x 3C1)= 25</p>
    <p>Total number of outcomes = 8C2 = 28</p>
    <p>Therefore, required probability = 25 / 28</p>
    <p><strong>Question 5:</strong> The probability that A can solve the problem is 3/4 and B can solve the problem is 4/5. If both of them attempt the problem, then what is the probability that problem gets solved.&nbsp;<br><strong>Solution :</strong> Probability that A cannot solve the problem = 1/4&nbsp;<br>and Probability that B cannot solve the problem = 1/5&nbsp;<br>Probability that problem not solved = 1/4 x 1/5 = 1/20&nbsp;<br>Hence, the problem is solved either by A or B = 1 &ndash; 1/20&nbsp;<br>= 19/20&nbsp;</p>
    <p><strong>Question 6:</strong> 200 students appeared for GATE and CAT examinations. 60% passed in GATE, 40% passed the CAT and 25% passed both. Find the probability that a student selected at random has failed in both the examinations?&nbsp;<br><strong>Solution :</strong> Number of students passed in GATE = 200 x 60% = 120&nbsp;<br>Number of students passed in CAT = 200 x 40% = 80&nbsp;<br>Number of students passed in both = 200 x 25% = 50&nbsp;<br>Number of students passed in either GATE or CAT = 120 + 80 &ndash; 50 = 150&nbsp;<br>Hence, Number of students failed in both = 200 &ndash; 150 = 50&nbsp;<br>Required probability = 50/200 = 1/4&nbsp;</p>
    <p><strong>Question 7:</strong> A box contains 40 bulbs out of which 4 are defective.Two bulbs are selected at random from the box. What will be the probability that both bulbs found to be defective?&nbsp;<br><strong>Solution :</strong> Both bulbs should come from the defective bulbs without replacement.&nbsp;<br>Required probability = 4/40 x 3/39 = 1/130&nbsp;</p>
    <p><strong>Question 8:</strong> Ten persons are seated round a circular table. What is the probability that three friends always sit together?&nbsp;<br><strong>Solution :</strong> Total number of ways = 9!&nbsp;<br>Total number of ways in which two people sit together = 7! x 3!&nbsp;<br>Required probability = 7! x 3!/ 9!&nbsp;</p>
    <p><strong>Question 9:</strong> A bag contains pens numbered from 1 to 17. A pen is drawn and replaced. Then one more pen is drawn and replaced. What will be the probability that first pen drawn is even and second one is odd.&nbsp;<br><strong>Solution :</strong> In first draw, we have 8 even numbered pens out of 15 and in second we have 9 odd numbered pens.&nbsp;<br>Required probability = 8/17 x 9/17&nbsp;<br>= 72/289&nbsp;</p>
    <p><strong>Question 10:</strong> If P(A)=2/3, P(B)=1/4, P(A &cap; B)=1/3 then find the P(A &cup; B)&nbsp;<br><strong>Solution:</strong> P(A &cup; B)= P(A) + P(B) &ndash; P(A &cap; B)&nbsp;<br>=&gt; 2/3 + 1/4 &ndash; 1/3&nbsp;<br>=&gt; (8 + 3 &ndash; 4)/12&nbsp;<br>=&gt; 7/12</p>
</div>
<div><br></div>
        
        `


    },
    {
        content: `<h1>Clocks</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/medium/">Medium</a></li>
                    <li>Last Updated :&nbsp;26 Jul, 2019</li>
                </ul>
            </div>
        </div>
        <div>
            <p>The problems in Clocks usually deal with finding the angle between the hour hand and the minute hand, number of times the two hands coincide, etc.</p>
            <ul>
                <li>The markings on the face of a clock are 60 spaces, one each for a minute. Every hour, the minute hand completes one round of 60 spaces and the hour hand completes one full round every 12 hours.</li>
                <li>In 60 minutes, the minute hand gains 55 spaces (also known as minute spaces) over the hour hand. For example, if the initial time is 12:00, then after 1 hour, the minute hand would cover 60 spaces whereas the hour hand would cover only 5 spaces. Thus, the minute hand covers 55 spaces extra than the hour hand.</li>
                <li>The minute hand covers 360 degrees in 60 minutes.<br>=&gt; In 1 minute, the minute hand covers 360 / 60 = 6 degrees</li>
                <li>The hour hand covers 360 degrees in 12 hours.<br>=&gt; In 1 hour, the hour hand covers 360 / 12 = 30 degrees<br>=&gt; In 1 minute, the hour hand covers 30 / 60 = 0.50 degrees</li>
                <li>The angle between the minute hand and the hour hand increases by 5.50 degrees every minute. For example, after 2 minutes, angle made by the minute hand = 2 x 6 = 12 degrees and angle made by the hour hand = 2 x 0.50 = 1 degree<br>=&gt; Angle between the hour hand and the minute hand after 2 minutes = 12 &ndash; 1 = 11 degrees = 2 x 5.50 degrees</li>
                <li>In every hour, the minute hand and the hour hand coincide once.</li>
                <li>If the minute hand and the hour hand are in the same line, then the angle between them is either 0 degree or 180 degrees.</li>
                <li>The angle between the minute hand and the hour hand is 180 degrees if they are 30 spaces apart, 90 degrees if they are 15 spaces apart, and 0 degrees if they are 0-minute spaces apart.</li>
                <li>If the clock shows time ahead of the actual time, it is said to be running fast.<br>For example, if the clock is showing 12:15 PM but it is actually 12:00 PM, then the clock is said to be running 15 minutes fast.</li>
                <li>If the clock shows time behind the actual time, it is said to be running slow.<br>For example, if the clock is showing 2:15 PM but it is actually 2:30 PM, then the clock is said to be running 15 minutes slow.</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Find the angle between the hands of a clock at 3:20 PM.<br><strong>Solution :&nbsp;</strong>At 3:00 PM, angle made by the minute hand = 0 degree and angle made by the hour hand = 3 x angle made by the hour hand in one hour = 3 x 30 = 90 degrees<br>Now, in the next 20 minutes, angle made by the minute hand = 20 x angle made by the minute hand in 1 minute = 20 x 6 = 120 degrees and angle made by the hour hand = 20 x angle made by the hour hand in 1 minute = 20 x 0.50 = 10 degrees<br>=&gt; Angle made by the minute hand at 3:20 PM = 0 + 120 = 120 degrees<br>=&gt; Angle made by the hour hand at 3:20 PM = 90 + 10 = 100 degrees<br>Therefore, angle between the hands of the clock at 3:20 PM = 120 &ndash; 100 = 20 degrees<br><strong>Another Method :</strong><br>At 3:00 PM, angle made by the minute hand = 0 degree and angle made by the hour hand = 3 x angle made by the hour hand in one hour = 3 x 30 = 90 degrees<br>=&gt; Initial angle between the two hands = 90 degrees<br>Now, we know that the difference between the two hands of the clock increases every minute by 5.50 degrees.<br>=&gt; Difference between the hands of the clock after 20 minutes = 20 x 5.50 = 110 degrees<br>Therefore, difference between the two hands at 3:20 PM = 110 &ndash; 90 = 20 degrees<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>At what time between 3 PM and 4 PM would the two hands of the clock be together ?<br><strong>Solution :&nbsp;</strong>At 3 PM, the hour hand would be at 15 spaces and the minute hand would be at 0 spaces. The minute hand would have to cover these extra 15 spaces in order to meet the hour hand.<br>Now, 55 minutes are gained by the minute hand in 60 minutes.<br>=&gt; 15 minutes would be gained in (60 / 55) x 15 = 180 / 11 minutes<br>Thus, the two hands of the clock meet at 180 / 11 minutes past 3 PM, i.e., around 3:16:22 PM.<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>How many times in a day the two hands of a clock coincide?<br><strong>Solution :&nbsp;</strong>Between 11 to 1, the hands of the clock coincide only once, i.e., at 12. So, every 12 hours, they coincide 11 times.<br>Therefore, the two hands of the clock coincide 22 times in a day.</p>
        </div>
        <div><br></div>`,
        topic: " Clocks"
    },
    {
        content: `<h1>Calendar</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/medium/">Medium</a></li>
                    <li>Last Updated :&nbsp;24 May, 2019</li>
                </ul>
            </div>
        </div>
        <div>
            <p>In Calendar, questions are mainly based on finding the day of the week if we are given a date. For example, we may be asked to find the day on 2 February, 1981.<br>&nbsp;</p>
            <ul>
                <li>Finding day from date is based on calculating number of odd days. By odd days, we mean number of days more than complete number of weeks. For example,<br>Number of days in a non &ndash; leap year = 365<br>365 mod 7 = 1<br>So, number of odd days in a non &ndash; leap year = 1</li>
                <li>Number of days in a leap year = 366<br>=&gt; Number of odd days in a leap year = 366 mod 7 = 2</li>
                <li>Number of odd days in 100 years (76 non &ndash; leap years + 24 leap years) = [(76 x 1) + (24 x 2)] mod 7 = (76 + 48) mod 7 = 124 mod 7 = 5 days</li>
                <li>Number of odd days in 200 years = (2 x Number of odd days in 100 years) mod 7 = 10 mod 7 = 3</li>
                <li>Number of odd days in 300 years = (3 x 5) mod 7 = 1</li>
                <li>Number of odd days in 400 years = (4 x 5 + 1) mod 7 = 21 mod 7 = 0<br>Note that here, we have added 1 day extra because 400th year would itself be a leap year.</li>
                <li>To check if a non &ndash; centennial year is a leap year, we divide it by 4. If the remainder is 0, the year is a leap year. For example, 2016 mod 4 = 0. Thus, we can safely deduce that 2016 is a leap year.</li>
                <li>To check if a centennial year is a leap year, we divide it by 400. If the remainder is 0, the year is a leap year. For example, 1700 mod 400 = 100. So, it was not a leap year. But 1600 mod 400 = 0. Thus, we can safely deduce that 1600 was a leap year.</li>
                <li>Number of odd days = 0, Day = Sunday<br>Number of odd days = 1, Day = Monday<br>Number of odd days = 2, Day = Tuesday<br>Number of odd days = 3, Day = Wednesday<br>Number of odd days = 4, Day = Thursday<br>Number of odd days = 5, Day = Friday<br>Number of odd days = 6, Day = Saturday</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>What was the day on 14 April, 2000 ?<br><strong>Solution :&nbsp;</strong>1600 will have 0 odd days.<br>300 years will have 1 odd day.<br>Now, in the next 99 years, we would be having 75 non &ndash; leap years and 24 leap years.<br>=&gt; Number of odd days = (75 x 1) + (24 x 2) = 75 + 48 = 123 mod 7 = 4 odd days<br>Total odd days till now = 1 + 4 = 5<br>Number of odd days in January = 31 mod 7 = 3<br>Number of odd days in February (2000 is a leap year) = 29 mod 7 = 1<br>Number of odd days in March = 31 mod 7 = 3<br>Number of odd days till 14 April, 2000 in the month of April= 14 mod 7 = 0<br>So, total number of odd days = 5 + 3 + 1 + 3 = 12 mod 7 = 5<br>Thus, 14 April, 2000 was Friday (odd days = 5 =&gt; Friday)<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>What was the day on 16 August, 1947 ?<br><strong>Solution :&nbsp;</strong>1600 will have 0 odd days.<br>300 years will have 1 odd day.<br>Now, in the next 46 years, we would be having 35 non &ndash; leap years and 11 leap years.<br>=&gt; Number of odd days = (35 x 1) + (11 x 2) = 35 + 22 = 57 mod 7 = 1 odd days<br>Total odd days till now = 1 + 1 = 2<br>Number of odd days in January = 31 mod 7 = 3<br>Number of odd days in February (1947 is a non &ndash; leap leap year) = 28 mod 7 = 0<br>Number of odd days in March = 31 mod 7 = 3<br>Number of odd days in April = 30 mod 7 = 2<br>Number of odd days in May = 31 mod 7 = 3<br>Number of odd days in June = 30 mod 7 = 2<br>Number of odd days in July = 31 mod 7 = 3<br>Number of odd days till 16 August, 1947 = 16 mod 7 = 2<br>So, total number of odd days = 2 + 3 + 0 + 3 + 2 + 3 + 2 + 3 + 2 = 20 mod 7 = 6<br>Thus, 16 August, 1947 was Saturday (odd days = 6 =&gt; Saturday)</p>
        </div>
        <div><br></div>`,
        topic: " Calendar"
    },
    {
        content: `<h1>Race</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/medium/">Medium</a></li>
                    <li>Last Updated :&nbsp;04 Dec, 2018</li>
                </ul>
            </div>
        </div>
        <div>
            <ul>
                <li>When 2 or more people compete to reach a certain point, they are said to be participating in a race.</li>
                <li>Start : If one person gives a start to another person, it means that the second person has to run less than the first person. For example, if A gives a start of 40 m to B in 100 m race, it means that A will run for 100 m but B will run for 100 &ndash; 40 = 60 m.</li>
            </ul>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>In a 100 m race, A beats B by 28 metres. Also, at the finish line, A was 7 seconds ahead of B. Find the time taken by A to complete the race.<br><strong>Solution :&nbsp;</strong>According to the question, B covers 28 m in 7 seconds.<br>=&gt; B&rsquo;s speed = 28 / 7 = 4 m/s<br>=&gt; Time required by B to complete 100 m = 100 / 4 = 25 s<br>Now, A needs 7 s less than B to complete the race.<br>=&gt; Time required by A = 25 &ndash; 7 = 18 s<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>In a 100 m race, A can give a start of 4 m to B and 6.4 m to C. How much start can B give to C ?<br><strong>Solution :&nbsp;</strong>If A covers 100 m, B covers 96 m and C covers 93.6 m<br>=&gt; When B covers 96 m, C covers 93.6 m<br>=&gt; When B covers 100 m, C covers (93.6 / 96) x 100 = 97.5 m<br>Therefore, B can give a start of 100 &ndash; 97.5 = 2.5 m to C.</p>
        </div>
        <div><br></div>`,
        topic: " Race"
    },
    {
        content: `<h1>Data Interpretation</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;28 Jun, 2021</li>
                </ul>
            </div>
        </div>
        <div>
            <p>In data interpretation, we are given data in the form of visuals, like table, graph, chart, etc. and a set of questions that follow. Mainly, they use&nbsp;<a href="https://www.geeksforgeeks.org/percentages/">percentage</a> ,&nbsp;<a href="https://www.geeksforgeeks.org/ratio-proportion-and-partnership/">ratio or proportion</a>.<br>Here, we discuss some commonly asked questions.</p>
            <h3>Tables</h3>
            <p><strong>Question :&nbsp;</strong>The following table contains the data of train arrival and train departure from a station. Study the table and answer the questions that follow :<br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-table.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-table-300x179.png" alt="di-table" width="300" height="179"></a><br>a) Find the number of trains that arrived late<br>b) Find the number of trains that departed late<br>c) Find the percentage of late arriving trains<br><strong>Solution :</strong><br>a) Number of trains arriving late = 114 + 31 + 5 = 150<br>b) Number of trains departing late = 82 + 5 + 3 = 90<br>c) Percentage of late arriving trains = (150 / 1400) x 100 = 10.71 %</p>
            <h3>Bar Graph</h3>
            <p><strong>Question :&nbsp;</strong>Study the following bar graph and answer the questions that follow :<br>Total monthly income = Rs. 50,000<br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-graph.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-graph.png" alt="di-graph" width="855" height="327"></a><br>a) What amount is spent on food ?<br>b) How much more money is spent on clothing and housing together than on transportation?<br>c) What percent of amount on food is spent as amount on education?<br><strong>Solution :</strong><br>a) Food = 20 % of expenditure<br>=&gt; Amount spent on food = 20% of 50,000 = Rs. 10,000<br>b) Money spent on clothing and housing together = 25 % of Rs. 50,000 = Rs. 12,500<br>Money spent on transportation = 20 % of Rs. 50,000 = Rs. 10,000<br>Therefore, more money spent on clothing and housing together than on transportation = Rs. 12,500-10,000 = Rs. 2,500<br>c) Expenditure on food = 20 %<br>Expenditure on education = 5 %<br>Therefore, percent of amount on food spent as amount on education = (5 / 20) x 100 = 25 %</p>
            <h3>Pie Chart</h3>
            <p><strong>Question :&nbsp;</strong>Study the pie chart below and answer the questions that follow :<br><a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-pie.png"><img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2016/04/di-pie-300x287.png" alt="di-pie" width="300" height="287"></a><br>The above pie chart shows the sales of four different types of articles in a shop.<br>a) What is the central angle of type A ?<br>b) If the total sale is 1200, what is the sale of B ?<br>c) What is the difference between the central angle of C and D ?<br><strong>Solution :</strong><br>a) Central angle of A = Percentage of A x 360 degrees = (35 / 100) x 360 = 126 degrees<br>b) Sales of B = 20 % of 1200 = 240<br>c) Difference between the central angle of C and D = 40 % of 360 &ndash; 5 % of 360 = 35 % of 360 = 126 degrees</p>
        </div>
        <div><br></div>`,
        topic: " Data Interpretation"
    },
    {
        content: `<h1>Series</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;04 Dec, 2018</li>
                </ul>
            </div>
        </div>
        <div>
            <p>Series questions in reasoning are basically of two types, Series completion (missing term, next term) and Series correction (finding the wrong element in the series).</p>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Find the missing term : 157.5, 45, 15, _, 3, 2, 2<br><strong>Solution :&nbsp;</strong>Le the missing number be &lsquo;n&rsquo;<br>157.5 / 45 = 3.5<br>45 / 15 = 3<br>15 / n = 2.5<br>n / 3 = 2<br>3 / 2 = 1.5<br>2 / 2 = 1<br>Therefore, the missing number is 6.<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>Find the next term in the series : 6, 7, 9, 13, _<br><strong>Solution :&nbsp;</strong>Let the missing number be &lsquo;n&rsquo;<br>7 &ndash; 6 = 1<br>9 &ndash; 7 = 2<br>13 &ndash; 9 = 4<br>n &ndash; 13 = 8<br>Therefore, next number in the series = n = 21<br>&nbsp;<br><strong>Question 3 :&nbsp;</strong>Find the incorrect element in the series : 1, 3, 10, 36, 152, 760, 4632<br><strong>Solution :</strong><br>1 x 1 + 2 = 3<br>3 x 2 + 4 = 10<br>10 x 3 + 6 = 36<br>36 x 4 + 8 = 152<br>152 x 5 + 10 = 770<br>770 x 6 + 12 = 4632<br>Therefore, the incorrect element in the series is 760.</p>
        </div>
        <div><br></div>`,
        topic: " Series"
    },
    {
        content: `<h1>Data Sufficiency</h1>
        <div>
            <div>
                <ul>
                    <li>Difficulty Level :&nbsp;<a href="https://www.geeksforgeeks.org/easy/">Easy</a></li>
                    <li>Last Updated :&nbsp;04 Dec, 2018</li>
                </ul>
            </div>
        </div>
        <div>
            <p>In data sufficiency questions, we are given a question and a set of statements. We have to find which of the given statements is required to reach the conclusion.</p>
            <h3>Sample Problems</h3>
            <p><strong>Question 1 :&nbsp;</strong>Question &ndash; Who is the tallest among the brothers A, B, C, D ?<br>Statement 1 : C is shorter than only B<br>Statement 2 : D is taller than only A<br>I) Statement 1 alone is sufficient<br>II) Statement 2 alone is sufficient<br>III) Both statement 1 and statement 2 together are sufficient<br>IV) Both statement 1 and statement 2 even together are not sufficient<br><strong>Solution :&nbsp;</strong>If we consider statement 1 only, we can safely conclude that B is the tallest of all.<br>If we consider statement 2 only, we can safely conclude that A is the shortest of all.<br>Therefore, statement 1 alone is sufficient to answer the question.<br>&nbsp;<br><strong>Question 2 :&nbsp;</strong>What is the value of &lsquo;x&rsquo;<br>Statement 1 : x<sup>2</sup> + x &ndash; 6 = 0<br>Statement 2 : x &ge; 0<br>I) Statement 1 alone is sufficient<br>II) Statement 2 alone is sufficient<br>III) Both statement 1 and statement 2 together are sufficient<br>IV) Both statement 1 and statement 2 even together are not sufficient<br><strong>Solution :&nbsp;</strong>If we consider statement 1 alone, we have<br>x<sup>2</sup> + x &ndash; 6 = 0<br>=&gt; x<sup>2</sup> + 3x &ndash; 2x &ndash; 6 = 0<br>=&gt; (x + 3) (x &ndash; 2) = 0<br>=&gt; x = -3, 2<br>If we consider statement 2 alone, we have x &ge; 0<br>Combining the two statements, we can safely say that x = 2<br>Therefore, both statement 1 and statement 2 together are sufficient but neither alone is sufficient.</p>
        </div>
        <div><br></div>`,
        topic: " Data Sufficiency"

    }
    ,{
        topic:""
    }



]