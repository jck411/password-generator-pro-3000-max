export const strengthMetaByLength = (password) => {
    if (!password) return { text: 'Weak', color: '#e05252' };

    const length = password.length;

    // Classification based on length matching the modal guidelines exactly:
    // Weak: < 12 chars
    // Fair: 12-14 chars
    // Strong: 15-19 chars
    // Very Strong: 20+ chars
    let level;
    if (length < 12) {
        level = 'Weak';
    } else if (length <= 14) {
        level = 'Fair';
    } else if (length <= 19) {
        level = 'Strong';
    } else {
        level = 'Very Strong';
    }

    // Map to colors
    const colorMap = {
        'Weak': '#e05252',
        'Fair': '#e08c52',
        'Strong': '#e2a84b',
        'Very Strong': '#52c4a0'
    };

    return { text: level, color: colorMap[level] };
};
