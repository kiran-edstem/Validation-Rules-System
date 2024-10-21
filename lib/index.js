"use strict";
class ValidationRule {
}
class StringLengthRule {
    constructor(minLen, maxLen) {
        this.minLen = minLen;
        this.maxLen = maxLen;
        if (minLen > maxLen) {
            throw new Error("Min Length cannot be greater than max length");
        }
    }
    validate(value) {
        return value.length >= this.minLen && value.length <= this.maxLen;
    }
    getErrorMessage(value) {
        if (value.length < this.minLen) {
            return `String length must be at least ${this.minLen}`;
        }
        if (value.length > this.maxLen) {
            return `String length must not exceed ${this.maxLen}`;
        }
        return "";
    }
}
class NumberRangeRule {
    constructor(minRange, maxRange) {
        this.minRange = minRange;
        this.maxRange = maxRange;
    }
    validate(value) {
        return value >= this.minRange && value <= this.maxRange;
    }
    getErrorMessage(value) {
        if (value < this.minRange) {
            return `Number must be at least ${this.minRange}`;
        }
        if (value > this.maxRange) {
            return `Number must not exceed ${this.maxRange}`;
        }
        return "";
    }
}
const nameRule = new StringLengthRule(2, 50);
console.log(nameRule.validate("LAA"));
console.log(nameRule.getErrorMessage("LAA"));
const ageRule = new NumberRangeRule(0, 150);
console.log(ageRule.validate(2));
console.log(ageRule.getErrorMessage(2));
