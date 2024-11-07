console.log("RisuAI Access: 활성화");
const targetMain = document.querySelector(".flex.bg-bg.w-full.h-full.max-w-100vw.text-textcolor");

if (targetMain) {
    console.log("RisuAI Access: 감지함");
}

function addAriAll(items, label) {
  items.forEach(element => {
    element.ariaLabel = element.textContent + label;
  });
}

function setAria(item, label) {
  if(item) {
    item.ariaLabel = label;
  }
}

const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    // 전환
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // 커스텀 토글류 보이게
      document.querySelectorAll('.flex.items-center.space-x-2.cursor-pointer.text-textcolor.mr-2 input').forEach(e => {
        e.classList.remove('hidden');
      });
      // 메뉴
      setAria(document.querySelector('.flex.h-8.items-center'), '메뉴 열기');
      setAria(document.querySelector('.lucide-icon.lucide.lucide-home'), '홈');
      setAria(document.querySelector('.lucide-icon.lucide.lucide-settings'), '설정');
      setAria(document.querySelector('.lucide-icon.lucide.lucide-shell'), '플레이그라운드');
      setAria(document.querySelector('.lucide-icon.lucide.lucide-layout-grid'), '카탈로그');
      setAria(document.querySelector('.flex.flex-col.items-center.space-y-2.px-2 button'), '봇 추가');

      // 아이콘
      var icons = document.querySelectorAll('.lucide-icon.lucide');
      // 설정 쪽 메뉴 제외
      icons = Array.from(icons).filter((e) => e.nextSibling != "SPAN");
      icons.forEach(e => {
        if(e.classList.contains('lucide-copy')) {
          e.ariaLabel = '복사';
        }
        else if(e.classList.contains('lucide-pencil')) {
          e.ariaLabel = '수정';
        }
        else if(e.classList.contains('lucide-volume-2')) {
          e.ariaLabel = 'TTS';
        }
        else if(e.classList.contains('lucide-trash')) {
          e.ariaLabel = '삭제';
        }
        else if(e.classList.contains('lucide-languages')) {
          e.ariaLabel = '번역';
        }
        else if(e.classList.contains('lucide-refresh-ccw')) {
          e.ariaLabel = '리롤';
        }
        else if(e.classList.contains('lucide-arrow-left')) {
          e.ariaLabel = '왼쪽 화살표';
        }
        else if(e.classList.contains('lucide-arrow-right')) {
          e.ariaLabel = '오른쪽 화살표';
        }
        else if(e.classList.contains('lucide-folder-up')) {
          e.ariaLabel = '열기';
        }
        else if(e.classList.contains('lucide-download')) {
          e.ariaLabel = '다운로드';
        }
        else if(e.classList.contains('lucide-send')) {
          e.ariaLabel = '보내기';
        }
        else if(e.classList.contains('lucide-menu')) {
          e.ariaLabel = '메뉴';
        }
        else if(e.classList.contains('lucide-mouse-pointer-square')) {
          e.ariaLabel = '창 열기';
        }
        else if(e.classList.contains('lucide-user')) {
          e.ariaLabel = '캐릭터';
        }
        else if(e.classList.contains('lucide-smile')) {
          e.ariaLabel = '디스플레이';
        }
        else if(e.classList.contains('lucide-book')) {
          e.ariaLabel = '로어북';
        }
        else if(e.classList.contains('lucide-search')) {
          e.ariaLabel = '검색';
        }
        else if(e.classList.contains('lucide-braces')) {
          e.ariaLabel = '스크립트';
        }
        else if(e.classList.contains('lucide-activity')) {
          e.ariaLabel = '고급';
        }
        else if(e.classList.contains('lucide-plus')) {
          e.ariaLabel = '추가';
        }
        else if(e.classList.contains('lucide-share-2')) {
          e.ariaLabel = '공유';
        }
        else if(e.classList.contains('lucide-x')) {
          e.ariaLabel = '취소';
        }
        else if(e.classList.contains('lucide-x-circle')) {
          e.ariaLabel = '닫기';
        }
        else if(e.classList.contains('lucide-wrench')) {
          e.ariaLabel = '개발자도구';
        }
      });


      // else if (node.matches('.lucide-icon.lucide.lucide-languages')) { 
      //     if(node.nextSibling != "SPAN") {
      //         node.parentNode.ariaLabel = '번역';
      //     }
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-refresh-ccw')) { 
      //     node.parentNode.ariaLabel = '리롤';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-arrow-left')) { 
      //     node.parentNode.ariaLabel = '이전';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-arrow-right')) { 
      //     node.parentNode.ariaLabel = '다음';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-folder-up')) { 
      //     node.parentNode.ariaLabel = '열기';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-download')) { 
      //     node.parentNode.ariaLabel = '다운로드';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-send')) { 
      //     node.parentNode.ariaLabel = '전송';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-menu')) { 
      //     node.parentNode.ariaLabel = '메뉴';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-mouse-pointer-square')) { 
      //     node.parentNode.ariaLabel = '창 열기';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-user')) { 
      //     if(node.nextSibling != "SPAN") {
      //         node.parentNode.ariaLabel = '캐릭터';
      //     }
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-smile')) { 
      //     node.parentNode.ariaLabel = '디스플레이';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-book')) { 
      //     node.parentNode.ariaLabel = '로어북';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-search')) { 
      //     node.parentNode.ariaLabel = '검색';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-braces')) { 
      //     node.parentNode.ariaLabel = '스크립트';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-activity')) { 
      //     if(node.nextSibling != "SPAN") {
      //         node.parentNode.ariaLabel = '고급';
      //     }
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-plus')) { 
      //     node.parentNode.ariaLabel = '추가';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-share-2')) { 
      //     node.parentNode.ariaLabel = '공유';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-x')) { 
      //     node.parentNode.ariaLabel = '취소';
      // }
      // else if (node.matches('.lucide-icon.lucide.lucide-x-circle')) { 
      //     node.parentNode.ariaLabel = '닫기';
      // }
      // else if (node.matches('.flex.flex-col.items-center.space-y-2.px-2 button')) {
      //     node.ariaLabel = '봇 추가';
      // }
      // 렐름 토글
      addAriAll(document.querySelectorAll('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center.items-center.ring'), '활성화됨');
      // 글로벌 활성화
      addAriAll(document.querySelectorAll('.mr-2.cursor-pointer.text-blue-500'), '활성화됨');

    }
    // 어트리뷰트 실시간 변경 
    if(mutation.type === 'attributes' && mutation.attributeName === 'class') {
      let node = mutation.target;
      // 렐름 토글
      if (node.classList.contains('ring')) {
      node.ariaLabel = node.textContent + ". 켜짐";
      }
      else {
        node.ariaLabel = "";
      }
      // 글로벌 활성화
      if (node.classList.contains('text-blue-500')) {
        node.ariaLabel = node.ariaLabel + "활성화됨";
      }
      else {
        node.ariaLabel = "";
      }
    }
  }
};

// 설정 및 옵저버 인스턴스
const config = { childList: true, subtree: true, attributes: true};
const observer = new MutationObserver(callback);
observer.observe(targetMain, config);
