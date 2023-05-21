
 
 

document.getElementById('myForm').addEventListener('submit', function(event) {
  var adiInput = document.getElementById('adi');
  var soyadiInput = document.getElementById('soyadi');
  var emailInput = document.getElementById('email');
  var uniSelect = document.getElementById('üni');
  var cinsiyetInputs = document.getElementsByName('cinsiyet');
  var yasInputs = document.getElementsByName('age');
  var metinInput = document.getElementById('metin');
  
  if (adiInput.value.trim() === '' || soyadiInput.value.trim() === '' || emailInput.value.trim() === '' || uniSelect.value === '' || getSelectedRadioValue(cinsiyetInputs) === '' || getCheckedCheckboxes(yasInputs).length === 0 || metinInput.value.trim() === '') {
    alert('Tüm form alanları doldurulmalıdır');
    event.preventDefault(); // Formun gönderilmesini engelle
  } else {
    // Form verilerini göster
    var formSonucDiv = document.getElementById('formSonuc');
    formSonucDiv.innerHTML = ''; // Önceki içeriği temizle

    var formSonucHTML = "<h2>Form Sonuçları:</h2>";
    formSonucHTML += "<p>Adı: " + adiInput.value + "</p>";
    formSonucHTML += "<p>Soyadı: " + soyadiInput.value + "</p>";
    formSonucHTML += "<p>E-posta: " + emailInput.value + "</p>";
    formSonucHTML += "<p>Üniversite: " + uniSelect.value + "</p>";
    formSonucHTML += "<p>Cinsiyet: " + getSelectedRadioValue(cinsiyetInputs) + "</p>";
    formSonucHTML += "<p>Yaş: " + getCheckedCheckboxes(yasInputs).map(function(checkbox) {
      return checkbox.value;
    }).join(", ") + "</p>";
    formSonucHTML += "<p>Metin: " + metinInput.value + "</p>";

    formSonucDiv.innerHTML = formSonucHTML;
  }
});

function getSelectedRadioValue(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      return inputs[i].value;
    }
  }
  return '';
}

function getCheckedCheckboxes(inputs) {
  var checkedCheckboxes = [];
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      checkedCheckboxes.push(inputs[i]);
    }
  }
  return checkedCheckboxes;
}  


