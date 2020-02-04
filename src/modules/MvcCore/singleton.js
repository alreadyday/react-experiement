class MvcSingleton {
  static set(singleton) {
    MvcSingleton.instance = singleton;
  }
  static get() {
    return MvcSingleton.instance;
  }
}

MvcSingleton.instance = null;
export default MvcSingleton;
