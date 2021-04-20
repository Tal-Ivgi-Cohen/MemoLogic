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

}

function switchLine() {
    gMeme.selectedLineIdx++
        if (gMeme.selectedLineIdx > gMeme.lines.length - 1) gMeme.selectedLineIdx = 0
}

function addLine() {
    gMeme.lines.push(createLine())
}

function createLine() {
    var line = {
        txt: 'Write your text',
        size: 100,
        align: 'left',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
    }
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx--
}