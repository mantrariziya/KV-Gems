# KV Gems

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_4-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery_3.7.1-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![WooCommerce](https://img.shields.io/badge/WooCommerce-96588A?style=for-the-badge&logo=woocommerce&logoColor=white)
![WordPress](https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white)
![Font Awesome](https://img.shields.io/badge/Font_Awesome_5-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)
![Google Tag Manager](https://img.shields.io/badge/Google_Tag_Manager-246FDB?style=for-the-badge&logo=googletagmanager&logoColor=white)

A static website archive of **KV Gems Co., Ltd.** — a premium coloured gemstone wholesaler based in Bangkok, Thailand. Built as a freelance project, this site showcases an extensive inventory of unheated natural gemstones including Sapphires, Rubies, Spinels, Tsavorites, and Peridots.

---

## Why This Project?

KV Gems needed a professional online presence to showcase their curated inventory of rare, unheated gemstones to international buyers and jewellery designers. The challenge was presenting 150+ individual product listings with high-quality imagery, gemological certifications, and sourcing origins — all in a clean, luxury-feel static site that loads fast and works offline.

---

## Features

| Feature | Description |
|---------|-------------|
| Product Catalogue | 150+ individual gemstone product pages with images and details |
| Stone Categories | Ruby, Sapphires, Fancy Sapphires, Padparadscha, Spinel, Tsavorite, Peridot |
| Sourcing Origins | Dedicated pages for Mozambique, Sri Lanka, Madagascar, Myanmar, Tanzania, Vietnam |
| Shop with Pagination | Multi-page shop listing with 12 pages of products |
| Contact Form | Contact Us page with reCAPTCHA spam protection |
| Newsletter Signup | Footer newsletter subscription via Contact Form 7 |
| Exhibition Listings | Upcoming global gem fair exhibition dates |
| Responsive Design | Mobile-first layout using Bootstrap 4 |
| Image Carousel | Slick.js powered product image slider |
| Touch Support | jQuery TouchSwipe + UI Touch Punch for mobile gestures |
| Partner Lab Section | AGL, SSEF, GRS, GIA certification partner logos |
| Privacy Policy | Full GDPR-compliant privacy policy page |
| Terms & Conditions | Complete terms and conditions page |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| HTML5 | — | Page structure |
| CSS3 | — | Styling |
| Bootstrap | 4.0.0 | Responsive grid and components |
| jQuery | 3.7.1 | DOM manipulation |
| jQuery Migrate | 3.4.1 | Backward compatibility |
| jQuery UI | 1.12.1 | UI interactions |
| jQuery TouchSwipe | 1.6.4 | Touch gesture support |
| jQuery UI Touch Punch | 0.2.3 | Touch events for jQuery UI |
| Popper.js | 1.12.9 | Tooltip and dropdown positioning |
| Slick.js | 1.8.0 | Image carousel/slider |
| Font Awesome | 5.10.0 | Icons |
| Contact Form 7 | 6.0.3 | Contact and newsletter forms |
| WooCommerce | 9.4.2 | E-commerce product management |
| Google Tag Manager | — | Analytics and tracking |
| Google reCAPTCHA | v3 | Form spam protection |
| BugHerd | — | Client feedback and bug tracking |

---

## Project Structure

```
KV Gems/
├── index.htm                    # Homepage
├── contact-us/
│   └── index.htm                # Contact page
├── our-story/
│   └── index.htm                # About / company story
├── our-factory/
│   └── index.htm                # Factory page
├── our-responsibility/
│   └── index.htm                # CSR / responsibility page
├── our-stones/
│   ├── index.htm                # Stones overview
│   ├── ruby/
│   ├── sapphires/
│   ├── spinel/
│   ├── tsavorite/
│   └── peridot/
├── our-services/
│   ├── index.htm                # Services overview
│   └── sourcing-origins/
│       ├── index.htm
│       ├── mozambique/
│       ├── sri-lanka/
│       ├── madagascar/
│       ├── myanmar/
│       ├── tanzania/
│       └── vietnam/
├── shop/
│   ├── index.htm                # Shop listing
│   └── page/                    # Paginated shop pages (2–12)
├── product/                     # 150+ individual product pages
│   └── [product-name]/
│       └── index.htm
├── blog/
│   └── index.htm
├── exhibition/
│   └── index.htm
├── register/
│   └── index.htm
├── privacy-policy/
│   └── index.htm
├── terms-conditions/
│   └── index.htm
├── bootstrap/
│   └── 4.0.0/                   # Bootstrap CSS + JS
├── releases/
│   └── v5.10.0/                 # Font Awesome 5
├── ajax/
│   └── libs/                    # jQuery UI, TouchSwipe, Popper.js
├── recaptcha/
│   └── api.js
├── wp-content/
│   ├── themes/stones-2021/      # Custom WordPress theme
│   ├── plugins/                 # WooCommerce, Contact Form 7
│   └── uploads/                 # Product images (2021–2024)
└── wp-includes/
    └── js/jquery/               # jQuery core files
```

---

## Getting Started

This is a static HTML website. No build process or server required.

**Open locally:**

```bash
# Clone the repository
git clone https://github.com/mantrariziya/KV-Gems.git
cd kv-gems

# Open in browser directly
open index.htm

# Or use VS Code Live Server
# Right-click index.htm → Open with Live Server
```

**Recommended:** Use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for best results — some assets load correctly only when served over HTTP.

---

## Security

- Google reCAPTCHA v3 integrated on contact and newsletter forms to prevent spam
- BugHerd client feedback tool integrated for bug reporting
- Right-click and inspect element disabled via JavaScript for content protection
- No sensitive credentials or API keys stored in the repository

---

## Roadmap

- [ ] Replace static HTML with a modern React or Next.js frontend
- [ ] Integrate a headless CMS (e.g. Sanity, Contentful) for product management
- [ ] Add search and filter functionality to the shop page
- [ ] Implement a proper cart and checkout flow
- [ ] Add WhatsApp and social media contact links
- [ ] Optimize images with WebP format and lazy loading

---

## Author

[![GitHub](https://img.shields.io/badge/GitHub-mantrariziya-181717?style=flat&logo=github)](https://github.com/mantrariziya)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mantra--riziya-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/mantra-riziya-7aa1752b6)
[![Email](https://img.shields.io/badge/Email-riziyamantra@gmail.com-D14836?style=flat&logo=gmail)](mailto:riziyamantra@gmail.com)

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
# KV-Gems
# KV-Gems
