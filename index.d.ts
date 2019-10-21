export declare class UUIDv4 {
    private static uuid;
    private static pad;
    static initialize(): void;
    static generateUUID(): string;
    private static rnd16();
    private static padStr(value);
    private static uuidVersion(value);
    private static uuidVariant(value);
    private static uuidMath();
    private static uuidNative();
    private static format(buffer);
}
