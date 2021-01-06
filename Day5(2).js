/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, a, p) {
    const sqroot = (p ** 2 - 16 * a) ** 0.5;
    return [-1, 1].map(s => (p + s * sqroot) / 4);
}