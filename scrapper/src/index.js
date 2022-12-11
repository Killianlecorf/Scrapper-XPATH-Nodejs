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
    const document = await getDocument();
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


const getTitle = async () => {
    const pagesLinks = await getPagesLinks()
    for (const link of pagesLinks) {
        const response = await fetch('http://vps-a47222b1.vps.ovh.net:8484' + link)  
        const page = await response.text();
        const document = xpath.fromPageSource(page)
        const title = document.findElement("//h1");
        const titleText = title.getText()
        console.log(titleText);
    }
}

getTitle()

const getDesc = async () => {
    const pagesLinks = await getPagesLinks()
    for (const link of pagesLinks) {
        const response = await fetch('http://vps-a47222b1.vps.ovh.net:8484' + link)  
        const page = await response.text();
        const document = xpath.fromPageSource(page)
        const desc = document.findElement("//div[@class='p-1']/p");
        const descText = desc.getText()
        console.log(descText);
    }
}

getDesc()
