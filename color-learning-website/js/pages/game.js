const drawings=[
{name:'House',draw(ctx,w,h){
ctx.beginPath();ctx.moveTo(w*.1,h*.88);ctx.lineTo(w*.9,h*.88);ctx.stroke();
ctx.strokeRect(w*.22,h*.42,w*.56,h*.42);
ctx.beginPath();ctx.moveTo(w*.16,h*.42);ctx.lineTo(w*.5,h*.12);ctx.lineTo(w*.84,h*.42);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.25,h*.42);ctx.lineTo(w*.5,h*.22);ctx.lineTo(w*.75,h*.42);ctx.closePath();ctx.stroke();
ctx.strokeRect(w*.61,h*.19,w*.09,h*.15);ctx.strokeRect(w*.595,h*.16,w*.12,h*.03);
ctx.beginPath();ctx.moveTo(w*.44,h*.84);ctx.lineTo(w*.44,h*.64);ctx.quadraticCurveTo(w*.5,h*.54,w*.56,h*.64);ctx.lineTo(w*.56,h*.84);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.5,h*.84);ctx.lineTo(w*.5,h*.6);ctx.stroke();
ctx.beginPath();ctx.arc(w*.535,h*.73,Math.max(2,w*.006),0,Math.PI*2);ctx.stroke();
const win=x=>{ctx.strokeRect(w*x,h*.54,w*.12,h*.13);ctx.beginPath();ctx.moveTo(w*(x+.06),h*.54);ctx.lineTo(w*(x+.06),h*.67);ctx.moveTo(w*x,h*.605);ctx.lineTo(w*(x+.12),h*.605);ctx.stroke();ctx.beginPath();ctx.moveTo(w*(x-.01),h*.54);ctx.lineTo(w*(x+.06),h*.5);ctx.lineTo(w*(x+.13),h*.54);ctx.closePath();ctx.stroke();};
win(.29);win(.59);
ctx.beginPath();ctx.moveTo(w*.46,h*.84);ctx.lineTo(w*.4,h*.93);ctx.lineTo(w*.6,h*.93);ctx.lineTo(w*.54,h*.84);ctx.closePath();ctx.stroke();
}},
{name:'Fish',draw(ctx,w,h){
const cx=w*.47,cy=h*.55;
ctx.beginPath();ctx.ellipse(cx,cy,w*.23,h*.17,0,0,Math.PI*2);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.69,cy);ctx.lineTo(w*.84,h*.43);ctx.lineTo(w*.84,h*.67);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.45,h*.47);ctx.quadraticCurveTo(w*.53,h*.34,w*.61,h*.45);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.arc(w*.37,h*.52,w*.024,0,Math.PI*2);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.arc(w*.372,h*.523,w*.009,0,Math.PI*2);ctx.closePath();ctx.stroke();
for(let i=0;i<4;i++){const y=h*(.49+i*.06);ctx.beginPath();ctx.moveTo(w*.26,y);ctx.quadraticCurveTo(w*.45,y+h*.04,w*.62,y);ctx.stroke();}
[[.18,.34,.028],[.14,.24,.02],[.23,.2,.015]].forEach(([x,y,r])=>{ctx.beginPath();ctx.arc(w*x,h*y,w*r,0,Math.PI*2);ctx.closePath();ctx.stroke();});
}},
{name:'Flower',draw(ctx,w,h){
const cx=w*.5,cy=h*.38;
for(let i=0;i<12;i++){const a=i/12*Math.PI*2,x=cx+Math.cos(a)*w*.14,y=cy+Math.sin(a)*h*.14;ctx.beginPath();ctx.ellipse(x,y,w*.065,h*.1,a,0,Math.PI*2);ctx.closePath();ctx.stroke();}
ctx.beginPath();ctx.arc(cx,cy,w*.085,0,Math.PI*2);ctx.closePath();ctx.stroke();
[[-.03,-.02],[.02,-.03],[0,0],[-.025,.03],[.03,.02]].forEach(([dx,dy])=>{ctx.beginPath();ctx.arc(cx+w*dx,cy+h*dy,w*.012,0,Math.PI*2);ctx.closePath();ctx.stroke();});
ctx.beginPath();ctx.moveTo(cx-w*.015,cy+h*.1);ctx.lineTo(cx-w*.03,h*.88);ctx.lineTo(cx+w*.03,h*.88);ctx.lineTo(cx+w*.015,cy+h*.1);ctx.closePath();ctx.stroke();
const leaf=(x1,y1,c1x,c1y,tx,ty,c2x,c2y)=>{ctx.beginPath();ctx.moveTo(x1,y1);ctx.bezierCurveTo(c1x,c1y,tx,ty,tx,ty);ctx.bezierCurveTo(c2x,c2y,x1,y1,x1,y1);ctx.closePath();ctx.stroke();};
leaf(cx-w*.01,cy+h*.35,cx-w*.2,cy+h*.28,cx-w*.25,cy+h*.43,cx-w*.11,cy+h*.5);
leaf(cx+w*.01,cy+h*.44,cx+w*.22,cy+h*.36,cx+w*.28,cy+h*.52,cx+w*.12,cy+h*.58);
ctx.beginPath();ctx.moveTo(w*.36,h*.88);ctx.lineTo(w*.64,h*.88);ctx.lineTo(w*.6,h*.98);ctx.lineTo(w*.4,h*.98);ctx.closePath();ctx.stroke();ctx.strokeRect(w*.35,h*.85,w*.3,h*.03);
}},
{name:'Car',draw(ctx,w,h){
ctx.beginPath();ctx.moveTo(w*.14,h*.71);ctx.lineTo(w*.2,h*.55);ctx.lineTo(w*.34,h*.45);ctx.lineTo(w*.63,h*.45);ctx.lineTo(w*.78,h*.56);ctx.lineTo(w*.86,h*.71);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.14,h*.71);ctx.lineTo(w*.86,h*.71);ctx.lineTo(w*.86,h*.82);ctx.lineTo(w*.14,h*.82);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.28,h*.56);ctx.lineTo(w*.37,h*.49);ctx.lineTo(w*.49,h*.49);ctx.lineTo(w*.49,h*.64);ctx.lineTo(w*.28,h*.64);ctx.closePath();ctx.stroke();
ctx.beginPath();ctx.moveTo(w*.52,h*.49);ctx.lineTo(w*.62,h*.49);ctx.lineTo(w*.73,h*.57);ctx.lineTo(w*.73,h*.64);ctx.lineTo(w*.52,h*.64);ctx.closePath();ctx.stroke();
const wheel=x=>{ctx.beginPath();ctx.arc(w*x,h*.82,w*.09,0,Math.PI*2);ctx.closePath();ctx.stroke();ctx.beginPath();ctx.arc(w*x,h*.82,w*.045,0,Math.PI*2);ctx.closePath();ctx.stroke();};
wheel(.31);wheel(.69);ctx.strokeRect(w*.18,h*.67,w*.08,h*.045);ctx.strokeRect(w*.74,h*.67,w*.08,h*.045);
ctx.beginPath();ctx.moveTo(w*.47,h*.64);ctx.lineTo(w*.47,h*.82);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.18,h*.82);ctx.lineTo(w*.82,h*.82);ctx.stroke();
}}
];

