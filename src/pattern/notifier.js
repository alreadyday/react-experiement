export default class Notifier {
  constructor() {
    this.observerList = [];
  }

  registerObserver(callback) {
    this.observerList.push(callback);
  }

  unregisterObserver(callback) {
    const index = this.observerList.indexOf(callback);
    let removedCallback = null;
    if (index !== -1) {
      removedCallback = this.observerList.splice(index, 1);
    }
    return removedCallback;
  }

  send(notifyContent) {
    this.observerList.forEach(observer => {
      observer(notifyContent);
    });
  }
}
