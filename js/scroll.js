//lenis 변수 선언
let lenis;

//lenis 초기스크롤 설정값
const initSmoothScrolling = () => {
	lenis = new Lenis({
		lerp: 0.1,
		smoothWheel: true ,
        ease:"linear",
        duration:2.2,
    easing:(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	});

//lenis 초기스크롤 설정값
	lenis.on('scroll', () => ScrollTrigger.update());

	const scrollFn = (time) => {
		lenis.raf(time); 

		requestAnimationFrame(scrollFn); 
	};
	requestAnimationFrame(scrollFn);
};

//lenis 함수 선언
initSmoothScrolling();

//---------------------------------------------

//canvas
function canvas() {
  const canvas = document.querySelector("#myCanvas");
  const context = canvas.getContext("2d"); 

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `./img22/1.jpg
    ./img22/2.jpg
    ./img22/3.jpg
    ./img22/4.jpg
    ./img22/5.jpg
    ./img22/6.jpg
    ./img22/7.jpg
    ./img22/8.jpg
    ./img22/9.jpg
    ./img22/10.jpg
    ./img22/11.jpg
    ./img22/12.jpg
    ./img22/13.jpg
    ./img22/14.jpg
    ./img22/15.jpg
    ./img22/16.jpg
    ./img22/17.jpg
    ./img22/18.jpg
    ./img22/19.jpg
    ./img22/20.jpg
    ./img22/21.jpg
    ./img22/22.jpg
    ./img22/23.jpg
    ./img22/24.jpg
    ./img22/25.jpg
    ./img22/26.jpg
    ./img22/27.jpg
    ./img22/28.jpg
    ./img22/29.jpg
    ./img22/30.jpg
    ./img22/31.jpg
    ./img22/32.jpg
    ./img22/33.jpg
    ./img22/34.jpg
    ./img22/35.jpg
    ./img22/36.jpg
    ./img22/37.jpg
    ./img22/38.jpg
    ./img22/39.jpg
    ./img22/40.jpg
    ./img22/41.jpg
    ./img22/42.jpg
    ./img22/43.jpg
    ./img22/44.jpg
    ./img22/45.jpg
    ./img22/46.jpg
    ./img22/47.jpg
    ./img22/48.jpg
    ./img22/49.jpg
    ./img22/50.jpg
    ./img22/51.jpg
    ./img22/52.jpg
    ./img22/53.jpg
    ./img22/54.jpg
    ./img22/55.jpg
    ./img22/56.jpg
    ./img22/57.jpg
    ./img22/58.jpg
    ./img22/59.jpg
    ./img22/60.jpg
    ./img22/61.jpg
    ./img22/62.jpg
    ./img22/63.jpg
    ./img22/64.jpg
    ./img22/65.jpg
    ./img22/66.jpg
    ./img22/67.jpg
    ./img22/68.jpg
    ./img22/69.jpg
    ./img22/70.jpg
    ./img22/71.jpg
    ./img22/72.jpg
    ./img22/73.jpg
    ./img22/74.jpg
    ./img22/75.jpg
    ./img22/76.jpg
    ./img22/77.jpg
    ./img22/78.jpg
    ./img22/79.jpg
    ./img22/80.jpg
    ./img22/81.jpg
    ./img22/82.jpg
    ./img22/83.jpg
    ./img22/84.jpg
    ./img22/85.jpg
    ./img22/86.jpg
    ./img22/87.jpg
    ./img22/88.jpg
    ./img22/89.jpg
    ./img22/90.jpg
    ./img22/91.jpg
    ./img22/92.jpg
    ./img22/93.jpg
    ./img22/94.jpg
    ./img22/95.jpg
    ./img22/96.jpg
    ./img22/97.jpg
    ./img22/98.jpg
    ./img22/99.jpg
    ./img22/100.jpg
    ./img22/101.jpg
    ./img22/102.jpg
    ./img22/103.jpg
    ./img22/104.jpg
    ./img22/105.jpg
    ./img22/106.jpg
    ./img22/107.jpg
    ./img22/108.jpg
    ./img22/109.jpg
    ./img22/110.jpg
    ./img22/111.jpg
    ./img22/112.jpg
    ./img22/113.jpg
    ./img22/114.jpg
    ./img22/115.jpg
    ./img22/116.jpg
    ./img22/117.jpg
    ./img22/118.jpg
    ./img22/119.jpg
    ./img22/120.jpg
    ./img22/121.jpg
    ./img22/122.jpg
    ./img22/123.jpg
    ./img22/124.jpg
    ./img22/125.jpg
    ./img22/126.jpg
    ./img22/127.jpg
    ./img22/128.jpg
    ./img22/129.jpg
    ./img22/130.jpg
    ./img22/131.jpg
    ./img22/132.jpg
    ./img22/133.jpg
    ./img22/134.jpg
    ./img22/135.jpg
    ./img22/136.jpg
    ./img22/137.jpg
    ./img22/138.jpg
    ./img22/139.jpg
    ./img22/140.jpg
    ./img22/141.jpg
    ./img22/142.jpg
    ./img22/143.jpg
    ./img22/144.jpg
    ./img22/145.jpg
    ./img22/146.jpg
    ./img22/147.jpg
    ./img22/148.jpg
    ./img22/149.jpg
    ./img22/150.jpg
    ./img22/151.jpg
    ./img22/152.jpg
    ./img22/153.jpg
    ./img22/154.jpg
    ./img22/155.jpg
    ./img22/156.jpg
    ./img22/157.jpg
    ./img22/158.jpg
    ./img22/159.jpg
    ./img22/160.jpg
    ./img22/161.jpg
    ./img22/162.jpg
    ./img22/163.jpg
    ./img22/164.jpg
    ./img22/165.jpg
    ./img22/166.jpg
    ./img22/167.jpg
    ./img22/168.jpg
    ./img22/169.jpg
    ./img22/170.jpg
    ./img22/171.jpg
    ./img22/172.jpg
    ./img22/173.jpg
    ./img22/174.jpg
    ./img22/175.jpg
    ./img22/176.jpg
    ./img22/177.jpg
    ./img22/178.jpg
    ./img22/179.jpg
    ./img22/180.jpg
    ./img22/181.jpg
    ./img22/182.jpg
    ./img22/183.jpg
    ./img22/184.jpg
    ./img22/185.jpg
    ./img22/186.jpg
    ./img22/187.jpg
    ./img22/188.jpg
    ./img22/189.jpg
    ./img22/190.jpg
    ./img22/191.jpg
    ./img22/192.jpg
    ./img22/193.jpg
    ./img22/194.jpg
    ./img22/195.jpg
    ./img22/196.jpg
    ./img22/197.jpg
    ./img22/198.jpg
    ./img22/199.jpg
    ./img22/200.jpg
    ./img22/201.jpg
    ./img22/202.jpg
    ./img22/203.jpg
./img22/204.jpg
./img22/205.jpg
./img22/206.jpg
./img22/207.jpg
./img22/208.jpg
./img22/209.jpg
./img22/210.jpg
./img22/211.jpg
./img22/212.jpg
./img22/213.jpg
./img22/214.jpg
./img22/215.jpg
./img22/216.jpg
./img22/217.jpg
./img22/218.jpg
./img22/219.jpg
./img22/220.jpg
./img22/221.jpg
./img22/222.jpg
./img22/223.jpg
./img22/224.jpg
./img22/225.jpg
./img22/226.jpg
./img22/227.jpg
./img22/228.jpg
./img22/229.jpg
./img22/230.jpg
./img22/231.jpg
./img22/232.jpg
./img22/233.jpg
./img22/234.jpg
./img22/235.jpg
./img22/236.jpg
./img22/237.jpg
./img22/238.jpg
./img22/239.jpg
./img22/240.jpg
./img22/241.jpg
./img22/242.jpg
./img22/243.jpg
./img22/244.jpg
./img22/245.jpg
./img22/246.jpg
./img22/247.jpg
./img22/248.jpg
./img22/249.jpg
./img22/250.jpg
./img22/251.jpg
./img22/252.jpg
./img22/253.jpg
./img22/254.jpg
./img22/255.jpg
./img22/256.jpg
./img22/257.jpg
./img22/258.jpg
./img22/259.jpg
./img22/260.jpg
./img22/261.jpg
./img22/262.jpg
./img22/263.jpg
./img22/264.jpg
./img22/265.jpg
./img22/266.jpg
./img22/267.jpg
./img22/268.jpg
./img22/269.jpg
./img22/270.jpg
./img22/271.jpg
./img22/272.jpg
./img22/273.jpg
./img22/274.jpg
./img22/275.jpg
./img22/276.jpg
./img22/277.jpg
./img22/278.jpg
./img22/279.jpg
./img22/280.jpg
./img22/281.jpg
./img22/282.jpg
./img22/283.jpg
./img22/284.jpg
./img22/285.jpg
./img22/286.jpg
./img22/287.jpg
./img22/288.jpg
./img22/289.jpg
./img22/290.jpg
./img22/291.jpg
./img22/292.jpg
./img22/293.jpg
./img22/294.jpg
./img22/295.jpg
./img22/296.jpg
./img22/297.jpg
./img22/298.jpg
./img22/299.jpg
./img22/300.jpg
./img22/301.jpg
./img22/302.jpg
./img22/303.jpg
./img22/304.jpg
./img22/305.jpg
./img22/306.jpg
./img22/307.jpg
./img22/308.jpg
./img22/309.jpg
./img22/310.jpg
./img22/311.jpg
./img22/312.jpg
./img22/313.jpg
./img22/314.jpg
./img22/315.jpg
./img22/316.jpg
./img22/317.jpg
./img22/318.jpg
./img22/319.jpg
./img22/320.jpg
./img22/321.jpg
./img22/322.jpg
./img22/323.jpg
./img22/324.jpg
./img22/325.jpg
./img22/326.jpg
./img22/327.jpg
./img22/328.jpg
./img22/329.jpg
./img22/330.jpg
./img22/331.jpg
./img22/332.jpg
./img22/333.jpg
./img22/334.jpg
./img22/335.jpg
./img22/336.jpg
./img22/337.jpg
./img22/338.jpg
./img22/339.jpg
./img22/340.jpg
./img22/341.jpg
./img22/342.jpg
./img22/343.jpg
./img22/344.jpg
./img22/345.jpg
./img22/346.jpg
./img22/347.jpg
./img22/348.jpg
./img22/349.jpg
./img22/350.jpg
./img22/351.jpg
./img22/352.jpg
./img22/353.jpg
./img22/354.jpg
./img22/355.jpg
./img22/356.jpg
./img22/357.jpg
./img22/358.jpg
./img22/359.jpg
./img22/360.jpg
./img22/361.jpg
./img22/362.jpg
./img22/363.jpg
./img22/364.jpg
./img22/365.jpg
./img22/366.jpg
./img22/367.jpg
./img22/368.jpg
./img22/369.jpg
./img22/370.jpg
./img22/371.jpg
./img22/372.jpg
./img22/373.jpg
./img22/374.jpg
./img22/375.jpg
./img22/376.jpg
./img22/377.jpg
./img22/378.jpg
./img22/379.jpg
./img22/380.jpg
./img22/381.jpg
./img22/382.jpg
./img22/383.jpg
./img22/384.jpg
./img22/385.jpg
./img22/386.jpg
./img22/387.jpg
./img22/388.jpg
./img22/389.jpg
./img22/390.jpg
./img22/391.jpg
./img22/392.jpg
./img22/393.jpg
./img22/394.jpg
./img22/395.jpg
./img22/396.jpg
./img22/397.jpg
./img22/398.jpg
./img22/399.jpg
./img22/400.jpg
./img22/401.jpg
./img22/402.jpg
./img22/403.jpg
./img22/404.jpg
./img22/405.jpg
./img22/406.jpg
./img22/407.jpg
./img22/408.jpg
./img22/409.jpg
./img22/410.jpg
./img22/411.jpg
./img22/412.jpg
./img22/413.jpg
./img22/414.jpg
./img22/415.jpg
./img22/416.jpg
./img22/417.jpg
./img22/418.jpg
./img22/419.jpg
./img22/420.jpg
./img22/421.jpg
./img22/422.jpg
./img22/423.jpg
./img22/424.jpg
./img22/425.jpg
./img22/426.jpg
./img22/427.jpg
./img22/428.jpg
./img22/429.jpg
./img22/430.jpg
./img22/431.jpg
./img22/432.jpg
./img22/433.jpg
./img22/434.jpg
./img22/435.jpg
./img22/436.jpg
./img22/437.jpg
./img22/438.jpg
./img22/439.jpg
./img22/440.jpg
./img22/441.jpg
./img22/442.jpg
./img22/443.jpg
./img22/444.jpg
./img22/445.jpg
./img22/446.jpg
./img22/447.jpg
./img22/448.jpg
./img22/449.jpg
./img22/450.jpg
./img22/451.jpg
./img22/452.jpg
./img22/453.jpg
./img22/454.jpg
./img22/455.jpg
./img22/456.jpg
./img22/457.jpg
./img22/458.jpg
./img22/459.jpg
./img22/460.jpg
./img22/461.jpg
./img22/462.jpg
./img22/463.jpg
./img22/464.jpg
./img22/465.jpg
./img22/466.jpg
./img22/467.jpg
./img22/468.jpg
./img22/469.jpg
./img22/470.jpg
./img22/471.jpg
./img22/472.jpg
./img22/473.jpg
./img22/474.jpg
./img22/475.jpg
./img22/476.jpg
./img22/477.jpg
./img22/478.jpg
./img22/479.jpg
./img22/480.jpg
./img22/481.jpg
./img22/482.jpg
./img22/483.jpg
./img22/484.jpg
./img22/485.jpg
./img22/486.jpg
./img22/487.jpg
./img22/488.jpg
./img22/489.jpg
./img22/490.jpg
./img22/491.jpg
./img22/492.jpg
./img22/493.jpg
./img22/494.jpg
./img22/495.jpg
./img22/496.jpg
./img22/497.jpg
./img22/498.jpg
./img22/499.jpg
./img22/500.jpg
./img22/501.jpg
./img22/502.jpg
./img22/503.jpg
./img22/504.jpg
./img22/505.jpg
./img22/506.jpg
./img22/507.jpg
./img22/508.jpg
./img22/509.jpg
./img22/510.jpg
./img22/511.jpg
./img22/512.jpg
./img22/513.jpg
./img22/514.jpg
./img22/515.jpg
./img22/516.jpg
./img22/517.jpg
./img22/518.jpg
./img22/519.jpg
./img22/520.jpg
./img22/521.jpg
./img22/522.jpg
./img22/523.jpg
./img22/524.jpg
./img22/525.jpg`;

 

    return data.split("\n")[index];
  }

  const frameCount = 525; //이미지전체갯수
  const images = [];
  const imageSeq = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image(); //img태그만들기
    img.src = files(i);
    images.push(img);
  }
  //console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //마지막 프레임의 index번호
    snap: "frame", //"frame"은 프레임 단위로 값을 맞추겠다는 의미
    ease: "none",
    scrollTrigger: {
      scrub: 0.15,
      trigger: ".page3_1",
      start: "top top",
      end: "600% top",
    },
    onUpdate: render, //gsap.to가 변할때마다 업데이트가 일어남
  });

  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    let canvas = ctx.canvas;
    let hRatio = canvas.width / img.width;
    let vRatio = canvas.height / img.height;

    //console.log(hRatio + "," + vRatio);

    //let ratio=Math.max(10, 20)//가장큰수를 찾음//20

    //이미지 500*500
    //넓은 화면일때 화면의 넓이가 1000 * 600 이라고 가정하면
    //hRatio =1000/500 =2  vRatio=600/500 = 1.2   ==>ratio=2

    //넓은 화면일때 화면의 넓이가 400 * 600 이라고 가정하면
    //hRatio =400/500 =0.8  vRatio=600/500 = 1.2   ==>ratio=1.2
    let ratio = Math.max(hRatio, vRatio);
    let centershift_x = (canvas.width - img.width * ratio) / 2;
    let centershift_y = (canvas.height - img.height * ratio) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height); //화면정리
    //canvas에 이미지를 표현할때 drawImage(이미지, sx, sy, swidth, sheight,dx, dy, dwidth, dheight)  //sx, sy, swidth --> 소스자체 //dx, dy, dwidth, dheight-->소스가 만들어진후 설정
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centershift_x,
      centershift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  //page3 진입시 pin효과
  ScrollTrigger.create({
    trigger: ".page3_1", //애니메이션이 시작될 요소
    pin: true, //스크롤하는 동안 트리거 요소 고정시킴
    start: "top top", //애니메이션 시작
    end: "600% top", //애니메이션 종료
    onEnter: function(){
        $(".page3").addClass("page3Start")
    },
    onLeave: function () {
        $(".page3").addClass("page3End");
        $(".page3").removeClass("page3Start");
      },
      
      onEnterBack: function () {
        $(".page3").removeClass("page3End");
        $(".page3").addClass("page3Start")
      },
      onLeaveBack: function () {
        $(".page3").removeClass("page3Start");
      },
      
  });
  
} //canvas()

canvas();
//---------------------