const galleryView=document.getElementById('gallery-view');
const editorView=document.getElementById('editor-view');
const editorTitle=document.getElementById('editor-title');
const editorCanvas=document.getElementById('editor-canvas');
const editorCtx=editorCanvas.getContext('2d',{willReadFrequently:true});
const colorPreview=document.getElementById('color-preview');
const backBtn=document.getElementById('back-to-gallery');
const resetBtn=document.getElementById('reset-drawing');
const saveBtn=document.getElementById('save-image');
const fillToolBtn=document.getElementById('tool-fill');
const eraserToolBtn=document.getElementById('tool-eraser');
const colorModelSelect=document.getElementById('color-model');

const rgbInputs={r:document.getElementById('rgb-r'),g:document.getElementById('rgb-g'),b:document.getElementById('rgb-b'),rn:document.getElementById('rgb-r-number'),gn:document.getElementById('rgb-g-number'),bn:document.getElementById('rgb-b-number')};
const hsvInputs={h:document.getElementById('hsv-h'),s:document.getElementById('hsv-s'),v:document.getElementById('hsv-v'),hn:document.getElementById('hsv-h-number'),sn:document.getElementById('hsv-s-number'),vn:document.getElementById('hsv-v-number')};
const cmykInputs={c:document.getElementById('cmyk-c'),m:document.getElementById('cmyk-m'),y:document.getElementById('cmyk-y'),k:document.getElementById('cmyk-k'),cn:document.getElementById('cmyk-c-number'),mn:document.getElementById('cmyk-m-number'),yn:document.getElementById('cmyk-y-number'),kn:document.getElementById('cmyk-k-number')};
const modelGroups={rgb:document.getElementById('controls-rgb'),hsv:document.getElementById('controls-hsv'),cmyk:document.getElementById('controls-cmyk')};

