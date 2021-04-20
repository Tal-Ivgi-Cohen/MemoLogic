'use strict'

var gElCanvas;
var gCtx;

function initPage() {
    gElCanvas = document.querySelector('.my-canvas');
    gCtx = gElCanvas.getContext('2d');
    renderGallery();
}

function onChosenImg(id) {
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
    var elImg = new Image()
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
        return `<div onclick="onChosenImg(${img.id})"><img class="gallery-img" src="image/${img.id}.jpg"></div>`
    })
    document.querySelector('.row.list').innerHTML = htmlStr.join('');
}

function onAddText(val) {
    updateText(val);
    console.log(val);
    renderCanvas()
}

function onChangeSize(val) {
    changeSize(val);
    renderCanvas();
}

function onMoveLine(val) {
    moveLine(val);
    renderCanvas()
}

function onSwitchLine() {
    const meme = getGmeme();
    switchLine()
    document.querySelector('.line-editor input').value = meme.lines[meme.selectedLineIdx].txt;
    document.querySelector('.line-editor input').focus()
}

function onAddLine() {
    addLine();
    drawImg()
}

function onRemoveLine() {
    removeLine();
    drawImg()
}

function onChangeAlign(val) {

}



function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <button><a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a></button>
        <button>   <a href="whatsapp://send?text=${uploadedImgUrl}&t=${uploadedImgUrl}" data-action="share/whatsapp/share"  
        target="_blank"> Share to WhatsApp </a>   
        `
    }
    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function(err) {
            console.error(err)
        })
}