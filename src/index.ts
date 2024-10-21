abstract class ValidationRule<T> {
    abstract validate(value: T): boolean;
    abstract getErrorMessage(): string;
}

class StringLengthRule<T extends string> implements ValidationRule<T> {
    isValid!: boolean
    constructor(public minLen: number, public maxLen: number) {
    }
    validate(value: T): boolean {
        this.isValid = value.length >= this.minLen && value.length <= this.maxLen;
        return this.isValid
    }
    getErrorMessage(): string {
        if (this.isValid) {
            return 'It is a valid string'
        }
        return `String length must be between ${this.minLen} and ${this.maxLen}`
    }
}


class NumberRangeRule<T extends number> implements ValidationRule<T> {
    isValid!: boolean
    constructor(public minRange: number, public maxRange: number) {
    }
    validate(value: T): boolean {
        this.isValid = value >= this.minRange && value <= this.maxRange;
        return this.isValid
    }
    getErrorMessage(): string {
        if (this.isValid) {
            return 'It is a valid number'
        }
        return `Number must be between ${this.minRange} and ${this.maxRange}`
    }
}

const nameRule: StringLengthRule<string> = new StringLengthRule(2, 50);
console.log(nameRule.validate("LAA"));
console.log(nameRule.getErrorMessage());

const ageRule: NumberRangeRule<number> = new NumberRangeRule(0, 150);
console.log(ageRule.validate(-2));
console.log(ageRule.getErrorMessage());