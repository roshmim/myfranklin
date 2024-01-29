/*
 * My list component with a button for modal - form
 * 
 */

var modal = document.createElement("div");
modal.classList.add("modal");
modal.innerHTML =  '<div class="modal-content">'+
    '<span class="close">&times;</span>'+
    '<form class="card-request-form">'+
        '<div class="form-screen-1">'+
            '<h2 class="card-request-h2">How do we get in touch?</h2>'+
            '<label for="name" class="field-label">Full Name</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="name"/>'+
            '<label for="email" class="field-label">Email Address</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="email"/>'+
            '<label for="city" class="field-label">Select City</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="city"/>'+
            '<label for="pan" class="field-label">PAN Card Number</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="pan"/>'+
            '<a class="form-button continue-btn">CONTINUE</a>'+
        '</div>'+
        '<div class="form-screen-2">'+
            '<h2 class="card-request-h2">Almost done!</h2>'+
            '<label for="phone" class="field-label">Phone Number</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="phone"/>'+
            '<label for="dob" class="field-label">Date of Birth (dd/mm/yyyy)</label>'+
            '<input type="text" autocomplete="off" class="field-text formVal" name="dob"/>'+
            '<div class="checkbox-block">'+
            '<input type="checkbox" class="field-checkbox formVal" name="vehicle1" value="terms & condition">'+
            '<label for="dob" class="field-label">I agree to ICICI Bank <a href="#">Terms & Conditions</a> and <a href="#">Most Important Terms & Conditions</a></label>'+
            '</div>'+
            '<a class="back-btn">Back</a>'+
            '<a class="form-button submit-btn">SUBMIT</a>'+
        '</div>'+
        '<div class="form-screen-3">'+
            '<div class="card-request-msg">Your request for Platinum Card is successfull, we will get back to you soon!</div>'+
        '</div>'+
    '</form>'+
  '</div>';


export default async function decorate(block) {
	// block.innerHTML = '';
    const mytext = document.createElement('h3');
    mytext.innerHTML = "My List Component";
    
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1) 
		div.className = 'mytext-colums-first';
      else 
		div.className = 'mytext-colums-next';
    });
    ul.append(li);
  });

  block.append(mytext);
  block.append(ul);


// Append the modal for the form
  document.body.appendChild(modal);
// Get the button that opens the modal
var btn = document.getElementById("apply-now");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
}