// Create a new file called password.js. Write a program that does the following:

// Welcome the user to the password validator tool
function Welcome(val){
    if(true){
      return `Welcome! Please enter your password to login`
    } else {
      return (`Login to access your account.`)
    }
    }
    Welcome(true)

// Prompt the user for a password to validate
// 

function password(val){
    if(true){
      return ('Please enter a password containing at least 10 characters ')
    } else {
      return (`Login to access your account.`)
    }
    }
    password(true)
// Check if the user’s password meets the following constraint: At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user

function passwordAuth(password){
    if(password.length >= 10){
      return ('Login Success! Please do not reload page.')
    } else {
      return (`Please enter a valid password.`)
    }
    }
    passwordAuth(`Happybug`)
    passwordAuth(`Whydoyourshoessmell`)
    
    // Adding additional constraints
    function password(val){
          if(true){
            return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
          } else {
            return (`Login to access your account.`)
          }
          }
          password(true)

          // Checking for constraints
          function noAdditionalCharacters(pass){
            if(pass.includes(`!`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            } 
            else if(pass.includes(`@`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            }
            else if(pass.includes(`#`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            }
            else if(pass.includes(`*`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            }
            else if(pass.includes(`_`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            }
            else if(pass.includes(`-`)){
              return ('Please enter a password containing none of the following characters: ! @ # * _ - ')
            }
              else {
              return (`Login to access your account.`)
            }
            }
            noAdditionalCharacters(`I like music!`)
            noAdditionalCharacters(`Party@theWaterpark`)
            noAdditionalCharacters(`Whatisyour#`)
            noAdditionalCharacters(`*6789998212`)
            noAdditionalCharacters(`agoblinlives_thebridge`)
            noAdditionalCharacters(`high-five`)
            