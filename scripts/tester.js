var highlight
document.addEventListener("click", function(event) {
  console.log(event.target.id);
      if (event.target.id === "expand" && event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.contains('hidden')) { //.preview-box is hidden
        console.log("yo")
        event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
        event.target.parentElement.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
      }
      else if (event.target.id === "collapse" && event.target.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.contains('hidden')) { //.preview-box is hidden
        console.log("yo1")
        event.target.parentElement.parentElement.parentElement.querySelector(".preview-box").classList.toggle('hidden'); //.preview-box
        event.target.parentElement.parentElement.parentElement.querySelector(".expanded-content").classList.toggle('hidden'); //.expanded-content
      }




});
