document.addEventListener("click", function(event) {
  console.log(event.target.id);
  if (event.target.id === "expandIcon" && event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.contains('hidden')) { //.preview-box is hidden
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
    }
  else if (event.target.id === "collapseIcon" && event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.contains('hidden')) { //.preview-box is hidden
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
  }
});
document.getElementById("smallNav").addEventListener("click", function(event) {
  modalDisplay(event);
});
document.getElementById("navbarWrapper").addEventListener("click", function(event) {
  modalDisplay(event);
});
function modalDisplay(event) {
  if (event.target.id === "smallNav" || event.target.id !== "navbar" && event.target.id !== "funny")
    document.getElementById("navbarWrapper").classList.toggle('hidden-mobile');
}
