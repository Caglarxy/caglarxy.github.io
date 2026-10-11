/*
 * LPF.one — shared Google Analytics 4 configuration.
 *
 * Replace G-XXXXXXXXXX below with the Measurement ID from your
 * existing LPF.one Google Analytics web stream, then commit this file.
 * Until you replace it, Google Analytics is NOT loaded.
 *
 * This script is included on all five pages.
 */
(() => {
  'use strict';

  const measurementId = 'G-XXXXXXXXXX'; // <-- Change this one value.

  if (measurementId === 'G-XXXXXXXXXX') {
    return; // Analytics is intentionally disabled until configured.
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' +
    encodeURIComponent(measurementId);
  document.head.appendChild(script);
})();
