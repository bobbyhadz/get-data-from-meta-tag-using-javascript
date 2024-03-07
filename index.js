console.log('bobbyhadz.com');

const metaTitle = document.querySelector('meta[name="title"]');

// 👇️ <meta name="title" content="Example meta title">
console.log(metaTitle);

// 👇️ Example meta title
console.log(metaTitle.content);

// 👇️ title
console.log(metaTitle.name);

// 👇️ Example meta title
console.log(metaTitle.getAttribute('content'));
