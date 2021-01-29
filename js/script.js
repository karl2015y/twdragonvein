// const ctrOpen = (qDivName) => {
//     console.log(this)
//     // if (document.querySelector(`#${qDivName}`).className.indexOf("close") > -1) {
//     //     document.querySelector(`#${qDivName}`).className = "top14Top"
//     // } else {
//     //     document.querySelector(`#${qDivName}`).className = "top14Top close"
//     // }

// }
AOS.init();

$(".questionQ").click(function () {
  const dom = $(this).parent();
  dom.siblings().addClass("closeQ");
  if (dom.hasClass("closeQ")) {
    dom.removeClass("closeQ");
  } else {
    dom.addClass("closeQ");
  }
});

setInterval(() => {
  let text = document.querySelector("#news span").textContent;
  document.querySelector("#news span").textContent =
    text.substring(1, text.length) + text.charAt(0);
}, 600);

$("#mmenubutton").click(function () {
  $("#menulist").fadeToggle("fast");
});

$("#menulist").click(function () {
  $("#menulist").fadeToggle("fast");
});

if (
  $(window).width() > 768 &&
  document.querySelector("#desktop_div iframe").src == ""
) {
  document.querySelector("#desktop_div iframe").src = "/desktop";
}
$(window).resize(function () {
  if (
    $(window).width() > 768 &&
    document.querySelector("#desktop_div iframe").src == ""
  ) {
    document.querySelector("#desktop_div iframe").src = "/desktop";
  }
});
