// import REVS from "canvas-render-engine-vs";
import REVS from "./CanvasRenderEngineVS";
import Color from "./Color";

const canvas = document.querySelector("canvas");
const revs = new REVS.RenderEngine(canvas);
const rect = new REVS.DynamicRectangle(100, 100, 200, 150);
const rect2 = new REVS.DynamicRectangle(400, 350, 200, 150);
rect.hoverableColor = new Color({r: 100, g: 100, b: 255});
rect.selectedColor = Color.White;

rect.addClickEventListener(() => {console.log("click");})
rect.addHoverEventListener(() => {console.log("hover");})
rect.addSelectEventListener(() => {console.log("select");})

revs.addRenderable(rect);
revs.addRenderable(rect2);
revs.hoverables.push(rect);
revs.hoverables.push(rect2);
revs.selectables.push(rect);
revs.selectables.push(rect2);
revs.movables.push(rect);
revs.movables.push(rect2);
revs.clickables.push(rect);
revs.clickables.push(rect2);
revs.setEager();
revs.Render();