jQuery(document).ready(function($) {

	$(".default").each(function() {
		var defaultVal = $(this).attr('title');
		$(this).focus(function() {
			if ($(this).val() == defaultVal) {
				$(this).removeClass('active').val('');
			}
		});
		$(this).blur(function() {
				if ($(this).val() == '') {
					$(this).addClass('active').val(defaultVal);
				}
			})
			.blur().addClass('active');
	});
	$('.btn-submit').click(function(e) {
		var $formId = $(this).parents('form');
		var formAction = $formId.attr('action');
		defaulttextRemove();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var phoneReg = /^(0)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;
		var nameReg = /^[a-öA-Ö]{1,40}$/;
		$('li', $formId).removeClass('error');
		$('span.error').remove();
		$('.required', $formId).each(function() {
			var inputVal = $(this).val();
			var $parentTag = $(this).parent();

			if (!inputVal == '') {

				if ($(this).hasClass('email') == true) {
					if (!emailReg.test(inputVal)) {
						$parentTag.addClass('error').append('<span class="error">En giltlig email adress måste anges.</span>');
					}
					else if (emailReg.test(inputVal)) {
						$parentTag.removeClass('error').addClass('valid');
					}
				}

				if ($(this).hasClass('fname') == true) {
					if (!nameReg.test(inputVal)) {
						$parentTag.removeClass('valid').addClass('error').append('<span class="error">Ett giltlig namn måste anges.</span>');
					}
					else if (nameReg.test(inputVal)) {
						$parentTag.removeClass('error').addClass('valid');

					}
				}
				if ($(this).hasClass('kname') == true) {
					if (!nameReg.test(inputVal)) {
						$parentTag.removeClass('valid').addClass('error').append('<span class="error">Ett giltlig namn måste anges.</span>');
					}
					else if (nameReg.test(inputVal)) {
						$parentTag.removeClass('error').addClass('valid');

					}
				}
				if ($(this).hasClass('phone') == true) {
					if (!phoneReg.test(inputVal)) {
						$parentTag.addClass('error').append('<span class="error">Ett mobilnummer måste anges.</span>');
					}
					else if (phoneReg.test(inputVal)) {
						$parentTag.removeClass('error').addClass('valid');
					}
				}
			}
			else {
				$parentTag.removeClass('valid').addClass('error').append('<span class="error">Vänligen fyll i fältet</span>');

			}
		});
		if ($('span.error').length == "0") {

			$('fieldset', $formId).hide();
			$.post(formAction, $formId.serialize(), function(data) {

				$formId.append(data).fadeIn();
			});
		}
		e.preventDefault();
	});
});

function defaulttextRemove() {
	$('.default').each(function() {
		var defaultVal = $(this).attr('title');
		if ($(this).val() == defaultVal) {
			$(this).val('');
		}
	});
}















$(document).ready(function() {
	$('.form_error').hide();
	$('#submit').click(function() {
		var name = $('#name').val();
		var email = $('#email').val();
		var phone = $('#phone').val();
		var message = $('#message').val();
		if (name == '') {
			$('#name').next().show();
			return false;
		}
		if (email == '') {
			$('#email').next().show();
			return false;
		}
		if (IsEmail(email) == false) {
			$('#invalid_email').show();
			return false;
		}

		if (phone == '') {
			$('#phone').next().show();
			return false;
		}
		if (IsPhone(phone) == false) {
			$('#invalid_phone').show();
			return false;
		}
		if (message == '') {
			$('#message').next().show();
			return false;
		}
		//ajax call php page
		$.post("send.php", $("#contactform").serialize(), function(response) {
			$('#contactform').fadeOut('slow', function() {
				$('#success').html(response);
				$('#success').fadeIn('slow');
			});
		});
		return false;
	});
});

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (!regex.test(email)) {
		return false;
	}
	else {
		return true;
	}

	function IsPhone(phone) {
		var regex = /^(0)\s*(7[0236])\s*(\d{4})\s*(\d{3})$/;
		if (!regex.test(phone)) {
			return false;
		}
		else {
			return true;
		}
	}
}