# The Merge Sort Algorithm

## What Is It?
Merge sort is a divide and conquer algorithim that sorts and merges 1 or more arrays into one sorted array.

## Why Is It Useful?
It uses O(nlogn) Big O and is therefore very fast and does not eat up a lot of data.

## How Does It Work?
Merge sort divides input arrays into 2 halves, calls itself (recursion) for the first two halves, and then merges the two sorted halves.

## How are arrays merge sorted at high level?

**First we divide the array(s).  Then we merge the sorted arrays**

Here is an array of unsorted numbers.
<br />[8,4,23,42,16,15]

1. First the array is divided into 2 arrays by finding the middle.  

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[8,4,23] [42,16,15]

2. Then those 2 arrays are divided in half.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[8,4] [23]  [42,16] [15]

3. And again.  The idea is to divide them up until there is only one number per array.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[8] [4] [23] [42] [16] [15] 

4. Merge each half in sorted order.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4,8,23] [15,16,42]

5. Merge both sorted arays together.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[4,8,15,16,23,42]