let activeDrawingIndex=0;let activeTool='fill';

function setSketchStyle(ctx,scale=1){ctx.lineWidth=Math.max(4*scale,1);ctx.strokeStyle='#000';ctx.lineCap='round';ctx.lineJoin='round';}
function drawPreview(index){const canvas=document.getElementById(`preview-${index}`);if(!canvas)return;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);setSketchStyle(ctx,.5);drawings[index].draw(ctx,canvas.width,canvas.height);}
function drawEditor(index){editorCtx.clearRect(0,0,editorCanvas.width,editorCanvas.height);editorCtx.fillStyle='#fff';editorCtx.fillRect(0,0,editorCanvas.width,editorCanvas.height);setSketchStyle(editorCtx,1);drawings[index].draw(editorCtx,editorCanvas.width,editorCanvas.height);}

function clampRange(v,min,max){return Math.min(max,Math.max(min,Number(v)||0));}
function hsvToRgb(h,s,v){const hh=((h%360)+360)%360,sat=s/100,val=v/100,c=val*sat,x=c*(1-Math.abs((hh/60)%2-1)),m=val-c;let r1=0,g1=0,b1=0;if(hh<60){r1=c;g1=x;}else if(hh<120){r1=x;g1=c;}else if(hh<180){g1=c;b1=x;}else if(hh<240){g1=x;b1=c;}else if(hh<300){r1=x;b1=c;}else{r1=c;b1=x;}return{r:Math.round((r1+m)*255),g:Math.round((g1+m)*255),b:Math.round((b1+m)*255)};}
function cmykToRgb(c,m,y,k){const cc=c/100,mm=m/100,yy=y/100,kk=k/100;return{r:Math.round(255*(1-cc)*(1-kk)),g:Math.round(255*(1-mm)*(1-kk)),b:Math.round(255*(1-yy)*(1-kk))};}
function getCurrentRgb(){const model=colorModelSelect.value;if(model==='hsv')return hsvToRgb(Number(hsvInputs.h.value),Number(hsvInputs.s.value),Number(hsvInputs.v.value));if(model==='cmyk')return cmykToRgb(Number(cmykInputs.c.value),Number(cmykInputs.m.value),Number(cmykInputs.y.value),Number(cmykInputs.k.value));return{r:Number(rgbInputs.r.value),g:Number(rgbInputs.g.value),b:Number(rgbInputs.b.value)};}
function updateColorPreview(){const {r,g,b}=getCurrentRgb();colorPreview.style.background=`rgb(${r}, ${g}, ${b})`;}

function bindPair(rangeInput,numberInput){const min=Number(rangeInput.min),max=Number(rangeInput.max);rangeInput.addEventListener('input',()=>{numberInput.value=rangeInput.value;updateColorPreview();});numberInput.addEventListener('input',()=>{numberInput.value=String(clampRange(numberInput.value,min,max));rangeInput.value=numberInput.value;updateColorPreview();});}
function setVisibleModelGroup(model){modelGroups.rgb.hidden=model!=='rgb';modelGroups.hsv.hidden=model!=='hsv';modelGroups.cmyk.hidden=model!=='cmyk';}
function bindModelControls(){bindPair(rgbInputs.r,rgbInputs.rn);bindPair(rgbInputs.g,rgbInputs.gn);bindPair(rgbInputs.b,rgbInputs.bn);bindPair(hsvInputs.h,hsvInputs.hn);bindPair(hsvInputs.s,hsvInputs.sn);bindPair(hsvInputs.v,hsvInputs.vn);bindPair(cmykInputs.c,cmykInputs.cn);bindPair(cmykInputs.m,cmykInputs.mn);bindPair(cmykInputs.y,cmykInputs.yn);bindPair(cmykInputs.k,cmykInputs.kn);colorModelSelect.addEventListener('change',()=>{setVisibleModelGroup(colorModelSelect.value);updateColorPreview();});}

