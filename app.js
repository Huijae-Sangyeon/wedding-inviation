// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

var copytoclipboard = function (val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
};
var inappbrowserout = function () {
  copytoclipboard(window.location.href);
  alert(
    'URL주소가 복사되었습니다.\n\nSafari가 열리면 주소창을 길게 터치한 뒤, "붙여놓기 및 이동"를 누르면 정상적으로 이용하실 수 있습니다.'
  );
  location.href = "x-web-search://?";
};
window.onload = function () {
  if (
    navigator.userAgent.match(
      /inapp|NAVER|KAKAOTALK|Snapchat|Line|WirtschaftsWoche|Thunderbird|Instagram|everytimeApp|WhatsApp|Electron|wadiz|AliApp|zumapp|iPhone(.*)Whale|Android(.*)Whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|SamsungBrowser\/[^1]/i
    )
  ) {
    if (navigator.userAgent.match(/iPhone|iPad/i)) {
      //모바일대응뷰포트강제설정
      var mobile = document.createElement("meta");
      mobile.name = "viewport";
      mobile.content =
        "width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, minimal-ui";
      document.getElementsByTagName("head")[0].appendChild(mobile);
      //노토산스폰트강제설정
      var fonts = document.createElement("link");
      fonts.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap";
      document.getElementsByTagName("head")[0].appendChild(fonts);
      document.body.innerHTML =
        "<style>body{margin:0;padding:0;font-family: 'Noto Sans KR', sans-serif;overflow: hidden;height: 100%;}</style><h2 style='padding-top:50px; text-align:center;font-family: 'Noto Sans KR', sans-serif;'>인앱브라우저 호환문제로 인해<br />Safari로 접속해야합니다.</h2><article style='text-align:center; font-size:17px; word-break:keep-all;color:#999;'>아래 버튼을 눌러 Safari를 실행해주세요<br />Safari가 열리면, 주소창을 길게 터치한 뒤,<br />'붙여놓기 및 이동'을 누르면<br />정상적으로 이용할 수 있습니다.<br /><br /><button onclick='inappbrowserout();' style='min-width:180px;margin-top:10px;height:54px;font-weight: 700;background-color:#31408E;color:#fff;border-radius: 4px;font-size:17px;border:0;'>Safari로 열기</button></article><img style='width:70%;margin:50px 15% 0 15%' src='https://tistory3.daumcdn.net/tistory/1893869/skin/images/inappbrowserout.jpeg' />";
    } else {
      location.href =
        "intent://" +
        location.href.replace(/https?:\/\//i, "") +
        "#Intent;scheme=http;package=com.android.chrome;end";
    }
  }
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  }),
    { threshold: [0.3, 0.5], rootMargin: "-50px" };
});

const hiddenElements = document.querySelectorAll(".hidden");
const letterSentenceElements = document.querySelectorAll(".letter_sentence");
hiddenElements.forEach((el) => observer.observe(el));
letterSentenceElements.forEach((el) => observer.observe(el));

