console.log("실행했음");
const targetMain = document.querySelector(".flex.bg-bg.w-full.h-full.max-w-100vw.text-textcolor");

if (targetMain) {
    console.log("감지했음");
}

const callback = function(mutationsList, observer) {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                // 토글 인풋 보이게
                if (node.matches('.flex.items-center.space-x-2.cursor-pointer.text-textcolor.mr-2 input')) {
                    node.classList.remove("hidden");
                }
                // NSFW 토글
                else if (node.matches('.bg-darkbg.p-2.rounded-lg.ml-2.flex.justify-center')) {
                    if (node.classList.contains('ring')) {
                        node.ariaLabel = node.textContent + ": 켜짐. 근데 바꿔도 스크린리더가 반영을 못함";
                    }
                    else {
                        node.ariaLabel = node.textContent + ": 꺼짐. 근데 바꿔도 스크린리더가 반영을 못함";
                    }
                }
                else if (node.matches('.flex.h-8.items-center')) { 
                    node.textContent = '메뉴 열기';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-home')) { 
                    node.parentNode.textContent = '홈';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-settings')) { 
                    node.parentNode.textContent = '설정';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-shell')) { 
                    node.parentNode.textContent = '플레이그라운드';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-layout-grid')) { 
                    node.parentNode.textContent = '카탈로그';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-copy')) { 
                    node.parentNode.textContent = '복사';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-pencil')) { 
                    node.parentNode.textContent = '수정';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-volume-2')) { 
                    node.parentNode.textContent = 'TTS';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-trash')) { 
                    node.parentNode.textContent = '지우기';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-languages')) { 
                    node.parentNode.textContent = '번역';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-refresh-ccw')) { 
                    node.parentNode.textContent = '리롤';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-arrow-left')) { 
                    node.parentNode.textContent = '이전';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-arrow-right')) { 
                    node.parentNode.textContent = '다음';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-folder-up')) { 
                    node.parentNode.textContent = '열기';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-download')) { 
                    node.parentNode.textContent = '다운로드';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-send')) { 
                    node.parentNode.textContent = '전송';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-menu')) { 
                    node.parentNode.textContent = '메뉴';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-mouse-pointer-square')) { 
                    node.parentNode.textContent = '창 열기';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-user')) { 
                    node.parentNode.textContent = '캐릭터';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-smile')) { 
                    node.parentNode.textContent = '디스플레이';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-book')) { 
                    node.parentNode.textContent = '로어북';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-search')) { 
                    node.parentNode.textContent = '검색';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-braces')) { 
                    node.parentNode.textContent = '스크립트';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-activity')) { 
                    node.parentNode.textContent = '고급';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-plus')) { 
                    node.parentNode.textContent = '추가';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-share-2')) { 
                    node.parentNode.textContent = '공유';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-x')) { 
                    node.parentNode.textContent = '취소';
                }
                else if (node.matches('.lucide-icon.lucide.lucide-x-circle')) { 
                    node.parentNode.textContent = '닫기';
                }
                else if (node.matches('.flex.flex-col.items-center.space-y-2.px-2 button')) {
                    node.textContent = '봇 추가';
                }
            }
        })
      }
    }
  };

  const config = { childList: true, subtree: true};
  const observer = new MutationObserver(callback);
  observer.observe(targetMain, config);
