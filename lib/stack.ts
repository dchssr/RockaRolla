type Value = number | string;

class Stack {
    stack: Array<Value>;
    size: number;

    constructor(size: number) {
        if (size < 1) throw new RangeError("invalid stack size");
        else this.size = size;

        this.stack = new Array();
        // new Array(size) prepopulates it, not sets a limit.
    }

    push(datum: Value): Value {
        if (this.stack.length >= this.size)
            throw new Error("RockaRolla stack overflow");
        else {
            this.stack.push(datum);
            return datum;
        }
    }

    peek(): Value {
        return this.stack[this.stack.length - 1];
    }
}

export { Stack };
