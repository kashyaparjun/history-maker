joint.shapes.history = require('./misc/shapes');
var MenuGraph = require('./models/MenuGraph');
var MenuPaper = require('./views/MenuPaper');
var linkHandles = require('./misc/linkHandles');
var SaveButton = require('./views/SaveButton');
var LoadButton = require('./views/LoadButton');
var ClearButton = require('./views/ClearButton');
var Zoom = require('./models/Zoom');
var ZoomButton = require('./views/ZoomButton');
require('./misc/contextMenu');

$.Drag.prototype.position = _.noop;

var canvasGraph = new joint.dia.Graph();

var canvasPaper = new joint.dia.Paper({
    el: document.getElementById('canvas'),
    width: 800,
    height: 500,
    gridSize: 1,
    model: canvasGraph,
    linkPinning: false,
    linkConnectionPoint: joint.util.shapePerimeterConnectionPoint,
    restrictTranslate: true,
});

linkHandles(canvasGraph);

var zoom = new Zoom({
    paper: canvasPaper,
});

var menuGraph = new MenuGraph();

var menuPaper = new MenuPaper({
    el: document.getElementById('menu'),
    model: menuGraph,
    height: 500,
    width: 150,
    targetPaper: canvasPaper,
    zoom: zoom,
});

menuGraph.addItems(['Rectangle', 'Ellipse']);

var saveButton = new SaveButton({
    el: document.getElementById('save-btn'),
    model: canvasGraph,
});

var loadButton = new LoadButton({
    el: document.getElementById('load-btn'),
    model: canvasGraph,
});

var clearButton = new ClearButton({
    el: document.getElementById('clear-btn'),
    model: canvasGraph,
});

var zoomInButton = new ZoomButton({
    el: document.getElementById('zoom-in-btn'),
    model: zoom,
});

var zoomOutButton = new ZoomButton({
    el: document.getElementById('zoom-out-btn'),
    model: zoom,
});