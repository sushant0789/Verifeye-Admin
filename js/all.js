var input = document.querySelector("#phone"),
  iti = intlTelInput(input, {
    initialCountry: "in",
    nationalMode: !0,
    autoPlaceholder: "polite",
    utilsScript:
      "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js"
  });
function readURL(t) {
  if (t.files && t.files[0]) {
    var e = new FileReader();
    (e.onload = function(e) {
      $(".file-upload-image").attr("src", e.target.result),
        $(".file-upload-content").show(),
        $(".image-title").html(t.files[0].name);
    }),
      e.readAsDataURL(t.files[0]);
  } else removeUpload();
}
function removeUpload() {
  $(".file-upload-input").replaceWith($(".file-upload-input").clone()),
    $(".image-upload-wrap").show(),
    $(".image-title").html("passport.jpeg"),
    $(".file-upload-image").attr("src", "img/upload-passport.jpg");
}
$(document).on("click", ".onclick-load", function() {
  $(".modal-wrap").show(),
    setTimeout(function() {
      location.href = "finish.html";
    }, 2e3);
});
