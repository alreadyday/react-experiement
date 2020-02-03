import Model from "./model";
import Notifier from "./notifier";

export default class Proxy extends Model {
  constructor() {
    super();
    this.notifier = new Notifier();
  }

  get() {}

  set() {}

  registerObserver(callback) {
    this.notifier.registerObserver(callback);
  }

  unregisterObserver(callback) {
    this.notifier.unregisterObserver(callback);
  }
}
