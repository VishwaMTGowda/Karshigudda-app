"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdBanner() {
  const adRef = useRef<HTMLModElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const loadAd = () => {
      if (!adRef.current) return;

      // Don't push again if this ad already has an ad
      if (adRef.current.getAttribute("data-adsbygoogle-status")) {
        return;
      }

      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        initialized.current = true;
      } catch (error) {
        console.error("AdSense error:", error);
      }
    };

    // Give the AdSense script time to load
    if (window.adsbygoogle) {
      loadAd();
    } else {
      setTimeout(loadAd, 500);
    }
  }, []);

  return (
    <>
      <Script
        id="google-adsense"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2040903055590766"
        crossOrigin="anonymous"
      />

      <div className="mx-auto my-10 w-full max-w-7xl px-6 lg:px-10">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{
            display: "block",
            minHeight: "100px",
          }}
          data-ad-client="ca-pub-2040903055590766"
          data-ad-slot="3378335703"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </>
  );
}