'use strict'

var gKeywords = { 'happy': 12, 'funny puk': 1 };


/*Create a Canvas with a single image – the image shall be taken from 
gMeme (managed by a memeService)*/


var gMeme = {
    imgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            stroke: 'black',
            font: 'Impact',
            pos: {
                x: '400',
                y: '100'
            }
        },
        {
            txt: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            stroke: 'black',
            font: 'Impact',
            pos: {
                x: '400',
                y: '100'
            }
        },
    ]
}

function getGmeme() {
    return gMeme
}

function changeMemeImg(id) {
    gMeme.imgId = id
}