function getRandomWord() {
    const words = [
        "Dragon",
        "Castle",
        "River",
        "Knight",
        "Fire",
        "Star",
        "Shadow",
        "Wind",
        "Forest",
        "Moon",
    ];
    return words[Math.floor(Math.random() * words.length)];
}
function generateRandomBook() {
    const title = `${getRandomWord()} ${getRandomWord()}`;
    const author = `Author ${getRandomWord()}`;
    const year = Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900;
    return {
        title,
        author,
        year,
    };
}
export const generateBooks = () => {

   return new Promise((resolve, reject) => {
        console.log("starting to generate books")
        const numberOfBooks = 10_000_000;
        const books = [];
        for (let i = 0; i < numberOfBooks; i++) {
            books.push(generateRandomBook());
        }
        resolve(books);
    });
}