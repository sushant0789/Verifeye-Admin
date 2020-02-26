var input = document.querySelector("#phone");
var iti = intlTelInput(input, {
  initialCountry: "in",
  nationalMode: true,
  autoPlaceholder: "polite",
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.11/js/utils.js"
});
window.iti = iti;

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      $(".file-upload-image").attr("src", e.target.result);
      $(".file-upload-content").show();
      $(".image-title").html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone());
  $(".image-upload-wrap").show();
}

$(document).on("click", ".onclick-load", function() {
  $(".modal-wrap").show();
  setTimeout(function() {
    location.href = "finish.html";
  }, 500);
});

$(document).on("click", ".input-button-next", function() {
  console.log('hello');
  debugger;
  $(this)
    .parent("fieldset")
    .removeClass("active");
});

$(document).ready(function() {
  $(window).on("resize", function(e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 1112) {
      $(document).on("click touch", ".info-icon", function() {
        let term = $(this).data("tooltip");
        $(".tooltip-modal").fadeIn();
        $(".tooltip p").html(term);
      });

      $(document).on("click touch", ".close-tooltip", function() {
        $(".tooltip-modal").hide();
        $(".tooltip p").empty();
      });
    } else {
      $(document).on("click", ".info-icon", function(e) {
        e.preventDefault();
      });
    }
  }
});
