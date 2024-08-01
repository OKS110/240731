$(function(){
// ==================전구============
    $(".layerPopup").mouseenter( function(){
        $("#popup").fadeIn(50);
    });
    $(".layerPopup").mouseleave( function(){
        $("#popup").fadeOut(50);
        // 0.5s동안 팝업창 나타나고 사라지기
    });



// =================헤더 리스트 mouseenter=================
    $(".head_text li:nth-child(1)").mouseenter( function(){
        $(".headerPopup1").fadeIn(50);
    });
    $(".head_text li:nth-child(1)").mouseleave( function(){
        $(".headerPopup1").fadeOut(50);
    });

    $(".head_text li:nth-child(2)").mouseenter( function(){
        $(".headerPopup2").fadeIn(50);
    });
    $(".head_text li:nth-child(2)").mouseleave( function(){
        $(".headerPopup2").fadeOut(50);
    });


    $(".head_text li:nth-child(3)").mouseenter( function(){
        $(".headerPopup3").fadeIn(50);
    });
    $(".head_text li:nth-child(3)").mouseleave( function(){
        $(".headerPopup3").fadeOut(50);
    });


    $(".head_text li:nth-child(4)").mouseenter( function(){
        $(".headerPopup4").fadeIn(50);
    });
    $(".head_text li:nth-child(4)").mouseleave( function(){
        $(".headerPopup4").fadeOut(50);
    });
    $(".head_text li:nth-child(5)").mouseenter( function(){
        $(".headerPopup5").fadeIn(50);
    });
    $(".head_text li:nth-child(5)").mouseleave( function(){
        $(".headerPopup5").fadeOut(50);
    });     // 0.5s동안 팝업창 나타나고 사라지기






    // 헤더 메뉴에 mouseenter할 때 색, 글자 굵기 변화
    $(".head_text li").mouseenter(function(){
   

        $(this).css({
            "color":"#000",
            "font-weight":"bold"
        });
        $(this).siblings().css({
            "color":"#ddd",
            "font-weight":"bold"
        });
    });
    $(".head_text li").mouseleave(function(){
 

        $(this).css({
            "color":"#000",
            "font-weight":"normal"
        });
        $(this).siblings().css({
            "color":"#000",
            "font-weight":"normal"
        });
    });

// =============================================
// =============================================
// =============================================
// =============================================
// ===============================================================================


// ====================================토글=========================================
// 메인 pc버전 - kakao!mpact / 기부에 함께 해주신 착한 마음들 칸
$(".s1_box2_1_1 a").on("click",function(){

    $('.s1_box2_1_1').addClass('off')
    .siblings().removeClass('off');
});

$(".s1_box2_1_2 a").on("click",function(){

    $('.s1_box2_1_2').addClass('off')
    .siblings().removeClass('off');
});


// ===============================슬라이드 keyframe (pc) ======================================
    $(function(){
        const imgSlide = document.querySelector(".imgSlide");

    // 복제
        const clone = imgSlide.cloneNode(true);

    // 복제본 추가
        document.querySelector(".slideWrap").appendChild(clone);

    // 원본, 복제본 위치 지정
        document.querySelector(".imgSlide").offsetWidth + "px";

    // 클래스 할당
        imgSlide.classList.add("original");
        clone.classList.add("clone");
    });
        // 슬라이드 keyframe(pc) 에서 마우스를 올렸을 때 재생버튼 변화
    $(".slideWrap").mouseenter(function(){

        $('.s2h_right img').css({
            "content": "url(./icons/pausebtn.svg)"
            });
        });
        $(".slideWrap").mouseleave(function(){

        $('.s2h_right img').css({
            "content": ""
            // 원상태 복구
            });
        });


        // ==================================section6 아이콘 이미지 전환=================================

        var num = 0; // 현재 슬라이드 번호
        var slideCount = 3; // 슬라이드 총 개수
        var $slides = $('.slide-wrapper li'); // 모든 슬라이드
        var $slides2 = $('.slide-wrapper2 li'); // 모든 슬라이드
        var $slides3 = $('.slide-wrapper3 li'); // 모든 슬라이드
        var $buttons = $('.buttons .btn'); // 모든 버튼
        var slideInterval = 1000; // 2초 - 전환 간격

        // 슬라이드 페이드 인아웃 이동함수
        // 현재 슬라이드 0에서 1씩 증가시킴
        function slideMove(){
            var nextNum = (num + 1) % slideCount;
            $slides.eq(num).fadeOut(100); //첫 번째 요소 사라짐
            $slides.eq(nextNum).fadeIn(100); //다음 슬라이드 나타남
            $slides2.eq(num).fadeOut(100); //첫 번째 요소 사라짐
            $slides2.eq(nextNum).fadeIn(100); //다음 슬라이드 나타남
            $slides3.eq(num).fadeOut(100); //첫 번째 요소 사라짐
            $slides3.eq(nextNum).fadeIn(100); //다음 슬라이드 나타남
            $buttons.removeClass('active'); // 모든 버튼에 액티브 클래스 제거
            $buttons.eq(nextNum).addClass('active'); //클릭한 버튼에 추가
            num = nextNum; // 업데이트 - num 변수에 다음 슬라이드 순서 저장하여 업데이트
        }
        // 슬라이드 이동 타이머 설정
        // 타이머 변수 만들어 setInterval로 반복실행
        // 주어진 시간 2초마다 slideMove 함수를 반복실행
        var timer = setInterval(slideMove, slideInterval);

        // 버튼 클릭 이벤트
        $buttons.click(function (event){
                event.preventDefault(); // 클릭 시 링크전환, 폼 제출 등을 차단
                clearInterval(timer); // 기본 동작(타이머) 중단
                // 클릭된 버튼의 슬라이드 번호
                var newSlide = $(this).data('slide') // $(this) => $buttons
        // if문으로 현재 슬라이드와 새로 클릭된 버튼이 가리키는
        // 슬라이드가 다를때만 작업수행
                if (newSlide !== num) {
                    // 현재의 슬라이드 사라지게 함
                    $slides.eq(num).fadeOut(100);
                    $slides.eq(newSlide).fadeIn(100); //새슬라이드 나타남
                    $slides2.eq(num).fadeOut(100);
                    $slides2.eq(newSlide).fadeIn(100); //새슬라이드 나타남
                    $slides3.eq(num).fadeOut(100);
                    $slides3.eq(newSlide).fadeIn(100); //새슬라이드 나타남
                    $buttons.removeClass('active');
                    $buttons.eq(newSlide).addClass('active');
                    // 클릭된 버튼에 액티브 추가
                    num = newSlide; //현재 슬라이드 번호 업데이트
                    // 슬라이드 이동 타이머 재설정
                    timer = setInterval(slideMove, slideInterval);
                }
            });
});
    //  ==============================================================


