import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// プラグイン登録
gsap.registerPlugin(ScrollTrigger);

////////////////////////////////////////////////////////////////

// テキストを分割してspanタグで囲む
const text01 = document.querySelector('.section01 .text01');
const textContent01 = text01.textContent.split('');
let content01 = '';
textContent01.forEach((text01) => {
  content01 += `<span>${text01}</span>`;
});
text01.innerHTML = content01;

// テキストアニメーション
gsap.fromTo(
  '.text01 span',
  { y: 0 },
  {
    y: -20,
    ease: 'expo.in',
    stagger: {
      each: 0.15,
      repeat: -1,
      yoyo: true,
    },
  }
);

////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////

// テキストを分割してspanタグで囲む
const text02 = document.querySelector('.section02 .text01');
const textContent02 = text02.textContent.split('');
let content02 = '';
textContent02.forEach((text02) => {
  content02 += `<span>${text02}</span>`;
});
text02.innerHTML = content02;

const text03 = document.querySelector('.section02 .text02');
const textContent03 = text03.textContent.split('');
let content03 = '';
textContent03.forEach((text03) => {
  content03 += `<span>${text03}</span>`;
});
text03.innerHTML = content03;

const text04 = document.querySelector('.section02 .text03');
const textContent04 = text04.textContent.split('');
let content04 = '';
textContent04.forEach((text04) => {
  content04 += `<span>${text04}</span>`;
});
text04.innerHTML = content04;

// IntersectionObserver
const boxes = document.querySelectorAll('.section02');
const options = {
  root: null,
  threshold: 1,
};
const observer = new IntersectionObserver(doWhenIntersect, options);
boxes.forEach((box) => {
  observer.observe(box);
});

function doWhenIntersect(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      timelineAnimation();
      observer.unobserve(entry.target);
    }
  });
}

// timelineアニメーションの関数
const timelineAnimation = () => {
  const tl = gsap.timeline({ repeat: 0, repeatDelay: 0.5 });

  tl.to('.section02 .box-inner', {
    autoAlpha: 1,
  })
    .fromTo(
      '.section02 .text01 span',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.15,
      }
    )
    .fromTo(
      '.section02 .text02 span',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.15,
      }
    )
    .fromTo(
      '.section02 .text03 span',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        stagger: 0.15,
      }
    )
    .to(
      '.section02 .text-box',
      {
        autoAlpha: 0,
      },
      '+=2'
    )
    .fromTo(
      ' .section02 .box',
      {
        autoAlpha: 1,
      },
      {
        autoAlpha: 0,
        repeat: 3,
        duration: 0.1,
      }
    )
    .to('.section02 .box', {
      autoAlpha: 1,
    })
    .fromTo(
      ' .section02 .content',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .gsap',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .opening',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .opening p',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .to(
      '.section02 .opening p',
      {
        autoAlpha: 0,
      },
      '+=2'
    )
    .to('.section02 .opening', {
      autoAlpha: 0,
    })
    .addLabel('start')
    .fromTo(
      '.section02 .box01',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      'start'
    )
    .fromTo(
      '.section02 .box02',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      'start'
    )
    .to('.section02 .triangle01', {
      autoAlpha: 0,
      duration: 0.2,
    })
    .fromTo(
      '.section02 .triangle02',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.2,
      }
    )
    .to('.section02 .triangle02', {
      autoAlpha: 0,
      duration: 0.2,
    })
    .fromTo(
      '.section02 .triangle03',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.2,
      }
    )
    .to(
      '.section02 .box-wrap',
      {
        autoAlpha: 0,
      },
      '+=1'
    )
    .fromTo(
      '.section02 .runaway',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .runaway .runaway-text01',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .runaway .runaway-text02',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .to(
      '.section02 .runaway',
      {
        autoAlpha: 0,
      },
      '+=0.6'
    )
    .to('.section02 .box-wrap', {
      autoAlpha: 1,
    })
    .to('.section02 .triangle03', {
      autoAlpha: 0,
    })
    .to('.section02 .triangle02', {
      autoAlpha: 1,
      duration: 0.2,
    })
    .to('.section02 .triangle02', {
      autoAlpha: 0,
      duration: 0.2,
    })
    .to('.section02 .triangle01', {
      autoAlpha: 1,
      duration: 0.2,
    })
    .fromTo(
      '.section02 .triangle04',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        repeat: 5,
      }
    )
    .to('.section02 .box-wrap', {
      autoAlpha: 0,
    })
    .fromTo(
      '.section02 .attack',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .attack .attack-text01',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .attack .attack-text02',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .fromTo(
      '.section02 .gsap',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.2,
        repeat: 3,
      }
    )
    .fromTo(
      '.section02 .attack .attack-text03',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      '+=0.6'
    )
    .addLabel('knockdown')
    .fromTo(
      '.section02 .attack .attack-text04',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      },
      'knockdown+=0.2'
    )
    .to(
      '.section02 .gsap',
      {
        autoAlpha: 0,
      },
      'knockdown+=0.2'
    )
    .addLabel('end')
    .to(
      ' .attack .attack-text01',
      {
        autoAlpha: 0,
      },
      'end+=3'
    )
    .to(
      ' .attack .attack-text02',
      {
        autoAlpha: 0,
      },
      'end+=3'
    )
    .to(
      ' .attack .attack-text03',
      {
        autoAlpha: 0,
      },
      'end+=3'
    )
    .to(
      ' .attack .attack-text04',
      {
        autoAlpha: 0,
      },
      'end+=3'
    )
    .fromTo(
      '.section02 .attack .attack-text05',
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
      }
    )
    .to(
      ' .section02 .content',
      {
        autoAlpha: 0,
        duration: 2,
      },
      '+=2'
    )
    .fromTo(
      '.section02 .ending p',
      {
        autoAlpha: 0,
        y: 300,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 5,
        ease: 'sine.inOut',
      }
    );
};

////////////////////////////////////////////////////////////////
