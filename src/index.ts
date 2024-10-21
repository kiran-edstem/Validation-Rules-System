abstract class ValidationRule<T> {
    abstract validate(value: T): boolean;
    abstract getErrorMessage(value: T): string;
}

class StringLengthRule implements ValidationRule<string> {
    constructor(private minLen: number, private maxLen: number) {
        if (minLen > maxLen) {
            throw new Error("Min Length cannot be greater than max length");
        }
    }
    validate(value: string): boolean {
        return value.length >= this.minLen && value.length <= this.maxLen;
    }
    getErrorMessage(value: string): string {
        if (value.length < this.minLen) {
            return `String length must be at least ${this.minLen}`;
        }
        if (value.length > this.maxLen) {
            return `String length must not exceed ${this.maxLen}`;
        }
        return "";
    }
}


class NumberRangeRule implements ValidationRule<number> {
    constructor(public minRange: number, public maxRange: number) {
    }
    validate(value: number): boolean {
        return value >= this.minRange && value <= this.maxRange;
    }
    getErrorMessage(value: number): string {
        if (value < this.minRange) {
            return `Number must be at least ${this.minRange}`;
        }
        if (value > this.maxRange) {
            return `Number must not exceed ${this.maxRange}`;
        }
        return "";
    }
}

const nameRule: StringLengthRule = new StringLengthRule(2, 50);
console.log(nameRule.validate("LAA"));
console.log(nameRule.getErrorMessage("LAA"));

const ageRule: NumberRangeRule = new NumberRangeRule(0, 150);
console.log(ageRule.validate(2));
console.log(ageRule.getErrorMessage(2));