function colorMatch(data,index,target,t=14){return Math.abs(data[index]-target[0])<=t&&Math.abs(data[index+1]-target[1])<=t&&Math.abs(data[index+2]-target[2])<=t&&data[index+3]===target[3];}
function canFillPixel(data,index,target){const isBlackLine=data[index]<35&&data[index+1]<35&&data[index+2]<35;if(isBlackLine)return false;return colorMatch(data,index,target,14);}
function floodFill(startX,startY,fillColor){const width=editorCanvas.width,height=editorCanvas.height;if(startX<0||startY<0||startX>=width||startY>=height)return;const imageData=editorCtx.getImageData(0,0,width,height),data=imageData.data,startIdx=(startY*width+startX)*4,target=[data[startIdx],data[startIdx+1],data[startIdx+2],data[startIdx+3]];if(target[0]===fillColor[0]&&target[1]===fillColor[1]&&target[2]===fillColor[2]&&target[3]===255)return;if(target[0]<35&&target[1]<35&&target[2]<35)return;const stack=[[startX,startY]];while(stack.length){const p=stack.pop();if(!p)continue;const [x,y]=p,idx=(y*width+x)*4;if(!canFillPixel(data,idx,target))continue;data[idx]=fillColor[0];data[idx+1]=fillColor[1];data[idx+2]=fillColor[2];data[idx+3]=255;if(x>0)stack.push([x-1,y]);if(x<width-1)stack.push([x+1,y]);if(y>0)stack.push([x,y-1]);if(y<height-1)stack.push([x,y+1]);}editorCtx.putImageData(imageData,0,0);}

function setActiveTool(tool){activeTool=tool;fillToolBtn.classList.toggle('is-active',tool==='fill');eraserToolBtn.classList.toggle('is-active',tool==='eraser');}
function openEditor(index){activeDrawingIndex=index;editorTitle.textContent=`Painting Workspace: ${drawings[index].name}`;galleryView.hidden=true;editorView.hidden=false;setActiveTool('fill');drawEditor(index);}
function showGallery(){editorView.hidden=true;galleryView.hidden=false;}
function bindGalleryButtons(){document.querySelectorAll('[data-open-drawing]').forEach((button)=>{button.addEventListener('click',()=>{openEditor(Number(button.getAttribute('data-open-drawing')));});});}
function toCanvasCoords(event){const rect=editorCanvas.getBoundingClientRect(),scaleX=editorCanvas.width/rect.width,scaleY=editorCanvas.height/rect.height;return{x:Math.floor((event.clientX-rect.left)*scaleX),y:Math.floor((event.clientY-rect.top)*scaleY)};}
function bindEditorCanvas(){editorCanvas.addEventListener('click',(event)=>{const {x,y}=toCanvasCoords(event);if(activeTool==='eraser'){floodFill(x,y,[255,255,255]);return;}const {r,g,b}=getCurrentRgb();floodFill(x,y,[r,g,b]);});}
function resetCurrentDrawing(){drawEditor(activeDrawingIndex);} 
function saveCurrentCanvas(){const link=document.createElement('a');const safeName=drawings[activeDrawingIndex].name.toLowerCase();link.download=`${safeName}-painting.png`;link.href=editorCanvas.toDataURL('image/png');link.click();}
function bindToolActions(){fillToolBtn.addEventListener('click',()=>setActiveTool('fill'));eraserToolBtn.addEventListener('click',()=>setActiveTool('eraser'));resetBtn.addEventListener('click',resetCurrentDrawing);saveBtn.addEventListener('click',saveCurrentCanvas);}

function init(){drawings.forEach((_,index)=>drawPreview(index));bindGalleryButtons();bindModelControls();bindEditorCanvas();bindToolActions();backBtn.addEventListener('click',showGallery);setVisibleModelGroup(colorModelSelect.value);updateColorPreview();showGallery();}
init();
