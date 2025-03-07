# Premium Portfolio Website

A modern, responsive portfolio website template built with HTML, CSS, Tailwind CSS, and JavaScript. This template features a premium design with smooth animations, interactive elements, and a responsive layout for all devices.

## Features

- 🎨 Modern and premium design with gradient effects
- 📱 Fully responsive layout that works on all devices
- ✨ Smooth animations and transitions
- 🖱️ Custom cursor effect (on desktop)
- ⌨️ Typing animation in the hero section
- 🔄 Project filtering functionality
- 📝 Contact form with validation
- 🌓 Elegant loading animation
- 📊 Skills and project showcase sections
- 🔗 Social media integration
- 🧩 Parallax effects for dynamic visuals
- 🌈 Theme switching (Dark, Light, and Purple themes)
- 🖼️ Image modal for full-view of portfolio images
- 📲 Smooth and responsive image display

## Getting Started

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge recommended)
- Code editor (VS Code, Sublime Text, etc.)
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. Clone this repository or download the ZIP file
2. Extract the files to your desired location
3. Open the `index.html` file in your web browser to view the website

### Customization

#### Personal Information

Edit the `index.html` file to update:

- Your name and role
- About me information
- Skills and expertise
- Project details
- Contact information
- Social media links

#### Change Colors

To change the color scheme, edit the CSS variables in the `public/assets/css/style.css` file:

```css
:root {
    --color-primary: #8b5cf6;   /* Primary color (purple) */
    --color-secondary: #ec4899; /* Secondary color (pink) */
    /* Other variables */
}
```

#### Add Your Projects

In the projects section of `index.html`, follow the existing structure to add your own projects:

```html
<div class="project-card" data-category="your-category">
    <div class="project-image">
        <!-- Add your project image -->
        <img src="path/to/your/image.jpg" alt="Project Name">
        <div class="project-overlay">
            <div class="project-links">
                <a href="#" class="project-link"><i class="fas fa-link"></i></a>
                <a href="#" class="project-link"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Description of your project.</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
            <span class="tech-tag">Technology 3</span>
        </div>
    </div>
</div>
```

#### Customize Typing Animation

To change the typing animation text, edit the phrases in the `main.js` file:

```javascript
const phrases = [
    'Web Developer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Freelancer'
    // Add or change phrases here
];
```

#### Theme Customization

The portfolio comes with three built-in themes:
- Dark Theme (default)
- Light Theme
- Purple Theme

Users can switch between themes using the theme switcher on the bottom right corner. The selected theme is saved in localStorage, so it persists between sessions.

To customize theme colors, edit the CSS variables in `public/assets/css/style.css`:

```css
:root {
    --color-primary: #8b5cf6;      /* Primary color */
    --color-secondary: #ec4899;    /* Secondary color */
    --color-dark: #111827;         /* Dark mode background */
    --color-darker: #0f172a;       /* Dark mode darker elements */
    --color-light: #f3f4f6;        /* Light mode text */
    --color-light-bg: #f9fafb;     /* Light mode background */
    --color-light-secondary: #e5e7eb; /* Light mode secondary background */
}
```

#### Image Display and Interaction

Images across the portfolio now have:
- Consistent sizing and responsive design
- Click-to-view full-screen functionality
- Hover effects (zoom on project images)
- Proper object-fit handling for different image aspect ratios

To add your own images, replace the existing image paths in the HTML:

```html
<img src="your-image.jpg" alt="Description of your image">
```

For best results:
- Hero image: Square or slightly taller aspect ratio (1:1 or 4:5)
- About image: Portrait orientation (3:4 or 4:5 aspect ratio)
- Project images: Landscape orientation (16:9 or 3:2 aspect ratio)

## Structure

```
portfolio-website/
├── index.html                  # Main HTML file
├── public/                     # Public assets
│   ├── assets/
│       ├── css/
│       │   └── style.css       # Custom CSS styles
│       ├── js/
│       │   └── main.js         # JavaScript functionality
│       └── images/             # Image assets
└── README.md                   # This file
```

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Font Awesome for the icons
- Google Fonts for the typography
- Tailwind CSS for the utility classes 