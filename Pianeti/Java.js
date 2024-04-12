let centerPlanet = 2;

$(document).ready(function () {
  $(".planet").click(function () {
    $(".container").attr("planet-center", this.id);
    if (this.id == "planet1") centerPlanet1();
    if (this.id == "planet2") centerPlanet2();
    if (this.id == "planet3") centerPlanet3();
  });

  function centerPlanet1() {
    var tl = new TimelineMax()
      .to("#planet1", 1, { xPercent: 0, z: 1 }, 0)
      .to("#planet2", 1, { xPercent: 180, z: -800 }, 0)
      .to("#planet3", 1, { xPercent: -180, z: -800 }, 0);
  }

  function centerPlanet2() {
    var tl = new TimelineMax()
      .to("#planet1", 1, { xPercent: -180, z: -800 }, 0)
      .to("#planet2", 1, { xPercent: 0, z: 1 }, 0)
      .to("#planet3", 1, { xPercent: 180, z: -800 }, 0);
  }

  function centerPlanet3() {
    var tl = new TimelineMax()
      .to("#planet1", 1, { xPercent: 180, z: -800 }, 0)
      .to("#planet2", 1, { xPercent: -180, z: -800 }, 0)
      .to("#planet3", 1, { xPercent: 0, z: 1 }, 0);
  }

  $("#next").click(() => {
    console.log("next");
    if (centerPlanet + 1 > 3) {
      centerPlanet = 1;
    } else {
      centerPlanet++;
    }

    if (centerPlanet === 1) return centerPlanet1();
    if (centerPlanet === 2) return centerPlanet2();
    if (centerPlanet === 3) return centerPlanet3();
  });

  $("#back").click(() => {
    console.log("back");
    if (centerPlanet - 1 < 1) {
      centerPlanet = 3;
    } else {
      centerPlanet--;
    }

    if (centerPlanet === 1) return centerPlanet1();
    if (centerPlanet === 2) return centerPlanet2();
    if (centerPlanet === 3) return centerPlanet3();
  });

  $(function () {
    centerPlanet2();
  });

  $("p").click(function () {
    $(this).hide();
  });
});
