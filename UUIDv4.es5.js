// Utility class for generation UUID version 4 (UUID based on random numbers)
// Pattern: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
// M indicate the UUID version (4)
// N indicate the UUID variant (2 most significant bits are 10)
// https://en.wikipedia.org/wiki/Universally_unique_identifier
// https://www.ietf.org/rfc/rfc4122.txt
var UUIDv4 = (function () {
    function UUIDv4() {
    }
    UUIDv4.initialize = function () {
        UUIDv4.uuid = UUIDv4.uuidMath;
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            UUIDv4.uuid = UUIDv4.uuidNative;
        }
        // ECMAScript 2017 - include when ready
        // UUIDv4.pad = String.prototype.padStart ? UUIDv4.padNative : UUIDv4.padStr;
        UUIDv4.pad = UUIDv4.padStr;
    };
    UUIDv4.generateUUID = function () {
        return this.uuid();
    };
    // 16 bit random number in range 0 - 0xFFFF (inclusive)
    UUIDv4.rnd16 = function () {
        return Math.floor(Math.random() * (0xFFFF + 1));
    };
    UUIDv4.padStr = function (value) {
        var retVal = value.toString(16);
        while (retVal.length < 4) {
            retVal = "0" + retVal;
        }
        return retVal;
    };
    // ECMAScript 2017 - include when specification is ready and implemented
    // private static padNative(value: number): string {
    //    return value.toString(16).padStart(4, "0");
    // }
    UUIDv4.uuidVersion = function (value) {
        return "4" + value.slice(1);
    };
    UUIDv4.uuidVariant = function (value) {
        var v = ['8', '9', 'a', 'b']; // 1000, 1001, 1010, 1011
        // set variant high bits to 10 (value = 10xx)
        var first = parseInt(value.charAt(0), 16);
        return v[first & 0x3] + value.slice(1);
        // return (((first & 0x3) | 0x8).toString(16)) + value.slice(1);
    };
    UUIDv4.uuidMath = function () {
        var buffer = new Uint16Array([this.rnd16(), this.rnd16(), this.rnd16(), this.rnd16(), this.rnd16(),
            this.rnd16(), this.rnd16(), this.rnd16()]);
        return this.format(buffer);
    };
    UUIDv4.uuidNative = function () {
        var buffer = new Uint16Array(8);
        window.crypto.getRandomValues(buffer);
        return this.format(buffer);
    };
    UUIDv4.format = function (buffer) {
        return [this.pad(buffer[0]) + this.pad(buffer[1]), this.pad(buffer[2]), this.uuidVersion(this.pad(buffer[3])),
            this.uuidVariant(this.pad(buffer[4])), this.pad(buffer[5]) + this.pad(buffer[6]) + this.pad(buffer[7])].join("-");
    };
    return UUIDv4;
}());
UUIDv4.initialize();

/**
 * Generated bundle index. Do not edit.
 */

export { UUIDv4 };
