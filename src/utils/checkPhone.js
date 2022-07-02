export const checkPhone = (phone)=>{
       var re = /^[0-9]{10}$/;
       console.log(phone,"pppp")
       return re.test(phone);
}

