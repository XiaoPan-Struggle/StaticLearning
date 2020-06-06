window.addEventListener("load", function() {
  var home_list_items = this.document.querySelectorAll(".home_list_item");

  var horizontal_bars = this.document.querySelectorAll(".horizontal_bar");
  var home_list = this.document.querySelector(".home_list");
  for (var i = 0; i < home_list_items.length; i++) {
    home_list_items[i].setAttribute("data-index", i);
    home_list_items[i].onmouseenter = function() {
      for (var i = 0; i < home_list_items.length; i++) {
        horizontal_bars[i].style.display = "none";
      }
      var index = this.getAttribute("data-index");
      horizontal_bars[index].style.display = "block";
    };
  }
  home_list.onmouseout = function() {
    for (var i = 0; i < horizontal_bars.length; i++) {
      horizontal_bars[i].style.display = "none";
    }
  };
});
