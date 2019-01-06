class Stack {

    constructor() {
        this.data = [];
    };

    add (records) {
        this.data.push(records);
    };

    remove () {
        return this.data.pop();
    }
}
