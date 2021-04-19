'use strict'
const KEY = 'memes';
var gImgs = [{
        id: '1',
        url: 'image/1.jpg',
        keywords: ['public'],
    },
    {
        id: '2',
        url: 'image/2.jpg',
        keywords: ['cute'],
    }
];

function getGallery(imgId) {
    return gImgs;
}