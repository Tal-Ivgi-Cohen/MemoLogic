'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 };

var gMeme = {
    imgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Write your text',
            size: 100,
            align: 'left',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
        },
        {
            txt: 'Write your text',
            size: 100,
            align: 'left',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
        },
    ]
}

function getGmeme() {
    return gMeme
}

function changeMemeImg(id) {
    gMeme.imgId = id
}

function updateText(val) {
    gMeme.lines[gMeme.selectedLineIdx].txt = val
}