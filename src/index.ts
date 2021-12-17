import REVS from "canvas-render-engine-vs";

const canvas = document.querySelector("canvas");
const revs = new REVS.RenderEngine(canvas);
const rect = new REVS.Rectangle(100, 100, 200, 150);

revs.addRenderable(rect);
revs.Render();