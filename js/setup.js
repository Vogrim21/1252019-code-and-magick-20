'use strict';
var INTERNAL_WIZARDS = {
  COUNT: 4,
  NAMES: ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '],
  FAMILY: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
};

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');
userDialog.classList.remove('hidden');

var arrayRandElement = function (massiv) {
  var rand = Math.floor(Math.random() * massiv.length);
  return massiv[rand];
};

function generateWizards() {
  var wizards = [];
  for (var i = 0; i < INTERNAL_WIZARDS.COUNT; i++) {
    wizards.push({
      names: arrayRandElement(INTERNAL_WIZARDS.NAMES),
      family: arrayRandElement(INTERNAL_WIZARDS.FAMILY),
      coatColor: arrayRandElement(INTERNAL_WIZARDS.COAT_COLORS),
      eyesColor: arrayRandElement(INTERNAL_WIZARDS.EYES_COLORS)
    });
  }
  return wizards;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + wizard.family;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function () {
  var similarWizards = generateWizards();
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < similarWizards.length; i++) {
    fragment.appendChild(renderWizard(similarWizards[i]));
  }
  similarListElement.appendChild(fragment);
};

userDialog.querySelector('.setup-similar').classList.remove('hidden');

renderWizards();
