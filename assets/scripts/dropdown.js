const dropdown = elm => {
  div_reveal = document.getElementsByClassName("reveal");
  about = document.getElementById("content");
  let open = false;
  for (item of div_reveal) {
    if (item.id == elm) {
      item.classList.contains("open")
        ? item.classList.remove("open")
        : item.classList.add("open");
      open = true;
    } else {
      item.classList.remove("open");
      open = false;
    }
    open = true ? about.classList.add("open") : about.classList.remove("open");
  }
};

// function dropdown() {
//   console.log("wow");
// }
