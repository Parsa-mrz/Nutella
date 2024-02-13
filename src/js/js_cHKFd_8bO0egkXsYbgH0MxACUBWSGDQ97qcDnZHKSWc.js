(function () {
  "use strict";
  var d = false,
    e = false,
    f =
      typeof window.Modernizr !== "undefined"
        ? window.Modernizr.csspositionsticky
        : false;

  function MyAnimation($) {
    var c = this;
    var g = window.innerHeight;
    var h = window.innerWidth;
    var i = h < 767;
    var j = 60;
    var k = 0;
    var l = 0;
    var m = 0;
    var n = 0;
    var o = false;
    this.setVars = function () {
      c.container = $(".product-hero .container");
      c.$top_el = $(".field-top");
      o = c.$top_el.length > 0;
      c.step_1 = {
        $parent: $("#bready_animate_1"),
        $holder: $("#holder_1"),
        $sprite: $("#sprite_1"),
        steps: 31,
        current: 0,
      };
      c.step_2 = {
        $parent: $("#bready_step_2"),
        $parent2: $("#bready_animate_2"),
        $holder: $("#holder_2"),
        $sprite: $("#sprite_2"),
        steps: 23,
        current: 0,
      };
      c.update();
    };
    this.update = function () {
      h = window.innerWidth;
      if (h !== m) {
        m = h;
        g = window.innerHeight;
        i = h < 767;
        n = o ? c.$top_el.height() : 0;
        j = c.container.width() * (i ? -0.2 : 0.05);
        c.step_1.$imgW = i ? 1.6 * h : c.step_1.$parent.width();
        c.step_1.$sprite.css({
          width: c.step_1.$imgW,
          left: i ? "-29%" : 0.1 * c.step_1.$imgW,
        });
        c.step_2.$sprite.css({
          width: c.step_1.$imgW,
          left: i ? "0" : 0.1 * c.step_1.$imgW,
        });
        c.step_1.top = c.step_1.$parent.offset().top - n;
        c.step_1.left = c.step_1.$parent.offset().left;
        c.step_2.top = c.step_2.$parent.offset().top - n;
        c.step_1.duration = c.step_2.top - c.step_1.top;
        c.step_1.maxTop = c.step_1.duration - c.step_1.top;
        c.step_1.$parent.height(
          c.step_1.duration + c.step_2.$sprite.outerHeight() - j
        );
        if (f) {
          c.step_1.$holder.css({
            top: c.step_1.top,
          });
          c.step_2.$parent2.height(
            c.step_1.duration + c.step_2.$sprite.outerHeight() - j
          );
          c.step_2.$parent2.css({
            "margin-top":
              c.step_1.$parent.offset().top - c.step_2.$parent.offset().top,
          });
          c.step_2.$holder.css({
            top: c.step_1.top,
          });
        } else {
          c.step_2.$parent2.height(c.step_1.$imgW);
        }
        if (!i) {
          c.step_1.$holder.css({
            width: c.step_1.$imgW,
          });
        }
        c.step_2.$imgW = c.step_2.$sprite.width();
        c.step_2.diff = i ? 180 : 0;
        c.step_2.diffY = $(".field-medias .item").height();
        $(window).trigger("scroll");
      }
    };
    this.setEvents = function () {
      $(window)
        .on("resize load", function () {
          c.update();
        })
        .on("scroll", function () {
          c.scroller($(window).scrollTop());
        });
      $("#tap-here").on("click", function () {
        d = true;
        e = true;
        var a = setInterval(function () {
          if ((c.setSprite2(), c.step_2.current === c.step_2.steps - 1)) {
            e = false;
            clearInterval(a);
          }
          c.step_2.current++;
        }, 50);
      });
    };
    this.animate_1 = function (a) {
      if ((a -= n) < 0) {
        return;
      }
      if (i) {
        var b = Math.floor((a / c.step_1.duration) * c.step_1.steps);
        b = i ? (b > 16 ? 16 : b) : 0;
        c.step_1.$sprite.css({
          transform: "translate3d(" + b + "%,0, 0)",
        });
      }
      var d = Math.floor(a * (c.step_1.steps / c.step_1.duration));
      if (d >= 24) {
        c.step_1.$holder.hide();
      } else {
        c.step_1.$holder.show();
      }
      if (d < 31 && d >= 0) {
        if (d !== c.step_1.current) {
          c.step_1.current = d;
          c.setSprite1();
        }
      } else {
        c.step_1.current = c.step_1.steps - 1;
        c.setSprite1();
      }
    };
    this.setSprite1 = function () {
      if (k !== c.step_1.current) {
        c.step_1.$sprite.css({
          "background-position": -c.step_1.current * c.step_1.$imgW + "px 0",
        });
        k = c.step_1.current;
      }
    };
    this.setSprite2 = function () {
      if (l !== c.step_2.current) {
        c.step_2.$sprite.css({
          "background-position": -c.step_2.current * c.step_2.$imgW + "px 0",
        });
        l = c.step_2.current;
        c.step_2.$parent.toggleClass("active", 12 === c.step_2.current);
      }
    };
    this.animate_2 = function (a) {
      if ((a -= n) < 0) {
        if (!f) {
          c.step_1.$holder.css({
            position: "absolute",
            left: 0,
            top: 0,
            bottom: "auto",
          });
          c.step_2.$holder.css({
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
          });
        }
        return;
      }
      var b = Math.round(a - c.step_2.top + 0.2 * c.step_2.$imgW);
      var d = a - c.step_2.top + 1.2 * c.step_2.$imgW;
      var e = a - c.step_2.top + c.step_2.diffY;
      if (d > 0) {
        c.step_2.$holder.css("opacity", 1);
        c.step_1.$holder.css("opacity", 0);
      } else {
        c.step_2.$holder.css("opacity", 0);
        c.step_1.$holder.css("opacity", 1);
      }
      if (!f) {
        if (b > 0) {
          c.step_1.$holder.css({
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
          });
          c.step_2.$holder.css({
            position: "absolute",
            left: 0,
            top: "auto",
            bottom: 0,
          });
        } else {
          c.step_1.$holder.css({
            position: "fixed",
            left: c.step_1.left,
            top: c.step_1.top,
            bottom: "auto",
          });
          c.step_2.$holder.css({
            position: "fixed",
            left: c.step_1.left,
            top: c.step_1.top,
            bottom: "auto",
          });
        }
      }
      if (e <= 0) {
        c.step_2.current = 0;
        c.setSprite2();
      } else if (b < c.step_2.diff && e > 0) {
        var g =
          12 -
          Math.floor(
            Math.abs(b - c.step_2.diff) / (Math.abs(b - e - c.step_2.diff) / 12)
          );
        if (c.step_2.current !== g) {
          c.step_2.current = g;
          c.setSprite2();
        }
      } else {
        c.step_2.current = c.step_2.current > 12 ? c.step_2.current : 12;
        c.setSprite2();
      }
    };
    this.scroller = function (a) {
      c.animate_1(a);
      c.animate_2(a);
    };
    this.setVars();
    this.setEvents();
  }

  window.addEventListener("DOMContentLoaded", function () {
    new MyAnimation(window.jQuery);
  });
})();
