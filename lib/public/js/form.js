/* eslint-disable */
$('#contactForm').click(function (event) {
  event.preventDefault();
  const form = $(this);
  const url = form.attr('action');
  const submitForm = $('#btn-submit');
	
	if ($('#name').val() === '') {
		alert('É obrigatório digitar o nome!');
		return;
	}
	if ($('#email').val() === '') {
		alert('É obrigatório digitar o email!');
		return;
	} 
	if ($('#subject').val() === '') {
		alert('É obrigatório digitar o assunto do email!');
		return;
	} 
	if ($('#message').val() === '') {
		alert('É obrigatório digitar o conteudo da mensagem!');
		return;
	} 
  submitForm.attr('disabled', true);
  $.ajax({
    type: 'POST',
    url,
    data: form.serialize(),
    success(data) {
      submitForm.attr('disabled', false);
      alert(data);
    },
  });
});
