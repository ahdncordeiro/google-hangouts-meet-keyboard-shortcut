var shouldAddEventListener;

// define a handler
function doc_keyDown(e) {
  // Test if keyCode 220 (\) was pressed
  if (e.keyCode == 220) { // Test if keyCode 220 (\) was pressed
    console.log("Keyboard to press More Options menu.");
    document.querySelector("[data-tooltip='More options']").click()
  }
}

// register the handler 
if ((shouldAddEventListener === null ? true : shouldAddEventListener)) {
  shouldAddEventListener = false;
  console.log("Adding Google Hangouts Meet [Open More Options menu] keyboard shortcuts event listener...")
  document.addEventListener('keydown', doc_keyDown, false);
}
