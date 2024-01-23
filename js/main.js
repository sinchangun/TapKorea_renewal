// gsap target 오류수정
gsap.config({
  nullTargetWarn: false,
});


//gsap ScrollTrigger 연결
gsap.registerPlugin(ScrollTrigger);


/* ******* topMenu 영역 ******* */
function topMenu() {

  //topmenu 변수
  let menuList = $(".menuList");
  let menuLists = $(".menuList>ul>li");
  let menuListList = $(".menuList>ul>li>ul");
  let menuListbg = $(".hidden_background");

  //topmenu hover효과
  menuList.mouseenter(function () {
    menuListbg.addClass("active");
    menuListList.css({
      display: "block",
    });
  });
  $(".topMenu").mouseleave(function () {
    menuListbg.removeClass("active");
    menuLists.removeClass("active");
    menuListList.css({
      display: "none",
    });
  });
  menuLists.mouseenter(function () {
    let index = $(this).index();
    menuLists.removeClass("active");
    menuLists.eq(index).addClass("active");
  });

  //topmenu gsap 변수
  let tl = gsap.timeline();
  let logo = $(".logo");
  let menuListIcon = $(".menuListIcon");

  //topmenu gsap 효과
  tl.from(logo, {
    x: -30,
    duration: 0.5,
    opacity: 0,
  });
  tl.from(
    menuListIcon, {
      x: 30,
      duration: 0.5,
      opacity: 0,
    },
    "<"
  );
  tl.from(menuLists, {
    y: 10,
    opacity: 0,
    stagger: 0.1,
  });

}
topMenu(); /* topMenu */
let imgBox = $(".imgBox");
let tlInterval = gsap.timeline();

/* ******* page1 영역 ******* */
function page1() {

  //page1 변수

  let page1IntervalGsap = 0;

  //page1 imageSetInterval 초기값
  $(document).ready(function () {

    if (page1IntervalGsap == 0) {
      for (let i = 0; i < imgBox.length; i++) {
        tlInterval.to(
          imgBox.eq(i).find("img").eq(0), {
            delay: 0.05,
            x: 0,
            opacity: 1,
            duration: 0.08,
          },
          "-=0.07"
        );
      }
      page1IntervalGsap = 0;
    }



    //page1 Interval 초기값

    $(document).ready(function () {
      page1Int = setInterval(page1Interval, 10000);
      pageChange = 1;
      console.log("Interval실행중");
    });

  });

  //page1Title gsap 효과
  gsap.to(".page2_title", {
    scale: 0.5,
    backgroundColor: "#181818",
    borderTop: "5px solid #fff",
    borderBottom: "5px solid #fff",
    borderLeft: "0px solid #fff",
    borderRight: "0px solid #fff",
    y: "80vh",
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "4% 6%",
      scrub: true,
      onLeave: function () {
        $(".page2_title").addClass("page2Start");
        $(".page2").addClass("page2Start");
      },
      onEnterBack: function () {
        $(".page2_title").removeClass("page2Start");
        $(".page2").removeClass("page2Start");
      },
    },
  });
  gsap.to(".page1Section", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#main",
      start: "top top",
      end: "4% 6%",
      scrub: true,
    },
  });

}

function page1Interval() {
  if (countInterval) {

    for (let i = 0; i < imgBox.length; i++) {
      tlInterval.to(
        imgBox.eq(i).find("img").eq(0), {
          x: 10,
          opacity: 0,
          duration: 0.3,
        },
        "-=0.25"
      );
      tlInterval.to(
        imgBox.eq(i).find("img").eq(1), {
          x: 0,
          opacity: 1,
          duration: 0.3,
        },
        "-=0.25"
      );
    }
    countInterval = 0;
  } else {
    for (let i = 0; i < imgBox.length; i++) {
      tlInterval.to(
        imgBox.eq(i).find("img").eq(1), {
          x: 10,
          opacity: 0,
          duration: 0.3,
        },
        "-=0.25"
      );
      tlInterval.to(
        imgBox.eq(i).find("img").eq(0), {
          x: 0,
          opacity: 1,
          duration: 0.3,
        },
        "-=0.25"
      );
    }
    countInterval = 1;
  }
}
page1(); /* page1 */


/* ******* page2 영역 ******* */
function page2() {

  //page2 gsap 효과(pin)
  gsap.to(".page2_bottomImgBox", {
    x: -3500,
    scrollTrigger: {
      trigger: ".page2",
      start: "top top",
      end: "+=3500",
      scrub: 1,
      pin: true,
    },
  });

}
page2(); /* page2 */


/* ******* page5 영역 ******* */
function page5() {

  //page5 관련 변수선언
  let p5SubTitle = $(".p5Title .p5SubTitle p");
  let p5SubTitleCont = p5SubTitle.text().split("");
  let splitWord = "";

  //p5SubTitleCont split(' ')기준 span
  p5SubTitleCont.forEach((p5SubTitleCont) => {
    splitWord += `<span>${p5SubTitleCont}</span>`;
  });
  p5SubTitle.html(splitWord);

}
page5(); /* page5 */


