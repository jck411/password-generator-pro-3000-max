# 🔐 Password Generator Pro

A beautiful, secure password generator with cyberpunk-inspired visual effects built with vanilla HTML, CSS, and JavaScript.

![Password Generator Demo](https://img.shields.io/badge/Status-Live-brightgreen) ![Security](https://img.shields.io/badge/Security-Cryptographically%20Secure-blue) ![No%20Dependencies](https://img.shields.io/badge/Dependencies-None-orange)

## ✨ Features

- **🔒 Cryptographically Secure**: Uses `crypto.getRandomValues()` for true random generation
- **🎨 Cyberpunk Aesthetics**: Matrix rain, particle effects, and glowing animations
- **⚡ Real-time Generation**: Live password generation as you adjust settings
- **📊 Strength Meter**: Visual feedback on password security
- **📋 One-Click Copy**: Copy passwords to clipboard with a single click
- **🎮 Easter Eggs**: Hidden Konami code for ultra-secure passwords
- **♿ Accessible**: Keyboard shortcuts and reduced motion support
- **📱 Responsive**: Works perfectly on desktop and mobile devices

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in any modern web browser
3. **Start generating** secure passwords!

That's it! No build process, no dependencies, no server required.

## 🎯 How to Use

1. **Adjust password length** using the slider (8-128 characters)
2. **Choose character types**:
   - ✅ Uppercase letters (A-Z)
   - ✅ Lowercase letters (a-z)
   - ✅ Numbers (0-9)
   - ⭐ Symbols (!@#$%^&*...)
   - ⚡ Avoid ambiguous characters (O/0, l/1, etc.)
3. **Click "Generate Password"** or press spacebar
4. **Copy with one click** or use Ctrl+C

## ⌨️ Keyboard Shortcuts

- `Space` - Generate new password
- `Ctrl+C` - Copy current password
- **Konami Code** - Activate ultra-secure mode (↑↑↓↓←→←→BA)

## 🔧 Technical Details

### Security Features
- Uses `crypto.getRandomValues()` for cryptographically secure random generation
- No passwords are stored or transmitted anywhere
- All generation happens locally in your browser
- No external dependencies or tracking

### Visual Effects
- **Matrix Rain**: Animated background with falling characters
- **Particle System**: Floating particles with random animations
- **Glow Effects**: CSS text shadows and box shadows
- **Smooth Animations**: CSS transitions and keyframe animations
- **Interactive Elements**: Hover effects and button animations

### Browser Compatibility
- ✅ Chrome 37+
- ✅ Firefox 41+
- ✅ Safari 7+
- ✅ Edge 12+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📁 Project Structure

```
password-generator/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-green: #00ff41;
    --secondary-cyan: #00ffff;
    --accent-magenta: #ff00ff;
    --background-dark: #0a0a0a;
}
```

### Visual Effects
- **Particles**: Adjust count in `script.js` (line 47)
- **Matrix Rain**: Modify character set and speed (lines 155-170)
- **Animation Speed**: Change duration values in CSS animations

### Password Options
- **Length Range**: Modify min/max in HTML (line 29)
- **Character Sets**: Edit charset building in `script.js`
- **Strength Calculation**: Adjust scoring algorithm (lines 110-135)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Ideas for Contributions
- 🌈 New color themes
- 🎭 Additional visual effects
- 🔧 More password options
- 📱 Better mobile experience
- ♿ Improved accessibility
- 🧪 Additional Easter eggs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font**: Orbitron and Source Code Pro from Google Fonts
- **Inspiration**: Cyberpunk aesthetics and Matrix movie
- **Security**: Web Crypto API for secure random generation
- **Community**: All contributors and users

## ⚠️ Disclaimer

While this tool uses cryptographically secure random generation, always:
- Use a password manager for storing passwords
- Enable two-factor authentication when possible
- Regularly update your passwords
- Never share passwords or use them across multiple sites

---

**Made with 💚 and lots of ☕**

*Generate strong, remember nothing.*