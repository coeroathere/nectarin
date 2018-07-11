(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.button_1 = function() {
	this.initialize(img.button_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,40);


(lib.button_3 = function() {
	this.initialize(img.button_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,273,40);


(lib.DP_bez = function() {
	this.initialize(img.DP_bez);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,458,293);


(lib.glaz = function() {
	this.initialize(img.glaz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,20);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,95);


(lib.Nazvanie_2 = function() {
	this.initialize(img.Nazvanie_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,349,68);


(lib.ruka = function() {
	this.initialize(img.ruka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,49);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("A1FDPIAAmeMAqLAAAIAAGeg");
	this.shape.setTransform(135,20.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(229,0,0,0)","#FC0000","rgba(231,0,0,0)"],[0,0.498,1],-109.1,0,109.2,0).s().p("AxCGMIAAsXMAiFAAAIAAMXg");
	this.shape.setTransform(109.1,39.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,218.3,79.3), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgyA/IAAgqQAAgIACgEQADgGAHgDIAsgYIAAgHIgxAAIgHgQIAAgPIBTAAQAIAAAFAEQAFAFAAAGIAAAeQAAAHgCAFQgCAFgIADIgsAWIAAAGIA4AAIAAAgg");
	this.shape.setTransform(104,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMA/IAAheIgHAAIgQBeIgtAAIAAgQIAbhtIBWAAIAAB9g");
	this.shape_1.setTransform(91,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWA/IAAgQIAFgOIglhQIAAgPIArAAIALAxIAFAAIAJgxIApAAIAAAPIgnBug");
	this.shape_2.setTransform(78.5,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJA/IAAheIgRAAIAABeIgtAAIAAh9IBrAAIAAB9g");
	this.shape_3.setTransform(65.5,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhCA/IAAggIANAAIAWhdIBWAAIAABdIAMAAIAAAggAgHAfIARAAIAAg+IgGAAg");
	this.shape_4.setTransform(51.3,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgvA/IAAh9IBfAAIAAAPIgHAQIgrAAIAAAPIArAAIAAAeIgrAAIAAARIAyAAIAAAgg");
	this.shape_5.setTransform(38.2,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhCA/IAAggIANAAIAWhdIBWAAIAABdIAMAAIAAAggAgHAfIARAAIAAg+IgGAAg");
	this.shape_6.setTransform(24.7,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAOA/IAAgZIgbAAIAAAZIgdAAIAAgZIgdAAIAAgaIAdAAIAAgYIgdAAIAAgZIAdAAIAAgZIAdAAIAAAZIAbAAIAAgZIAeAAIAAAZIAdAAIAAAZIgdAAIAAAYIAdAAIAAAaIgdAAIAAAZgAgNAMIAbAAIAAgYIgbAAg");
	this.shape_7.setTransform(9.1,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(-0.4,1.4,113,24), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdA1QgHAAgFgDQgEgEAAgGIAAhPQAAgGAEgDQAFgEAHAAIA7AAQAHAAAEAEQAFADAAAGIAABPQAAAGgFAEQgEADgHAAgAgHAaIAOAAIAAg0IgOAAg");
	this.shape.setTransform(143.8,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIA1IAAgpIgOAAIAAApIgnAAIAAhpIAnAAIAAAnIAOAAIAAgnIAmAAIAABpg");
	this.shape_1.setTransform(133.2,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIA1IAAgNIAFgiIgDAAIgRAlIAAAKIglAAIAAhpIAlAAIAAANIgFAiIADAAIARglIAAgKIAmAAIAABpg");
	this.shape_2.setTransform(122.7,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAIA1IgJgpIgHAAIAAApIgmAAIAAhpIAmAAIAAAnIAHAAIAIgnIAkAAIAAANIgNAlIARAqIAAANg");
	this.shape_3.setTransform(112.4,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgtA1IAAhpIBLAAQAHAAAEAEQAFADAAAGIAAAYQgBAHgEADQgFADgGABIAAABQAGAAAFAEQAEADABAGIAAAbQAAAGgFAEQgEADgHAAgAgHAaIAOAAIAAgOIgOAAgAgHgNIAOAAIAAgNIgOAAg");
	this.shape_4.setTransform(93.4,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgoA1IAAhpIBRAAIAAANIgGANIglAAIAAANIAlAAIAAAZIglAAIAAAOIArAAIAAAbg");
	this.shape_5.setTransform(75.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAjA1IgLgpIgFAAIAAApIglAAIAAgpIgFAAIgLApIgmAAIAAgNIARgqIgOglIAAgNIAkAAIAKAnIAFAAIAAgnIAlAAIAAAnIAFAAIAKgnIAkAAIAAANIgOAlIARAqIAAANg");
	this.shape_6.setTransform(62.8,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTA1IAAgNIAFgMIgghDIAAgNIAlAAIAJAqIAEAAIAHgqIAkAAIAAANIghBcg");
	this.shape_7.setTransform(50.4,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(43.9,4.6,106.8,20.2), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeBcIAAguIA+AAIAAAugAgbAaIgLhfIAAgWIBNAAIAAAWIgLBfg");
	this.shape.setTransform(285.7,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA1BcIAAhYIgGAAIgRBYIg7AAIgRhYIgGAAIAABYIhEAAIAAgXIAWigIBPAAIASBIIAEAAIAQhIIBPAAIAYCgIAAAXg");
	this.shape_1.setTransform(255.9,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBcIAAi3ICWAAIAAAWIgLAYIhFAAIAAAUIBFAAIAAAtIhFAAIAAAaIBQAAIAAAug");
	this.shape_2.setTransform(222.5,9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkBcIAAgXIAJgUIg6h2IAAgWIBDAAIASBIIAHAAIAOhIIBCAAIAAAWIg+Chg");
	this.shape_3.setTransform(192.4,9.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBcIAAgUIhEAAQgNAAgHgGQgIgGAAgLIAAhlQAAgKAIgGQAHgGANAAIBEAAIAAgRIBFAAIAAARIBEAAQANAAAHAGQAIAGAAAKIAABlQAAALgIAGQgHAGgNAAIhEAAIAAAUgAAjAaIAZAAIAAg2IgZAAgAg8AaIAaAAIAAg2IgaAAg");
	this.shape_4.setTransform(157.1,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOB8IAAgXIALg7IgGAAIggBAIAAASIhHAAIAAi3IBHAAIAAAXIgLA6IAGAAIAgg+IAAgTIBHAAIAAC3gAg0hPIAAgsIBpAAIAAAZIgJATg");
	this.shape_5.setTransform(120.9,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUBcIgEglIgeAAIgFAlIhGAAIAAgXIAfigIB1AAIAfCgIAAAXgAAKAJIgGg2IgHAAIgGA2IATAAg");
	this.shape_6.setTransform(89.2,9.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAQBcIgShIIgNAAIAABIIhGAAIAAi3IBGAAIAABCIANAAIAQhCIBDAAIAAAWIgaBBIAfBJIAAAXg");
	this.shape_7.setTransform(57.9,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 2
	this.instance = new lib.Nazvanie_2();
	this.instance.parent = this;
	this.instance.setTransform(0,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,-9,349,105), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.glaz();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,22,20), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939597").s().p("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");
	this.shape.setTransform(56.5,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,113,113), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#939597").s().p("AvDGKIAAsTIeGAAIAAMTgADXFLICIgBIBepWIAAJWIDeAAIAAh2IhqAAIAAiYIBqAAIAAh4IhqAAIAAiVIBqAAIAAh5IlKAAIg3GSIg2mSIh3AAIAOBsQgTgmgfgbQgzgrhEAAIh3AAIAAJLIhXpLIicAAIhaJfIAApfIiWAAIg1FVIg1lVIiVAAIAAKUIB2AAIAAk+IA1E+IA/AAIA0k+IAAE+IDjAAIAOhlIBbAAIAOBlIDfAAIAAjWIAbgEIA4DaIBzAAIhKkAQAggXAUguQAYgwgHgugAKvFKIDZAAIAAh2IhkAAIAAoeIh1AAgAlqBJIAgkaIAhEagAgwjcIABAAQAWAAAUAOQAjAagBBBQAAAmgOAcQgOAYgVALQgNAHgPgBg");
	this.shape.setTransform(96.4,39.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,192.7,78.8), null);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-24.5,45,49);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-24.5,45,49);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.ruka();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-24.5,45,49);


(lib._GUIDE_BACKGROUND = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.298)").s().p("AkrEsIAApXIJXAAIAAJXg");
	this.shape.setTransform(30,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._GUIDE_BACKGROUND, new cjs.Rectangle(0,0,60,60), null);


(lib._BORDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgAECcQMAAAk4fIAJAAMAAAE4fg");
	this.shape.setTransform(0.5,1000);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._BORDER, new cjs.Rectangle(0,0,1,2000), null);


(lib.scale_right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BORDER
	this.instance = new lib._BORDER();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,6,1,0.2,0,0,0,0.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// GUIDE_BACKGROUND
	this.guide_background_mc = new lib._GUIDE_BACKGROUND();
	this.guide_background_mc.parent = this;
	this.guide_background_mc.setTransform(-30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,0,60,400);


(lib.scale_left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BORDER
	this.instance = new lib._BORDER();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(79));

	// BORDER
	this.instance_1 = new lib._BORDER();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,249,1,1,0,-90,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(79));

	// BORDER
	this.instance_2 = new lib._BORDER();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.5,60,1,2,0,0,0,0.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(79));

	// GUIDE_BACKGROUND
	this.guide_background_mc = new lib._GUIDE_BACKGROUND();
	this.guide_background_mc.parent = this;
	this.guide_background_mc.setTransform(30,30,1,1,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2000,3999.9);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ4();
	this.instance.parent = this;
	this.instance.setTransform(44.4,49.9,1,1,0,0,0,11,10);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},29).to({alpha:0},30).wait(1));

	// Слой 1
	this.instance_1 = new lib.head();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,95);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{s:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(87));

	// button_2.png
	this.instance = new lib.button_3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(87));

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("A05CzIAAllMApzAAAIAAFlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:136.3,y:19.8}).wait(86));

	// Слой 6
	this.instance_1 = new lib.Символ9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-123.5,18.6,1,1.421,0,45.3,0,109.2,39.6);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:404.5},37).wait(49));

	// button_1.png
	this.instance_2 = new lib.button_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,273.4,40);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"s":1});

	// timeline functions:
	this.frame_0 = function() {
		//this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(149).call(this.frame_149).wait(1));

	// Слой 8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AXVIPQjtAAg+grQg+grgNheQgKhJAJg5QADgTAIgdQAFgUACggIACg8QACgXAIggQAOgyCEgIQB1gHBIAXQBEAWBTBVQBcBfgFBGQgFBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_74 = new cjs.Graphics().p("AXVIPQjtAAg+grQg+grgNheQgKhJAJg5QADgTAIgdQAFgUACggIACg8QACgXAIggQAOgyCEgIQB1gHBIAXQBEAWBTBVQBcBfgFBGQgFBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_75 = new cjs.Graphics().p("AXWIPQjtAAg+grQg/grgNheQgKhJAJg5QADgTAHgdQAFgUACggIACg8QABgXAJggQANgyCEgIQB1gHBIAXQBEAWBTBVQBdBfgFBGQgEBDgiBbQgdBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_76 = new cjs.Graphics().p("AXXIPQjtAAg/grQg+grgOheQgKhJAIg5QADgTAHgdQAFgUACggIABg8QACgXAIggQANgyCEgIQB1gHBJAXQBDAWBUBVQBdBfgEBGQgEBDghBbQgeBPAHArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_77 = new cjs.Graphics().p("AXYIPQjtABg/gsQg/grgOheQgLhJAIg5QADgTAHgdQAFgUABggIACg8QABgXAIggQANgyCFgIQB1gHBIAXQBEAWBUBVQBdBfgEBGQgEBDggBbQgdBPAGArQAEAag+AAQgnAAhDgLg");
	var mask_graphics_78 = new cjs.Graphics().p("AXYIPQjtABg/gsQg/grgOheQgLhJAIg5QACgTAHgdQAGgUAAggIACg8QABgXAIggQANgyCEgIQB1gHBIAXQBEAWBVBVQBdBfgEBGQgDBDggBbQgdBPAHArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_79 = new cjs.Graphics().p("AXZIPQjtABg/gsQhAgrgOheQgMhJAIg5QADgTAHgdQAFgUABggIABg8QABgXAIggQAMgyCEgIQB1gHBJAXQBEAWBUBVQBeBfgDBGQgDBDggBbQgcBPAGArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_80 = new cjs.Graphics().p("AXZIPQjtABg/grQg/gsgPheQgMhJAIg5QACgTAHgdQAFgUABggIABg8QABgXAHggQAMgyCFgIQB1gHBIAXQBEAWBVBVQBfBfgEBGQgCBDggBbQgcBPAHArQAEAag+AAQgnAAhEgLg");
	var mask_graphics_81 = new cjs.Graphics().p("AXaIPQjtABg/grQhAgsgPheQgMhJAHg5QADgTAGgdQAFgUABggIABg8QAAgXAIggQAMgyCEgIQB1gHBJAXQBEAWBVBVQBfBfgDBGQgDBDgfBbQgcBPAHArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_82 = new cjs.Graphics().p("AXaIPQjtABg/gsQhAgrgPheQgNhJAIg5QACgTAHgdQAFgUAAggIABg8QAAgXAIggQAMgyCEgIQB1gHBIAXQBFAWBVBVQBfBfgCBGQgDBDgfBbQgbBPAHArQAEAag+AAQgnAAhEgLg");
	var mask_graphics_83 = new cjs.Graphics().p("AXbIPQjtABhAgsQhAgrgPheQgNhJAHg5QADgTAGgdQAFgUAAggIABg8QAAgXAIggQAMgyCEgIQB1gHBIAXQBFAWBWBVQBfBfgDBGQgCBDgfBbQgbBPAHArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_84 = new cjs.Graphics().p("AXbIPQjtABg/gsQhAgrgQheQgNhJAHg5QACgTAHgdQAEgUABggIAAg8QAAgXAIggQALgyCFgIQB0gHBJAXQBFAWBWBVQBfBfgCBGQgCBDgfBbQgbBPAIArQAEAag+AAQgnAAhEgLg");
	var mask_graphics_85 = new cjs.Graphics().p("AXcIPQjtABhAgsQhAgrgQheQgNhJAGg5QADgTAGgdQAFgUAAggIAAg8QABgXAHggQALgyCFgIQB0gHBJAXQBFAWBWBVQBgBfgCBGQgCBDgfBbQgbBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_86 = new cjs.Graphics().p("AXcIPQjtAAhAgrQhAgrgQheQgOhJAHg5QACgTAHgdQAEgUAAggIAAg8QABgXAHggQALgyCFgIQB0gHBJAXQBFAWBWBVQBgBfgCBGQgBBDgfBbQgaBPAHArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_87 = new cjs.Graphics().p("AXcIPQjtAAhAgrQhAgrgRheQgNhJAHg5QACgTAGgdQAFgUAAggIAAg8QAAgXAHggQAMgyCEgIQB0gHBKAXQBEAWBXBVQBgBfgCBGQgCBDgeBbQgaBPAIArQAEAag9AAQgoAAhEgLg");
	var mask_graphics_88 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhBgrgRheQgNhJAHg5QACgTAGgdQAEgUAAggIAAg8QABgXAHggQALgyCEgIQB1gHBJAXQBEAWBXBVQBhBfgCBGQgCBDgeBbQgaBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_89 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhBgrgRheQgNhJAGg5QACgTAHgdQAEgUAAggIAAg8QAAgXAHggQALgyCEgIQB1gHBJAXQBFAWBXBVQBgBfgCBGQgBBDgeBbQgaBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_90 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhBgrgRheQgNhJAGg5QACgTAGgdQAFgUAAggIgBg8QABgXAHggQALgyCEgIQB1gHBJAXQBEAWBXBVQBhBfgCBGQgBBDgeBbQgaBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_91 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhBgrgRheQgNhJAGg5QACgTAGgdQAFgUAAggIgBg8QAAgXAHggQALgyCEgIQB1gHBJAXQBFAWBXBVQBhBfgCBGQgBBDgeBbQgaBPAIArQAFAag+AAQgnAAhEgLg");
	var mask_graphics_92 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhAgrgSheQgNhJAGg5QACgTAGgdQAEgUAAggIAAg8QAAgXAHggQALgyCEgIQB1gHBJAXQBFAWBXBVQBhBfgCBGQgBBDgeBbQgaBPAJArQAFAag+AAQgoAAhEgLg");
	var mask_graphics_93 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhAgrgSheQgNhJAGg5QACgTAGgdQAEgUAAggIAAg8QAAgXAHggQALgyCEgIQB0gHBKAXQBEAWBYBVQBgBfgBBGQgBBDgdBbQgaBPAIArQAFAag+AAQgoAAhEgLg");
	var mask_graphics_94 = new cjs.Graphics().p("AXeIPQjtAAhBgrQhAgrgSheQgNhJAGg5QACgTAGgdQAEgUAAggIAAg8QAAgXAHggQALgyCEgIQB0gHBKAXQBEAWBYBVQBgBfgBBGQgBBDgdBbQgaBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_95 = new cjs.Graphics().p("AXdIPQjtAAhAgrQhBgrgRheQgOhJAGg5QACgTAGgdQAFgUAAggIgBg8QAAgXAHggQALgyCEgIQB1gHBJAXQBFAWBXBVQBhBfgCBGQgBBDgdBbQgaBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_96 = new cjs.Graphics().p("AXcIPQjtAAhAgrQhAgrgRheQgNhJAGg5QACgTAGgdQAFgUAAggIAAg8QAAgXAHggQAMgyCEgIQB0gHBJAXQBFAWBXBVQBgBfgCBGQgBBDgeBbQgbBPAIArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_97 = new cjs.Graphics().p("AXbIPQjtAAg/grQhBgrgQheQgNhJAHg5QACgTAGgdQAFgUAAggIABg8QAAgXAHggQAMgyCEgIQB1gHBJAXQBEAWBWBVQBgBfgCBGQgCBDgeBbQgbBPAIArQAEAag+AAQgnAAhEgLg");
	var mask_graphics_98 = new cjs.Graphics().p("AXaIPQjtABg/gsQhAgrgQheQgMhJAHg5QACgTAGgdQAFgUABggIAAg8QABgXAHggQAMgyCEgIQB1gHBJAXQBEAWBWBVQBfBfgCBGQgCBDgfBbQgcBPAIArQAEAag9AAQgoAAhEgLg");
	var mask_graphics_99 = new cjs.Graphics().p("AXaIPQjtABhAgrQg/gsgQheQgMhJAHg5QADgTAGgdQAFgUABggIABg8QAAgXAIggQAMgyCEgIQB1gHBJAXQBEAWBVBVQBfBfgDBGQgCBDgfBbQgcBPAHArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_100 = new cjs.Graphics().p("AXZIPQjtABg/grQhAgsgPheQgLhJAHg5QADgTAGgdQAFgUABggIABg8QABgXAIggQAMgyCEgIQB1gHBIAXQBFAWBVBVQBeBfgDBGQgDBDggBbQgcBPAIArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_101 = new cjs.Graphics().p("AXYIPQjtABg/gsQg/grgPheQgLhJAIg5QACgTAHgdQAFgUABggIABg8QABgXAIggQAMgyCFgIQB1gHBIAXQBEAWBVBVQBeBfgEBGQgDBDggBbQgcBPAHArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_102 = new cjs.Graphics().p("AXYIPQjtABg/gsQg/grgOheQgMhJAIg5QADgTAHgdQAFgUABggIABg8QABgXAIggQANgyCEgIQB1gHBJAXQBEAWBUBVQBeBfgEBGQgDBDghBbQgcBPAGArQAFAag+AAQgoAAhDgLg");
	var mask_graphics_103 = new cjs.Graphics().p("AXXIPQjtABg+gsQhAgrgNheQgLhJAIg5QACgTAIgdQAFgUABggIABg8QACgXAIggQAMgyCFgIQB1gHBIAXQBEAWBUBVQBdBfgEBGQgDBDghBbQgdBPAHArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_104 = new cjs.Graphics().p("AXXIPQjtAAg/grQg/grgNheQgLhJAIg5QADgTAHgdQAFgUACggIABg8QACgXAIggQANgyCEgIQB1gHBIAXQBEAWBUBVQBdBfgEBGQgEBDghBbQgdBPAHArQADAag9AAQgoAAhDgLg");
	var mask_graphics_105 = new cjs.Graphics().p("AXWIPQjtAAg+grQg/grgNheQgLhJAJg5QACgTAIgdQAFgUABggIACg8QABgXAJggQANgyCEgIQB1gHBIAXQBEAWBUBVQBdBfgFBGQgEBDghBbQgdBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_106 = new cjs.Graphics().p("AXWIPQjtAAg+grQg/grgNheQgLhJAJg5QADgTAHgdQAFgUACggIACg8QABgXAJggQANgyCEgIQB1gHBIAXQBEAWBTBVQBdBfgEBGQgFBDghBbQgdBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_107 = new cjs.Graphics().p("AXWIPQjtAAg/grQg+grgNheQgLhJAJg5QADgTAHgdQAGgUABggIACg8QACgXAIggQAOgyCEgIQB1gHBIAXQBEAWBTBVQBcBfgEBGQgEBDgiBbQgeBPAHArQADAag+AAQgnAAhDgLg");
	var mask_graphics_108 = new cjs.Graphics().p("AXVIPQjtAAg+grQg+grgNheQgKhJAIg5QADgTAIgdQAFgUACggIACg8QABgXAJggQANgyCFgIQB1gHBIAXQBDAWBUBVQBcBfgFBGQgEBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_109 = new cjs.Graphics().p("AXVIPQjtAAg+grQg/grgMheQgKhJAJg5QADgTAHgdQAGgUABggIACg8QACgXAIggQAOgyCEgIQB1gHBIAXQBEAWBTBVQBcBfgFBGQgEBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_110 = new cjs.Graphics().p("AXVIPQjtAAg+grQg/grgMheQgKhJAJg5QADgTAHgdQAGgUABggIADg8QABgXAJggQANgyCFgIQB1gHBIAXQBDAWBTBVQBcBfgFBGQgEBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_111 = new cjs.Graphics().p("AXVIPQjtAAg+grQg/grgMheQgKhJAJg5QADgTAHgdQAGgUABggIADg8QABgXAJggQANgyCFgIQB1gHBIAXQBDAWBTBVQBcBfgFBGQgEBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");
	var mask_graphics_112 = new cjs.Graphics().p("AXVIPQjtAAg+grQg+grgNheQgKhJAJg5QADgTAIgdQAFgUACggIACg8QACgXAIggQAOgyCEgIQB1gHBIAXQBEAWBTBVQBcBfgFBGQgFBDgiBbQgeBPAGArQAEAag+AAQgoAAhDgLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:172.1,y:53.8}).wait(74).to({graphics:mask_graphics_74,x:172.1,y:53.8}).wait(1).to({graphics:mask_graphics_75,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_76,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_77,x:171.9,y:53.8}).wait(1).to({graphics:mask_graphics_78,x:171.9,y:53.8}).wait(1).to({graphics:mask_graphics_79,x:171.8,y:53.8}).wait(1).to({graphics:mask_graphics_80,x:171.8,y:53.8}).wait(1).to({graphics:mask_graphics_81,x:171.7,y:53.8}).wait(1).to({graphics:mask_graphics_82,x:171.7,y:53.8}).wait(1).to({graphics:mask_graphics_83,x:171.6,y:53.8}).wait(1).to({graphics:mask_graphics_84,x:171.6,y:53.8}).wait(1).to({graphics:mask_graphics_85,x:171.6,y:53.8}).wait(1).to({graphics:mask_graphics_86,x:171.5,y:53.8}).wait(1).to({graphics:mask_graphics_87,x:171.5,y:53.8}).wait(1).to({graphics:mask_graphics_88,x:171.5,y:53.8}).wait(1).to({graphics:mask_graphics_89,x:171.5,y:53.8}).wait(1).to({graphics:mask_graphics_90,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_91,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_92,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_93,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_94,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_95,x:171.3,y:53.8}).wait(1).to({graphics:mask_graphics_96,x:171.4,y:53.8}).wait(1).to({graphics:mask_graphics_97,x:171.5,y:53.8}).wait(1).to({graphics:mask_graphics_98,x:171.6,y:53.8}).wait(1).to({graphics:mask_graphics_99,x:171.6,y:53.8}).wait(1).to({graphics:mask_graphics_100,x:171.7,y:53.8}).wait(1).to({graphics:mask_graphics_101,x:171.8,y:53.8}).wait(1).to({graphics:mask_graphics_102,x:171.8,y:53.8}).wait(1).to({graphics:mask_graphics_103,x:171.9,y:53.8}).wait(1).to({graphics:mask_graphics_104,x:171.9,y:53.8}).wait(1).to({graphics:mask_graphics_105,x:171.9,y:53.8}).wait(1).to({graphics:mask_graphics_106,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_107,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_108,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_109,x:172,y:53.8}).wait(1).to({graphics:mask_graphics_110,x:172.1,y:53.8}).wait(1).to({graphics:mask_graphics_111,x:172.1,y:53.8}).wait(1).to({graphics:mask_graphics_112,x:172.1,y:53.8}).wait(38));

	// ruka.png
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(310.3,136,1,1,48.2);
	this.instance._off = true;

	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(300.8,80.5,1,1,-1.7);
	this.instance_1._off = true;

	this.instance_2 = new lib.Анимация5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(302.5,81.5);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},74).to({state:[{t:this.instance_1}]},21).to({state:[{t:this.instance_2}]},17).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74).to({_off:false},0).to({_off:true,rotation:-1.7,x:300.8,y:80.5},21,cjs.Ease.get(1)).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},21,cjs.Ease.get(1)).to({_off:true,rotation:0,x:302.5,y:81.5},17,cjs.Ease.get(1)).wait(38));

	// Слой 5
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(258,57.5,1,1,0,0,0,33,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({rotation:-3,x:255.6,y:59.4},14,cjs.Ease.get(1)).to({rotation:0,x:258,y:57.5},17,cjs.Ease.get(1)).wait(38));

	// DP_bez.png
	this.instance_4 = new lib.DP_bez();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6,-14);

	this.instance_5 = new lib.DP_bez();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-6,570,1,1,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4}]}).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.5,-16.3,609.2,586.4);


(lib.scale_center = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_55 = function() {
		if (i != 1) {
		i = 0
		this.click1_area.addEventListener("rollover", fl_ClickToGoToAndPlayFromFrame.bind(this));
		} else{
		this.gotoAndPlay("s");
		}
		function fl_ClickToGoToAndPlayFromFrame() {
		this.button.gotoAndPlay("s");
		//this.DP.gotoAndPlay("s");
		//this.click1_area.removeAllEventListeners("rollover")
		i = 1;
		}
	}
	this.frame_112 = function() {
		//this.DP.gotoAndPlay("s");
	}
	this.frame_249 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(55).call(this.frame_55).wait(57).call(this.frame_112).wait(137).call(this.frame_249).wait(1));

	// Слой 7
	this.click1_area = new lib.Символ10();
	this.click1_area.parent = this;
	this.click1_area.setTransform(55.3,188.5,0.841,0.89,0,0,0,134.9,20.8);
	this.click1_area._off = true;
	new cjs.ButtonHelper(this.click1_area, 0, 1, 2, false, new lib.Символ10(), 3);

	this.timeline.addTween(cjs.Tween.get(this.click1_area).wait(55).to({_off:false},0).wait(195));

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0A0A0").s().p("AgIAUIAAgOQAAgFAEgBQgEgBAAgHIAAgLQAAgHAHgBQAFABABAHIAAALQgBAHgDABQADABABAFIAAAOQgBAHgFAAQgHAAAAgHgAgFAGIAAAOQgBAFAFABQAEgBAAgFIAAgOQAAgGgEAAQgFAAABAGgAgFgTIAAALQgBAHAFAAQAEAAAAgHIAAgLQAAgFgEgBQgFABABAFgAgMAbIAAgyIgEAAIAAgBIADAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAAAAAgBIACAAIAAA1gAAJAGIAAgGIgEAAIAAgBIAEAAIAAgHIADAAIAAAHIAFAAIAAABIgFAAIAAAGg");
	this.shape.setTransform(-366.9,18.9,5.148,5.148);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

	// flash0.ai
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(163.7,240,0.128,0.128,0,0,0,57.1,57.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({regX:57,regY:57.5,scaleX:0.12,scaleY:0.12,x:141.8,y:233.5},4,cjs.Ease.get(1)).to({regX:57.1,regY:57.1,scaleX:0.13,scaleY:0.13,x:163.7,y:240},4,cjs.Ease.get(1)).wait(198));

	// Символ 1
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46.7,239.7,0.128,0.128,0,0,0,96.9,39.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({regX:97.1,regY:40.1,scaleX:0.12,scaleY:0.12,x:-51.8,y:233.3},4,cjs.Ease.get(1)).to({regX:96.9,regY:39.9,scaleX:0.13,scaleY:0.13,x:-46.7,y:239.7},4,cjs.Ease.get(1)).wait(198));

	// -
	this.instance_2 = new lib.Символ8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.5,240,0.89,0.89,0,0,0,56,13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({regX:56.1,scaleX:0.82,scaleY:0.82,x:42.6,y:234.3},4,cjs.Ease.get(1)).to({regX:56,scaleX:0.89,scaleY:0.89,x:55.5,y:240},4,cjs.Ease.get(1)).wait(198));

	// img1.jpg
	this.DP = new lib.Символ3();
	this.DP.parent = this;
	this.DP.setTransform(-103.4,196,0.3,0.3,0,0,0,225.8,125.1);
	this.DP._off = true;

	this.timeline.addTween(cjs.Tween.get(this.DP).wait(15).to({_off:false},0).to({regX:225.9,regY:125,scaleX:0.83,scaleY:0.83,x:-223.7,y:129.4},11,cjs.Ease.get(1)).wait(18).to({regX:225.8,regY:125.2,scaleX:0.77,scaleY:0.77,x:-215.3,y:129.8},4,cjs.Ease.get(1)).to({regX:225.9,regY:125,scaleX:0.83,scaleY:0.83,x:-223.7,y:129.4},4,cjs.Ease.get(1)).wait(198));

	// button
	this.button = new lib.Символ6();
	this.button.parent = this;
	this.button.setTransform(54.8,203.5,0.127,0.127,0,0,0,136.8,20.9);

	this.timeline.addTween(cjs.Tween.get(this.button).to({regX:136.5,regY:20.1,scaleX:0.89,scaleY:0.89,y:188.4},14,cjs.Ease.get(1)).wait(30).to({regX:136.6,scaleX:0.82,scaleY:0.82,x:41.7,y:184.8},4,cjs.Ease.get(1)).to({regX:136.5,scaleX:0.89,scaleY:0.89,x:54.8,y:188.4},4,cjs.Ease.get(1)).wait(198));

	// txt
	this.txt = new lib.Символ5();
	this.txt.parent = this;
	this.txt.setTransform(-62.8,94.4,0.137,0.137,0,0,0,174.4,48.8);
	this.txt.alpha = 0;
	this.txt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(23).to({_off:false},0).to({regY:48.3,scaleX:0.88,scaleY:0.88,x:66.1,y:59,alpha:1},9,cjs.Ease.get(1)).to({regY:48.2,scaleX:0.81,scaleY:0.81,x:54.9,y:62},7).wait(5).to({regX:174.5,scaleX:0.75,scaleY:0.75,x:43.6,y:65.4},4,cjs.Ease.get(1)).to({regX:174.4,scaleX:0.81,scaleY:0.81,x:54.9,y:62},4,cjs.Ease.get(1)).wait(198));

	// Символ 7
	this.instance_3 = new lib.Символ7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12,68.4,9.83,9.83,0,0,0,98.4,14.6);
	this.instance_3.alpha = 0.172;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).to({regY:14.7,scaleX:1.08,scaleY:1.08,x:55.4,y:154.2,alpha:1},9,cjs.Ease.get(-0.17)).to({scaleX:1,scaleY:1,x:39.8,y:152.8},4,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,x:55.4,y:154.2},4,cjs.Ease.get(1)).wait(198));

	// BACKGROUND
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EjU2ATiMAAAgnDMGptAAAMAAAAnDg");
	this.shape_1.setTransform(80.1,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(250));

	// GUIDE_BACKGROUND
	this.guide_background_mc = new lib._GUIDE_BACKGROUND();
	this.guide_background_mc.parent = this;
	this.guide_background_mc.setTransform(100,200,3.333,6.667,0,0,0,30,30);

	this.timeline.addTween(cjs.Tween.get(this.guide_background_mc).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1282.2,0,2724.6,400);


// stage content:
(lib._100rcx250_DP_video_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// код для баннера-растяжки (с учетом window.devicePixelRatio)
		var _this = this;
		var canvasWidth = canvas.width;  
		var canvasHeight = canvas.height; 
		
		window.addEventListener('resize', resize, false);
			function resize() {
				canvas.width = window.innerWidth * window.devicePixelRatio;
				canvas.height = canvasHeight * window.devicePixelRatio;
				
				canvas.style.width =  window.innerWidth +"px";	
				
				stage.scaleX = stage.scaleY = window.devicePixelRatio; 	
			
				
				_this.scale_left_mc.x = 0;
				_this.scale_center_mc.x = Math.round(window.innerWidth / 2);
				_this.scale_right_mc.x = window.innerWidth;
			}
			
		resize();
		
		
		 /*раскомментировать это (ниже) чтобы СКРЫВАТЬ розовые блоки  
			*/
		this.scale_left_mc.guide_background_mc.visible = false;	
		this.scale_center_mc.guide_background_mc.visible = false;	
		this.scale_right_mc.guide_background_mc.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// scale_left_mc
	this.scale_left_mc = new lib.scale_left();
	this.scale_left_mc.parent = this;
	this.scale_left_mc.setTransform(0,31,1,1,0,0,0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.scale_left_mc).wait(50));

	// scale_right_mc
	this.scale_right_mc = new lib.scale_right();
	this.scale_right_mc.parent = this;
	this.scale_right_mc.setTransform(970,31,1,1,0,0,0,0,31);

	this.timeline.addTween(cjs.Tween.get(this.scale_right_mc).wait(50));

	// scale_center_mc
	this.scale_center_mc = new lib.scale_center();
	this.scale_center_mc.parent = this;
	this.scale_center_mc.setTransform(483.7,200,1,1,0,0,0,103.7,200);

	this.timeline.addTween(cjs.Tween.get(this.scale_center_mc).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-417.2,-375,2902.3,4499.9);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"button_1.png", id:"button_1"},
		{src:"button_3.png", id:"button_3"},
		{src:"DP_bez.png", id:"DP_bez"},
		{src:"glaz.png", id:"glaz"},
		{src:"head.png", id:"head"},
		{src:"Nazvanie_2.png", id:"Nazvanie_2"},
		{src:"ruka.png", id:"ruka"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;