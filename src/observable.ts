import { Observer } from "./observer";

/**
 * Interface for observable classes
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

