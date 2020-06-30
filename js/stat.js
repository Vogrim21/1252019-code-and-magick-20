'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TEXT = 15;
var TEXT_HEIGHT = 10;
var INDENT = 50;
var textHeight = 260;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var TEXT_COLOR = '#000000';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, printTexts, posX, posY, maxWidth) {
  ctx.fillText(printTexts, posX, posY, maxWidth);
};

var getRandomSaturation = function (saturationRange) {
  return Math.floor(Math.random() * Math.floor(saturationRange)) + '%';
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  var fontSize = '16px';
  var fontFamily = 'PT Mono';

  ctx.font = fontSize + fontFamily;
  ctx.fillStyle = TEXT_COLOR;
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y + GAP + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y + GAP + GAP_TEXT * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = BAR_HEIGHT * times[i] / maxTime;
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(200, ' + getRandomSaturation(100) + ', 50%)';
    }

    ctx.fillRect(CLOUD_X + BAR_WIDTH + (INDENT + BAR_WIDTH) * i, textHeight - GAP_TEXT, BAR_WIDTH, -barHeight);

    ctx.fillStyle = TEXT_COLOR;
    ctx.fillText(players[i], CLOUD_X + BAR_WIDTH + (INDENT + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP_TEXT);
    var scoresX = CLOUD_X + BAR_WIDTH + (INDENT + BAR_WIDTH) * i;
    var scoresY = CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP_TEXT - barHeight - GAP;
    renderText(ctx, Math.round(times[i]), scoresX, scoresY, BAR_WIDTH);
  }
};
