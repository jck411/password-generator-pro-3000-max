// Word lists for human-memorable passwords
const WORD_LISTS = {
    adjectives: [
        'bright', 'swift', 'brave', 'calm', 'clever', 'eager', 'fair', 'gentle', 'happy', 'kind',
        'lively', 'noble', 'proud', 'quick', 'royal', 'smart', 'tough', 'wise', 'young', 'bold',
        'clean', 'cool', 'crisp', 'deep', 'dry', 'fresh', 'grand', 'great', 'hot', 'icy',
        'large', 'light', 'long', 'loud', 'new', 'old', 'plain', 'rich', 'round', 'sharp',
        'short', 'silent', 'simple', 'smooth', 'soft', 'solid', 'strong', 'sweet', 'tall', 'thick',
        'thin', 'warm', 'wild', 'wooden', 'yellow', 'purple', 'green', 'blue', 'red', 'orange'
    ],

    nouns: {
        animals: [
            'eagle', 'tiger', 'lion', 'wolf', 'bear', 'fox', 'hawk', 'owl', 'deer', 'whale',
            'shark', 'dolphin', 'dragon', 'phoenix', 'unicorn', 'butterfly', 'bee', 'ant', 'spider', 'snake',
            'horse', 'cat', 'dog', 'mouse', 'rabbit', 'elephant', 'giraffe', 'zebra', 'panda', 'koala',
            'penguin', 'seal', 'otter', 'dove', 'sparrow', 'raven', 'swan', 'falcon', 'lynx', 'leopard'
        ],

        nature: [
            'mountain', 'river', 'forest', 'ocean', 'desert', 'valley', 'canyon', 'meadow', 'prairie', 'island',
            'waterfall', 'cave', 'cliff', 'beach', 'shore', 'lagoon', 'spring', 'lake', 'pond', 'stream',
            'sunset', 'sunrise', 'thunder', 'lightning', 'rainbow', 'storm', 'breeze', 'wind', 'cloud', 'star',
            'moon', 'comet', 'asteroid', 'galaxy', 'planet', 'satellite', 'meteor', 'nebula', 'cosmos', 'universe'
        ],

        objects: [
            // Gems & Metals
            'crystal', 'diamond', 'emerald', 'ruby', 'sapphire', 'pearl', 'gold', 'silver', 'iron', 'steel',
            'copper', 'bronze', 'platinum', 'titanium', 'cobalt', 'nickel', 'brass', 'chrome', 'jade', 'opal',
            'topaz', 'garnet', 'onyx', 'quartz', 'amber', 'coral', 'marble', 'granite', 'obsidian', 'turquoise',
            // Buildings & Structures
            'mirror', 'window', 'door', 'gate', 'bridge', 'tower', 'castle', 'temple', 'shrine', 'altar',
            'palace', 'fortress', 'mansion', 'cabin', 'cottage', 'vault', 'dome', 'arch', 'pillar', 'column',
            'wall', 'fence', 'rail', 'stair', 'ladder', 'ramp', 'tunnel', 'bunker', 'barn', 'mill',
            // Weapons & Armor
            'crown', 'sword', 'shield', 'armor', 'helmet', 'boots', 'cloak', 'ring', 'amulet', 'talisman',
            'dagger', 'spear', 'lance', 'mace', 'axe', 'bow', 'arrow', 'blade', 'hilt', 'sheath',
            'gauntlet', 'greave', 'breastplate', 'chainmail', 'buckler', 'quiver', 'crossbow', 'staff', 'wand', 'orb',
            // Books & Documents  
            'book', 'scroll', 'map', 'compass', 'anchor', 'ship', 'boat', 'carriage', 'rocket', 'machine',
            'letter', 'journal', 'diary', 'ledger', 'chart', 'blueprint', 'sketch', 'canvas', 'portrait', 'statue',
            // Containers & Tools
            'chest', 'box', 'crate', 'barrel', 'jar', 'vase', 'pot', 'pan', 'kettle', 'cup',
            'bowl', 'plate', 'tray', 'basket', 'sack', 'pouch', 'purse', 'wallet', 'case', 'trunk',
            'hammer', 'nail', 'screw', 'bolt', 'wrench', 'plier', 'saw', 'drill', 'file', 'chisel',
            // Furniture & Household
            'chair', 'table', 'desk', 'bench', 'stool', 'couch', 'bed', 'shelf', 'drawer', 'cabinet',
            'lamp', 'candle', 'torch', 'lantern', 'clock', 'bell', 'horn', 'drum', 'flute', 'harp',
            'carpet', 'curtain', 'pillow', 'blanket', 'quilt', 'towel', 'rug', 'mat', 'frame', 'veil',
            // Vehicles & Transport
            'wheel', 'cart', 'wagon', 'sled', 'raft', 'canoe', 'yacht', 'barge', 'ferry', 'train',
            'plane', 'bike', 'scooter', 'skateboard', 'surfboard', 'kayak', 'glider', 'balloon', 'parachute', 'drone',
            // Misc Objects
            'coin', 'medal', 'trophy', 'badge', 'seal', 'stamp', 'token', 'charm', 'pendant', 'brooch',
            'needle', 'thread', 'ribbon', 'lace', 'bead', 'button', 'zipper', 'buckle', 'clasp', 'hook',
            'key', 'lock', 'chain', 'rope', 'wire', 'cable', 'pipe', 'tube', 'hose', 'valve'
        ],

        colors: [
            'scarlet', 'crimson', 'vermilion', 'ruby', 'burgundy', 'maroon', 'amber', 'golden', 'bronze', 'copper',
            'emerald', 'jade', 'forest', 'sage', 'mint', 'olive', 'teal', 'turquoise', 'cyan', 'azure',
            'sapphire', 'cobalt', 'indigo', 'violet', 'lavender', 'magenta', 'fuchsia', 'rose', 'pink', 'peach',
            'ivory', 'cream', 'beige', 'tan', 'khaki', 'charcoal', 'slate', 'pewter', 'platinum', 'pearl'
        ]
    },

    verbs: [
        'run', 'jump', 'fly', 'swim', 'climb', 'dance', 'sing', 'laugh', 'smile', 'dream',
        'hope', 'believe', 'create', 'build', 'forge', 'craft', 'shape', 'form', 'mold', 'bend',
        'break', 'heal', 'protect', 'guard', 'watch', 'guard', 'search', 'find', 'discover', 'explore',
        'travel', 'journey', 'venture', 'wander', 'roam', 'hunt', 'chase', 'follow', 'lead', 'guide'
    ],

    numbers: [
        'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
        'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million'
    ]
};

