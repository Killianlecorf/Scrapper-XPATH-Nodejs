const xpath = require('xpath-html');

const getDocument = async (pageNumber) => {
    try {
            const response = await fetch('http://vps-a47222b1.vps.ovh.net:8484/Product/page/' + pageNumber )
            const page = await response.text();
            const document = xpath.fromPageSource(page)
            return document; 
    } catch (error) {
        console.log(error);
    }
}

const getPages = async () => {
    let pages = []
    for (let pageNumber = 1; pageNumber <= 8; pageNumber++) {
        const document = await getDocument(pageNumber)  
        pages.push(document)     
    }
    return pages
}

const getElement = async () => {
    const pages = await getPages();
    const document = await getDocument(1);
    const element = document.findElement("//a[@class='btn btn-primary'][starts-with(@href, '/product/')]")?.getText()
    return element;
}

const getPagesLinks = async () => {
    const pages = await getPages();
    const pagesButtons = pages.map( page => page.findElements("//a[@class='btn btn-primary'][starts-with(@href, '/product/')]") )
    
    let pagesLinks = [];
    for (const pageButtons of pagesButtons) {
        const links = pageButtons.map( button => button.getAttribute('href'))
        pagesLinks = [...pagesLinks, ...links]
    }
    console.log(pagesLinks);
    return pagesLinks
}

getPagesLinks()