const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let pWordWithSpecial = document.getElementById("pWordWithSpecialC")
let pWordWithoutSpecial = document.getElementById("pWordWithoutSpecialC")
let PasswordLength = 15


function getRandomCharacter() {
         let randomIndexOne = Math.floor (Math.random() * characters.length)
         return characters[ randomIndexOne ]
    }

function getRandomNoSpecialChar() {
    let randomIndexTwo = Math.floor (Math.random() * 62)
    return characters[ randomIndexTwo ]
}

function generatePassword() {
    let randomPassword = ""
    let randomPasswordNoSpecialChar = ""
    for (let i = 0 ; i < PasswordLength ; i++) {
        randomPassword += getRandomCharacter()
    }
    pWordWithSpecial.textContent = randomPassword

    function generatePasswordNoSpecialChar() {
        for (let i = 0 ; i < PasswordLength ; i++) {
        randomPasswordNoSpecialChar += getRandomNoSpecialChar()
        }
    }
    console.log( randomPasswordNoSpecialChar )
    generatePasswordNoSpecialChar()
    pWordWithoutSpecial.textContent = randomPasswordNoSpecialChar
}

function copyPWord(elementId) {
    let passwordText = document.getElementById(elementId).textContent.trim()
    let clipboardMessage = document.getElementById("copyAlert")
    navigator.clipboard.writeText(passwordText)
    clipboardMessage.style.visibility = "visible"
    clipboardMessage.textContent = "Password Copied"
    setTimeout(function() {
    clipboardMessage.style.visibility = "hidden"
    clipboardMessage.style.marginTop = "1px"
    }, 2000)
}