// Rhyming word families for rhyming passwords
const RHYME_FAMILIES = {
    ay: ['day', 'way', 'stay', 'play', 'say', 'ray', 'bay', 'gray', 'pay', 'may', 'clay', 'stray', 'sway', 'spray', 'decay', 'delay', 'display', 'array', 'portray', 'relay'],
    ight: ['light', 'night', 'bright', 'right', 'sight', 'flight', 'knight', 'might', 'fight', 'tight', 'white', 'slight', 'height', 'delight', 'ignite', 'unite', 'excite', 'polite', 'insight', 'moonlight'],
    ing: ['ring', 'king', 'sing', 'spring', 'wing', 'bring', 'swing', 'sting', 'string', 'fling', 'cling', 'thing', 'lightning', 'sterling', 'sparkling', 'dazzling', 'gleaming', 'streaming', 'dreaming', 'beaming'],
    ow: ['flow', 'glow', 'show', 'snow', 'grow', 'throw', 'blow', 'slow', 'low', 'row', 'know', 'shadow', 'rainbow', 'window', 'meadow', 'arrow', 'hollow', 'follow', 'borrow', 'tomorrow'],
    all: ['call', 'fall', 'tall', 'ball', 'wall', 'hall', 'small', 'mall', 'stall', 'thrall', 'recall', 'install', 'waterfall', 'crystal', 'metal', 'petal', 'portal', 'mortal', 'coastal', 'royal'],
    ake: ['lake', 'make', 'take', 'wake', 'shake', 'break', 'stake', 'drake', 'snake', 'flake', 'cake', 'bake', 'awake', 'mistake', 'earthquake', 'snowflake', 'overtake', 'undertake', 'partake', 'remake'],
    ound: ['sound', 'ground', 'round', 'found', 'bound', 'pound', 'mound', 'hound', 'wound', 'surround', 'profound', 'compound', 'background', 'playground', 'underground', 'battleground', 'astound', 'resound', 'rebound', 'unbound'],
    ream: ['dream', 'stream', 'cream', 'team', 'beam', 'gleam', 'steam', 'scheme', 'theme', 'extreme', 'supreme', 'redeem', 'esteem', 'moonbeam', 'sunbeam', 'daydream', 'mainstream', 'downstream', 'upstream', 'iceream'],
    ire: ['fire', 'wire', 'hire', 'tire', 'spire', 'empire', 'inspire', 'desire', 'retire', 'admire', 'acquire', 'require', 'entire', 'attire', 'expire', 'vampire', 'sapphire', 'campfire', 'bonfire', 'wildfire'],
    ace: ['space', 'place', 'race', 'face', 'grace', 'trace', 'chase', 'base', 'case', 'pace', 'embrace', 'replace', 'surface', 'palace', 'terrace', 'interface', 'fireplace', 'marketplace', 'starbase', 'moonbase'],
    ine: ['shine', 'line', 'mine', 'pine', 'vine', 'fine', 'wine', 'sign', 'divine', 'combine', 'design', 'define', 'decline', 'refine', 'alpine', 'skyline', 'sunshine', 'moonshine', 'coastline', 'timeline'],
    ower: ['power', 'tower', 'flower', 'hour', 'shower', 'devour', 'empower', 'superpower', 'sunflower', 'wildflower', 'watchtower', 'clocktower', 'firepower', 'manpower', 'willpower', 'horsepower', 'brainpower', 'starpower', 'bellflower', 'moonflower'],
    orm: ['storm', 'form', 'warm', 'swarm', 'charm', 'farm', 'harm', 'arm', 'alarm', 'transform', 'reform', 'perform', 'inform', 'conform', 'uniform', 'platform', 'brainstorm', 'thunderstorm', 'firestorm', 'snowstorm'],
    aze: ['blaze', 'maze', 'haze', 'gaze', 'phase', 'craze', 'graze', 'praise', 'raise', 'amaze', 'ablaze', 'starbase', 'trailblaze', 'sunrays', 'always', 'sideways', 'pathways', 'doorways', 'highways', 'airways']
};

