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
    drawImg();
}

function drawImg() {
    const meme = getGmeme();
    var img = new Image()
    img.src = `image/${meme.imgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xend,yend
        drawText();
    }
}

function drawText() {
    const meme = getGmeme();
    meme.lines.forEach(line => {
        gCtx.textAlign = `${line.align}`;
        gCtx.font = `${line.size} ${line.font}`;
        gCtx.fillStyle = `${line.color}`;
        gCtx.fillText(`${line.txt}`, line.pos.x, line.pos.y);
        gCtx.lineWidth = 3;
        gCtx.strokeStyle = line.stroke;
        gCtx.strokeText(`${line.txt}`, line.pos.x, line.pos.y);
    })
}

function renderGallery() {
    const gallery = getGallery();
    var htmlStr = gallery.map(img => {
        return `<div onclick="onImgSelect(${img.id})" class="gallery-img"><img src="image/${img.id}.jpg"></div>`
    })
    document.querySelector('.row.list').innerHTML = htmlStr.join('');
}