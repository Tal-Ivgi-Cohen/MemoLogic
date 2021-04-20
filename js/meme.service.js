'use strict'
const KEY = 'memes';
var gKeywords = { 'happy': 12, 'funny puk': 1 };
var gImgs = [{
        id: 1,
        keywords: ['public'],
    },
    {
        id: 2,
        keywords: ['cute'],
    },
    {
        id: 3,
        keywords: ['public'],
    },
    {
        id: 4,
        keywords: ['cute'],
    }, {
        id: 5,
        keywords: ['public'],
    },
    {
        id: 6,
        keywords: ['cute'],
    },
    {
        id: 7,
        keywords: ['cute'],
    },
    {
        id: 8,
        keywords: ['cute'],
    },
    {
        id: 9,
        keywords: ['cute'],
    },
    {
        id: 10,
        keywords: ['cute'],
    },
    {
        id: 11,
        keywords: ['cute'],
    },
    {
        id: 12,
        keywords: ['cute'],
    }, {
        id: 13,
        keywords: ['cute'],
    },
    {
        id: 14,
        keywords: ['cute'],
    },
    {
        id: 15,
        keywords: ['cute'],
    },
    {
        id: 16,
        keywords: ['cute'],
    },
    {
        id: 17,
        keywords: ['cute'],
    },
    {
        id: 18,
        keywords: ['cute'],
    },

];

var gMeme = {
    imgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'First line',
            size: 60,
            align: 'left',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
            pos: {
                x: 250,
                y: 150,
            }
        },
        {
            txt: 'Second line',
            size: 60,
            align: 'left',
            color: 'white',
            stroke: 'black',
            font: 'Impact',
            pos: {
                x: 250,
                y: 400,
            }
        },
    ]
}

function getGallery(imgId) {
    return gImgs;
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

function changeSize(val) {
    gMeme.lines[gMeme.selectedLineIdx].size += val
}

function moveLine(val) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += val

}

function switchLine() {
    gMeme.selectedLineIdx++
        if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function addLine() {
    gMeme.lines.push(createLine())
}

function createLine() {
    const line = {
        txt: 'Write your text',
        size: 100,
        align: 'left',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos: {
            x: 250,
            y: 300,
        }
    }
    return line
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
}

function changeAlign(val) {
    gMeme.lines[gMeme.selectedLineIdx].align = val
}

function changeFont(val) {
    gMeme.lines[gMeme.selectedLineIdx].font = val
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img.jpg'
}