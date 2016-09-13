function deleteError(elementId, errorClass) {
  $(elementId).keyup(function() {
    $(errorClass).empty();  
  });
}

var main = function() {
  $('form').submit(function() {
    var firstName = $('#first').val();
    if(firstName === '') {
    	$('.first-name-error').text('Please enter your first name.');  
    }
    var lastName = $('#last').val();
    if (lastName === '') {
      $('.last-name-error').text('Please enter your last name.');
    }
    var email = $('#email').val();
    if (email === '') {
      $('.email-error').text('Please enter your email address.');
    }
    $('#email').keyup(function() {
      email = $('#email').val();
    	if (email.length > 6 && email.indexOf('@') > 0 && email.indexOf('.') > 3 && email.indexOf('.') < email.length - 2 && email.indexOf('.') - email.indexOf('@') > 1) {
      $('.email-error').empty();
   		} else {
        $('.email-error').text('Please enter a valid email address.');
      } 
    });
    for (var i in emails) {
      if (email === emails[i]) {
        $('.email-error').text('This email is already taken.');
      }
    }
    var password = $('#password').val();
    if (password.length < 8) {
      $('.password-error').text('Type a password with at least 8 characters.');
    }
    $('#password').keyup(function() {
      password = $('#password').val();
      if (password.length >= 8) {
        $('.password-error').empty();
      }
    });
    deleteError('#first', '.first-name-error');
    deleteError('#last', '.last-name-error');
    
    return false;
  });
};

var emails = ['abc@xyz.com', 'example@x.com'];
$(document).ready(main);