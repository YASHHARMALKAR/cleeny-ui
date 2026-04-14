import { useState, useEffect } from "react";

const Hero = () => {
  // 🔥 Typing words
  const words = ["Call Us", "Help Line"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let speed = isDeleting ? 80 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat h-[1000px] sm:h-[75rem] lg:h-[814px] flex items-center">
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <h5 className="text-lg text-yellow-400 font-medium">
              BEST CLEENY AGENCY
            </h5>

            <h1 className="font-extrabold text-white text-[34px] leading-[44px] sm:text-6xl sm:leading-[70px] lg:text-[58px] mt-6 mb-6">
              NEED CLEENY? <br />
              CALL <span className="text-yellow-400">US TODAY</span>
            </h1>

            <p className="text-white opacity-80 mb-9 w-10/12">
              Need Clean of your home or office? Just Feel Free to Contact us.
              We try to Help you as soon as possible.
            </p>

            {/* 🔥 BUTTON WITH SPLIT HOVER */}
            <button className="relative overflow-hidden bg-yellow-400 text-black px-7 py-3 rounded-full font-semibold group">
              
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition">
                Get Started Now →
              </span>

              <span className="absolute top-0 left-0 w-full h-1/2 bg-blue-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              <span className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            
            {/* 🔥 CALL BOX WITH TYPING EFFECT */}
          <div className="absolute left-0 sm:-top-24 -top-28 lg:-left-24 lg:-top-20 xl:-top-10 bg-[url('/images/hero-shape3.png')] bg-no-repeat bg-contain bg-right w-[205px] h-[130px] flex flex-col items-center justify-center gap-1">
  
  <span className="text-white text-sm font-semibold">
    {text}
  </span>

  <div className="flex items-center gap-2">
    
    {/* PHONE ICON */}
    <span className="text-yellow-400 text-lg">📞</span>

    <h6 className="text-white text-xl font-bold">
      246900
    </h6>

  </div>
</div>

            {/* MAIN IMAGE */}
            <img
              src="/images/hero-thumb.png"
              alt="hero"
              className="relative z-10"
            />

            {/* DECOR SHAPES */}
       {/* ROTATING IMAGE */}
<img
  src="/images/hero-shape2.png"
  className="absolute right-0 top-0 animate-zoomInOut"
/>

{/* ZOOM IN OUT IMAGE */}
<img
  src="/images/hero-shape.png"
  className="absolute left-0 bottom-0 animate-rotateSlow"
/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;