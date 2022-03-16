function validateForm() {
  alert("All fields must be filled out")
 // let x = document.forms["myForm"]["fname"].value;
 // if (x == "") {
 //   alert("Name must be filled out");
 //   return false;
 // }
}


let items = document.querySelectorAll("li.question7item");
let current = null;

items.forEach(item => {
    item.draggable = true;
    // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
    item.ondragstart = (ev) => {
      current = item;
      for (let it of items) {
        if (it != current) { it.classList.add("hint"); }
      }
    };
    
    // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
    item.ondragenter = (ev) => {
      if (item != current) { item.classList.add("active"); }
    };

    // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
    item.ondragleave = () => {
      item.classList.remove("active");
    };

    // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
    item.ondragend = () => { for (let it of items) {
        it.classList.remove("hint");
        it.classList.remove("active");
    }};
 
    // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
    item.ondragover = (evt) => {
      evt.preventDefault();
      if (item != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (item == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          item.parentNode.insertBefore(current, item.nextSibling);
        } else {
          item.parentNode.insertBefore(current, item);
        }
      }
      items = document.querySelectorAll("li.question7item");
    };
 
    // (B7) ON DROP - DO SOMETHING
    item.ondrop = (evt) => {
      evt.preventDefault();
      if (item != current) {
        let currentpos = 0, droppedpos = 0;
        for (let it=0; it<items.length; it++) {
          if (current == items[it]) { currentpos = it; }
          if (item == items[it]) { droppedpos = it; }
        }
        if (currentpos < droppedpos) {
          item.parentNode.insertBefore(current, item.nextSibling);
        } else {
          item.parentNode.insertBefore(current, item);
        }
      }
      items = document.querySelectorAll("li.question7item");
    };
  
})