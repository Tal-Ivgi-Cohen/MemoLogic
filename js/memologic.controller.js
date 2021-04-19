'use strict'

var gElCanvas;
var gCtx;



function initPage() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery();
}

function onImgSelect(id) {
    changeMemeImg(id);
    resizeCanvas();
    renderCanvas();
    toggleGenerator()
}

function toggleGenerator() {
    document.querySelector('.canvas-container').hidden = false
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container');
    document.querySelector('.my-canvas').style.width = '100%'
    document.querySelector('.my-canvas').style.height = '100%'
}

function renderCanvas() {
    const elImg = new Image()
    var meme = getGmeme();
    elImg.src = `image/${meme.imgId}.jpg`;
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(meme.lines[0].txt, 250, 150);
        drawText(meme.lines[1].txt, 250, 400);
    }
}

function drawText(txt, x, y) {
    const meme = getGmeme();
    meme.lines.forEach(line => {
        gCtx.textAlign = line.align;
        gCtx.font = line.font;
        gCtx.fillStyle = line.color;
        gCtx.strokeStyle = line.stroke;
        gCtx.strokeText(txt, x, y);
    })
}

function renderGallery() {
    const gallery = getGallery();
    var htmlStr = gallery.map(img => {
        return `<div onclick="onImgSelect(${img.id})" class="gallery-img"><img src="image/${img.id}.jpg"></div>`
    })
    document.querySelector('.row.list').innerHTML = htmlStr.join('');
}

function onAddText() {
    var elTxt = document.querySelector('.text-area');
    var txt = elTxt.value
}