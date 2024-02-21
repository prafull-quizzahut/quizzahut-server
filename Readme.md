# Bcrypt.js

A library to help you hash passwords
"npm install bcrypt"

# saltRounds:
This parameter determines the complexity of the hashing algorithm.
Hashing function will interate no of times to generate a final Hashec passsword.
bcrypt.hash method takes two parameters: 
                  > password to hash and the salt rounds
                  >optional argument, and default value is 10 