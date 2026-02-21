import { useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Details(){

    const logoref = useRef(null);
    const counterref = useRef([]);

    useEffect(()=> {

    const ctx = gsap.context(() => {
        gsap.from(
        logoref.current,
        {y: "-=100",
        opacity : 0,
        duration : 5,
        ease : "power2.out",
        scrollTrigger : {
            trigger : logoref.current,
            start : "top 60%",
            // end : "top 50%",
            scrub : 1
        }})

        const values = [150, 10, 20, 250];

        counterref.current.forEach((element, index) => {
          
          const obj = {value : 0};
          gsap.to(
            obj, {
              value : values[index],
              duration : 4,
              ease : "power2.out",
              snap : {value : 1},
              scrollTrigger : {
                trigger : element,
                start : "top 90%",
              },

            onUpdate: () => {
              if(index === 0){
                element.innerHTML = obj.value + '<span class="text-4xl align-top">+</span>';
              }
              else if(index === 2){
                element.innerHTML = obj.value + '<span class="text-4xl align-top">+</span>';
              }
              else if(index === 3){
                element.innerHTML = obj.value + '<span class="text-3xl align-top">£</span>';
              }
              else{
                element.innerText = obj.value;
              }
            }




            }
          )
        })

    })












    return () => ctx.revert();
    }, []);





    return(
<section className="w-full min-h-150 bg-[#F7F7F7] py-20 px-8">
  <div className="max-w-5xl mx-auto">
    {/* Logo/Brand */}
    <h2 ref={logoref} className="font-serif text-5xl md:text-6xl text-center text-navy mb-12">
      VERO<span className="text-amber-500">.</span>
    </h2>
    
    {/* Description */}
    <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
      <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed">
For over a decade, VERO. has operated at the forefront of prime London real estate.
Through a curated portfolio of distinguished residences and discreet advisory, we serve a clientele that values legacy, privacy, and architectural distinction.
      </p>
      
      <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed">
Our digital presence now offers seamless access to some of the capital’s most exceptional addresses.
      </p>
    </div>
    
    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {/* Stat 1 */}
      <div className="text-center">
        <h3 ref={(el) => counterref.current[0] = el}
        className="font-sans text-6xl md:text-6xl font-bold text-gray-900 mb-3">
          150<span className="text-4xl align-top">+</span>
        </h3>
        <p className="font-lora text-sm md:text-base text-gray-600">families settled</p>
      </div>
      
      {/* Stat 2 */}
      <div className="text-center">
        <h3 ref={(el) => counterref.current[1] = el} 
        className="font-sans text-6xl md:text-6xl font-bold text-gray-900 mb-3">
          10
        </h3>
        <p className="font-lora text-sm md:text-base text-gray-600">years of excellence</p>
      </div>
      
      {/* Stat 3 */}
      <div className="text-center">
        <h3 ref={(el) => counterref.current[2] = el}
        className="font-sans text-6xl md:text-6xl font-bold text-gray-900 mb-3">
          20<span className="text-4xl align-top">+</span>
        </h3>
        <p className="font-lora text-sm md:text-base text-gray-600">premium locations</p>
      </div>
      
      {/* Stat 4 */}
      <div className="text-center">
        <h3 ref={(el) => counterref.current[3] = el}
        className="font-sans text-6xl md:text-6xl font-bold text-gray-900 mb-3">
          250<span className="text-3xl align-top">£</span>
        </h3>
        <p className="font-lora text-sm md:text-base text-gray-600">million worth of property sold</p>
      </div>
    </div>
  </div>
</section>
    )
}