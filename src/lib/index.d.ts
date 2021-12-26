declare module 'primes-and-factors' {
    declare const PF: {
        /**
         * Checks whether the number is prime
         */
        isPrime(number): boolean,
        /**
         * Returns array of prime factors of a number
         */
        getFactors(number): number[],
        /**
         * Returns array of distinct prime factors of a number
         */
        getUniqueFactors(number): number[],
        /**
         * Returns object of primes as keys and exponents as values
         */
        getPrimeExponentObject(number): { [k: number]: number },
        /**
         * Returns array of objects, each object for a prime power factor p^k
         */
        getFrequency(number): { factor:number, times:number }[],
    };
    export default PF;
}
