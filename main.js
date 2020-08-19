const phone = prompt('Enter your phone number.')

/* while (phone.length !== 12) {
    alert("Please enter a number that is 12 characters long")
    phone = prompt('Enter your phone number.')
}  */

function formattedPhone(phone) {
    let tryPhone = '';
    for (let i = 0; i < phone.length; i++){
        
        if (i < 2) { 
            tryPhone += phone.charAt(i);

        } else if (i === 2)  {
            tryPhone += ' (' + phone.charAt(i);
            
        } else if (i >= 3 && i < 5) {
            tryPhone += phone.charAt(i);

        } else if (i === 5) {
            tryPhone += ') ' + phone.charAt(i);

        } else if (i >= 6 && i < 8) {
            tryPhone += phone.charAt(i);

        } else if (i === 8) {
            tryPhone += '-' + phone.charAt(i) + phone.charAt(i + 1)

        } else if (i === 10) {
            tryPhone += '-' + phone.charAt(i) + phone.charAt(i + 1)

        }
    }
    
    return alert('Tel: ' + tryPhone);
}
  formattedPhone(phone);
  
