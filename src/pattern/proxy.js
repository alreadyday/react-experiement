import Model from "./model";
import Notifier from "./notifier";

export default class Proxy extends Model {
  constructor(param) {
    super(param);
    this.notifier = new Notifier();
  }

  set(data) {
    this.notifier.send(data);
  }

  registerObserver(callback) {
    this.notifier.registerObserver(callback);
  }

  unregisterObserver(callback) {
    this.notifier.unregisterObserver(callback);
  }
}