// Rhyming object families - objects that rhyme with each other
const RHYMING_OBJECTS = {
    ade: ['blade', 'jade', 'spade', 'braid', 'shade', 'arcade', 'cascade', 'parade', 'stockade', 'barricade'],
    ail: ['rail', 'nail', 'mail', 'pail', 'sail', 'trail', 'grail', 'flail', 'chain-mail', 'guardrail'],
    ake: ['cake', 'stake', 'flake', 'brake', 'rake', 'snowflake', 'keepsake', 'handshake', 'namesake', 'cupcake'],
    all: ['ball', 'wall', 'hall', 'mall', 'stall', 'crystal-ball', 'cannonball', 'basketball', 'football', 'pinball'],
    ane: ['cane', 'plane', 'crane', 'chain', 'pane', 'membrane', 'propane', 'windowpane', 'weathervane', 'monoplane'],
    ar: ['car', 'bar', 'jar', 'star', 'guitar', 'cigar', 'radar', 'boxcar', 'streetcar', 'handlebar'],
    ard: ['card', 'guard', 'shard', 'yard', 'board', 'placard', 'flashcard', 'scorecard', 'postcard', 'billboard'],
    art: ['cart', 'dart', 'chart', 'tart', 'heart', 'smart-card', 'pushcart', 'flowchart', 'oxcart', 'go-kart'],
    ase: ['case', 'vase', 'base', 'chase', 'brace', 'briefcase', 'suitcase', 'staircase', 'bookcase', 'pillowcase'],
    ell: ['bell', 'shell', 'cell', 'well', 'spell', 'doorbell', 'dumbbell', 'eggshell', 'seashell', 'nutshell'],
    est: ['chest', 'nest', 'vest', 'crest', 'quest', 'armrest', 'footrest', 'headrest', 'bird-nest', 'treasure-chest'],
    ock: ['clock', 'lock', 'block', 'dock', 'rock', 'padlock', 'deadlock', 'keylock', 'roadblock', 'cinder-block'],
    oil: ['coil', 'foil', 'soil', 'broil', 'toil', 'tinfoil', 'airfoil', 'hydrofoil', 'turmoil', 'recoil'],
    old: ['gold', 'mold', 'fold', 'hold', 'scroll', 'scaffold', 'threshold', 'blindfold', 'stronghold', 'household'],
    one: ['stone', 'bone', 'cone', 'throne', 'phone', 'gemstone', 'cobblestone', 'milestone', 'cornerstone', 'headstone'],
    ool: ['pool', 'tool', 'stool', 'spool', 'jewel', 'handtool', 'footstool', 'whirlpool', 'cesspool', 'carpool'],
    oom: ['room', 'loom', 'broom', 'bloom', 'plume', 'ballroom', 'bedroom', 'bathroom', 'showroom', 'mushroom'],
    ord: ['cord', 'sword', 'board', 'ford', 'horde', 'keyboard', 'clipboard', 'dashboard', 'skateboard', 'surfboard'],
    ore: ['door', 'store', 'core', 'floor', 'drawer', 'bookstore', 'drugstore', 'seashore', 'trapdoor', 'outdoor'],
    ow: ['bow', 'row', 'arrow', 'window', 'pillow', 'shadow', 'rainbow', 'crossbow', 'elbow', 'bungalow'],
    rown: ['crown', 'gown', 'town', 'brown', 'frown', 'nightgown', 'sundown', 'countdown', 'breakdown', 'showdown'],
    ub: ['tub', 'club', 'hub', 'sub', 'shrub', 'bathtub', 'washtub', 'nightclub', 'flashbulb', 'lightbulb'],
    urn: ['urn', 'churn', 'burn', 'turn', 'fern', 'lantern', 'cistern', 'cavern', 'tavern', 'pattern']
};

