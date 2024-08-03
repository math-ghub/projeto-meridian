const section2 = document.querySelector("#section2") as HTMLBodyElement;
const section2_ignore_block = document.querySelector("#section2-ignore-block") as HTMLBodyElement;

const resizeObserver = new ResizeObserver(obj => {
    resizeBlock(obj);
})

function resizeBlock(obj: ResizeObserverEntry[]): void {
    section2_ignore_block.style.height = obj[0].contentRect.height + "px";
}


resizeObserver.observe(section2);