import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const textRef = useRef(null);
  const text = "In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box. Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold."
  const words = text.split(" ");
  useEffect(() => {
    function handleScroll() {
      if (textRef.current) {
        const textNodes = textRef.current.childNodes;
        for (let i = 0; i < textNodes.length; i++) {
          const textNode = textNodes[i];
          const distanceFromTop = document.querySelector('.textreveal_text__9qSpD').getBoundingClientRect().top;
          console.log(window.innerHeight, distanceFromTop)
          if ( Math.abs(window.innerHeight+distanceFromTop) <= window.innerHeight+520-(i+1)*20) textNodes[i].style.opacity = 1;
          if ( Math.abs(window.innerHeight+distanceFromTop) >= window.innerHeight+520-(i+1)*20) textNodes[i].style.opacity = 0; 
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll); };
  }, []);

  return (
    <>
      <div class="page-wrapper">
        <div class="page-content">
          <section class="textreveal_section__Dw9vK  ">
            <div class="container">
              <div class="textreveal_wrapper__fuEcC">
                <div class="textreveal_sticky__NBmkY">
                  <div class="textreveal_inner__Kddvp">
                    <div class="relative">
                      <p class="text-white title-lead font-semibold leading-none absolute" ref={textRef}>
                        {words.map((word, index) => (
                          <span  key={index}>{word} </span>
                        ))}
                      </p>
                      <p class="title-lead font-semibold leading-none text-[#202020]">
                        In Chronicle everything is made with Blocks that come with pixel perfect design, interactivity and motion out of the box.
                        Instead of designing from scratch, simply choose the right one from our library of blocks and see the magic unfold.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="textreveal_text__9qSpD"></div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
