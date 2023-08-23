export class Content {
  private readonly content: string;

  constructor(content: string) {
    if (!this.isContentLengthValid(content)) {
      throw new Error('Invalid content length');
    }
    this.content = content;
  }

  public get value(): string {
    return this.content;
  }

  private isContentLengthValid(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }
}