// Slider configurations for different modes
const MODE_CONFIGS = {
    regular: { min: 4, max: 64, default: 16, label: "Length" },
    words: { min: 3, max: 12, default: 4, label: "Words" }
};

// Password Generator with Visual Effects
class PasswordGenerator {
    constructor() {
        this.passwordCount = 1;
        this.maxPasswords = 10;
        this.currentMode = 'regular'; // 'regular' or 'words'
        this.initializeElements();
        this.setupEventListeners();
        this.createParticles();
        this.generateAllPasswords();
    }

    initializeElements() {
        this.passwordList = document.getElementById('passwordList');
        this.passwordCountDisplay = document.getElementById('passwordCount');
        this.addPasswordBtn = document.getElementById('addPasswordBtn');
        this.removePasswordBtn = document.getElementById('removePasswordBtn');
        this.lengthSlider = document.getElementById('length');
        this.lengthValue = document.getElementById('lengthValue');
        this.lengthLabelText = document.getElementById('lengthLabelText');
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
            separators: document.getElementById('separators'),
            avoidAmbiguous: document.getElementById('avoidAmbiguous'),
            humanMemorable: document.getElementById('humanMemorable'),
            rhymingPassword: document.getElementById('rhymingPassword'),
            objectsOnly: document.getElementById('objectsOnly')
        };

        // Custom word input
        this.customWordInput = document.getElementById('customWord');
        this.wordPositionStart = document.getElementById('wordPositionStart');
        this.wordPositionEnd = document.getElementById('wordPositionEnd');
        this.customWordPosition = 'start'; // 'start' or 'end'

        // Memory techniques for tips (research-backed)
        this.memoryTechniques = [
            {
                icon: '🔄',
                title: 'Spaced Repetition',
                description: 'This is the most consistently supported approach in memory research: reviewing the same material across spaced intervals beats "cramming," especially for long-term retention. Your "1 hour, 1 day, 1 week" schedule is a reasonable starting pattern. (Source: York University)'
            },
            {
                icon: '🏠',
                title: 'Memory Palace (Method of Loci)',
                description: 'Pick a place you know well (living room, commute). 1) Choose a fixed route with clear stops (door → couch → TV → fridge). 2) Place each item onto a specific location in order. 3) Recall by visualizing the same route and reading off each peg. In classic comparisons of mnemonic techniques, method of loci performs very well, especially for ordered recall. (Source: Psychnet)'
            },
            {
                icon: '🧩',
                title: 'Chunking',
                description: 'Slice your monster passphrase into snack-size chunks—like "correct-horse," "battery-staple," "2026-llamas." Tiny bites are easier to chew. Grouping items into meaningful "chunks" is a foundational, well-supported principle for handling longer sequences. (Source: UT Psychology Labs)'
            },
            {
                icon: '🧊',
                title: 'Dopamine Boost',
                description: 'Separate learning from your reward hit: memorize first, then wait 4+ hours before exercising or having coffee. Research shows aerobic exercise ~4 hours after learning improves memory vs. immediate exercise (van Dongen et al., 2016). Caffeine taken after studying also enhanced 24-hour recall (Borota et al., 2014). Disclaimer: Caffeine is a study buddy. Meth is a life-choices boss fight. Choose accordingly.'
            }
        ];

        // Security tips
        this.securityTips = [
            {
                icon: '🔒',
                title: 'Use a Password Manager',
                description: 'Store passwords in a secure manager like Bitwarden, 1Password, or KeePass.'
            },
            {
                icon: '🚫',
                title: 'Never Reuse Passwords',
                description: 'Each account should have a unique password to prevent chain breaches.'
            },
            {
                icon: '📱',
                title: 'Enable 2FA',
                description: 'Two-factor authentication adds an extra layer of security beyond your password.'
            },
            {
                icon: '📪',
                title: 'Beware of Phishing',
                description: 'Never enter passwords on links from emails – go directly to the website.'
            },
            {
                icon: '🔄',
                title: 'Update Regularly',
                description: 'Change important passwords every 6-12 months, especially for sensitive accounts.'
            },
            {
                icon: '🔍',
                title: 'Check for Breaches',
                description: 'Use haveibeenpwned.com to check if your accounts have been compromised.'
            }
        ];

        // Password type tips
        this.passwordTypeTips = [
            {
                icon: '🧠',
                title: 'Human Memorable',
                description: 'Uses actual words in a pattern (adjective-noun-verb) for easier recall while staying secure.'
            },
            {
                icon: '🎵',
                title: 'Rhyming Passwords',
                description: 'Words that rhyme are naturally easier to remember – like a catchy jingle!'
            },
            {
                icon: '🎁',
                title: 'Objects Only',
                description: 'Physical objects are easy to visualize – imagine them in a scene together.'
            },
            {
                icon: '🎟️',
                title: 'Random Characters',
                description: 'Maximum entropy for critical accounts. Best used with a password manager.'
            },
            {
                icon: '⚡',
                title: 'Avoid Ambiguous',
                description: 'Removes confusing characters (0/O, 1/l/I) for easier typing and reading.'
            },
            {
                icon: '➖',
                title: 'Use Separators',
                description: 'Dashes and underscores make passwords easier to read and type correctly.'
            }
        ];

