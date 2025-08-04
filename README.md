# YourAngel Landing Page - Email Collection Setup

## Email Collection Options

Your landing page is set up to collect emails, but you need to choose one of these options:

### Option 1: Formspree (Recommended - Free & Easy)
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like `xpzgkqyw`)
5. Replace `YOUR_FORM_ID` in `src/components/CTA.tsx` with your actual form ID

### Option 2: Netlify Forms (If deploying to Netlify)
1. Add `netlify` attribute to the form in CTA.tsx
2. Netlify will automatically handle form submissions
3. View submissions in your Netlify dashboard

### Option 3: Your Own Backend
Replace the fetch URL in `src/components/CTA.tsx` with your own API endpoint.

### Option 4: Google Sheets (via Google Apps Script)
1. Create a Google Apps Script web app
2. Set it up to write to a Google Sheet
3. Replace the fetch URL with your script URL

## Current Setup
- The form is ready to collect emails
- Error handling is included
- Success message shows for 5 seconds
- Form resets after successful submission

## Next Steps
1. Choose your preferred email collection method
2. Update the form endpoint in `src/components/CTA.tsx`
3. Test the form submission
4. Set up email notifications (optional)

The landing page is production-ready once you configure the email collection!