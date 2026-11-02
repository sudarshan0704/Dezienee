"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

let aosInitialized = false;

const legacyScripts = [
  "jquery-3.7.1.min.js",
  "validator.min.js",
  "jquery.slicknav.js",
  "swiper-bundle.min.js",
  "jquery.waypoints.min.js",
  "jquery.counterup.min.js",
  "jquery.magnific-popup.min.js",
  "SmoothScroll.js",
  "parallaxie.js",
  "gsap.min.js",
  "magiccursor.js",
  "SplitText.js",
  "ScrollTrigger.min.js",
  "jquery.mb.YTPlayer.min.js",
  "function.js",
];

function prepareAosElements() {
  document.querySelectorAll(".wow:not([data-aos])").forEach((element) => {
    if (!(element instanceof HTMLElement)) return;

    const delay = element.dataset.wowDelay;

    element.dataset.aos = "fade-up";
    if (delay) {
      element.dataset.aosDelay = String(Math.round(Number.parseFloat(delay) * 1000));
    }

    element.classList.remove("wow", "fadeInUp");
    element.removeAttribute("data-wow-delay");
  });
}

function refreshAnimations() {
  window.initRevealAnimations?.();
  window.initGalleryPopups?.();
  window.ScrollTrigger?.refresh();

  prepareAosElements();
  if (!aosInitialized) {
    AOS.init({ duration: 800, once: true, offset: 100 });
    aosInitialized = true;
  } else {
    AOS.refreshHard();
  }
}

export default function LegacyScripts() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    const scriptElements = [];

    const loadScript = (index) => {
      if (cancelled) return;
      if (index >= legacyScripts.length) {
        return;
      }

      const script = document.createElement("script");
      script.src = `/js/${legacyScripts[index]}`;
      script.async = false;
      script.onload = () => {
        if (index === legacyScripts.length - 1) refreshAnimations();
        loadScript(index + 1);
      };
      script.onerror = () => loadScript(index + 1);
      scriptElements.push(script);
      document.body.appendChild(script);
    };

    loadScript(0);

    return () => {
      cancelled = true;
      scriptElements.forEach((script) => script.remove());
    };
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(refreshAnimations);

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}