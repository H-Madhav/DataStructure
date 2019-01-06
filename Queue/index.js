class Queue {

    constructor() {
        this.data = [];
    };

    add (records) {
        this.data.unshift(records);
    };

    remove () {
        return this.data.pop();
    }
}
