class Singleton {
    private static instance: Singleton;

    private constructor() {

    }

    public static getInstace(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

//     public someBu
// }