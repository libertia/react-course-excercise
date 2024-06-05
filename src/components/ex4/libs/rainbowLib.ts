var activeElement: HTMLElement | null = null
var canvasElement: HTMLCanvasElement | null = null
var interval: NodeJS.Timer | undefined = undefined
var isPaused = false
var count = 0
const backGrounds = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "lightblue",
  "brown",
  "black",
]

/**
 * Initialize rainbow code
 * @param element element to attach rainbow 
 * @returns 
 */
export function init(element: HTMLElement) {
  // console.log("init", !!activeElement, !!interval)
  if (activeElement || interval) {
    throw new Error("Unable to init libary. Reason: Another constant of this libary is currently active.")
  }

  activeElement = element
  if (activeElement === null) {
    throw new Error("Unable to init libary. Reason: Cannot found element with id " + element + ".")
  }
  //create canvas element
  canvasElement = document.createElement('canvas')
  activeElement!.appendChild(canvasElement)


  // const ctx = canvasElement!.getContext("2d");
  // console.log(activeElement)
  interval = setInterval(() => {
    if (isPaused) return false

    // console.log("interval call",activeElement!.style.backgroundColor)
    updateColor(count)
    count++
    if (count === backGrounds.length) count = 0
  }, 500,);
}

/**
 * Pause rainbow effect
 */
export function togglePause() {
  isPaused = !isPaused
}

/**
 * call when rainbow is not use anymore
 */
export function destroyed() {
  console.log("destroy rainbow")
  activeElement = null
  canvasElement = null
  count = 0
  isPaused = false
  clearInterval(interval)
  interval = undefined
}

function updateColor(count: number) {
  const ctx = canvasElement!.getContext("2d");
  if (!ctx) return false
  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 200, 0);
  grd.addColorStop(0, backGrounds[count]);
  grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(10, 10, 150, 80);
}

