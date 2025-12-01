export const validateSearchInput = (input: string): string => {
    if (!input || typeof input !== 'string') return '';

    let sanitized = input.trim();

    sanitized = sanitized.substring(0, 100);
    sanitized = sanitized.replace(/[^\w\s\-./áéíóúñäöüßÁÉÍÓÚÑÄÖÜ]/g, '');

    return sanitized;
};

export const validateOffset = (offset: number): number => {
    const num = parseInt(String(offset), 10);
    return isNaN(num) || num < 0 ? 0 : num;
};

export const validateLimit = (limit: number): number => {
    const num = parseInt(String(limit), 10);
    if (isNaN(num) || num < 1) return 10;
    if (num > 100) return 100;
    return num;
};
