var panelGlobal = this;
var palette = (function () {

    //JSON
    "object" != typeof JSON && (JSON = {}), function () { "use strict"; function f(t) { return t < 10 ? "0" + t : t } var cx, escapable, gap, indent, meta, rep; function quote(t) { return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) { var e = meta[t]; return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + t + '"' } function str(t, e) { var n, r, o, f, u, i = gap, p = e[t]; switch (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)), "function" == typeof rep && (p = rep.call(e, t, p)), typeof p) { case "string": return quote(p); case "number": return isFinite(p) ? String(p) : "null"; case "boolean": case "null": return String(p); case "object": if (!p) return "null"; if (gap += indent, u = [], "[object Array]" === Object.prototype.toString.apply(p)) { for (f = p.length, n = 0; n < f; n += 1)u[n] = str(n, p) || "null"; return o = 0 === u.length ? "[]" : gap ? "[\n" + gap + u.join(",\n" + gap) + "\n" + i + "]" : "[" + u.join(",") + "]", gap = i, o } if (rep && "object" == typeof rep) for (f = rep.length, n = 0; n < f; n += 1)"string" == typeof rep[n] && (o = str(r = rep[n], p)) && u.push(quote(r) + (gap ? ": " : ":") + o); else for (r in p) Object.prototype.hasOwnProperty.call(p, r) && (o = str(r, p)) && u.push(quote(r) + (gap ? ": " : ":") + o); return o = 0 === u.length ? "{}" : gap ? "{\n" + gap + u.join(",\n" + gap) + "\n" + i + "}" : "{" + u.join(",") + "}", gap = i, o } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () { return this.valueOf() }), "function" != typeof JSON.stringify && (escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" }, JSON.stringify = function (t, e, n) { var r; if (gap = "", indent = "", "number" == typeof n) for (r = 0; r < n; r += 1)indent += " "; else "string" == typeof n && (indent = n); if (rep = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify"); return str("", { "": t }) }), "function" != typeof JSON.parse && (cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (text, reviver) { var j; function walk(t, e) { var n, r, o = t[e]; if (o && "object" == typeof o) for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]); return reviver.call(t, e, o) } if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) { return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j; throw new SyntaxError("JSON.parse") }) }();

    //default settings
    var expressions = [{ "name": "Looping Wiggle", "expression": "freq = 10;\r\namp = 10;\r\nloopTime = 2;\r\nt = time % loopTime;\r\nwiggle1 = wiggle(freq, amp, 1, 0.5, t);\r\nwiggle2 = wiggle(freq, amp, 1, 0.5, t - loopTime);\r\nlinear(t, 0,  loopTime, wiggle1, wiggle2)\r\n" }, { "name": "Inertial Bounce", "expression": "amp = .05;\r\nfreq = 4.0;\r\ndecay = 8.0;\r\n\r\nn = 0;\r\nif (numKeys > 0){\r\nn = nearestKey(time).index;\r\nif (key(n).time > time){\r\nn--;\r\n}\r\n}\r\nif (n == 0){\r\nt = 0;\r\n}else{\r\nt = time - key(n).time;\r\n}\r\n\r\nif (n > 0 && t < 1){\r\nv = velocityAtTime(key(n).time - thisComp.frameDuration/10);\r\n\r\nvalue + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);\r\n}else{\r\nvalue;\r\n}\r\n" }, { "name": "Randomise Frames", "expression": "maxOffset = 20; // frames\r\nseedRandom(index,true);\r\noffset = framesToTime(random(maxOffset));\r\nvalueAtTime(time-offset)\r\n" }, { "name": "Bounce Back", "expression": "e = .7;\r\ng = 5000;\r\nnMax = 9;\r\n\r\nn = 0;\r\nif (numKeys > 0){\r\n  n = nearestKey(time).index;\r\n  if (key(n).time > time) n--;\r\n}\r\nif (n > 0){\r\n  t = time - key(n).time;\r\n  v = -velocityAtTime(key(n).time - .001)*e;\r\n  vl = length(v);\r\n  if (value instanceof Array){\r\n    vu = (vl > 0) ? normalize(v) : [0,0,0];\r\n  }else{\r\n    vu = (v < 0) ? -1 : 1;\r\n  }\r\n  tCur = 0;\r\n  segDur = 2*vl/g;\r\n  tNext = segDur;\r\n  nb = 1; // number of bounces\r\n  while (tNext < t && nb <= nMax){\r\n    vl *= e;\r\n    segDur *= e;\r\n    tCur = tNext;\r\n    tNext += segDur;\r\n    nb++\r\n  }\r\n  if(nb <= nMax){\r\n    delta = t - tCur;\r\n    value +  vu*delta*(vl - g*delta/2);\r\n  }else{\r\n    value\r\n  }\r\n}else\r\n  value\r\n" }, { "name": "Reactive Text Box", "expression": "var targetLayer = thisLayer.parent;\r\nvar marginW = 100;\r\nvar marginH = 50;\r\nvar w = targetLayer.sourceRectAtTime().width + marginW;\r\nvar h = targetLayer.sourceRectAtTime().height + marginH;\r\n\r\n[w,h]\r\n\r\n\r\n" }, { "name": "Rock Side to Side", "expression": "seedRandom(index,true);\r\nx = random(10, 30);\r\namp = x;\r\nfreq = 0.2;\r\ny = amp*Math.sin(time*freq*Math.PI*2);\r\n\r\nvalue + y\r\n" }, { "name": "Random Speed", "expression": "seedRandom(index,true); \r\nx = random(100, 200);\r\n[value[0],value[1]+time * -x]\r\n" }, { "name": "Freq Controller (good for music)", "expression": "strength = 20;\r\nspd = parent.transform.scale; //pick whip audio\r\nmult = .5;\r\nn = spd.numKeys;\r\nif (n > 0 && spd.key(1).time < time){\r\n  accum = spd.key(1).value*(spd.key(1).time - inPoint);\r\n  for (i = 2; i <= n; i++){\r\n    if (spd.key(i).time > time) break;\r\n    k1 = spd.key(i-1);\r\n    k2 = spd.key(i);\r\n    accum += (k1.value + k2.value)*(k2.time - k1.time)/2;\r\n  }\r\n  accum += (spd.value + spd.key(i-1).value)*(time - spd.key(i-1).time)/2;\r\n}else{\r\n  accum = spd.value*(time - inPoint);\r\n}\r\n(accum*mult)*strength\r\n" }, { "name": "Even or Odd Layer", "expression": "var num = 25;\r\n\r\nif(index % 2 == 0){\r\n\t50+num;\r\n}else{\r\n\t50-num;\r\n}\r\n" }, { "name": "React to Grad", "expression": "sourceLayer =  thisComp.layer(index-1);\r\nsampleSize = [1,1];\r\nsamplePoint = transform.position;\r\ncolour = sourceLayer.sampleImage(samplePoint,sampleSize);\r\nx = colour[0]*100;\r\ny = linear(x, 0, 100, 0, 250);\r\n[y,y]\r\n" }, { "name": "Revolve in a Circle", "expression": "var amountX = 100;\r\nvar amountY = 100;\r\n\r\n[(thisComp.width/2), (thisComp.height/2)] + [Math.sin(time)*amountX, -Math.cos(time)*amountY]" }, { "name": "Add Commas", "expression": "num = value;\r\n\r\nfunction addCommas(x) { \r\n    return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\"); \r\n} \r\n\r\naddCommas(Math.round(num))" }, { "name": "Maintain Scale when Parented", "expression": "var s = [];\r\nvar ps = parent.transform.scale.value;\r\nfor (i = 0; i < ps.length; i++){\r\ns[i] = value[i]*100/ps[i];\r\n}\r\ns\r\n" }, { "name": "Maintain Stroke Width", "expression": "value / length(toComp([0,0]), toComp([0.7071,0.7071])) || 0.001;" }, { "name": "Point at Controller", "expression": "controller = thisComp.layer(index-1);\r\np1 = fromComp(controller.toComp(controller.anchorPoint));\r\nv = p1 - anchorPoint;\r\nvalue + radiansToDegrees(Math.atan2(v[1],v[0]));\r\n" }, { "name": "CSV Data", "expression": "var file = footage(\"sample.csv\") //pick whip file\r\n\r\nvar column = 0;\r\nvar row = parseFloat(thisLayer.name.toString());\r\n\r\nfile.dataValue([column,row]);\r\n" }, { "name": "Float Up", "expression": "seedRandom(index,true); \r\nranNumPos = random(100, 300);\r\nranNumTime = random(0,3);\r\nx = random(150, thisComp.width);\r\ny = (time < ranNumTime) ? value[1] : value[1] + (time-ranNumTime) * -ranNumPos;\r\n\r\n[x,y]\r\n" }, { "name": "Rock Side to Side", "expression": "seedRandom(index,true);\r\nx = random(10, 30);\r\namp = x;\r\nfreq = 0.2;\r\ny = amp*Math.sin(time*freq*Math.PI*2);\r\n\r\nvalue + y\r\n" }, { "name": "Blink", "expression": "var blink = 7;\r\nvar sin = Math.sin(time*blink);\r\nif(sin < 0) 0;\r\nelse 100;" }, { "name": "Get Dates", "expression": "var startYear = 2010; //Change me\r\nvar slider = Math.floor(effect(\"Slider Control\")(\"Slider\")); //Pickwhip slider make sure Math.floor stays\r\nvar monthNames = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\r\n\r\nmonth = new Date(startYear, 0, slider).getMonth();\r\nday = new Date(startYear, 0, slider).getDate();\r\nyear = new Date(startYear, 0, slider).getFullYear();\r\n\r\nfunction padding(number){\r\n\tif (number < 10){\r\n\t\treturn \"0\" + number;\r\n\t}\r\n\treturn number;\r\n}\r\n\r\nmonthNames[month] + \" \" + padding(day) + \", \" + year;" }, { "name": "Retime Keyframes", "expression": "values = [1, 2, 4];\r\n\r\noutput = value;\r\n\r\nfor(var i = 1, j = 0; i < numKeys; i++, j++){\r\n\tif(time < values[j]) break;\r\n\toutput = linear(time, values[j], values[j+1], key(i).value, key(i+1).value);\r\n}\r\n\r\noutput;\r\n\r\n" }, { "name": "Anchor point in center", "expression": "x = sourceRectAtTime().left + sourceRectAtTime().width/2;\r\ny = sourceRectAtTime().top + sourceRectAtTime().height/2;\r\n\r\n[x,y]" }, { "name": "tick down", "expression": "var timeAmount = framesToTime(thisComp.layer(\"Controller\").effect(\"time\")(\"Slider\"));\r\nvar movementAmount = thisComp.layer(\"Controller\").effect(\"amount\")(\"Slider\");\r\nvar ftt = framesToTime(timeAmount);\r\nx = value[0];\r\ny = Math.floor(time / timeAmount) * movementAmount + value[1];\r\n\r\n[x,y]" }]

    var buttonGroup = [];
    var buttonOrder = [];
    var maxWidth
    var buttonOrderVisible = true;

    var scriptName = "ExpressionSaver";
    var keyName = "Expressions";

    if (app.settings.haveSetting(scriptName, keyName)) {
        var savedExpressions = app.settings.getSetting(scriptName, keyName);
        expressions = JSON.parse(savedExpressions);
    }

    // PALETTE
    // =======
    var palette = (panelGlobal instanceof Panel) ? panelGlobal : new Window("palette", undefined, undefined, { resizeable: true });
    if (!(panelGlobal instanceof Panel)) palette.text = "Expression Saver";
    palette.orientation = "column";
    palette.spacing = 0;

    // BUTTONPANEL
    // ===========
    var buttonPanel = palette.add("panel", undefined, undefined, { name: "buttonPanel" });
    buttonPanel.margins = 40;

    var scrollGroup = buttonPanel.add("group");
    scrollGroup.orientation = "column";
    scrollGroup.alignChildren = ["left", "center"];

    //SCROLLBAR
    var scrollBar = buttonPanel.add('scrollbar');

    scrollBar.onChanging = function () {
        scrollGroup.location.y = -this.value;
    }


    for (var i = 0; i < expressions.length; i++) {
        addButton(i)
    }

    var maxWidth = sameWidth();

    function addButton(row) {

        buttonGroup[row] = scrollGroup.add("group", undefined, { name: "buttonGroup" });
        buttonGroup[row].orientation = "row";
        buttonGroup[row].spacing = 10;
        buttonGroup[row].margins = 0;

        var button = buttonGroup[row].add("button", undefined, undefined, { name: "button" });
        button.text = expressions[row].name;
        button.expression = expressions[row].expression;

        button.onClick = function () {
            runExpression(expressions[row].expression);
        }

        buttonOrder[row] = buttonGroup[row].add("group", undefined, undefined, { name: "buttonOrder" });
        buttonOrder[row].spacing = 0;
        buttonOrder[row].visible = buttonOrderVisible;

        var up_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%C2%8Do%26%C3%A5%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C2%85iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%206.0-c002%2079.164460%2C%202020%2F05%2F12-16%3A04%3A17%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%20xmp%3ACreateDate%3D%222020-08-29T23%3A42%3A37%2B01%3A00%22%20xmp%3AMetadataDate%3D%222020-08-29T23%3A42%3A37%2B01%3A00%22%20xmp%3AModifyDate%3D%222020-08-29T23%3A42%3A37%2B01%3A00%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A765ead9b-8110-b846-835f-9f167388da85%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3Adfc21552-c6c7-774d-a940-8d36b5b0b0e8%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Ac806cbfd-530d-794d-974a-9a30438a640a%22%20photoshop%3AColorMode%3D%223%22%20dc%3Aformat%3D%22image%2Fpng%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3Ac806cbfd-530d-794d-974a-9a30438a640a%22%20stEvt%3Awhen%3D%222020-08-29T23%3A42%3A37%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A765ead9b-8110-b846-835f-9f167388da85%22%20stEvt%3Awhen%3D%222020-08-29T23%3A42%3A37%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3Cphotoshop%3ATextLayers%3E%20%3Crdf%3ABag%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%5E%22%20photoshop%3ALayerText%3D%22%5E%22%2F%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%5E%20copy%22%20photoshop%3ALayerText%3D%22%5E%22%2F%3E%20%3C%2Frdf%3ABag%3E%20%3C%2Fphotoshop%3ATextLayers%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3EE)%C3%95%C3%B6%00%00%00GIDAT%08%C2%99U%C3%8B%C2%A1%0D%C2%800%00%05%C3%91%C3%97%3A%24%16%C3%89%0A%C2%B5%C3%AC%C3%85P%C3%8C%C2%81%C3%AC%1A%C3%98Z%C3%9CG%C2%80%C3%A1%C3%8C%25%C2%97%1CH2%25%C3%99%C2%93%C2%ACP%C2%BD4%C2%8C%C3%8F%C2%BFx%60I2%C3%97%24%0DW)e%C2%A0c%C2%AB%C2%B8q~G%C3%87x%00%C2%9E%C3%AA%18%C2%87%C2%9Ax%C3%86%C3%A5%00%00%00%00IEND%C2%AEB%60%C2%82";
        var up = buttonOrder[row].add("iconbutton", undefined, File.decode(up_imgString), { name: "up", style: "toolbutton" });
        if (row == 0) up.enabled = false;

        up.onClick = function () {
            reorder(row - 1, row);
        }

        var removeCMD_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%12%00%00%00%12%08%06%00%00%00V%C3%8E%C2%8EW%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C3%89e%3C%00%00%03(iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%205.6-c145%2079.163499%2C%202018%2F08%2F13-16%3A40%3A22%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstRef%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceRef%23%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%20CC%202019%20(Macintosh)%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A600D85EF3FAA11E99731F012F5360853%22%20xmpMM%3ADocumentID%3D%22xmp.did%3A600D85F03FAA11E99731F012F5360853%22%3E%20%3CxmpMM%3ADerivedFrom%20stRef%3AinstanceID%3D%22xmp.iid%3A600D85ED3FAA11E99731F012F5360853%22%20stRef%3AdocumentID%3D%22xmp.did%3A600D85EE3FAA11E99731F012F5360853%22%2F%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%12ywY%00%00%020IDATx%C3%9A%C2%AC%C2%94%3DK%5BQ%18%C3%87%C2%9F%C2%9C%7B%C3%89%C2%92%C3%9CB%C3%A56q%09T%C3%A2%C2%90%C2%A5%16b%3ATc%C2%BF%C2%80%14Zp%C3%AF%C2%A4%0En%16%C3%AB7ht%C2%A8C%C3%9D%C2%9A%C2%A9T%C2%9C%3A%C2%94%167%1D4%C3%94%C2%B9%C2%B5%C2%A1%C2%93b0%26h%1A%C3%AC5%C2%86%C2%82!I%C3%BB%C3%BF_%C3%8E%09%C2%97%10%C2%87%C2%82%0F%C3%BC%C3%A0%C2%9C%C3%B3%C2%BC%C3%9C%C3%B3%C2%BC%C2%9C%1B%C2%9A%C2%9B%C2%9F%C2%97%01%C3%A2%C2%80%110%0A%C2%86%C3%B4%C3%99%058%04%C3%87%C3%A0%C2%AA%C3%9F%C3%81%C3%AE%C3%9B%C3%9F%01%0F%C3%814%C2%98%01%C3%89%3E%C3%BD%11%C3%B8%08%C2%B6%C3%80w%C3%90%18%14%C3%A8.x%0AVm%C3%9B%1E%C2%9E%C2%9C%C2%98%C2%90%07ccr%C3%8Fu%7D%C3%A5%C2%AFz%5D~%1C%1C%24%C2%BF%C3%AE%C3%AF%2F%C2%B7%C3%9B%C3%AD%178Z%06_%C3%80o%C3%AAC%3A5%C3%9E%C3%A4%19x%C2%9FH%24dnvVb%C2%B1%C3%98%C2%A0%C2%94%C2%A5V%C2%AB%C3%89%C2%BB%7C%5E%C3%8A%C3%A52%C2%B7%0C%C3%B8%C2%897SZ%C3%8FtV%19%C3%A4%C3%95%C3%92%C3%92%C2%8DA(%C3%94%C3%91%C2%86%C2%B6%C3%B4%C3%91%C2%BE%C2%A2ta%C2%A7%C2%99%0Eo%12%0E%C2%87%7B_%C2%AE%23%1D%23%5C%C2%9F%C3%A3%C2%8CB%1B%C3%9A%C3%92G%C3%97%C3%93Q%C2%BA%3B3%C2%AC%C2%89%C2%B9%09%C2%83%C2%BC%C3%8E%C3%A5%24%C2%B7%C2%B2%22%C3%95j%C3%95%C2%87%C3%AB%1C%C3%8EL0%C3%9A%C3%92G7e%C3%84%C3%96-N%C2%B2%C2%B0F%C2%94RbY%C2%964%C2%9BMy%C2%B3%C2%B6%C3%A6%C2%9Fq%1D%C2%8DF%C3%85R%C2%AAgG%C2%9F%C3%9D%C2%BD%3DvvT%C2%9991%C3%9D%C2%A1%C2%B8X%C2%BF%5C%5C%C3%B4%1D%11%C2%A0D%C2%B8%C3%A6%C2%99%1B%C2%B0%0B%C3%B8%0C)%C2%B9%25Qzb%C3%BD9%09%16%C2%96)%C3%A9t%C3%AE%13%C2%93f%C2%B0%01%01%C2%9F%0B%C2%A5%C3%87%C3%BE%08%C3%83%C3%963%C3%A8v%C2%BB%C3%92%C3%A9t%C3%84%C2%A4c%C3%92%C3%A4Y%07%3A%23%C3%9A%C2%87%C3%93~h%C2%8Dg2%7FX%C2%96J%C2%A5%C2%92%7D%C2%94%C3%89H%24%12%C3%B1I%C2%A7%C3%93%C3%B2djJ%C3%A2%C3%B1%C2%B88%C2%8E%23%C3%A3%C3%98Of%C2%B3%12%0Ft%C3%B6%C3%83%C3%86%06%3F%C2%9A%C3%87%C3%B6%C2%B3%C3%92%0Fp%0Bc%7F%C3%86%C2%89m%C2%B5Z%C2%BD%C3%B6%C2%BA%7D%0D0AhC%5B%C3%BA%C3%A8ww%C3%85%1BQ%C3%A7%C2%81%C3%93F%C2%A3%C3%B1%C2%BCX%2CJ*%C2%95%C3%B2ou%C3%93%13y%C2%BB%C2%BEn%C2%9E%C3%88%02%C3%98%05%C3%97%26%C3%9058%01%3F%11%C3%ACq%C2%A1P%C2%88%5Ez%C2%88%1D%0A%C3%89_%C3%94%C2%84%C2%85%3E.%C2%95dg%7B%C3%9BO%C3%87%C3%B3%C2%BC3%1D%C2%84%C2%8F%C3%B62%C3%B8ho%C3%B57%22ZQ%00%C3%9F%C3%80%C3%A6%C3%BF%C3%BC%C3%98%C3%BE%090%00%C2%B97%C3%B8g%1C%C3%9D%C2%B3%0F%00%00%00%00IEND%C2%AEB%60%C2%82";
        var removeCMD = buttonOrder[row].add("iconbutton", undefined, File.decode(removeCMD_imgString), { name: "removeCMD", style: "toolbutton" });

        removeCMD.onClick = function () {
            expressions.splice(row, 1);
            while (scrollGroup.children.length > 0) {
                scrollGroup.remove(0);
            }
            for (var i = 0; i < expressions.length; i++) {
                addButton(i);
            }
            maxWidth = sameWidth();
            saveSettings();

            buttonPanel.layout.layout(true);
            scrollBarValues();

        }

        var down_imgString = "%C2%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%05%00%00%00%05%08%06%00%00%00%C2%8Do%26%C3%A5%00%00%00%09pHYs%00%00%0B%13%00%00%0B%13%01%00%C2%9A%C2%9C%18%00%00%06%C2%85iTXtXML%3Acom.adobe.xmp%00%00%00%00%00%3C%3Fxpacket%20begin%3D%22%C3%AF%C2%BB%C2%BF%22%20id%3D%22W5M0MpCehiHzreSzNTczkc9d%22%3F%3E%20%3Cx%3Axmpmeta%20xmlns%3Ax%3D%22adobe%3Ans%3Ameta%2F%22%20x%3Axmptk%3D%22Adobe%20XMP%20Core%206.0-c002%2079.164460%2C%202020%2F05%2F12-16%3A04%3A17%20%20%20%20%20%20%20%20%22%3E%20%3Crdf%3ARDF%20xmlns%3Ardf%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%22%3E%20%3Crdf%3ADescription%20rdf%3Aabout%3D%22%22%20xmlns%3Axmp%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2F%22%20xmlns%3AxmpMM%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2Fmm%2F%22%20xmlns%3AstEvt%3D%22http%3A%2F%2Fns.adobe.com%2Fxap%2F1.0%2FsType%2FResourceEvent%23%22%20xmlns%3Aphotoshop%3D%22http%3A%2F%2Fns.adobe.com%2Fphotoshop%2F1.0%2F%22%20xmlns%3Adc%3D%22http%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%22%20xmp%3ACreatorTool%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%20xmp%3ACreateDate%3D%222020-08-29T23%3A39%3A28%2B01%3A00%22%20xmp%3AMetadataDate%3D%222020-08-29T23%3A39%3A28%2B01%3A00%22%20xmp%3AModifyDate%3D%222020-08-29T23%3A39%3A28%2B01%3A00%22%20xmpMM%3AInstanceID%3D%22xmp.iid%3A3c632e68-5d28-344a-8ce8-072048df3002%22%20xmpMM%3ADocumentID%3D%22adobe%3Adocid%3Aphotoshop%3A7cfb3ebc-e651-3e40-8d78-f1e20f354e6a%22%20xmpMM%3AOriginalDocumentID%3D%22xmp.did%3Ab7bfdc84-27e9-4f45-b88b-f851155d0824%22%20photoshop%3AColorMode%3D%223%22%20dc%3Aformat%3D%22image%2Fpng%22%3E%20%3CxmpMM%3AHistory%3E%20%3Crdf%3ASeq%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22created%22%20stEvt%3AinstanceID%3D%22xmp.iid%3Ab7bfdc84-27e9-4f45-b88b-f851155d0824%22%20stEvt%3Awhen%3D%222020-08-29T23%3A39%3A28%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%2F%3E%20%3Crdf%3Ali%20stEvt%3Aaction%3D%22saved%22%20stEvt%3AinstanceID%3D%22xmp.iid%3A3c632e68-5d28-344a-8ce8-072048df3002%22%20stEvt%3Awhen%3D%222020-08-29T23%3A39%3A28%2B01%3A00%22%20stEvt%3AsoftwareAgent%3D%22Adobe%20Photoshop%2021.2%20(Windows)%22%20stEvt%3Achanged%3D%22%2F%22%2F%3E%20%3C%2Frdf%3ASeq%3E%20%3C%2FxmpMM%3AHistory%3E%20%3Cphotoshop%3ATextLayers%3E%20%3Crdf%3ABag%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%5E%22%20photoshop%3ALayerText%3D%22%5E%22%2F%3E%20%3Crdf%3Ali%20photoshop%3ALayerName%3D%22%5E%20copy%22%20photoshop%3ALayerText%3D%22%5E%22%2F%3E%20%3C%2Frdf%3ABag%3E%20%3C%2Fphotoshop%3ATextLayers%3E%20%3C%2Frdf%3ADescription%3E%20%3C%2Frdf%3ARDF%3E%20%3C%2Fx%3Axmpmeta%3E%20%3C%3Fxpacket%20end%3D%22r%22%3F%3E%7Ff%C3%8C%C3%85%00%00%00EIDAT%08%C2%99-%C3%8C%C2%A1%01%C2%800%10%04%C3%81%C3%B9(%C2%90XZ%40FB%1Bt%C2%8CM%1BXJ8%04%C2%AC%C2%9F%C2%95%C3%A4H2C%C2%925%C3%89%C3%96%C2%B0%C2%A0%C3%BB%C3%9A15%5C%C3%A8I%16%C2%ACU5ZU%3D%C2%B8qb%40%C3%BB%C3%99%C3%B87%03%5E%3Cc%16%C2%A2%C2%9F*%C2%AC%C3%A0%00%00%00%00IEND%C2%AEB%60%C2%82";
        var down = buttonOrder[row].add("iconbutton", undefined, File.decode(down_imgString), { name: "down", style: "toolbutton" });
        if (row == expressions.length - 1) down.enabled = false;

        down.onClick = function () {
            reorder(row + 1, row);
        }
    }



    // ADDCLEARPANEL
    // =============
    var addClearPanel = palette.add("panel", undefined, undefined, { name: "addClearPanel" });
    addClearPanel.orientation = "row";
    addClearPanel.alignment = ["center", "bottom"];

    var addExpressionButton = addClearPanel.add("button", undefined, undefined, { name: "addExpressionButton" });
    addExpressionButton.text = "Add Expression";

    addExpressionButton.onClick = function () { addExpression() };

    var clear = addClearPanel.add("button", undefined, undefined, { name: "clear" });
    clear.text = "Clear";

    clear.onClick = function () {

        while (scrollGroup.children.length > 0) {
            scrollGroup.remove(0);
            palette.layout.layout(true);
        }
        expressions = [];
        saveSettings();
    }


    palette.layout.layout(true);
    palette.layout.resize();
    palette.onShow = palette.onResizing = palette.onResize = function () {

        this.layout.resize();

        buttonPanel.minimumSize.height = 100;
        buttonPanel.maximumSize.height = scrollGroup.size.height + 20;
        buttonPanel.size.height = this.size.height - 100;

        buttonPanel.minimumSize.width = maxWidth + 85;
        buttonPanel.maximumSize.width = scrollGroup.size.width + 80;
        buttonPanel.size.width = this.size.width - 100;

        if (buttonPanel.size.width < maxWidth + 125) {
            buttonVisible(false);
        } else buttonVisible(true);;


        scrollBarValues();

    }

    if (palette instanceof Window) palette.show();

    function scrollBarValues() {
        scrollBar.size.height = buttonPanel.size.height - 20;
        scrollBar.size.width = 20;
        scrollBar.location = [buttonPanel.size.width - 30, 8];
        scrollBar.minvalue = 0;
        scrollBar.maxvalue = scrollGroup.size.height - buttonPanel.size.height + 20;
        scrollGroup.location.y = -scrollBar.value;
    }

    function buttonVisible(isVisible) {
        for (var i = 0; i < expressions.length; i++) {
            buttonOrder[i].visible = isVisible;
        }
        buttonOrderVisible = isVisible;
    }

    function reorder(newIndex, oldIndex) {

        expressions.splice(newIndex, 0, expressions.splice(oldIndex, 1)[0]);
        buttonGroup[newIndex].button.text = expressions[newIndex].name;
        buttonGroup[oldIndex].button.text = expressions[oldIndex].name;
        buttonGroup[newIndex].button.expression = expressions[newIndex].expression;
        buttonGroup[oldIndex].button.expression = expressions[oldIndex].expression;
        saveSettings();

    }

    function addExpression() {
        var project = app.project;

        if (project.activeItem == null) {
            alert("Please pick a property");
            return false;
        }

        var comp = project.activeItem;

        if (comp.selectedLayers.length == 0 || comp.selectedLayers[0].selectedProperties.length == 0) {
            alert("Please pick a property");
            return false;
        }

        var layer = comp.selectedLayers[0].selectedProperties[0];

        if (layer.canSetExpression == false || layer.expression == "" || layer.expressionError != "") {
            alert("Please pick a property with a valid expression.");
            return false;
        }

        var input = prompt("Type expression name", "e.g. Spin layer", "Add Expression");

        if (input == null) {
            return false;
        }

        expressions.push({ name: input, expression: layer.expression })

        addButton(expressions.length - 1);
        buttonOrder[expressions.length - 2].down.enabled = true;
        maxWidth = sameWidth();
        //Move to bottom of the list

        buttonPanel.layout.layout(true);
        scrollBarValues();
        scrollBar.value = (scrollGroup.size.height - buttonPanel.size.height + 20);
        scrollGroup.location.y = -(scrollGroup.size.height - buttonPanel.size.height + 20);

        saveSettings();
    }

    function sameWidth() {

        maxWidth = 0;
        for (var i = 0; i < expressions.length; i++) {
            maxWidth = (buttonGroup[i].button.preferredSize.width > maxWidth) ? buttonGroup[i].button.preferredSize.width : maxWidth;
        }
        for (var i = 0; i < expressions.length; i++) {
            buttonGroup[i].button.minimumSize.width = maxWidth;
        }

        return maxWidth;
    }

    function runExpression(expression) {

        var project = app.project;

        if (project.activeItem == null) {
            alert("Please pick a property");
            return false;
        }

        var comp = project.activeItem;

        if (comp.selectedLayers.length == 0) {
            alert("Please pick a property");
            return false;
        }

        var propSelected = false;

        for (var i = 0; i < comp.selectedLayers.length; i++) {
            for (var j = 0; j < comp.selectedLayers[i].selectedProperties.length; j++) {
                if (comp.selectedLayers[i].selectedProperties[j].canSetExpression == true) {
                    propSelected = true
                    comp.selectedLayers[i].selectedProperties[j].expression = expression;
                }
            }
        }

        if (propSelected == false) {
            alert("Please pick a property");
            return false;
        }

    }

    function saveSettings() {

        app.settings.saveSetting(scriptName, keyName, JSON.stringify(expressions));

    }

    return palette;

}());