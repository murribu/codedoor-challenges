/**
 * Converts a string of 64 characters to a list of 8 bytes.
 *
 * If the character is a '●', its bit value is 1, every other character is 0.
 *
 * ● => 1
 * ◯ => 0
 *
 * So a series of these characters '●◯●◯●◯●◯' becomes a series of these bits 10101010
 *
 * Every 8 characters produce one byte.
 *
 * Note: The characters in the string represent bits from left to right, but bits in a number
 * are ordered from right to left.
 *
 * See __test__/01/pattern-converter.spec.js for tests.
 *
 * FIXME: Implement this to pass challenge 01.
 *
 * @param {string} str The input string
 * @returns {number[]} Returns the bytes in a list.
 */
exports.patternConverter = str => {
}
