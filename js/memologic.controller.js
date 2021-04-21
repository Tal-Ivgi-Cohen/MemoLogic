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
    onOpenCanvas()
}

function onOpenCanvas() {
    document.querySelector('.canvas-container').hidden = false
}

function closeCanvas() {
    document.querySelector('.canvas-container').hidden = true;
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    elContainer.width = gElCanvas.width
    elContainer.height = gElCanvas.height
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
        gCtx.font = `${line.size}px ${line.font}`;
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
        return `<div onclick="onChosenImg(${img.id})"><img class="gallery-img" src="${img.url}"></div>`
    })
    document.querySelector('.row.list').innerHTML = htmlStr.join('');
}

function onAddText(val) {
    updateText(val);
    drawImg();
}

function onChangeSize(val) {
    changeSize(val);
    drawImg()
}

function onMoveLine(val) {
    moveLine(val);
    drawImg()
}

function onSwitchLine() {
    const meme = getGmeme();
    switchLine()
    document.querySelector('.line-editor input').value = meme.lines[meme.selectedLineIdx].txt;
    document.querySelector('.line-editor input').focus()
    document.querySelector('.line-editor input').select()
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
    changeAlign(val);
    drawImg();
}

function onChangeFont(val) {
    changeFont(val);
    drawImg();
}

function onSetStrokeColor(val) {
    setStrokeColor(val)
    drawImg();
}

function onSetFillColor(val) {
    setFillColor(val)
    drawImg();
}

/*function onSetFilter(txt) {
    setFilter(txt)
    rrenderGallery();
}*/


function uploadImg(elForm, ev) {
    ev.preventDefault();
    document.getElementById('imgData').value = gElCanvas.toDataURL("image/jpeg");

    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-container').innerHTML = `
        <button><a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
        <img src="icon/facebook-logo.PNG" width=15 heigh=15/>   
        </a></button>
        <button>   <a href="whatsapp://send?text=${uploadedImgUrl}&t=${uploadedImgUrl}" data-action="./share/whatsapp/share"  
        target="_blank"> <img src="icon/whatsapp.PNG" width=20 heigh=20/> </a>   
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