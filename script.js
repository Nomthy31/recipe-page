// The strikethrough code //

document.addEventListener("DOMContentLoaded", function () {
  var curParent, content;
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "SPAN") {
      var closestSElement = target.closest("s");
      if (closestSElement) {
        content = closestSElement.innerHTML;
        curParent = closestSElement;
        curParent.insertAdjacentHTML("afterend", content);
        curParent.remove();
      } else {
        var sElement = document.createElement("s");
        target.parentNode.insertBefore(sElement, target);
        sElement.appendChild(target);
      }
    }
  });
});
