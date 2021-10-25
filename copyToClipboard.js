// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
//   }

{/* <p id="copy">This is the copy string!</p>
<button type="button" onclick="copyEvent('copy')">Copy</button> */}

{/* <script> */}
function copyEvent(id) {
  var str = document.getElementById(id);

  window.getSelection().selectAllChildren(str);
  window.navigator.clipboard.writeText(window.getSelection().getRangeAt(0))
}
// </script>