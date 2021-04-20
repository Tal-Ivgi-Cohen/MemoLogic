'use strict'
const KEY = 'memes';
var gKeywords = gImgs[i].keywords
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
        keywords: ['cute', 'sleep'],
    },
    {
        id: 4,
        keywords: ['sleep'],
    }, {
        id: 5,
        keywords: ['cute'],
    },
    {
        id: 6,
        keywords: ['funny'],
    },
    {
        id: 7,
        keywords: ['funny'],
    },
    {
        id: 8,
        keywords: ['cute'],
    },
    {
        id: 9,
        keywords: ['funnt'],
    },
    {
        id: 10,
        keywords: ['public'],
    },
    {
        id: 11,
        keywords: ['public'],
    },
    {
        id: 12,
        keywords: ['public'],
    }, {
        id: 13,
        keywords: ['movie'],
    },
    {
        id: 14,
        keywords: ['movie'],
    },
    {
        id: 15,
        keywords: ['movie'],
    },
    {
        id: 16,
        keywords: ['funny'],
    },
    {
        id: 17,
        keywords: ['public'],
    },
    {
        id: 18,
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

var gFilterBy = {
    gImgs: keywords,
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
        align: 'center',
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

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = color
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setFilter(filterBy) {
    gFilterBy.category = filterBy.category;
}

/*function getKeywords() {
    var keywords = gKeywords.filter(function(keyword) {
        return book.name.includes(gFilterBy.category) &&
            book.price <= gFilterBy.price
    })*/