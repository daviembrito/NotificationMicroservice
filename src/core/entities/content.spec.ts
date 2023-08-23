import { Content } from './content';

describe('Content value object', () => {
  it('should be able to create a Content', () => {
    const content = new Content('abcdef');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a Content with length smaller than 5 characters', () => {
    expect(() => new Content('')).toThrow();
  });

  it('should not be able to create a Content with length greater than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
