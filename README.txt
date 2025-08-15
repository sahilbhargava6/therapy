AFFORDABLE THERAPY — FRONTEND (HTML/CSS/JS/BOOTSTRAP)
=====================================================

FILES
-----
- index.html      — main single-page site with hero, how-it-works, why choose us, FAQ, contact, and modals.
- styles.css      — custom theme styles (Inter font, brand colors, hover effects).
- script.js       — interactive bits: pricing slider, form validation, blur toggle, year updater.
- assets/
    avatar.png    — placeholder testimonial avatar.
    placeholder.mp4 — short blank video file to demonstrate the blur toggle.

HOW TO RUN
---------
1) Unzip the archive (if you downloaded the ZIP).
2) Open `index.html` in your browser.
   - Bootstrap CSS/JS and icons are loaded via CDN.
3) Replace placeholder email (hello@therapy.example) and add your backend endpoints:
   - `clientForm` and `therapistForm` submit handlers in `script.js` are where you call your API.

CUSTOMIZE
---------
- Colors and typography: tweak in `styles.css`.
- Sections: duplicate a card in "How It Works" or "Why Choose Us" to add more items.
- Pricing control: adjust min/max/step for the slider in `index.html`.
- Modals: add more fields and validation as needed.

BACKEND NOTES (NEXT STEPS)
--------------------------
- Auth: Add authentication (email OTP or OAuth).
- Secure calls: Integrate WebRTC provider (e.g., Daily, Twilio, or Vonage) for end-to-end encrypted voice/video.
- Payments: Use Stripe/Paytm/Razorpay for sliding-scale payments.
- Verification: Upload & verify therapist credentials, then show a badge on profiles.
- Matching: Add a simple rules engine (mode, budget, goal) before upgrading to ML-based matching later.

LICENSE
-------
This starter is MIT-licensed. Free to use and modify.
