# TSEC E-Cell - Innovation & Entrepreneurship Blog

A modern, responsive website for Thakur Shyamnarayan Engineering College E-Cell showcasing innovation and entrepreneurship blogs with PDF viewing capabilities.

## Features

- **Modern Design**: Clean, responsive design with smooth animations
- **PDF Viewer**: Click on any blog to view PDFs in a modal window
- **Mobile Responsive**: Optimized for all device sizes
- **Interactive Elements**: Smooth scrolling, animations, and hover effects
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Optimized for easy deployment

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # This file
├── ecell-logo.png      # TSEC E-Cell committee logo
├── IMG-20250818-WA0088-removebg-preview.png  # College logo (TSEC)
├── E-CELL-INFO.PDF     # Organization information
├── From Idea to Launch.pdf
├── Innovative Business Ideas.pdf
├── The Rise of Student Entrepreneurs.pdf
└── Top 10 Mistakes for Entrepreneurs.pdf
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub named `innovritti-blog` (or any name you prefer)

2. **Upload all files** to your repository:
   - Upload `index.html`, `styles.css`, and `script.js`
   - Upload all image files (`ecell-logo.png`, `IMG-20250818-WA0088-removebg-preview.png`)
   - Upload all PDF files

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access your site**:
   - Your site will be available at `https://yourusername.github.io/tsec-ecell-blog`

### Method 2: Using Git Commands

1. **Initialize git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Add remote repository**:
   ```bash
   git remote add origin https://github.com/yourusername/tsec-ecell-blog.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages** (follow steps 3-4 from Method 1)

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --accent-color: #667eea;
}
```

### Adding New Blogs
1. Add your PDF file to the root directory
2. Add a new blog card in the HTML:
```html
<div class="blog-card" data-pdf="Your-PDF-File.pdf">
    <div class="blog-image">
        <i class="fas fa-icon-name"></i>
    </div>
    <div class="blog-content">
        <h3>Your Blog Title</h3>
        <p>Your blog description</p>
        <div class="blog-meta">
            <span class="blog-category">Category</span>
            <span class="blog-date">2024</span>
        </div>
        <button class="read-more-btn">Read PDF</button>
    </div>
</div>
```

### Updating Contact Information
Edit the contact section in `index.html`:
```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h4>Email</h4>
        <p>tsececell@tsecmumbai.in</p>
    </div>
</div>
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

## Performance Features

- Optimized images
- Smooth scrolling
- Lazy loading animations
- Responsive design
- Minimal dependencies

## Support

For any issues or questions, please contact:
- Email: tsececell@tsecmumbai.in
- Phone: 7977356523
- Location: Thakur Shyamnarayan Engineering College, Kandivali, Thakur Complex

## License

This project is open source and available under the [MIT License](LICENSE).
