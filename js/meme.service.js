'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 };

var gMeme = {
    imgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'Write your text',
            size: 60,
            align: 'left',
            color: 'red',
            stroke: 'black',
            font: 'Impact',
        },
        {
            txt: 'Write your text',
            size: 60,
            align: 'left',
            color: 'red',
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