        // Modal elements - Tips
        this.tipsModalOverlay = document.getElementById('tipsModalOverlay');
        this.tipsModalContent = document.getElementById('tipsModalContent');
        this.tipsBtn = document.getElementById('tipsBtn');
        this.tipsModalClose = document.getElementById('tipsModalClose');

        // Modal elements - Types
        this.typesModalOverlay = document.getElementById('typesModalOverlay');
        this.typesModalContent = document.getElementById('typesModalContent');
        this.typesBtn = document.getElementById('typesBtn');
        this.typesModalClose = document.getElementById('typesModalClose');

        // Modal elements - Security
        this.securityModalOverlay = document.getElementById('securityModalOverlay');
        this.securityModalContent = document.getElementById('securityModalContent');
        this.securityBtn = document.getElementById('securityBtn');
        this.securityModalClose = document.getElementById('securityModalClose');

        this.updateRemoveButtonState();
        this.populateAllModals();
    }

    checkModeAndUpdateSlider() {
        const isWordMode = this.options.humanMemorable.checked || this.options.rhymingPassword.checked || this.options.objectsOnly.checked;
        const newMode = isWordMode ? 'words' : 'regular';

        if (this.currentMode !== newMode) {
            this.currentMode = newMode;
            const config = MODE_CONFIGS[newMode];
            const oldVal = parseInt(this.lengthSlider.value);

            // Convert value to maintain rough equivalence
            let newVal;
            if (newMode === 'words') {
                // converting Chars -> Words (approx dry words avg 5 chars)
                newVal = Math.max(config.min, Math.min(config.max, Math.round(oldVal / 6)));
            } else {
                // converting Words -> Chars
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
            this.lengthLabelText.textContent = `Words`;
            let displayText = `${value}`;
            if (actualLength) {
                displayText += ` <span style="font-size: 0.8em; opacity: 0.7; font-weight: normal;">(Length: ${actualLength})</span>`;
            }
            this.lengthValue.innerHTML = displayText;
        } else {
            this.lengthLabelText.textContent = `Length`;
            this.lengthValue.textContent = value;
        }
    }

    setupEventListeners() {
        // Length slider
        this.lengthSlider.addEventListener('input', () => {
            // While dragging, just show the value (actual length unknown until generated)
            this.updateLengthLabel(this.lengthSlider.value);
            this.generateAllPasswords();
        });

        // Option checkboxes
        Object.entries(this.options).forEach(([key, option]) => {
            option.addEventListener('change', () => {
                // Mutual exclusivity: humanMemorable is exclusive, but rhyming + objectsOnly can combine
                if (key === 'humanMemorable' && option.checked) {
                    this.options.rhymingPassword.checked = false;
                    this.options.objectsOnly.checked = false;
                } else if ((key === 'rhymingPassword' || key === 'objectsOnly') && option.checked) {
                    this.options.humanMemorable.checked = false;
                    // rhyming and objectsOnly can now be combined!
                }

                this.checkModeAndUpdateSlider();
                this.toggleMemorableInfo();
                this.generateAllPasswords();
            });
        });

        // Custom word input
        this.customWordInput.addEventListener('input', () => {
            this.generateAllPasswords();
        });

        // Word position toggle
        this.wordPositionStart.addEventListener('click', () => {
            this.customWordPosition = 'start';
            this.wordPositionStart.classList.add('active');
            this.wordPositionEnd.classList.remove('active');
            this.generateAllPasswords();
        });

        this.wordPositionEnd.addEventListener('click', () => {
            this.customWordPosition = 'end';
            this.wordPositionEnd.classList.add('active');
            this.wordPositionStart.classList.remove('active');
            this.generateAllPasswords();
        });

        // Generate button
        this.generateBtn.addEventListener('click', () => {
            this.generateAllPasswords();
            this.animateButton();
        });

        // Add/Remove password buttons
        this.addPasswordBtn.addEventListener('click', () => this.addPasswordSlot());
        this.removePasswordBtn.addEventListener('click', () => this.removePasswordSlot());

        // Copy button delegation
        this.passwordList.addEventListener('click', (e) => {
            const copyBtn = e.target.closest('.copy-btn');
            if (copyBtn) {
                const passwordSlot = copyBtn.closest('.password-slot');
                const input = passwordSlot.querySelector('.password-output');
                this.copyToClipboard(input, copyBtn);
            }
        });

        // Tips modal
        this.tipsBtn.addEventListener('click', () => this.openModal('tips'));
        this.tipsModalClose.addEventListener('click', () => this.closeModal('tips'));
        this.tipsModalOverlay.addEventListener('click', (e) => {
            if (e.target === this.tipsModalOverlay) {
                this.closeModal('tips');
            }
        });

        // Types modal
        this.typesBtn.addEventListener('click', () => this.openModal('types'));
        this.typesModalClose.addEventListener('click', () => this.closeModal('types'));
        this.typesModalOverlay.addEventListener('click', (e) => {
            if (e.target === this.typesModalOverlay) {
                this.closeModal('types');
            }
        });

        // Security modal
        this.securityBtn.addEventListener('click', () => this.openModal('security'));
        this.securityModalClose.addEventListener('click', () => this.closeModal('security'));
        this.securityModalOverlay.addEventListener('click', (e) => {
            if (e.target === this.securityModalOverlay) {
                this.closeModal('security');
            }
        });

        // Close any modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal('tips');
                this.closeModal('types');
                this.closeModal('security');
            }
        });
    }

    addPasswordSlot() {
        if (this.passwordCount >= this.maxPasswords) return;

        this.passwordCount++;
        this.passwordCountDisplay.textContent = this.passwordCount;

        const newSlot = document.createElement('div');
        newSlot.className = 'password-slot';
        newSlot.dataset.index = this.passwordCount - 1;
        newSlot.innerHTML = `
            <div class="password-display">
                <input type="text" class="password-output" readonly placeholder="Your password will appear here...">
                <div class="password-actions">
                    <button class="copy-btn" title="Copy to clipboard">
                        <span class="copy-icon">📋</span>
                        <span class="copy-text">Copy</span>
                    </button>
                </div>
            </div>
        `;

        this.passwordList.appendChild(newSlot);
        this.generatePasswordForSlot(newSlot);
        this.updateRemoveButtonState();
    }

    removePasswordSlot() {
        if (this.passwordCount <= 1) return;

        const slots = this.passwordList.querySelectorAll('.password-slot');
        slots[slots.length - 1].remove();
        this.passwordCount--;
        this.passwordCountDisplay.textContent = this.passwordCount;
        this.updateRemoveButtonState();
        this.updateStrengthFromFirst();
    }

    updateRemoveButtonState() {
        this.removePasswordBtn.disabled = this.passwordCount <= 1;
        this.addPasswordBtn.disabled = this.passwordCount >= this.maxPasswords;
    }

    generateAllPasswords() {
        const slots = this.passwordList.querySelectorAll('.password-slot');
        let firstPasswordLength = 0;

        slots.forEach((slot, index) => {
            const password = this.generatePasswordForSlot(slot);
            if (index === 0) firstPasswordLength = password.length;
        });

        this.updateLengthLabel(this.lengthSlider.value, firstPasswordLength);
        this.updateStrengthFromFirst();
    }

    generatePasswordForSlot(slot) {
        const input = slot.querySelector('.password-output');
        const password = this.generateSinglePassword();
        input.value = password;
        this.animatePasswordInput(input);
        return password;
    }

    updateStrengthFromFirst() {
        const firstInput = this.passwordList.querySelector('.password-output');
        if (firstInput) {
            this.updateStrength(this.calculateStrength(firstInput.value));
        }
    }

    createParticles() {
        const particlesContainer = document.getElementById('particles');
        const particleCount = 30; // Reduced count

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random size
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';

            particlesContainer.appendChild(particle);
        }
    }

    generateSinglePassword() {
        let password = '';
        const customWord = this.customWordInput.value.trim();
        const isWordMode = this.options.humanMemorable.checked ||
            this.options.rhymingPassword.checked ||
            this.options.objectsOnly.checked;

        if (this.options.rhymingPassword.checked && this.options.objectsOnly.checked) {
            // Generate rhyming objects password (combined mode)
            password = this.generateRhymingObjectsPassword();
        } else if (this.options.rhymingPassword.checked) {
            // Generate rhyming password
            password = this.generateRhymingPassword();
        } else if (this.options.humanMemorable.checked) {
            // Generate human-memorable password
            password = this.generateMemorablePassword();
        } else if (this.options.objectsOnly.checked) {
            // Generate objects-only password
            password = this.generateObjectsOnlyPassword();
        } else {
            // Generate traditional random password
            const length = parseInt(this.lengthSlider.value);
            const charset = this.buildCharset();

            if (charset.length === 0) {
                return '';
            }

            const array = new Uint8Array(length);
            crypto.getRandomValues(array);

            for (let i = 0; i < length; i++) {
                password += charset.charAt(array[i] % charset.length);
            }
        }

        // Append custom word if provided
        if (customWord) {
            let formattedWord = customWord;

            // Apply uppercase styling if enabled
            if (this.options.uppercase.checked && Math.random() > 0.5) {
                formattedWord = formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1);
            }

            if (isWordMode) {
                // For word-based passwords, use a separator
                const separator = this.options.separators.checked ? this.getRandomSeparator() : '';
                if (this.customWordPosition === 'start') {
                    password = formattedWord + separator + password;
                } else {
                    password = password + separator + formattedWord;
                }
            } else {
                // For random passwords, insert at start or end based on preference
                if (this.customWordPosition === 'start') {
                    password = formattedWord + password;
                } else {
                    password = password + formattedWord;
                }
            }
        }

        return password;
    }

    generateMemorablePassword() {
        const wordCount = parseInt(this.lengthSlider.value);
        const includeNumbers = this.options.numbers.checked;
        const includeSymbols = this.options.symbols.checked;
        const useUppercase = this.options.uppercase.checked;

        const words = [];

        // Build phrase structure
        for (let i = 0; i < wordCount; i++) {
            let word = '';

            if (i % 4 === 0) {
                // Adjective
                word = this.getRandomWord(WORD_LISTS.adjectives);
            } else if (i % 4 === 1) {
                // Noun from different categories
                const categories = Object.keys(WORD_LISTS.nouns);
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                word = this.getRandomWord(WORD_LISTS.nouns[randomCategory]);
            } else if (i % 4 === 2) {
                // Verb
                word = this.getRandomWord(WORD_LISTS.verbs);
            } else {
                // Another noun
                const categories = Object.keys(WORD_LISTS.nouns);
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                word = this.getRandomWord(WORD_LISTS.nouns[randomCategory]);
            }

            // Apply capitalization if enabled
            if (useUppercase && Math.random() > 0.5) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }

            words.push(word);
        }

        // Determine separator based on option
        const separator = this.options.separators.checked ? this.getRandomSeparator() : '';
        let password = words.join(separator);

        // Add numbers if enabled
        if (includeNumbers) {
            const numberWords = this.getRandomWord(WORD_LISTS.numbers);
            password += separator + numberWords;
        }

        // Add symbols if enabled
        if (includeSymbols) {
            const symbol = this.getRandomSymbol();
            password += symbol + this.getRandomWord(WORD_LISTS.adjectives);
        }

        return password;
    }

    generateRhymingPassword() {
        const wordCount = parseInt(this.lengthSlider.value);
        const includeNumbers = this.options.numbers.checked;
        const includeSymbols = this.options.symbols.checked;
        const useUppercase = this.options.uppercase.checked;

        // Pick a random rhyme family
        const families = Object.keys(RHYME_FAMILIES);
        const randomFamilyKey = families[Math.floor(Math.random() * families.length)];
        const rhymeFamily = RHYME_FAMILIES[randomFamilyKey];

        // Pick unique words from the rhyme family
        const shuffledFamily = [...rhymeFamily].sort(() => 0.5 - Math.random());
        const selectedWords = shuffledFamily.slice(0, wordCount);

        // Apply capitalization
        const words = selectedWords.map(word => {
            if (useUppercase && Math.random() > 0.5) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });

        // Join with fun separators
        const separator = this.options.separators.checked ? this.getRandomSeparator() : '';
        let password = words.join(separator);

        // Add a number if enabled
        if (includeNumbers) {
            const num = Math.floor(Math.random() * 99) + 1;
            password += separator + num;
        }

        // Add symbols if enabled
        if (includeSymbols) {
            const symbol = this.getRandomSymbol();
            password = symbol + password + symbol;
        }

        return password;
    }

    generateObjectsOnlyPassword() {
        const wordCount = parseInt(this.lengthSlider.value);
        const includeNumbers = this.options.numbers.checked;
        const includeSymbols = this.options.symbols.checked;
        const useUppercase = this.options.uppercase.checked;

        const objectsList = WORD_LISTS.nouns.objects;
        const words = [];

        // Pick random objects
        for (let i = 0; i < wordCount; i++) {
            let word = this.getRandomWord(objectsList);

            // Apply capitalization if enabled
            if (useUppercase && Math.random() > 0.5) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }

            words.push(word);
        }

        // Join with separator
        const separator = this.options.separators.checked ? this.getRandomSeparator() : '';
        let password = words.join(separator);

        // Add a number if enabled
        if (includeNumbers) {
            const num = Math.floor(Math.random() * 99) + 1;
            password += separator + num;
        }

        // Add symbols if enabled
        if (includeSymbols) {
            const symbol = this.getRandomSymbol();
            password = symbol + password + symbol;
        }

        return password;
    }

    generateRhymingObjectsPassword() {
        const wordCount = parseInt(this.lengthSlider.value);
        const includeNumbers = this.options.numbers.checked;
        const includeSymbols = this.options.symbols.checked;
        const useUppercase = this.options.uppercase.checked;

        // Pick a random rhyming objects family
        const families = Object.keys(RHYMING_OBJECTS);
        const randomFamilyKey = families[Math.floor(Math.random() * families.length)];
        const rhymeFamily = RHYMING_OBJECTS[randomFamilyKey];

        // Pick unique words from the rhyme family
        const shuffledFamily = [...rhymeFamily].sort(() => 0.5 - Math.random());
        const selectedWords = shuffledFamily.slice(0, wordCount);

        // Apply capitalization
        const words = selectedWords.map(word => {
            if (useUppercase && Math.random() > 0.5) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        });

        // Join with fun separators
        const separator = this.options.separators.checked ? this.getRandomSeparator() : '';
        let password = words.join(separator);

        // Add a number if enabled
        if (includeNumbers) {
            const num = Math.floor(Math.random() * 99) + 1;
            password += separator + num;
        }

        // Add symbols if enabled
        if (includeSymbols) {
            const symbol = this.getRandomSymbol();
            password = symbol + password + symbol;
        }

        return password;
    }

    getRandomWord(wordList) {
        const array = new Uint8Array(1);
        crypto.getRandomValues(array);
        return wordList[array[0] % wordList.length];
    }

    getRandomSeparator() {
        const separators = ['-', '_', '.', ':', '/', '|', '~', '='];
        const array = new Uint8Array(1);
        crypto.getRandomValues(array);
        return separators[array[0] % separators.length];
    }

    getRandomSymbol() {
        const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '+', '='];
        const array = new Uint8Array(1);
        crypto.getRandomValues(array);
        return symbols[array[0] % symbols.length];
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

        // Special bonus for human-memorable or rhyming passwords
        if (this.options.humanMemorable.checked || this.options.rhymingPassword.checked) {
            // Memorable/Rhyming passwords get a bonus for being easier to remember
            score += 10;

            // Bonus for word-based structure
            const wordCount = password.split(/[-_.:/|~=!@#$%^&*+]/).filter(word => word.length > 2).length;
            if (wordCount >= 3) score += 10;
        }

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

    async copyToClipboard(input, copyBtn) {
        const password = input.value;

        if (!password) {
            return;
        }

        try {
            await navigator.clipboard.writeText(password);
            this.showSuccessMessage();
            this.animateCopyButton(copyBtn);
        } catch (err) {
            // Fallback for older browsers
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
            this.showSuccessMessage();
            this.animateCopyButton(copyBtn);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    showSuccessMessage() {
        this.successMessage.querySelector('span').textContent = '🔥 PASSWORD COPIED TO ULTIMATE CLIPBOARD! 🔥';
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

    animateCopyButton(copyBtn) {
        copyBtn.classList.add('copied');
        copyBtn.querySelector('.copy-text').textContent = 'Copied!';

        setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.querySelector('.copy-text').textContent = 'Copy';
        }, 2000);
    }

    animatePasswordInput(input) {
        input.style.transform = 'scale(1.02)';
        input.style.boxShadow = '0 0 20px rgba(0, 255, 65, 0.5)';

        setTimeout(() => {
            input.style.transform = '';
            input.style.boxShadow = '';
        }, 300);
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
            // Combined mode - show both
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

    // Open a modal by type
    openModal(type) {
        const overlays = {
            tips: this.tipsModalOverlay,
            types: this.typesModalOverlay,
            security: this.securityModalOverlay
        };
        if (overlays[type]) {
            overlays[type].classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Close a modal by type
    closeModal(type) {
        const overlays = {
            tips: this.tipsModalOverlay,
            types: this.typesModalOverlay,
            security: this.securityModalOverlay
        };
        if (overlays[type]) {
            overlays[type].classList.remove('active');
            // Only restore scrolling if no modals are open
            if (!this.tipsModalOverlay.classList.contains('active') &&
                !this.typesModalOverlay.classList.contains('active') &&
                !this.securityModalOverlay.classList.contains('active')) {
                document.body.style.overflow = '';
            }
        }
    }

    // Helper to render a tip card
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

    // Populate all modals
    populateAllModals() {
        // Memory Tips Modal
        this.tipsModalContent.innerHTML = `
            <div class="tips-grid">
                ${this.memoryTechniques.map(tip => this.renderTipCard(tip)).join('')}
            </div>
        `;

        // Password Types Modal
        this.typesModalContent.innerHTML = `
            <div class="tips-grid">
                ${this.passwordTypeTips.map(tip => this.renderTipCard(tip)).join('')}
            </div>
        `;

        // Security Modal
        this.securityModalContent.innerHTML = `
            <div class="tips-grid">
                ${this.securityTips.map(tip => this.renderTipCard(tip)).join('')}
            </div>
        `;
    }
}

// Static background effects only

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PasswordGenerator();

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