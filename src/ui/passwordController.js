import { MODE_CONFIGS, DEFAULT_LIMITS } from '../config/modeConfigs.js';
import { memoryTechniques, securityTips, passwordTypeTips } from '../data/tips.js';
import {
    generateRandomPassword,
    generateMemorablePassword,
    generateRhymingPassword,
    generateObjectsOnlyPassword,
    generateRhymingObjectsPassword
} from '../generators/passwordGenerators.js';
import { randomSeparator } from '../utils/random.js';
import { calculateStrength, strengthMeta } from '../utils/strength.js';

class PasswordController {
    constructor() {
        this.currentMode = 'regular';
        this.customWordPosition = 'start';

        this.initializeElements();
        this.setupEventListeners();
        this.generatePassword();
    }

    initializeElements() {
        this.passwordList = document.getElementById('passwordList');
        this.lengthSlider = document.getElementById('length');
        this.lengthValue = document.getElementById('lengthValue');
        this.lengthLabelText = document.getElementById('lengthLabelText');
        this.strengthDot = document.getElementById('strengthDot');
        this.strengthText = document.getElementById('strengthText');
        this.copyFeedback = document.getElementById('copyFeedback');

        this.options = {
            uppercase: document.getElementById('uppercase'),
            lowercase: document.getElementById('lowercase'),
            numbers: document.getElementById('numbers'),
            symbols: document.getElementById('symbols'),
            separators: document.getElementById('separators'),
            avoidAmbiguous: document.getElementById('avoidAmbiguous'),
            humanMemorable: document.getElementById('humanMemorable'),
            rhymingPassword: document.getElementById('rhymingPassword'),
            objectsOnly: document.getElementById('objectsOnly')
        };

        this.customWordInput = document.getElementById('customWord');
        this.wordPositionStart = document.getElementById('wordPositionStart');
        this.wordPositionEnd = document.getElementById('wordPositionEnd');

        this.tipsDropdownBtn = document.getElementById('tipsDropdownBtn');
        this.tipsDropdownContent = document.getElementById('tipsDropdownContent');
        this.tipsContentInner = document.getElementById('tipsContentInner');

        this.securityDropdownBtn = document.getElementById('securityDropdownBtn');
        this.securityDropdownContent = document.getElementById('securityDropdownContent');
        this.securityContentInner = document.getElementById('securityContentInner');

        const regularConfig = MODE_CONFIGS.regular;
        if (this.lengthSlider) {
            this.lengthSlider.min = regularConfig.min;
            this.lengthSlider.max = regularConfig.max;
            if (!this.lengthSlider.value) {
                this.lengthSlider.value = regularConfig.default;
            }
        }

        this.populateDropdowns();
    }

    setupEventListeners() {
        this.lengthSlider.addEventListener('input', () => {
            this.updateLengthLabel(this.lengthSlider.value);
            this.generatePassword();
        });

        Object.entries(this.options).forEach(([key, option]) => {
            option.addEventListener('change', () => {
                if (key === 'humanMemorable' && option.checked) {
                    this.options.rhymingPassword.checked = false;
                    this.options.objectsOnly.checked = false;
                } else if ((key === 'rhymingPassword' || key === 'objectsOnly') && option.checked) {
                    this.options.humanMemorable.checked = false;
                }

                this.checkModeAndUpdateSlider();
                this.toggleMemorableInfo();
                this.generatePassword();
            });
        });

        this.customWordInput.addEventListener('input', () => this.generatePassword());

        this.wordPositionStart.addEventListener('click', () => {
            this.customWordPosition = 'start';
            this.wordPositionStart.classList.add('active');
            this.wordPositionEnd.classList.remove('active');
            this.generatePassword();
        });

        this.wordPositionEnd.addEventListener('click', () => {
            this.customWordPosition = 'end';
            this.wordPositionEnd.classList.add('active');
            this.wordPositionStart.classList.remove('active');
            this.generatePassword();
        });

        this.passwordList.addEventListener('click', (e) => {
            const generateBtn = e.target.closest('.generate-row-btn');
            const copyBtn = e.target.closest('.copy-btn');

            if (generateBtn) {
                const passwordSlot = generateBtn.closest('.password-slot');
                generateBtn.classList.add('spinning');
                setTimeout(() => generateBtn.classList.remove('spinning'), 500);
                this.generatePasswordForSlot(passwordSlot);
                this.updateStrength();
            }

            if (copyBtn) {
                const passwordSlot = copyBtn.closest('.password-slot');
                const input = passwordSlot.querySelector('.password-output');
                this.copyToClipboard(input, copyBtn);
            }
        });

        this.tipsDropdownBtn.addEventListener('click', () => this.toggleDropdown('tips'));
        this.securityDropdownBtn.addEventListener('click', () => this.toggleDropdown('security'));
    }



