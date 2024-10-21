"use strict";
class ValidationRule {
}
class StringLengthRule {
    constructor(minLen, maxLen) {
        this.minLen = minLen;
        this.maxLen = maxLen;
    }
    validate(value) {
        this.isValid = value.length >= this.minLen && value.length <= this.maxLen;
        return this.isValid;
    }
    getErrorMessage() {
        if (this.isValid) {
            return 'It is a valid string';
        }
        return `String length must be between ${this.minLen} and ${this.maxLen}`;
    }
}
class NumberRangeRule {
    constructor(minRange, maxRange) {
        this.minRange = minRange;
        this.maxRange = maxRange;
    }
    validate(value) {
        this.isValid = value >= this.minRange && value <= this.maxRange;
        return this.isValid;
    }
    getErrorMessage() {
        if (this.isValid) {
            return 'It is a valid number';
        }
        return `Number must be between ${this.minRange} and ${this.maxRange}`;
    }
}
const nameRule = new StringLengthRule(2, 50);
console.log(nameRule.validate("LAA"));
console.log(nameRule.getErrorMessage());
const ageRule = new NumberRangeRule(0, 150);
console.log(ageRule.validate(-2));
console.log(ageRule.getErrorMessage());
