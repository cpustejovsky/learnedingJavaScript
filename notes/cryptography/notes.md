# Cryptography Notes

Once this gets so big, I'll likely move these notes into another repo, but since most of the cryptography I'll be working with will be using JavaScript, I might

## Hashing Algorithms and Security
* Last digit in a credit card or a bar code are dependent on all the preceding numbers
  * ISBN number: 014031819 4
  * Last digit is a check
    * 0*10=0
    * 1*9=9
    * 4*8=32
    * 0*7=0
    * 3*6=18
    * 1*5=5
    * 8*4=32
    * 1*3=3
    * 9*2=18
    * 4*1=4
  * Total is a multiple of 11, 121, and it always will be
  * Why sometimes it will end in X
* Hash algorithm is like that for a massive ole file
* A really long hexadecimal number
* If you crush it down, you can get this summary of the number, but you can’t work out what the hexadecimal number was from that.
* It works like a signature
* Look up the actual algorithms
* You want to make the number big enough to never worry about hash collisions.
* You don’t want to be able to fake the hash
* So you don’t want to make it so quick 
## Secure Hashing Algorithm
* Pseudo-random
  * You put in “abc” and get something that looks completely different
  * And the hash of “abd” will look nothing like the hash of 
  * “Abc”
* Non-reversible because you would lose data in trying to do that. It wraps the data around… need to look into it more