'use strict';

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var arrayRandElement = function (massiv) {
  var rand = Math.floor(Math.random() * massiv.length);
  return massiv[rand];
};

var wizards = [
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_FAMILY),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_FAMILY),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_FAMILY),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  },
  {
    name: arrayRandElement(WIZARD_NAMES) + arrayRandElement(WIZARD_FAMILY),
    coatColor: arrayRandElement(COAT_COLORS),
    eyesColor: arrayRandElement(EYES_COLORS)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
