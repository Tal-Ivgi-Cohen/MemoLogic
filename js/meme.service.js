'use strict'
var gImgs = [{
        id: 1,
        url: 'image/1.jpg',
        keywords: ['public'],
    },
    {
        id: 2,
        url: 'image/2.jpg',
        keywords: ['cute'],
    },
    {
        id: 3,
        url: 'image/3.jpg',
        keywords: ['cute', 'sleep'],
    },
    {
        id: 4,
        url: 'image/4.jpg',
        keywords: ['sleep'],
    }, {
        id: 5,
        url: 'image/5.jpg',
        keywords: ['cute'],
    },
    {
        id: 6,
        url: 'image/6.jpg',
        keywords: ['funny'],
    },
    {
        id: 7,
        url: 'image/7.jpg',
        keywords: ['funny'],
    },
    {
        id: 8,
        url: 'image/8.jpg',
        keywords: ['cute'],
    },
    {
        id: 9,
        url: 'image/9.jpg',
        keywords: ['funnt'],
    },
    {
        id: 10,
        url: 'image/10.jpg',
        keywords: ['public'],
    },
    {
        id: 11,
        url: 'image/11.jpg',
        keywords: ['public'],
    },
    {
        id: 12,
        url: 'image/12.jpg',
        keywords: ['public'],
    }, {
        id: 13,
        url: 'image/13.jpg',
        keywords: ['movie'],
    },
    {
        id: 14,
        url: 'image/14.jpg',
        keywords: ['movie'],
    },
    {
        id: 15,
        url: 'image/15.jpg',
        keywords: ['movie'],
    },
    {
        id: 16,
        url: 'image/16.jpg',
        keywords: ['funny'],
    },
    {
        id: 17,
        url: 'image/17.jpg',
        keywords: ['public'],
    },
    {
        id: 18,
        url: 'image/18.jpg',
        keywords: ['movie'],
    },

];

var gMeme = {
    imgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'First line',
            size: 60,
            align: 'center',
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
            align: 'center',
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
        size: 60,
        align: 'center',
        color: 'white',
        stroke: 'black',
        font: 'Impact',
        pos: {
            x: 250,
            y: getRandomIntInclusive(200, 390)
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

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}