"use strict";
class Singleton {
    constructor() {
    }
    static getInstace() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
//     public someBu
// }
//# sourceMappingURL=Singleton.js.map