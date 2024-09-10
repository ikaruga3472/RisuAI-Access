console.log("RisuAI Access: 활성화");
const targetMain = document.querySelector(".flex.bg-bg.w-full.h-full.max-w-100vw.text-textcolor");

if (targetMain) {
    console.log("RisuAI Access: 감지함");
}

const callback = function(mutationsList, observer) {
    for (let mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
              // 토글 인풋 보이게
              if (node.matches('.flex.items-center.space-x-2.cursor-pointer.text-textcolor.mr-2 input')) {
                  node.classList.remove("hidden");
              }
              // // NSFW 토글
              // else if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center')) {
              //     if (node.classList.contains('ring')) {
              //         node.ariaLabel = node.textContent + ": 켜짐. 근데 바꿔도 스크린리더가 반영을 못함";
              //     }
              //     else {
              //         node.ariaLabel = node.textContent + ": 꺼짐. 근데 바꿔도 스크린리더가 반영을 못함";
              //     }
              // }
              else if (node.matches('.flex.h-8.items-center')) { 
                  node.ariaLabel = '메뉴 열기';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-home')) { 
                  node.parentNode.ariaLabel = '홈';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-settings')) { 
                  node.parentNode.ariaLabel = '설정';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-shell')) { 
                  node.parentNode.ariaLabel = '플레이그라운드';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-layout-grid')) { 
                  node.parentNode.ariaLabel = '카탈로그';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-copy')) { 
                  node.parentNode.ariaLabel = '복사';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-pencil')) { 
                  node.parentNode.ariaLabel = '수정';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-volume-2')) { 
                  node.parentNode.ariaLabel = 'TTS';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-trash')) { 
                  node.parentNode.ariaLabel = '지우기';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-languages')) { 
                  if(node.nextSibling != "SPAN") {
                      node.parentNode.ariaLabel = '번역';
                  }
              }
              else if (node.matches('.lucide-icon.lucide.lucide-refresh-ccw')) { 
                  node.parentNode.ariaLabel = '리롤';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-arrow-left')) { 
                  node.parentNode.ariaLabel = '이전';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-arrow-right')) { 
                  node.parentNode.ariaLabel = '다음';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-folder-up')) { 
                  node.parentNode.ariaLabel = '열기';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-download')) { 
                  node.parentNode.ariaLabel = '다운로드';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-send')) { 
                  node.parentNode.ariaLabel = '전송';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-menu')) { 
                  node.parentNode.ariaLabel = '메뉴';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-mouse-pointer-square')) { 
                  node.parentNode.ariaLabel = '창 열기';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-user')) { 
                  if(node.nextSibling != "SPAN") {
                      node.parentNode.ariaLabel = '캐릭터';
                  }
              }
              else if (node.matches('.lucide-icon.lucide.lucide-smile')) { 
                  node.parentNode.ariaLabel = '디스플레이';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-book')) { 
                  node.parentNode.ariaLabel = '로어북';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-search')) { 
                  node.parentNode.ariaLabel = '검색';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-braces')) { 
                  node.parentNode.ariaLabel = '스크립트';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-activity')) { 
                  if(node.nextSibling != "SPAN") {
                      node.parentNode.ariaLabel = '고급';
                  }
              }
              else if (node.matches('.lucide-icon.lucide.lucide-plus')) { 
                  node.parentNode.ariaLabel = '추가';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-share-2')) { 
                  node.parentNode.ariaLabel = '공유';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-x')) { 
                  node.parentNode.ariaLabel = '취소';
              }
              else if (node.matches('.lucide-icon.lucide.lucide-x-circle')) { 
                  node.parentNode.ariaLabel = '닫기';
              }
              else if (node.matches('.flex.flex-col.items-center.space-y-2.px-2 button')) {
                  node.ariaLabel = '봇 추가';
              }
              // 기타 토글
              // NSFW 토글
              if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center.items-center')) {
                node.ariaLabel = "";
              }
              if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center.items-center.ring')) {
                node.ariaLabel = node.textContent + ". 켜짐";
              }
              // 모듈 토글
              if (node.matches('text-textcolor2.hover\\:text-green-500.mr-2.cursor-pointer')) {
                node.ariaLabel = "모듈 꺼짐";
              }
              if (node.matches('.mr-2.cursor-pointer.text-blue-500')) {
                node.ariaLabel = node.textContent + "모듈 켜짐";
              }
          }
        })
      }
      // 기타 토글 변경 시
      if(mutation.type === 'attributes' && mutation.attributeName === 'class') {
        let node = mutation.target;
        // NSFW 토글
        if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center.items-center')) {
          node.ariaLabel = "";
        }
        if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center.items-center.ring')) {
          node.ariaLabel = node.textContent + ". 켜짐";
        }
        // 모듈 토글
        if (node.matches('text-textcolor2.hover\\:text-green-500.mr-2.cursor-pointer')) {
          node.ariaLabel = "모듈 꺼짐";
        }
        if (node.matches('.mr-2.cursor-pointer.text-blue-500')) {
          node.ariaLabel = node.textContent + "모듈 켜짐";
        }
      }
    };
}
  // 설정 및 옵저버 인스턴스
  const config = { childList: true, subtree: true, attributes: true};
  const observer = new MutationObserver(callback);
  observer.observe(targetMain, config);
