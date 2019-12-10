import Model from './model';
import Notifier from './notifier';

export class Proxy extends Model {
    constructor() {
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
