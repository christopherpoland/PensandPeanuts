discernPhotoType();
document.addEventListener("click", function(event) {
  console.log(event.target.id);
  if (event.target.id === "expandIcon" && event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.contains('hidden')) { //.preview-box is hidden
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
    event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").scrollIntoView(); //moves viewport back to collapsed element
    }
  else if (event.target.id === "collapseIcon" && event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.contains('hidden')) { //.preview-box is hidden
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
    event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").scrollIntoView(); //moves viewport back to collapsed element
  }
});
document.getElementById("smallNav").addEventListener("click", function(event) { //Opens or exits modal
  modalDisplay(event);
  document.body.style.overflow = "hidden";
});
document.addEventListener("click", function(event) { //Exits Modal
  if (event.target.id === "navbarWrapper") {
    modalDisplay(event);
    expandModal();
  }
});
document.getElementById("nameInput").addEventListener("click", function(event) {
  expandModal();

});
document.getElementById("emailInput").addEventListener("click", function(event) {
  expandModal();
});
document.getElementById("messageInput").addEventListener("click", function(event) {
  expandModal();
});
function modalDisplay(event) {
    var modal = document.getElementById("navbarWrapper");
    var titleNames = ["Pens","Pages","People","Places","Peanuts"];
    if (window.getComputedStyle(modal).display === "none") { //display modal
      modal.style.display = "flex";
    }
    else { //hides modal
      modal.style.display = "none";
      document.body.style.overflow = "auto";
      navbar.classList.remove('navbar-extend');
      navbar.classList.add('navbar-initial');
      document.getElementById("contactMobile").classList.remove("contact-mobile-extended");
      navbar.querySelectorAll("a").forEach((element,index) => {
        element.style.textAlign = "left";
        element.innerHTML = titleNames[index];
      });
    }
}
function expandModal() {
  var navbar = document.getElementById("navbar");
  var emojis = ["🖊️","📖","👪","⛺","🌰"];
  //console.log(navbar.querySelectorAll("a"));
  //Check if width is 40% or 90%
  if (Math.round((window.getComputedStyle(navbar).width).replace("px","")) === Math.round(window.innerWidth * 0.4)) { //expands
    navbar.classList.add('navbar-extend');
    navbar.classList.remove('navbar-initial');
    document.getElementById("contactMobile").classList.add("contact-mobile-extended");

    navbar.querySelectorAll("a").forEach((element,index) => {
      element.style.textAlign = "center";
      element.innerHTML = emojis[index];
    });
  }
  /*else { //extended
    navbar.classList.remove('navbar-extend');
    navbar.classList.add('navbar-initial');
    document.getElementById("contactMobile").classList.remove("contact-mobile-extended");
  } */
}
function discernPhotoType() {
  var previewPhotos = document.querySelectorAll(".preview-photo");
  previewPhotos.forEach(element => {
    var height = window.getComputedStyle(element).height;
    var width = window.getComputedStyle(element).width;
    if (height > width) {
      element.classList.add('portrait');
    }
    else {
      element.classList.add('landscape')
    }
  });
}
