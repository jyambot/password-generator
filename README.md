# password-generator
<h2>To generate a password:</h2>
    - Click the [Generate Password] button <br>
    - Enter a desired length for your password between 8 and 128 characters <br>
    - The proceeding four prompts will ask about character types. If you would like 
      to add that type of character to your generated password, click OK. Otherwise, 
      click Cancel to move to the next prompt. <br>
    - Once the conditions have been met, a password will be generated inside the box. <br>
    - If none of the character types are chosen, you will be prompted to start over. <br>
    
<br>
<h3>Update History:</h3>
<b>5/29:</b> Got the password generator to work on the console. I saw a YouTube video
      on making a password generator, which gave me the idea to add each character type
      in sequence. This guarantees that each of the selected character types is added
      to the generated password. <br>
      Currently, the generator works by randomly choosing a character in the sequence
      and concatenating the character to a string. The problem with this design is that
      the characters follow a sequence and are not actually randomized. So, for example:
      if you've chosen to have lower case letters, numbers, and symbols in your password,
      the randomly generated password will follow a sequence of: <br> 
      
<p align="center">
'lower case' - 'number' - 'symbol'
</p>
      until the password reaches the defined length.

<br>
<b>5/31:</b> Reworked the code so that the password is generated as an array where each 
      new character is pushed to the end. I felt like this way I could more easily shuffle
      the initially generated password so I could randomize the sequence of character types.
      In order to randomize the array, I used the Durstenfeld Shuffle algorithm which
      iterates through each element and swaps it with an element from a randomly chosen spot.