jQuery("#nanogallery").nanogallery2({
  itemsBaseURL: "https://raw.githubusercontent.com/Huijae-Sangyeon/wedding-invitation/main/img/gallery/",

  items: [
    { src: "forest01.jpg", srct: "forest01.jpg" },
    { src: "forest02.jpg", srct: "forest02.jpg" },
    { src: "forest03.jpg", srct: "forest03.jpg" },
    { src: "forest05.jpg", srct: "forest05.jpg" },
    { src: "forest06.jpeg", srct: "forest06.jpeg" },
    { src: "forest07.jpg", srct: "forest07.jpg" },

    { src: "studio01.jpg", srct: "studio01.jpg" },
    { src: "studio02.jpg", srct: "studio02.jpg" },
    { src: "studio03.jpg", srct: "studio03.jpg" },
    { src: "studio04.jpg", srct: "studio04.jpg" },
    { src: "studio05.jpg", srct: "studio05.jpg" },
    { src: "studio06.jpg", srct: "studio06.jpg" },
    { src: "studio07.jpg", srct: "studio07.jpg" },

    { src: "field01.jpg", srct: "field01.jpg" },
    { src: "field02.jpg", srct: "field02.jpg" },
    { src: "field03.jpg", srct: "field03.jpg" },
    { src: "field04.jpg", srct: "field04.jpg" },
    { src: "field05.jpg", srct: "field05.jpg" },
    { src: "field06.jpg", srct: "field06.jpg" },
    { src: "field07.jpg", srct: "field07.jpg" },
    { src: "field09.jpg", srct: "field09.jpg" },

    { src: "door01.jpg", srct: "door01.jpg" },
    { src: "door02.jpg", srct: "door02.jpg" },

    { src: "sea01.jpg", srct: "sea01.jpg" },
    { src: "sea02.jpg", srct: "sea02.jpg" },
    { src: "sea03.jpg", srct: "sea03.jpg" },
    { src: "sea04.jpg", srct: "sea04.jpg" },
    { src: "sea05.jpg", srct: "sea05.jpg" },
    { src: "sea06.jpg", srct: "sea06.jpg" },

    { src: "school01.jpg", srct: "school01.jpg" },
    { src: "school02.jpg", srct: "school02.jpg" },
    { src: "school03.jpg", srct: "school03.jpg" },
    { src: "school04.jpg", srct: "school04.jpg" },
    { src: "school05.jpg", srct: "school05.jpg" },
    { src: "school06.jpg", srct: "school06.jpg" },
    { src: "school07.jpg", srct: "school07.jpg" },
    { src: "school08.jpg", srct: "school08.jpg" },
    { src: "school09.jpg", srct: "school09.jpg" },
    { src: "school10.jpg", srct: "school10.jpg" },
    { src: "school11.jpg", srct: "school11.jpg" },
    { src: "school12.jpg", srct: "school12.jpg" },
    { src: "school13.jpg", srct: "school13.jpg" },
    { src: "school14.jpg", srct: "school14.jpg" },
    { src: "school15.jpg", srct: "school15.jpg" },
    { src: "school16.jpg", srct: "school16.jpg" },
    { src: "school17.jpg", srct: "school17.jpg" },
    { src: "school18.jpg", srct: "school18.jpg" },
  ],

  // // GALLERY AND THUMBNAIL LAYOUT
  galleryMosaic: [
    // default layout
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 2, c: 4, r: 1 },
    { w: 2, h: 1, c: 5, r: 1 },
    { w: 2, h: 2, c: 5, r: 2 },
    { w: 1, h: 1, c: 4, r: 3 },
    { w: 2, h: 1, c: 2, r: 3 },
    { w: 1, h: 2, c: 1, r: 3 },
    { w: 1, h: 1, c: 2, r: 4 },
    { w: 2, h: 1, c: 3, r: 4 },
    { w: 1, h: 1, c: 5, r: 4 },
    { w: 1, h: 1, c: 6, r: 4 },
  ],
  galleryMosaicXS: [
    // layout for XS width
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 2, c: 1, r: 3 },
    { w: 2, h: 1, c: 2, r: 3 },
    { w: 1, h: 1, c: 2, r: 4 },
    { w: 1, h: 1, c: 3, r: 4 },
  ],
  galleryMosaicSM: [
    // layout for SM width
    { w: 2, h: 2, c: 1, r: 1 },
    { w: 1, h: 1, c: 3, r: 1 },
    { w: 1, h: 1, c: 3, r: 2 },
    { w: 1, h: 2, c: 1, r: 3 },
    { w: 2, h: 1, c: 2, r: 3 },
    { w: 1, h: 1, c: 2, r: 4 },
    { w: 1, h: 1, c: 3, r: 4 },
  ],
  galleryMaxRows: 2,
  galleryDisplayMode: "rows",
  //   gallerySorting: "random",
  thumbnailDisplayOrder: "random",

  thumbnailHeight: vh > vw ? vh * 12.5 : vh * 25,
  thumbnailWidth: vw * 33,
  thumbnailAlignment: "scaled",
  thumbnailGutterWidth: 0,
  thumbnailGutterHeight: 0,
  thumbnailBorderHorizontal: 0,
  thumbnailBorderVertical: 0,

  thumbnailToolbarImage: null,
  thumbnailToolbarAlbum: null,
  thumbnailLabel: { display: false },

  // DISPLAY ANIMATION
  // for gallery
  galleryDisplayTransitionDuration: 1500,
  // for thumbnails
  thumbnailDisplayTransition: "imageSlideUp",
  thumbnailDisplayTransitionDuration: 1200,
  thumbnailDisplayTransitionEasing: "easeInOutQuint",
  thumbnailDisplayInterval: 60,

  // THUMBNAIL HOVER ANIMATION
  thumbnailBuildInit2: "image_scale_1.15",
  thumbnailHoverEffect2: "thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00",
  touchAnimation: true,
  touchAutoOpenDelay: 500,

  // LIGHTBOX
  viewerToolbar: { display: false },
  viewerTools: {
    topLeft: "label",
    topRight:
      "shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton",
  },

  // GALLERY THEME
  galleryTheme: {
    thumbnail: { background: "#111" },
  },

  // DEEP LINKING
  locationHash: true,
});
