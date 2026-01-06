// Password Generator with Visual Effects
class PasswordGenerator {
    constructor() {
        this.initializeElements();
        this.setupEventListeners();
        this.createParticles();
        this.generatePassword();
    }

    initializeElements() {
        this.passwordOutput = document.getElementById('passwordOutput');
        this.copyBtn = document.getElementById('copyBtn');
        this.lengthSlider = document.getElementById('length');
        this.lengthValue = document.getElementById('lengthValue');
        this.generateBtn = document.getElementById('generateBtn');
        this.strengthFill = document.getElementById('strengthFill');
        this.strengthText = document.getElementById('strengthText');
        this.successMessage = document.getElementById('successMessage');
        
        // Options
        this.options = {
            uppercase: document.getElementById('uppercase'),
            lowercase: document.getElementById('lowercase'),
            numbers: document.getElementById('numbers'),
            symbols: document.getElementById('symbols'),
            avoidAmbiguous: document.getElementById('avoidAmbiguous')
        };
    }

    setupEventListeners() {
        // Length slider
        this.lengthSlider.addEventListener('input', () => {
            this.lengthValue.textContent = this.lengthSlider.value;
            this.generatePassword();
        });

        // Option checkboxes
        Object.values(this.options).forEach(option => {
            option.addEventListener('change', () => this.generatePassword());
        });

        // Generate button
        this.generateBtn.addEventListener('click', () => {
            this.generatePassword();
            this.animateButton();
        });

        // Copy button
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 6 + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    generatePassword() {
        const length = parseInt(this.lengthSlider.value);
        const charset = this.buildCharset();
        
        if (charset.length === 0) {
            this.passwordOutput.value = '';
            this.updateStrength(0);
            return;
        }

        let password = '';
        const array = new Uint8Array(length);
        crypto.getRandomValues(array);

        for (let i = 0; i < length; i++) {
            password += charset.charAt(array[i] % charset.length);
        }

        this.passwordOutput.value = password;
        this.updateStrength(this.calculateStrength(password));
        this.animatePasswordDisplay();
    }

    buildCharset() {
        let charset = '';
        
        if (this.options.uppercase.checked) {
            charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        
        if (this.options.lowercase.checked) {
            charset += 'abcdefghijklmnopqrstuvwxyz';
        }
        
        if (this.options.numbers.checked) {
            charset += '0123456789';
        }
        
        if (this.options.symbols.checked) {
            charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
        }

        // Remove ambiguous characters if requested
        if (this.options.avoidAmbiguous.checked) {
            const ambiguous = 'O0oIl1|`\'"{}[]()<>~,.;:';
            charset = charset.split('').filter(char => !ambiguous.includes(char)).join('');
        }

        return charset;
    }

    calculateStrength(password) {
        let score = 0;
        
        // Length score (0-40 points)
        score += Math.min(password.length * 2.5, 40);
        
        // Character variety score (0-60 points)
        const hasUpper = /[A-Z]/.test(password);
        const hasLower = /[a-z]/.test(password);
        const hasNumbers = /[0-9]/.test(password);
        const hasSymbols = /[^A-Za-z0-9]/.test(password);
        
        if (hasUpper) score += 15;
        if (hasLower) score += 15;
        if (hasNumbers) score += 15;
        if (hasSymbols) score += 15;
        
        // Bonus for using all character types
        const typesUsed = [hasUpper, hasLower, hasNumbers, hasSymbols].filter(Boolean).length;
        if (typesUsed === 4) score += 10;
        
        return Math.min(score, 100);
    }

    updateStrength(score) {
        this.strengthFill.style.width = score + '%';
        
        let text, color;
        if (score < 30) {
            text = 'Weak';
            color = '#ff0000';
        } else if (score < 60) {
            text = 'Medium';
            color = '#ff8800';
        } else if (score < 80) {
            text = 'Strong';
            color = '#ffff00';
        } else {
            text = 'Very Strong';
            color = '#00ff41';
        }
        
        this.strengthText.textContent = text;
        this.strengthText.style.color = color;
        this.strengthFill.style.background = `linear-gradient(90deg, #ff0000, #ff8800, #ffff00, #88ff00, ${color})`;
    }

    async copyToClipboard() {
        const password = this.passwordOutput.value;
        
        if (!password) {
            return;
        }

        try {
            await navigator.clipboard.writeText(password);
            this.showSuccessMessage();
            this.animateCopyButton();
        } catch (err) {
            // Fallback for older browsers
            this.fallbackCopyTextToClipboard(password);
        }
    }

    fallbackCopyTextToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';
        
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
            this.showSuccessMessage();
            this.animateCopyButton();
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        
        document.body.removeChild(textArea);
    }

    showSuccessMessage() {
        this.successMessage.classList.add('show');
        setTimeout(() => {
            this.successMessage.classList.remove('show');
        }, 2000);
    }

    animateButton() {
        this.generateBtn.style.transform = 'translateY(-3px) scale(1.05)';
        setTimeout(() => {
            this.generateBtn.style.transform = '';
        }, 200);
    }

    animateCopyButton() {
        this.copyBtn.classList.add('copied');
        this.copyBtn.querySelector('.copy-text').textContent = 'Copied!';
        
        setTimeout(() => {
            this.copyBtn.classList.remove('copied');
            this.copyBtn.querySelector('.copy-text').textContent = 'Copy';
        }, 2000);
    }

    animatePasswordDisplay() {
        this.passwordOutput.style.transform = 'scale(1.02)';
        this.passwordOutput.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';
        
        setTimeout(() => {
            this.passwordOutput.style.transform = '';
            this.passwordOutput.style.boxShadow = '';
        }, 300);
    }
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    
    document.body.appendChild(canvas);
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, 35);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();
    createMatrixRain();
    
    // Add some interactive effects
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.cursor-glow');
        if (!cursor) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            glow.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: radial-gradient(circle, rgba(0, 255, 65, 0.3), transparent);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
            `;
            document.body.appendChild(glow);
        }
        
        const glow = document.querySelector('.cursor-glow');
        glow.style.left = e.clientX - 10 + 'px';
        glow.style.top = e.clientY - 10 + 'px';
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'c') {
            e.preventDefault();
            document.getElementById('copyBtn').click();
        }
        if (e.key === ' ' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            document.getElementById('generateBtn').click();
        }
    });
});

// Add some Easter eggs
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Easter egg: Generate a super secure password
        document.getElementById('length').value = '64';
        document.getElementById('lengthValue').textContent = '64';
        document.getElementById('uppercase').checked = true;
        document.getElementById('lowercase').checked = true;
        document.getElementById('numbers').checked = true;
        document.getElementById('symbols').checked = true;
        document.getElementById('avoidAmbiguous').checked = true;
        
        setTimeout(() => {
            document.getElementById('generateBtn').click();
        }, 100);
        
        // Reset the code
        konamiCode = [];
        
        // Show special message
        const message = document.createElement('div');
        message.textContent = '🎉 KONAMI CODE ACTIVATED! Ultra-secure password generated!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            color: #000;
            padding: 1rem;
            border-radius: 10px;
            font-weight: bold;
            z-index: 10000;
            animation: slideIn 0.5s ease;
        `;
        
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
    }
});