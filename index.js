function createInnerFrame() {
    const innerGrid = document.createElementsById('div');
   
    for(let i = 1; i <= 12; i++) {
     const innerFrame = document.createElement('div');    
    createInnerFrame.classList,add("inner-frame");
    createInnerFrame.textcontent = `Inner Frame ${i}`;
    innerGrid.appendChild(innerFrame);
    }
}
  