// ====================================================슬라이드 모바일 버전======================================================
$(function () {
    // 박스 요소들을 선택하여 $boxes 변수에 저장
    var $boxes = $('.box');
    
    // 박스의 이동 속도를 설정
    var speed = .5;
    
    // 애니메이션이 일시 정지 상태인지 여부를 나타내는 변수
    var isPaused = false;
    
    // 컨테이너의 너비를 저장하는 변수
    var containerWidth = $('#container').width();

    /**
     * 박스의 초기 위치를 설정하는 함수
     */
    function setInitialPositions() {
        // 각 박스의 너비와 여백을 포함한 전체 너비를 계산
        var boxWidth = $('.box').outerWidth(true);
        
        // 각 박스의 위치를 설정
        $boxes.each(function (index) {
            // left 속성을 사용하여 박스의 초기 위치를 설정
            $(this).css('left', -boxWidth + (boxWidth + 10) * index + 'px');
        });
    }

    // 페이지 로드 시 박스의 초기 위치를 설정
    setInitialPositions();

    /**
     * 박스의 애니메이션을 처리하는 함수 */
    function animate() {
        if (!isPaused) {
            // 각 박스에 대해 애니메이션을 적용
            $boxes.each(function () {
                var $this = $(this);
                
                // 현재 박스의 left 값을 가져오고, 속도를 더해 새로운 위치를 계산
                var left = parseFloat($this.css('left')) + speed;
                
                // 박스가 화면의 오른쪽을 넘어가면 위치를 초기화
                if (left > containerWidth) {
                    left = -$this.outerWidth(true); // 박스 너비와 여백을 고려하여 화면 왼쪽 밖으로 이동
                }
                
                // 박스의 새로운 left 위치를 CSS로 설정
                $this.css('left', left + 'px');
            });
        }
        
        // 다음 프레임을 요청하여 애니메이션을 계속 실행
        requestAnimationFrame(animate);
    }

    /**
     * 박스에 마우스가 올려졌을 때 애니메이션을 일시 정지하고, 마우스가 벗어났을 때 재개
     */
    $boxes.hover(
        function () {
            isPaused = true; // 마우스가 올려졌을 때 애니메이션 일시 정지
        },
        function () {
            isPaused = false; // 마우스가 벗어났을 때 애니메이션 재개
        }
    );

    /**
     * 윈도우 크기가 변경될 때 박스의 위치를 다시 설정
     */
    $(window).resize(function () {
        containerWidth = $('#container').width(); // 컨테이너의 새로운 너비를 계산
        setInitialPositions(); // 박스의 위치를 다시 설정
    });

    // 애니메이션 시작
    animate();


// =============================================슬라이드 안에 마우스 올렸을 때 재생버튼 변화==========================================
    $boxes.mouseenter(function(){
        // 마우스를 올렸을 때
        $('.playBtn img').css({
            "content": "url(./icons/pausebtn_m.svg)"
            // 이미지 변화
            });
        });

        $boxes.mouseleave(function(){
            // 마우스를 땠을 때
        $('.playBtn img').css({
            "content": ""
            // 이미지 복구
            });
        });
});