    isWordMode() {
        return (
            this.options.humanMemorable.checked ||
            this.options.rhymingPassword.checked ||
            this.options.objectsOnly.checked
        );
    }

    checkModeAndUpdateSlider() {
        const newMode = this.isWordMode() ? 'words' : 'regular';

        if (this.currentMode !== newMode) {
            this.currentMode = newMode;
            const config = MODE_CONFIGS[newMode];
            const oldVal = parseInt(this.lengthSlider.value, 10);

            let newVal;
            if (newMode === 'words') {
                newVal = Math.max(config.min, Math.min(config.max, Math.round(oldVal / 6)));
            } else {
                newVal = Math.max(config.min, Math.min(config.max, oldVal * 6));
            }

            this.lengthSlider.min = config.min;
            this.lengthSlider.max = config.max;
            this.lengthSlider.value = newVal;

            this.updateLengthLabel(newVal);
        }
    }

    updateLengthLabel(value, actualLength = null) {
        if (this.currentMode === 'words') {
            this.lengthLabelText.textContent = 'Words';
            let displayText = `${value}`;
            if (actualLength) {
                displayText += ` <span style="font-size: 0.8em; opacity: 0.7; font-weight: normal;">(Length: ${actualLength})</span>`;
            }
            this.lengthValue.innerHTML = displayText;
        } else {
            this.lengthLabelText.textContent = 'Length';
            this.lengthValue.textContent = value;
        }
    }

    generatePassword() {
        const slot = this.passwordList.querySelector('.password-slot');
        const password = this.generatePasswordForSlot(slot);
        this.updateLengthLabel(this.lengthSlider.value, password.length);
        this.updateStrength();
    }

    generatePasswordForSlot(slot) {
        const input = slot.querySelector('.password-output');
        const password = this.generateSinglePassword();
        input.value = password;
        this.animatePasswordInput(input);
        return password;
    }

    generateSinglePassword() {
        const customWord = this.customWordInput.value.trim();
        const isWordMode = this.isWordMode();
        const wordCount = parseInt(this.lengthSlider.value, 10);
        const useSeparators = this.options.separators.checked;

        const baseConfig = {
            wordCount,
            includeNumbers: this.options.numbers.checked,
            includeSymbols: this.options.symbols.checked,
            useUppercase: this.options.uppercase.checked,
            useSeparators
        };

        let password = '';

        if (this.options.rhymingPassword.checked && this.options.objectsOnly.checked) {
            password = generateRhymingObjectsPassword(baseConfig);
        } else if (this.options.rhymingPassword.checked) {
            password = generateRhymingPassword(baseConfig);
        } else if (this.options.humanMemorable.checked) {
            password = generateMemorablePassword(baseConfig);
        } else if (this.options.objectsOnly.checked) {
            password = generateObjectsOnlyPassword(baseConfig);
        } else {
            password = generateRandomPassword({
                length: parseInt(this.lengthSlider.value, 10),
                options: {
                    uppercase: this.options.uppercase.checked,
                    lowercase: this.options.lowercase.checked,
                    numbers: this.options.numbers.checked,
                    symbols: this.options.symbols.checked,
                    avoidAmbiguous: this.options.avoidAmbiguous.checked
                }
            });
        }

        if (customWord) {
            let formattedWord = customWord;
            if (this.options.uppercase.checked && Math.random() > 0.5) {
                formattedWord = formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1);
            }

            if (isWordMode) {
                const separator = useSeparators ? randomSeparator() : '';
                password =
                    this.customWordPosition === 'start'
                        ? `${formattedWord}${separator}${password}`
                        : `${password}${separator}${formattedWord}`;
            } else {
                password =
                    this.customWordPosition === 'start'
                        ? `${formattedWord}${password}`
                        : `${password}${formattedWord}`;
            }
        }