/* ******* page6 영역 ******* */
function page6() {

  //page6 관련 변수선언
  let p6AbDiv = $(".p6abCont>div");
  let p6Cont1Change = 0;
  let p6Cont2Title1 = $(".p6Cont2Title .bottom1");
  let p6Cont2Title2 = $(".p6Cont2Title .bottom2");
  let p6Cont2TitleCont1 = p6Cont2Title1.text().split("");
  let p6Cont2TitleCont2 = p6Cont2Title2.text().split("");
  let splitWord6_b1 = "";
  let splitWord6_b2 = "";

  //p6Cont2Title split(' ')기준 span
  p6Cont2TitleCont1.forEach((p6Cont2TitleCont1) => {
    splitWord6_b1 += `<span>${p6Cont2TitleCont1}</span>`;
  });
  p6Cont2TitleCont2.forEach((p6Cont2TitleCont2) => {
    splitWord6_b2 += `<span>${p6Cont2TitleCont2}</span>`;
  });
  p6Cont2Title1.html(splitWord6_b1);
  p6Cont2Title2.html(splitWord6_b2);

  //page6Cont1 mouseEnter 이벤트
  function p6mouseEvent() {
    let index = $(this).index();
    let direction = 1 - index * 2;

    function p6mouse() {
      $(".p6Cont1 .p6ContBox>div").hide().eq(index).show();
      $(".p6menu>div").removeClass("active").eq(index).addClass("active");
      gsap.fromTo(
        $(".p6ContBox>div").eq(index).find("img"), {
          x: 80 * direction,
          opacity: 0,
          ease: "back.out(1.7)",
        }, {
          x: 0,
          opacity: 1,
          ease: "back.out(1.7)",
        }
      );
      gsap.fromTo(
        $(".p6ContBox>div").eq(index).find(".p6BoxTitle"), {
          x: -80 * direction,
          opacity: 0,
          ease: "back.out(1.7)",
        }, {
          x: 0,
          opacity: 1,
          ease: "back.out(1.7)",
        }
      );
    }

    if (index == 0 && p6Cont1Change == 1) {
      p6Cont1Change = 0;
      console.log("index0실행");
      p6mouse();
    } else if (index == 1 && p6Cont1Change == 0) {
      p6Cont1Change = 1;
      console.log("index1실행");
      p6mouse();
    }
  }
  p6AbDiv.mouseenter(p6mouseEvent);
}
page6(); /* page6 */


/* ******* page7 영역 ******* */
function page7() {

  //page7 관련 변수선언
  let p7TitleTxt = $(".page7 .p7Title .absolContainer p");
  let p7TitleTxtCont = p7TitleTxt.text().split(" ");
  let splitWord2 = "";

  //p7TitleTxtCont split(' ')기준 span
  p7TitleTxtCont.forEach((p7TitleTxtCont) => {
    splitWord2 += `<span>${p7TitleTxtCont}&nbsp</span>`;
  });
  p7TitleTxt.html(splitWord2);

  //page7 관련 변수선언및 클론생성
  let count1 = 0;
  let p7TitleTxtwidth = $(".page7 .p7Title .absolContainer p").width();
  let p7TitleTxt_clone = p7TitleTxt.clone(true);
  let nextElement = $(".page7 .p7Title .absolContainer");
  nextElement.append(p7TitleTxt_clone);

  //resize시 width재계산
  $(window).resize(function () {
    p7TitleTxtwidth = $(".page7 .p7Title .absolContainer p").width();
  });

  //text marquee 효과
  function marqueeText(count, element, direction) {
    if (count > p7TitleTxtwidth) {
      element.css({
        transform: "translate3d(0,0,0)",
      });
      count = 0;
    }
    element.css({
      transform: `translate3d(${count * direction}px,0,0)`,
    });
    return count;
  }

  function animate() {
    count1++;
    count1 = marqueeText(count1, nextElement, -1);
    requestAnimationFrame(animate);
  }
  animate();

}
page7(); /* page7 */


