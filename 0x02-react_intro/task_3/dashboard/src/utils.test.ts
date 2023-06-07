import '@testing-library/jest-dom';
import { getFooterCopy, getFullYear, getLatestNotification } from './utils'


describe('getFooterCopy tests', () => {
    it("expected with true as argument", () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('expected with false as argument', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
})

describe('getFullYear tests', () => {
    it('should return the current year', () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    })
})

describe('getLatestNotification tests', () => {
    it('expected correct string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
})
