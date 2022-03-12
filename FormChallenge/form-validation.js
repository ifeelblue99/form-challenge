// DOM elements
const nameInput = document.getElementById("name-input")
const phoneInput = document.getElementById("phone-input")
const productsSelector = document.getElementById("products")
const dateInput = document.getElementById("date-input")
const submitBtn = document.getElementById("submit-btn")

// vaild chars
const specialChars = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;`
const validNumbers = "0123456789"

// validate name
function validateName(name) {
    
    const isSpecialCharsPresent = specialChars
        .split('').some(char =>name.includes(char)) 

    return name.length>5&&name.length<13&&!isSpecialCharsPresent ? true : false 
}
// validate phone
function validatePhone(phone) {
    phone = phone.split("")
    phone = phone.filter(el=>{
        if(validNumbers.split("").includes(el)){
            return el
        }
    })
    return (
        phone.length==11&&
        phone[0]== 0&&
        phone[1]!=0 ? true : false )
}

// when submit btn is clicked
submitBtn.addEventListener("click", (event)=>{
    event.preventDefault()

    const isNameValid = validateName(nameInput.value)
    const isphoneValid = validatePhone(phoneInput.value)

    if (isphoneValid && isNameValid) {
        const gender = document.querySelector('input[name=gender]:checked').value
        const selected = productsSelector.options[productsSelector.selectedIndex].value;
        
        
        const formData = {
            name:nameInput.value,
            gender:gender,
            prdouct:selected,
            date:dateInput.value,
            phone:phoneInput.value
        }
        alert("Form was sent successfuly. Check out your console log.")
        console.log(formData)
        nameInput.value = ""
        phoneInput.value = ""
        dateInput.value = ""
    }
    else{
        alert("Something wrong happened with your data provided, please check your information.")
    }
})
