let bookstore = {
  name: "My Books",
  location: "143 cool street",
  books: [
    {
      title: "The Shortest Book in the World",
      totalWords: 8,
      pageTypes: {
        contentPages: {
          total: 1,
          pages: [
            {
              number: 1,
              chapter: 1,
              wordsByLine: [
                ["This", "is", "the", "shortest", "book"], 
                ["in", "the", "world", "."]
              ]
            }
          ]
        },
        creditPages: {
          total: 1,
          pages: [
            {
              number: 2,
              chapter: "Credits",
              wordsByLine: [["by"], ["Me"]]
            },
          ]
        }
      }
    },
    {
      title: "Another Book",

    }
  ]
}

console.log(bookstore.books[0].pageTypes.contentPages.pages[0].wordsByLine[0]);
let person;
function preload(){
  person = loadJSON('./kahoot.json');
}

function setup(){
  console.log(person["name"]);
}