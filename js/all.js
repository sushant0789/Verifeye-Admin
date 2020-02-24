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

$(document).on("click touch", ".info-icon", function(e) {
  let term = $(this).data("tooltip");
  alert(term);
});
