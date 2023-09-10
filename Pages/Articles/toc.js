document.addEventListener("DOMContentLoaded", function () {
  // Get all headings only from the actual contents.
  var contentContainer = document.getElementById("article-content");
  var headings = contentContainer.querySelectorAll("h1, h2, h3, h4, h5, h6");

  var tocContainer = document.getElementById("toc");
  var ul = document.createElement("ul");
  ul.setAttribute("id", "tocList");
  ul.setAttribute("class", "sidenav");

  // Initialize variables for hierarchy tracking
  var currentList = ul;
  var prevLevel = 1;

  for (var i = 0; i < headings.length; i++) {
    var heading = headings[i];
    var level = parseInt(heading.tagName.charAt(1));

    if (isNaN(level)) {
      continue; // Skip if the heading level is invalid
    }

    // Create an ID for the heading
    var id = "toc-" + i;
    heading.setAttribute("id", id);

    var li = document.createElement("li");
    li.setAttribute("class", "sidenav__item");

    var a = document.createElement("a");
    a.setAttribute("href", "#" + id);
    a.innerHTML = heading.textContent;

    // Determine hierarchy and adjust the current list accordingly
    if (level > prevLevel) {
      var sublist = document.createElement("ul");
      sublist.setAttribute("class", "sidenav__sublist");
      sublist.appendChild(li);
      currentList.appendChild(sublist);
      currentList = sublist;
    } else if (level < prevLevel) {
      while (level < prevLevel) {
        currentList = currentList.parentElement;
        prevLevel--;
      }
      currentList.appendChild(li);
    } else {
      currentList.appendChild(li);
    }

    li.appendChild(a);
    prevLevel = level;
  }

  tocContainer.appendChild(ul);

  // Add a class to the first list item to allow for toggling active state.
  var links = tocContainer.getElementsByClassName("sidenav__item");
  links[0].classList.add("current");

  // Loop through the links and add the active class to the current/clicked link
  for (var j = 0; j < links.length; j++) {
    links[j].addEventListener("click", function () {
      var current = document.getElementsByClassName("current");
      current[0].className = current[0].className.replace(" current", "");
      this.classList.add("current");
    });
  }
});
