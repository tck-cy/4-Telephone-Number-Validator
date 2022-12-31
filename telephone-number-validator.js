//starting
function telephoneCheck(str) {

     let newString = str.replace(/[ ( )-]/g, '');
     console.log(newString.length);
     console.log(newString)
     if (newString.length === 10) {
        let ninedigitregex = /\d{10}/g
         if (ninedigitregex.test(newString)) {
            return true;
         } else { return false;}
     }
     if (newString.length === 11) {
        let CountryCode = /^1/ig;
        if (CountryCode.test(newString)) {
            let fullNumber = /\d{11}/g;
            if (fullNumber.test(newString)) {
                return true;
            } else {return false;}
        } else {return false;}
     }
     if (newString.length !== 10 && newString.length !== 11) {
        return false;
     }
  }
  
  console.log(telephoneCheck("1 555 555 5555"));