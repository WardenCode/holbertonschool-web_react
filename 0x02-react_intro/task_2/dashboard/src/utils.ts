export function getFullYear(): number  {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex: boolean): string  {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

export function getLatestNotification(): string {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}