        return password;
    }

    updateStrength() {
        const firstInput = this.passwordList.querySelector('.password-output');
        if (!firstInput) return;

        const score = calculateStrength({ password: firstInput.value, isWordMode: this.isWordMode() });
        this.updateStrength(score);
    }

    updateStrength(score) {
        const { text, color } = strengthMeta(score);
        this.strengthText.textContent = text;
        this.strengthText.style.color = color;
        this.strengthDot.style.background = color;
    }

    async copyToClipboard(input, copyBtn) {
        const password = input.value;
        if (!password) return;

        try {
            await navigator.clipboard.writeText(password);
            this.showCopyFeedback(copyBtn);
        } catch (err) {
            this.fallbackCopyTextToClipboard(password, copyBtn);
        }
    }

    fallbackCopyTextToClipboard(text, copyBtn) {
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
            this.showCopyFeedback(copyBtn);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    showCopyFeedback(copyBtn) {
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 1000);
    }

    animatePasswordInput(input) {
        input.style.transform = 'scale(1.01)';
        setTimeout(() => {
            input.style.transform = '';
        }, 200);
    }

    toggleMemorableInfo() {
        const memorableInfo = document.getElementById('memorableInfo');
        const rhymingInfo = document.getElementById('rhymingInfo');
        const objectsInfo = document.getElementById('objectsInfo');

        if (this.options.humanMemorable.checked) {
            memorableInfo.style.display = 'flex';
            rhymingInfo.style.display = 'none';
            objectsInfo.style.display = 'none';
        } else if (this.options.rhymingPassword.checked && this.options.objectsOnly.checked) {
            memorableInfo.style.display = 'none';
            rhymingInfo.style.display = 'flex';
            objectsInfo.style.display = 'flex';
        } else if (this.options.rhymingPassword.checked) {
            memorableInfo.style.display = 'none';
            rhymingInfo.style.display = 'flex';
            objectsInfo.style.display = 'none';
        } else if (this.options.objectsOnly.checked) {
            memorableInfo.style.display = 'none';
            rhymingInfo.style.display = 'none';
            objectsInfo.style.display = 'flex';
        } else {
            memorableInfo.style.display = 'none';
            rhymingInfo.style.display = 'none';
            objectsInfo.style.display = 'none';
        }
    }

    toggleDropdown(type) {
        const dropdowns = {
            tips: {
                btn: this.tipsDropdownBtn,
                content: this.tipsDropdownContent
            },
            security: {
                btn: this.securityDropdownBtn,
                content: this.securityDropdownContent
            }
        };

        const dropdown = dropdowns[type];
        if (!dropdown) return;

        const isExpanded = dropdown.btn.getAttribute('aria-expanded') === 'true';

        Object.keys(dropdowns).forEach((key) => {
            if (key !== type) {
                dropdowns[key].btn.setAttribute('aria-expanded', 'false');
                dropdowns[key].content.hidden = true;
            }
        });

        dropdown.btn.setAttribute('aria-expanded', !isExpanded);
        dropdown.content.hidden = isExpanded;
    }

    renderTipCard(tip) {
        return `
            <div class="memory-tip-card">
                <div class="memory-tip-title">
                    <span>${tip.icon}</span>
                    ${tip.title}
                </div>
                <div class="memory-tip-description">${tip.description}</div>
            </div>
        `;
    }

    populateDropdowns() {
        this.tipsContentInner.innerHTML = `
            <div class="tips-list">
                ${memoryTechniques.map((tip) => this.renderTipCard(tip)).join('')}
            </div>
        `;

        this.securityContentInner.innerHTML = `
            <div class="tips-list">
                ${securityTips.map((tip) => this.renderTipCard(tip)).join('')}
            </div>
        `;

        const passwordTypeInfo = document.getElementById('passwordTypeTips');
        if (passwordTypeInfo) {
            passwordTypeInfo.innerHTML = passwordTypeTips
                .map(
                    (tip) => `
                    <div class="memory-tip-card compact">
                        <div class="memory-tip-title">
                            <span>${tip.icon}</span>
                            ${tip.title}
                        </div>
                        <div class="memory-tip-description">${tip.description}</div>
                    </div>
                `
                )
                .join('');
        }
    }
}

export default PasswordController;
