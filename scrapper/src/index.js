const xpath = require('xpath-html');

const getDocument = async () => {
    try {
        const response = await fetch('https://liamcariou.fr/#hero')
        const page = await response.text();
        const document = xpath.fromPageSource(page)
        return document;
    } catch (error) {
        console.log(error);
    }
}

const getElement = async () => {
    const document = await getDocument();
    const element = document.findElement('//h1[@class = "text-uppercase"]')?.getText()
    console.log(element);
}

getElement();