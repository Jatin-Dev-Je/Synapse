import Logger from '../utils/logger';

interface QueueMessage {
  type: string;
  payload: Record<string, any>;
}

class MessageQueue {
  private queue: QueueMessage[] = [];

  public async publish(message: QueueMessage): Promise<void> {
    try {
      this.queue.push(message);
      Logger.info(`Message published to queue: ${message.type}`);
    } catch (error) {
      Logger.error(`Message queue publish error: ${error}`);
      throw error;
    }
  }

  public async subscribe(type: string, callback: (message: QueueMessage) => Promise<void>): Promise<void> {
    try {
      Logger.info(`Subscribed to message type: ${type}`);
    } catch (error) {
      Logger.error(`Message queue subscribe error: ${error}`);
      throw error;
    }
  }
}

export default new MessageQueue();
