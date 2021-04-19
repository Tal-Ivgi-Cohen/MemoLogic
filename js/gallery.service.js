'use strict'
const KEY = 'memes';
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
        keywords: ['public'],
    },
    {
        id: 4,
        url: 'image/4.jpg',
        keywords: ['cute'],
    }, {
        id: 5,
        url: 'image/5.jpg',
        keywords: ['public'],
    },
    {
        id: 6,
        url: 'image/6.jpg',
        keywords: ['cute'],
    },

];

function getGallery(imgId) {
    return gImgs;
}