/* ******* page8 영역 ******* */
function page8() {

  //page8 tap메뉴 초기값
  $(".page8center>div").hide().eq(0).show();

  //page8 tap메뉴 click함수
  $(".p8TLeft ul li").click(function () {
    let index = $(this).index();
    $(".p8TLeft ul li").removeClass("active");
    $(".p8TLeft ul li").eq(index).addClass("active");
    $(".page8center>div").hide().eq(index).fadeIn();


    if (index == 1 || index == 2) {
      if (!$(".activeBox").hasClass("active")) {
        $(".activeBox").addClass("active")
      }

      if (index == 1) {
        $(".activeBox").show()
        $(".activeBox>div").hide().eq(0).show()
      } else if (index == 2) {
        $(".activeBox").show()
        $(".activeBox>div").hide().eq(1).show()
      }

    } else if (index == 0) {
      $(".activeBox").removeClass("active")
    }

  });

  //page8관련 변수선언
  let catImgList = $(".catalogue .imgList div");
  let catImgListImg = $(".catalogue .imgList div img");

  //catalouge 이미지Z-index선언
  $(document).ready(function () {
    for (let i = 0; i < catImgList.length; i++) {
      catImgList.eq(i).css({
        zIndex: i,
      });
    }
  });

  //catalouge hover효과
  catImgList.mouseenter(function () {
    let index = $(this).index();
    catImgList.eq(index).css({
      zIndex: 80,
    });
    if (index >= 20) {
      catImgListImg.eq(index).css({
        height: "300%",
        "border-radius": "30px",
        transform: `translate(${(20 - index) * 4}%,-50%)`,
      });
    } else if (index < 19) {
      catImgListImg.eq(index).css({
        height: "300%",
        "border-radius": "30px",
      });
    }
  });
  catImgList.mouseleave(function () {
    let index = $(this).index();
    catImgList.eq(index).css({
      zIndex: index,
    });
    catImgListImg.eq(index).css({
      height: "100%",
      "border-radius": "0px",
    });
    if (index >= 20) {
      catImgListImg.eq(index).css({
        height: "100%",
        "border-radius": "0px",
        transform: `translate(0%,-50%)`,
      });
    } else if (index < 19) {
      catImgListImg.eq(index).css({
        height: "100%",
        "border-radius": "0px",
      });
    }
  });

  $(".activeBox .sample").click(function () {
    var companyData = $("#sample #sample_companyname").val();
    var userName = $("#sample #sample_name").val();
    var userNumber = $("#sample #sample_num").val();
    var userEmail = $("#sample #sample_email").val();
    /* var userHopeCont = $("hopeCont div")val(); */
    var content = $("#desc #sample_content").val()

    alert(`업체명: ${companyData} . 팀/담당자명: ${userName} . 연락처: ${userNumber} . 이메일: ${userEmail} . 기타내용:${content} 입니다.`)
  })

  $(".activeBox .inquiry").click(function () {
    var companyData2 = $("#inquiry #inquiry_companyname").val();
    var userName2 = $("#inquiry #inquiry_name").val();
    var userNumber2 = $("#inquiry #inquiry_num").val();
    var userEmail2 = $("#inquiry #inquiry_email").val();
    var usertitle = $("#title #inquiry_title").val();
    var content2 = $("#desc2 #inquiry_content").val()

    alert(`업체명: ${companyData2} . 이름: ${userName2} . 연락처: ${userNumber2} . 이메일: ${userEmail2} . 제목: ${usertitle}. 문의내용:${content2} 입니다.`)
  })

}
page8(); /* page8 */


//if함수 pageChange값 (if함수 한번만 들어갈수있게 체크)
let countInterval = 1;
let page1Int;
let pageChange = 0;
let page3Change = 0;
let page5Change = 0;
let last_scroll = 0;
let stickyChange1 = 0;
let stickyChange2 = 0;
let stickyChange3 = 0;
let page7Change = false;
let p5textChange = 0;
let p6TilteChange = 0;


