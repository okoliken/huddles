const email = document.querySelector("#input")
const btn = document.querySelector(".btn")

const errorMessage = document.querySelector('.error-message')

btn.addEventListener("click",()=>{

   let value = email.value

   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (value === "" ||  !re.test(value.trim())) {
      ShowErrorToTheUser("Please Enter a Verified Email Address")
   }else{
       success("Email is verified")
   }

})

function ShowErrorToTheUser(message) {
  email.classList = 'red-bordercolor';
  errorMessage.textContent = message;
  errorMessage.classList = 'error-text';
}


function success(message) {
   email.classList = 'green-bordercolor';
  errorMessage.textContent = message;
  errorMessage.classList = 'success-text';
}

// const ages = [1,22,33,55,74,44,5,31,65,89,10,0]

// // const ageLessThanTen = ages.filter(age => age === 10)
// // const sortAges = ages.sort((a,b) => a - b)
// // const reduceAge = ages.reduce((a,b)=> ,0)

// console.log(reduceAge)