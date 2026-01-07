# Website Handoff & Ownership Checklist

Use this checklist to ensure complete ownership transfer of your counseling practice website.

---

## 🔐 Account Access & Ownership

### Code Repository
- [ ] GitHub/GitLab repository transferred to your account or organization
- [ ] You have admin access to the repository
- [ ] Repository is set to private (recommended)
- [ ] You know how to access and download the code

### Hosting (Vercel/Other)
- [ ] Vercel project transferred to your account OR new project created under your account
- [ ] You have owner access to the project
- [ ] Billing is under your payment method
- [ ] You can access deployment logs and settings

### Domain
- [ ] Domain registered under your name/business
- [ ] You have full access to domain registrar account
- [ ] DNS records configured correctly
- [ ] Domain renewal is set up (auto-renew recommended)
- [ ] WHOIS privacy enabled (if desired)

### Email Service (Resend/Other)
- [ ] Resend account created under your email
- [ ] API key generated and stored securely
- [ ] Sending domain verified under your account
- [ ] Billing under your payment method

### Scheduling (Calendly)
- [ ] Calendly account under your email
- [ ] Booking link updated in website code
- [ ] Notifications configured to your email
- [ ] Integration settings correct

---

## 🔧 Environment & Configuration

### Environment Variables Set
- [ ] `RESEND_API_KEY` - Your Resend API key
- [ ] `CONTACT_EMAIL_TO` - Email where form submissions go
- [ ] `CONTACT_EMAIL_FROM` - "From" email for notifications
- [ ] `NEXT_PUBLIC_SITE_URL` - Your live website URL

### Practice Information Updated
In `src/lib/constants.ts`:
- [ ] Practice name
- [ ] Therapist name
- [ ] Credentials (LPC, LCSW, etc.)
- [ ] License number
- [ ] City and state
- [ ] Full address
- [ ] Phone number
- [ ] Email address
- [ ] Office hours
- [ ] Calendly booking link

---

## 📝 Content Verified

### All Pages Reviewed
- [ ] Home page - All copy accurate
- [ ] About page - Bio and credentials correct
- [ ] Services overview - All services listed
- [ ] Individual Counseling page - Content appropriate
- [ ] Play Therapy page - Content appropriate  
- [ ] Family Counseling page - Content appropriate
- [ ] Contact page - All contact info correct
- [ ] Privacy Policy - Updated with correct information

### Placeholders Replaced
Search for and replace all instances of:
- [ ] `[PRACTICE NAME]`
- [ ] `[THERAPIST NAME]`
- [ ] `[CREDENTIALS]`
- [ ] `[LICENSE #]`
- [ ] `[CITY]`
- [ ] `[STATE]`
- [ ] `[ADDRESS]`
- [ ] `[PHONE]`
- [ ] `[EMAIL]`
- [ ] `[HOURS]`
- [ ] `[BOOKING LINK]`
- [ ] `[DATE]` (in Privacy Policy)
- [ ] `[HOSTING PROVIDER]`
- [ ] `[SCHEDULING SERVICE]`
- [ ] `[EMAIL PROVIDER]`
- [ ] Any `[PLACEHOLDER]` text

### Images Added
- [ ] Therapist headshot (if desired)
- [ ] Office photos (if desired)
- [ ] Favicon/logo updated
- [ ] Alt text added to all images

---

## ⚖️ Compliance & Ethics

### Disclaimers Present
- [ ] Emergency disclaimer on contact page (911/988)
- [ ] Emergency banner in footer
- [ ] HIPAA communication disclaimer on contact form
- [ ] Consent checkbox required on form
- [ ] Privacy policy page complete
- [ ] Medical disclaimer ("not medical advice")

### Ethical Standards Met
- [ ] **NO client testimonials** anywhere on site
- [ ] No guaranteed outcomes or medical claims
- [ ] No pressure/sales language
- [ ] License number displayed
- [ ] Privacy policy accurate to your practices

### Legal Review (Recommended)
- [ ] Privacy policy reviewed by legal counsel
- [ ] HIPAA compliance verified for your practice
- [ ] Disclaimers appropriate for your state

---

## 🧪 Testing Complete

### Functionality
- [ ] Contact form submits successfully
- [ ] Email notifications received
- [ ] Calendly embed loads and works
- [ ] All navigation links work
- [ ] Mobile menu functions correctly

### Cross-Browser Testing
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Responsive Design
- [ ] Desktop (1920px+)
- [ ] Laptop (1024px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader tested (optional but recommended)
- [ ] Color contrast passes WCAG AA
- [ ] Focus states visible

---

## 📊 Analytics & Monitoring (Optional)

- [ ] Google Analytics configured (if using)
- [ ] Google Search Console verified
- [ ] Uptime monitoring set up (recommended)
- [ ] Error tracking configured (optional)

---

## 📚 Documentation Received

- [ ] README.md reviewed and understood
- [ ] Know how to update content
- [ ] Know how to change colors/theme
- [ ] Know how to update SEO metadata
- [ ] Know how to access deployment logs
- [ ] Know where to get help/support

---

## 🔄 Ongoing Maintenance Plan

### Regular Tasks
- [ ] Check contact form submissions regularly
- [ ] Monitor email deliverability
- [ ] Keep dependencies updated (quarterly recommended)
- [ ] Review and update content as needed
- [ ] Renew domain annually
- [ ] Renew SSL certificate (usually automatic)

### When to Update
- Practice information changes
- New services added
- Credentials updated
- Contact information changes
- Legal/compliance requirements change

---

## 📞 Support Contacts

### Developer/Agency
- Name: _______________________
- Email: _______________________
- Phone: _______________________
- Support period ends: _______________________

### Hosting Support
- Vercel Support: support.vercel.com
- Your account email: _______________________

### Domain Registrar
- Registrar name: _______________________
- Support URL: _______________________

### Email Service
- Resend Support: resend.com/support
- Your account email: _______________________

---

## ✅ Final Sign-Off

By signing below, I confirm that:
1. I have full ownership of all accounts and services
2. All content has been reviewed and approved
3. The site is compliant with applicable regulations
4. I understand how to make basic updates
5. I have received all necessary documentation

**Client Signature:** _________________________

**Date:** _________________________

**Developer Signature:** _________________________

**Date:** _________________________

---

## Notes

_Use this space for any additional notes, credentials, or information:_

________________________________________________________________

________________________________________________________________

________________________________________________________________

________________________________________________________________