//page1,page2,page3,page4,page5,page6,page7,page8 scroll 효과
$(window).scroll(function () {

  //공통부분 변수선언
  let scrollTop = $(window).scrollTop();
  let scrollTopVH = (scrollTop / window.innerHeight) * 100;

  let page1Height = $(".page1").height();
  let page2Height = $(".page2").height();
  let page3Height = $(".page3").height();

  let page4 = $(".page4");


  let page4offSetTop = $(".page4").offset().top;
  let page5offSetTop = $(".page5").offset().top;
  let page6offSetTop = $(".page6").offset().top;
  let page7offSetTop = $(".page7").offset().top;

  /* ******* topMenuScroll 영역 ******* */
  function topMenuScroll() {
    //topmenu scroll반응
    if (scrollTop > last_scroll) {
      $(".topMenu").addClass("on");
    } else {
      $(".topMenu").removeClass("on");
    }
    last_scroll = scrollTop;
  }
  topMenuScroll();


  /* ******* page1Scroll 영역 ******* */
  function page1Scroll() {

    //page1 Interval 효과
    if (scrollTopVH < 100 && pageChange == 0) {
      page1Int = setInterval(page1Interval, 10000);
      pageChange = 1;
      console.log("Interval실행중");
    } else if (scrollTopVH >= 99 && pageChange == 1) {
      clearInterval(page1Int);
      console.log("Interval실행중지");
      pageChange = 0;
    }
  }
  page1Scroll(); /* page1Scroll */


  /* ******* page2Scroll 영역 ******* */
  function page2Scroll() {
    //page2Scroll관련 변수선언
    let page2ScrollMove = scrollTop - page1Height;
    let page2ScrollMovePercent = (page2ScrollMove / 3500) * 100;

    //page2Scroll시 진행도 변수선언
    let dsbLineHeight = $(".page2_desc .dsbLine").height();
    let dsbLine_active = $(".page2_desc .dsbLine .dsbLine_active");

    //page2Scroll 효과
    if (page2ScrollMovePercent > 0 && page2ScrollMovePercent < 110) {
      if (page2ScrollMovePercent >= 15 && page2ScrollMovePercent < 100) {
        gsap.to(".p2main_title .mainTitle", {
          x: 10,
          opacity: 1,
        });
        gsap.to(".p2main_title .subTitle", {
          x: -10,
          opacity: 1,
        });
      } else if (page2ScrollMovePercent < 15) {
        gsap.to(".p2main_title .mainTitle", {
          x: 0,
          opacity: 0,
        });
        gsap.to(".p2main_title .subTitle", {
          x: 0,
          opacity: 0,
        });
      }

      if (page2ScrollMovePercent >= 20 && page2ScrollMovePercent < 40) {
        gsap.to(".desc1", {
          x: 100,
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc1 .descLineTop", {
          x: 50,
          width: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc1 .descLineLeft", {
          y: 25,
          height: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".p2Img1", {
          scale: 1,
          opacity: 1,
        });
      } else if (page2ScrollMovePercent < 20) {
        gsap.to(".desc1", {
          x: 0,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc1 .descLineTop", {
          x: 0,
          width: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc1 .descLineLeft", {
          y: 0,
          height: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".p2Img1", {
          scale: 0,
          opacity: 0,
        });
      }

      if (page2ScrollMovePercent >= 40 && page2ScrollMovePercent < 60) {
        gsap.to(".desc1 .descLineTop", {
          width: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc1 .descLineLeft", {
          height: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc1", {
          delay: 0.1,
          x: 200,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc2", {
          y: -100,
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineTop", {
          x: -50,
          width: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineLeft", {
          y: -25,
          height: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".p2Img1", {
          scale: 0.5,
          opacity: 0,
        });
        gsap.to(".p2Img2", {
          scale: 1,
          opacity: 1,
        });
      } else if (page2ScrollMovePercent < 40) {
        gsap.to(".desc2", {
          y: 0,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineTop", {
          x: 0,
          width: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineLeft", {
          height: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".p2Img2", {
          scale: 0.5,
          opacity: 0,
        });
      }

      if (page2ScrollMovePercent >= 60 && page2ScrollMovePercent < 80) {
        gsap.to(".desc2", {
          y: -200,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineTop", {
          width: "0%",
          duration: 0.5,
        });
        gsap.to(".desc2 .descLineLeft", {
          height: "0%",
          duration: 0.5,
        });
        gsap.to(".desc3", {
          x: -100,
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineTop", {
          x: -50,
          width: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineLeft", {
          y: 25,
          height: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".p2Img2", {
          scale: 0.5,
          opacity: 0,
        });
        gsap.to(".p2Img3", {
          scale: 1,
          opacity: 1,
        });
      } else if (page2ScrollMovePercent < 60) {
        gsap.to(".desc3", {
          x: 0,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineTop", {
          x: 0,
          width: "0%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineLeft", {
          y: 0,
          height: "0%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".p2Img3", {
          scale: 0.5,
          opacity: 0,
        });
      }

      if (page2ScrollMovePercent >= 80 && page2ScrollMovePercent < 100) {
        gsap.to(".desc3", {
          x: -200,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineTop", {
          width: "0%",
          duration: 0.5,
        });
        gsap.to(".desc3 .descLineLeft", {
          height: "0%",
          duration: 0.5,
        });
        gsap.to(".desc4", {
          y: -100,
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineTop", {
          x: 50,
          width: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineLeft", {
          y: -25,
          height: "100%",
          opacity: 1,
          duration: 0.5,
        });
        gsap.to(".p2Img3", {
          scale: 0.5,
          opacity: 0,
        });
        gsap.to(".p2Img4", {
          scale: 1,
          opacity: 1,
        });
      } else if (page2ScrollMovePercent < 80) {
        gsap.to(".desc4", {
          y: 0,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineTop", {
          x: 0,
          width: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineLeft", {
          y: 0,
          height: "0%",
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".p2Img4", {
          scale: 0.5,
          opacity: 0,
        });
      }

      if (page2ScrollMovePercent > 105) {
        gsap.to(".desc4", {
          y: 50,
          opacity: 0,
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineTop", {
          width: "0%",
          duration: 0.5,
        });
        gsap.to(".desc4 .descLineLeft", {
          height: "0%",
          duration: 0.5,
        });
        gsap.to(".p2Img4", {
          scale: 0.5,
          opacity: 0,
        });
      }

      //page2Scroll시 진행도변화
      dsbLine_active.css({
        height: `${(page2ScrollMovePercent * dsbLineHeight) / 100}px`,
      });
    }
  }
  page2Scroll(); /* page2Scroll */


  /* ******* page3Scroll 영역 ******* */
  function page3Scroll() {
    //page3Scroll시 진행도 변수
    let page3ScrollMove = scrollTop - page1Height - page2Height - 3500;
    let page3ScrollPercent = (page3ScrollMove / (page3Height - innerHeight)) * 100;
    let dsbLinewidth2 = $(".page3_1 .dsbLine").width();

    //page3Scroll시 p3sundesc gsap효과 변수
    let p3mainList = $(".p3main_title>ul>li");
    let p3mainListtl = gsap.timeline();
    let p3subBoxtl = gsap.timeline();
    let p3subBoxList1 = $(".p3subDesc1>div");
    let p3subBoxList2 = $(".p3subDesc2>div");
    let p3subBoxList3 = $(".p3subDesc3>div");
    let p3subBoxList4 = $(".p3subDesc4>div");
    let p3subBoxList5 = $(".p3subDesc5>div");

    //page3Scroll시 초기값 + 실행내용
    if (page3ScrollPercent > 0 && page3ScrollPercent < 120) {
      if (page3ScrollPercent >= 5 && page3ScrollPercent < 17) {
        p3mainList.removeClass("active").eq(0).addClass("active");

        gsap.to(".p3mainTit", {
          x: -10,
          opacity: 1,
        });
        gsap.to(".p3mainDesc", {
          x: 20,
          opacity: 1,
        });

        if (p3mainList.css("opacity") === "0") {
          for (let i = 0; i < 6; i++) {
            p3mainListtl.to(
              p3mainList.eq(i), {
                x: 20,
                opacity: 1,
                duration: 0.3,
              },
              "-=0.2"
            );
          }
        }
      } else if (page3ScrollPercent < 5) {
        gsap.to(".p3mainTit", {
          x: 0,
          opacity: 0,
        });
        gsap.to(".p3mainDesc", {
          x: 0,
          opacity: 0,
        });
        gsap.to(p3mainList, {
          x: 0,
          opacity: 0,
          duration: 0.1,
        });
      }

      if (page3ScrollPercent >= 17 && page3ScrollPercent < 35) {
        p3mainList.removeClass("active").eq(1).addClass("active");
      }

      if (page3ScrollPercent >= 35 && page3ScrollPercent < 55) {
        p3mainList.removeClass("active").eq(2).addClass("active");
      }

      if (page3ScrollPercent >= 55 && page3ScrollPercent < 70) {
        p3mainList.removeClass("active").eq(3).addClass("active");
      }

      if (page3ScrollPercent >= 70 && page3ScrollPercent < 100) {
        p3mainList.removeClass("active").eq(4).addClass("active");
        p3mainList.eq(5).addClass("active");
        if (p3mainList.css("opacity") === "0") {
          for (let i = 0; i < 6; i++) {
            p3mainListtl.to(
              p3mainList.eq(i), {
                x: 20,
                opacity: 1,
                duration: 0.3,
              },
              "-=0.2"
            );
          }
        }
      }

      if (page3ScrollPercent >= 117 && page3Change === 0) {
        page3Change = 1;
        if (!page4.hasClass("page4Start")) {
          page4.addClass("page4Start");
        }
        gsap.globalTimeline.clear();
        console.log("gsap이 초기화되었습니다");
      } else if (page3ScrollPercent < 117 && page3Change === 1) {
        page4.removeClass("page4Start");
        page3Change = 0;
      }

      //page3Scroll시 진행도변화
      let dsbLine_active2 = $(".page3_1 .dsbLine .dsbLine_active");
      dsbLine_active2.css({
        width: `${(page3ScrollPercent * dsbLinewidth2) / 100}px`,
      });
    }

    //page3Scroll시 실행될 함수
    function p3subDesc(p3ScrollStart, p3ScrollEnd, p3DescBox) {
      if (
        page3ScrollPercent > p3ScrollStart &&
        page3ScrollPercent < p3ScrollEnd
      ) {
        p3subBoxtl.to(p3DescBox, {
          y: -60,
          opacity: 1,
          duration: 0.15,
        });
      } else if (page3ScrollPercent < p3ScrollStart) {
        p3subBoxtl.to(p3DescBox, {
          y: 0,
          opacity: 0,
          duration: 0.15,
        });
      } else if (page3ScrollPercent > p3ScrollEnd) {
        p3subBoxtl.to(p3DescBox, {
          y: -120,
          opacity: 0,
          duration: 0.15,
        });
      }
    }

    //page3Scroll시
    if (page3ScrollPercent > 0 && page3ScrollPercent < 120) {
      p3subDesc(5, 17, p3subBoxList1);
      p3subDesc(17, 35, p3subBoxList2);
      p3subDesc(35, 55, p3subBoxList3);
      p3subDesc(55, 70, p3subBoxList4);
      p3subDesc(70, 100, p3subBoxList5);
    }
  }
  page3Scroll(); /* page3Scroll */


  /* ******* page4Scroll 영역 ******* */
  function page4Scroll() {

    //page4Scroll시 실행될 함수
    function page4Gsap(target, xMove, yMove, rotate, opac) {
      gsap.to(target, {
        x: xMove,
        y: yMove,
        opacity: opac,
        rotation: rotate,
        force3D: true,
        scrollTrigger: {
          trigger: ".page4sec2",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
    }

    //page4 Class추가
    if (scrollTop > page5offSetTop && page5Change == 0) {
      page4.addClass("page4End");
      page5Change = 1;
    } else if (scrollTop <= page5offSetTop && page5Change == 1) {
      page4.removeClass("page4End");
      page5Change = 0;
    }

    //page4 Gsap효과 - page4Gsap함수사용
    if (scrollTop > page4offSetTop && scrollTop < page5offSetTop) {
      page4Gsap(".pb1", "-100%", "-100%", -20, 0);
      page4Gsap(".pb2", "30%", "-70%", 30, 0);
      page4Gsap(".pb3", "-50%", "-70%", -10, 0);
      page4Gsap(".pb4", "70%", "-120%", -40, 0);
      page4Gsap(".pb5", "-65%", "0%", 10, 0);
      page4Gsap(".pb6", "-55%", "-105%", -10, 0);
      page4Gsap(".pb7", "35%", "-105%", 10, 0);
      page4Gsap(".pb8", "65%", "0%", -10, 0);
      page4Gsap(".pb9", "-55%", "0%", 0, 0);
      page4Gsap(".pb10", "-3.5%", "53%", 0, 1);
      page4Gsap(".pb11", "3.5%", "53%", 0, 1);
      page4Gsap(".pb12", "55%", "0%", -10, 0);
      page4Gsap(".pb13", "-55%", "70%", -20, 0);
      page4Gsap(".pb14", "105%", "-55%", 0, 1);
      page4Gsap(".pb15", "-105%", "-55%", 0, 1);
      page4Gsap(".pb16", "65%", "60%", 10, 0);

      gsap.to(".p4SL_center .mainTitle", {
        y: "-10%",
        duration: 0.2,
        fontSize: "50px",
        scrollTrigger: {
          trigger: ".page4sec2",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
      gsap.to(".p4SL_center .mainDesc", {
        y: "-20%",
        opacity: 0,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".page4sec2",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
      gsap.to(".leftTB", {
        y: "-60%",
        opacity: 0.3,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".page4sec2",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
      gsap.to(".rightTB", {
        y: "-60%",
        duration: 0.2,
        color: "black",
        scrollTrigger: {
          trigger: ".page4sec2",
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      });
    }

  }
  page4Scroll(); /* page4Scroll */


  /* ******* page5Scroll 영역 ******* */
  function page5Scroll() {

    //page5관련 변수선언
    let OneoffsetTop = $(".one").offset().top;
    let TwooffsetTop = $(".two").offset().top;
    let ThreeoffsetTop = $(".three").offset().top;
    let p5WLeftImgBoxList = $(".p5WLeftImgBox img");
    let p5WIrghtDiv = $(".p5WRight>div");
    let p5WLeftEM = $(".p5WLeft p em");
    let p5WLeftB = $(".p5WLeft p B");
    let p5RDescBoxListOne = $(".p5WRight .one .descBox ul li");
    let p5RDescBoxListTwo = $(".p5WRight .two .descBox ul li");
    let p5RDescBoxListThree = $(".p5WRight .three .descBox ul li");

    //page5Scroll시 실행될 함수
    function stickyDesc(p5WLeftNum, offsetTop, imgIdx, txtIdx, p5WRDescList) {
      if (
        scrollTop > offsetTop - 500 &&
        !p5WIrghtDiv.eq(txtIdx).hasClass("active")
      ) {
        console.log("진입완료");
        p5WIrghtDiv.eq(txtIdx).addClass("active");
        gsap.to(p5WLeftImgBoxList.eq(imgIdx), {
          opacity: 1,
        });
        p5WIrghtDiv.eq(txtIdx).find("h3").css({
          "-webkit-text-fill-color": "yellow",
          "-webkit-text-stroke": "0px",
        });
        p5WLeftEM.eq(p5WLeftNum).css({
          color: "yellow",
        });
        p5WLeftB.eq(p5WLeftNum).css({
          color: "white",
        });
        gsap.to(p5WRDescList, {
          opacity: 1,
          x: 10,
          stagger: 0.05,
        });
      } else if (
        scrollTop <= offsetTop - 500 &&
        p5WIrghtDiv.eq(txtIdx).hasClass("active")
      ) {
        p5WIrghtDiv.eq(txtIdx).removeClass("active");
        gsap.to(p5WLeftImgBoxList.eq(imgIdx), {
          opacity: 0,
        });
        p5WIrghtDiv.eq(txtIdx).find("h3").css({
          "-webkit-text-fill-color": "transparent",
          "-webkit-text-stroke": "1px #5f5953",
        });
        p5WLeftEM.eq(p5WLeftNum).css({
          color: "#2b2b2b",
        });
        p5WLeftB.eq(p5WLeftNum).css({
          color: "#2b2b2b",
        });
        gsap.to(p5WRDescList, {
          opacity: 0,
          x: 0,
          stagger: 0.05,
        });
      }
    }
    let p5Span = $(".p5WLeft .p5Title .p5SubTitle p span");
    let p5TopTitle = $(".p5WLeft .p5Title .p5topTitle");
    let p5MainpTitle = $(".p5WLeft .p5Title .p5MainTitle");

    if (scrollTop > page5offSetTop - 1000 && scrollTop < page6offSetTop) {
      if (
        scrollTop > page5offSetTop - 400 &&
        scrollTop < page5offSetTop &&
        p5textChange == 0
      ) {
        p5textChange = 1;
        gsap.to(p5TopTitle, {
          opacity: 1,
          x: 10,
        });
        gsap.to(p5MainpTitle, {
          opacity: 1,
          x: -20,
        });
        gsap.to(p5Span, {
          opacity: 1,
          stagger: 0.025,
        });
      } else if (scrollTop < page5offSetTop - 400 && p5textChange == 1) {
        p5textChange = 0;
        gsap.to(p5Span, {
          opacity: 0,
          duration: 0.1,
          y: 0,
        });
        gsap.to(p5TopTitle, {
          x: 0,
          opacity: 0,
        });
        gsap.to(p5MainpTitle, {
          x: 0,
          opacity: 0,
          duration: 0.1,
        });
      }
      stickyDesc(0, OneoffsetTop, 0, 0, p5RDescBoxListOne);
      stickyDesc(1, TwooffsetTop, 1, 1, p5RDescBoxListTwo);
      stickyDesc(2, ThreeoffsetTop, 2, 2, p5RDescBoxListThree);
    }

  }
  page5Scroll(); /* page5Scroll */


  /* ******* page6Scroll 영역 ******* */
  function page6Scroll() {

    //page6관련 변수선언
    let p6title = $(".p6title");
    let p6Cont1 = $(".p6Cont1");
    let p6Cont1Height = p6Cont1.height();
    let p6Cont1offsetTop = $(".p6Cont1").offset().top;
    let p6Cont2offsetTop = $(".p6Cont2").offset().top;
    let p6Cont2offHeight = $(".p6Cont2").height();
    let p6Contbottom = p6Cont1Height + p6Cont1offsetTop;
    let p6Cont2 = $(".p6Cont2");

    let p6titleRect = p6title[0].getBoundingClientRect();
    let p6Cont1Rect = p6Cont1[0].getBoundingClientRect();
    let p6Cont2Rect = p6Cont2[0].getBoundingClientRect();

    //p6title과 p6cont1 만날시 일어날 이벤트
    if ((p6titleRect.bottom >= p6Cont1Rect.top && p6titleRect.top <= p6Cont1Rect.bottom) ||
      (p6titleRect.bottom >= p6Cont2Rect.top && p6titleRect.top <= p6Cont2Rect.bottom)) {
      p6title.addClass("active");
    } else {
      p6title.removeClass("active");
    }

    //p6title gsap효과
    if (scrollTop >= p6Contbottom + 60 && p6TilteChange == 0) {
      p6TilteChange = 1;
      p6title.addClass("change");
      gsap.to(".p6sT1", {
        y: "-100%",
        ease: "back.out(3)",
      });
      gsap.to(".p6sT2", {
        y: "-100%",
        ease: "back.out(3)",
      });
    } else if (scrollTop < p6Contbottom + 60 && p6TilteChange == 1) {
      p6TilteChange = 0;
      p6title.removeClass("change");
      gsap.to(".p6sT1", {
        y: 0,
        ease: "back.out(3)",
      });
      gsap.to(".p6sT2", {
        y: 0,
        ease: "back.out(3)",
      });
    }

    let p6Cont2Start = p6Cont2offsetTop - window.innerHeight;
    let p6Cont2End = p6Cont2offsetTop + p6Cont2offHeight;

    //page6 YScrollPercent에따른 gsap효과
    let p6ContMove_percent = (scrollTop - p6Cont2Start) / (p6Cont2End - p6Cont2Start) * 100
    if (scrollTop > page6offSetTop - 300 && scrollTop < page7offSetTop) {
      gsap.to(".p6mainTitle", {
        x: 20,
        opacity: 1,
      });
      gsap.to(".p6subTitle>div .title", {
        x: 20,
        opacity: 1,
      });
      gsap.to(".p6subTitle>div .desc", {
        x: -20,
        opacity: 1,
      });
    } else if (
      scrollTop < page6offSetTop - 200 ||
      scrollTop > page7offSetTop - 1500
    ) {
      gsap.to(".p6mainTitle", {
        x: 0,
        opacity: 0,
      });
      gsap.to(".p6subTitle>div .title", {
        x: 0,
        opacity: 0,
      });
      gsap.to(".p6subTitle>div .desc", {
        x: 0,
        opacity: 0,
      });
    }

    let p6tl = gsap.timeline();
    console.log(p6ContMove_percent)
    //page6 Cont2 스크롤
    if (scrollTop > p6Cont2Start && scrollTop < p6Cont2End) {
      if (p6ContMove_percent > 10 && p6ContMove_percent < 20) {
        p6tl.to(".p6Cont2Title .top", {
          y: -30,
          opacity: 1
        })
        p6tl.to(".p6Cont2Title .center", {
          y: -30,
          opacity: 1
        }, "-=0.4")
        p6tl.to(".p6Cont2Title .bottom1 span", {
          opacity: 1,
          stagger: 0.007
        }, "-=0.4")
        p6tl.to(".p6Cont2Title .bottom2 span", {
          opacity: 1,
          stagger: 0.007
        }, "-=0.45")
      } else if (p6ContMove_percent < 5) {
        gsap.to(".p6Cont2Title .top", {
          y: 0,
          opacity: 0
        })
        gsap.to(".p6Cont2Title .center", {
          y: 0,
          opacity: 0
        })
        gsap.to(".p6Cont2Title .bottom1 span", {
          opacity: 0,
          duration: 0.2
        })
        gsap.to(".p6Cont2Title .bottom2 span", {
          opacity: 0,
          duration: 0.2
        })
      }

      if (p6ContMove_percent > 13 && p6ContMove_percent < 25) {
        p6tl.to(".p6ContCirlce .circle", {
          x: 30,
          ease: "back.out(3)",
          opacity: 1,
          stagger: 0.15
        })
      } else if (p6ContMove_percent < 10) {
        gsap.to(".p6ContCirlce .circle", {
          x: 0,
          opacity: 0,
          duration: 0.2
        })
      }

      if (p6ContMove_percent > 30 && p6ContMove_percent < 40) {
        gsap.to(".p6Cont2MainCont .top", {
          y: -50,
          opacity: 1
        })
      } else if (p6ContMove_percent < 30) {
        gsap.to(".p6Cont2MainCont .top", {
          y: 0,
          opacity: 0,
          duration: 0.2
        })
      }

      let p6txt = $(".p6Cont2MainCont .center ul li")
      let p6circle = $(".p6Cont2AbsolLine .p6abLineCircle")

      function systemStep(yStart, yEnd, idx, circleidx, xMove) {
        if (p6ContMove_percent > yStart && p6ContMove_percent < yEnd) {
          gsap.to(p6txt.eq(idx), {
            x: xMove,
            opacity: 1
          })
          p6circle.eq(circleidx).css({
            backgroundColor: "#ff0"
          });
        } else if (p6ContMove_percent <= yStart) {
          gsap.to(p6txt.eq(idx), {
            x: 0,
            opacity: 0
          })
          p6circle.eq(circleidx).css({
            backgroundColor: "#505050",
          });
        }

      }
      systemStep(40, 80, 0, 0, -15)
      systemStep(45, 80, 3, 1, 15)
      systemStep(50, 80, 4, 2, -15)
      systemStep(55, 80, 7, 3, 15)
      systemStep(60, 80, 8, 4, -15)
      systemStep(65, 80, 11, 5, 15)
      systemStep(70, 80, 12, 6, -15)


      /* systemStep(40,80,0,0,-15,"14.29%",0)
      systemStep(45,80,3,1,15,"28.58%","14.29%")
      systemStep(50,80,4,2,-15,"42.87%","28.58%")
      systemStep(55,80,7,3,15,"57.16%","42.87%")
      systemStep(60,80,8,4,-15,"71.45%","57.16%")
      systemStep(65,80,11,5,15,"85.74%","71.45%")
      systemStep(70,80,12,6,-15,"100%","85.74%") */

      //stsyem step단계


      if (p6ContMove_percent > 77 && p6ContMove_percent < 90) {
        gsap.to(".p6Cont2MainCont .bottom", {
          y: -50,
          opacity: 1,
        })
        p6circle.eq(7).css({
          backgroundColor: "#ff0"
        });
      } else if (p6ContMove_percent < 77) {
        gsap.to(".p6Cont2MainCont .bottom", {
          y: 0,
          opacity: 0,
          duration: 0.2,
        })
        p6circle.eq(7).css({
          backgroundColor: "#505050"
        });
      }

    }
  }
  page6Scroll(); /* page6Scroll */


  /* ******* page7Scroll 영역 ******* */
  function page7Scroll() {

    //page7관련 변수선언
    let p7Video = $("#p7VideoWrap");
    let page7Move = page7offSetTop - window.innerHeight;
    let p7ScrollVh = (scrollTop - page7Move) / window.innerHeight * 100


    //page7 viewPort에 따른 class추가
    if (p7ScrollVh > 0 && p7ScrollVh < 100) {
      if (p7ScrollVh >= 40 && p7ScrollVh < 60) {
        p7Video.removeClass();
        p7Video.addClass("firstWidth");
      } else if (p7ScrollVh >= 60 && p7ScrollVh < 70) {
        p7Video.removeClass();
        p7Video.addClass("secondWidth");
      } else if (p7ScrollVh >= 70 && p7ScrollVh < 80) {
        p7Video.removeClass();
        p7Video.addClass("thirdWidth");
      } else if (p7ScrollVh >= 80 && p7ScrollVh < 90) {
        p7Video.removeClass();
        p7Video.addClass("fourthWidth");
      }
    }

  }
  page7Scroll(); /* page6Scroll */


});