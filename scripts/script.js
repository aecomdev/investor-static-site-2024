new fullpage("#fullpage", {
  licenseKey: "YV7M9-KK2H6-IVEB6-N09QH-NMNZL",
  scrollHorizontallyKey:
    "VzZZV1ZqYjIwdVkyOXRJT19JRzdjMk55YjJ4c1NHOXlhWHB2Ym5SaGJHeDV6eDg=",
  showActiveTooltip: true,
  slidesNavPosition: "bottom",
  controlArrows: false,
  anchors: [
    "slide1",
    "slide2",
    "slide3",
    "slide4",
    "slide5",
    "slide6",
    "slide7",
  ], // Update as per your slides

  afterLoad: function (origin, destination, direction) {
    // Remove 'active' class from all nav items
    document.querySelectorAll(".vertical-nav .nav-item").forEach(function (el) {
      el.classList.remove("active");
    });
    // Add 'active' class to current nav item
    var activeNavItem = document.querySelector(
      '.vertical-nav .nav-item[data-index="' + destination.index + '"]'
    );
    if (activeNavItem) {
      activeNavItem.classList.add("active");
    }
  },
  afterSlideLoad: function (section, origin, destination, direction) {
    // Remove 'active' class from all nav items
    document.querySelectorAll(".vertical-nav .nav-item").forEach(function (el) {
      el.classList.remove("active");
    });
    // Add 'active' class to current nav item
    var activeNavItem = document.querySelector(
      '.vertical-nav .nav-item[data-index="' + destination.index + '"]'
    );
    if (activeNavItem) {
      activeNavItem.classList.add("active");
    }
  },
  menu: "#menu",
  scrollingSpeed: 700,
  css3: true,
  loopHorizontal: true,
});