// =========================================================================================================================
// =========================================================================================================================
// =========================================================================================================================






// ===================================================푸터 아코디언(모바일)==================================================================================================
$(function(){
    var allDt = $("dl.accordion dt");
    var allDd = $("dl.accordion dd");
    allDd.slideUp(100); // 0.1초

    allDt.click(function(){
        var clickDt = $(this);
        var choiceDd = clickDt.next();
        if(choiceDd.css("display")=="none"){
            // allDd.slideUp(100); //모든 내용 숨김
            choiceDd.slideDown(100); //클릭한 제목의 다음 요소 내용펼침
        }else{
            choiceDd.slideUp(100); //열려져있을때는 닫아줌
        }
    });
})



// ================================================모바일 햄버거 아이콘 클릭 시 나타나는 메뉴=========================================================
$(function () {
    // jQuery 문서 준비 이벤트
    // DOM이 완전히 로드되었을 때 실행될 코드를 정의
    // $(function() {})은 $(document).ready(function() {})와 같은 역할을 함

    var $toggleButton = $('#toggle-button'); // 'toggle-button' ID를 가진 요소를 jQuery 객체로 참조
    var $sideMenu = $('#side-menu'); // 'side-menu' ID를 가진 요소를 jQuery 객체로 참조
    var $closeButton = $('#close-button'); // 'close-button' ID를 가진 요소를 jQuery 객체로 참조

    // 'toggle-button'이 클릭되었을 때 사이드 메뉴 표시
    $toggleButton.on('click', function () {
        // 'side-menu'에 'show' 클래스를 추가하여 메뉴를 표시함
        $sideMenu.addClass('show');
    });

    // 'close-button'이 클릭되었을 때 사이드 메뉴 숨김
    $closeButton.on('click', function () {
        // 'side-menu'에서 'show' 클래스를 제거하여 메뉴를 숨김
        $sideMenu.removeClass('show');
    });

    // 문서의 아무 곳이나 클릭되었을 때 사이드 메뉴 숨김
    $(document).on('click', function (event) {
        // 클릭된 요소(event.target)가 'side-menu' 내부나 'toggle-button' 내부가 아닐 경우
        if (!$sideMenu.is(event.target) && $sideMenu.has(event.target).length === 0 &&
            !$toggleButton.is(event.target) && $toggleButton.has(event.target).length === 0) {
            // 'side-menu'에서 'show' 클래스를 제거하여 메뉴를 숨김
            $sideMenu.removeClass('show');
        }
    });

    // 각 이벤트 핸들러의 설명:
    // 1. $toggleButton.on('click', ...): 사용자가 토글 버튼을 클릭하면, 사이드 메뉴가 화면에 표시됩니다.
    // 2. $closeButton.on('click', ...): 사용자가 닫기 버튼을 클릭하면, 사이드 메뉴가 화면에서 사라집니다.
    // 3. $(document).on('click', ...): 사용자가 사이드 메뉴나 토글 버튼 외부를 클릭하면, 사이드 메뉴가 화면에서 사라집니다.
});