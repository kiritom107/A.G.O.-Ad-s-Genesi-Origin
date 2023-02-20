import gsap from "gsap";

class NavAnimation {
  howmany = 0;

  opacity(id: string, opacity: number, duration: number) {
    gsap.to(id, {
      opacity: opacity,
      duration: duration,
      ease: "power2.inOut",
    });
  }
}

export default NavAnimation;
