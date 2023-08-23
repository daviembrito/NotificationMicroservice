import { randomUUID } from 'crypto';
import { Content } from './content';

interface NotificationProperties {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private id: string;
  private properties: NotificationProperties;

  constructor(properties: NotificationProperties) {
    this.id = randomUUID();
    this.properties = properties;
  }

  public getId(): string {
    return this.id;
  }

  public getRecipientId(): string {
    return this.properties.recipientId;
  }

  public getContent(): Content {
    return this.properties.content;
  }

  public getCategory(): string {
    return this.properties.category;
  }

  public getReadAt(): Date | null | undefined {
    return this.properties.readAt;
  }

  public getCreatedAt(): Date {
    return this.properties.createdAt;
  }

  public setId(id: string) {
    this.id = id;
  }

  public setRecipientId(recipientId: string) {
    this.properties.recipientId = recipientId;
  }

  public setContent(content: Content) {
    this.properties.content = content;
  }

  public setCategory(category: string) {
    this.properties.category = category;
  }

  public setReadAt(readAt: Date | null | undefined) {
    this.properties.readAt = readAt;
  }
}
