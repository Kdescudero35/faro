export const validateSearchInput = (input: string): string => {
    if (!input || typeof input !== 'string') return '';

    return input
        .trim()
        .substring(0, 100)
        .replace(/[^\w\s\-./áéíóúñäöüßÁÉÍÓÚÑÄÖÜ]/g, '');
};

export const validateOffset = (offset: number): number => {
    const num = Number(offset);
    return num >= 0 && !isNaN(num) ? num : 0;
};

export const validateLimit = (limit: number): number => {
    const num = Number(limit);
    if (isNaN(num) || num < 1) return 10;
    return Math.min(num, 100);
};
