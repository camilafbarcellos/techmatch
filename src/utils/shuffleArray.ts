/*
    Fisher-Yates Sorting Algorithm using TypeScript generics
    Complexity: O(n)
    Font: https://www.freecodecamp.org/news/how-to-shuffle-an-array-of-items-using-javascript-or-typescript/
*/
export const shuffleArray = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap values using array destructuring
    }
    return array;
}