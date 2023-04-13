import React, { useState } from 'react';

import html2canvas from 'html2canvas'; Import { saveAs) from 'file-saver;

function ScrollingScreenshots() { const imagesList, setimagesList] = useState([]);

const takeScreenshot = async()

const {width, height} = page.getBoundingClientRect();

const page = document.query Selector("#page"); const canvas = document.crea teElement("canvas"); canvas.getContext("2d");

canvas.width = width; canvas.height = height;

const context =

const imageData = context.getimageData(0, 0, width, height),

const scrollHeight = page.scrollHeight;

const maxHeight = 5000;

const slices = Math.ceil(scrollHeight Vimport React, { useState } from 'react';

import html2canvas from 'html2canvas'; Import { saveAs) from 'file-saver;

function ScrollingScreenshots() { const imagesList, setimagesList] = useState([]);

const takeScreenshot = async()

const {width, height} = page.getBoundingClientRect();

const page = document.query Selector("#page"); const canvas = document.crea teElement("canvas"); canvas.getContext("2d");

canvas.width = width; canvas.height = height;

const context =

const imageData = context.getimageData(0, 0, width, height),

const scrollHeight = page.scrollHeight;

const maxHeight = 5000;

const slices = Math.ceil(scrollHeight V