const xpath = require('xpath-html');
const fs =  require('fs/promises');

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


const getPagesLinks = async () => {
    const pages = await getPages();
    const pagesButtons = pages.map( page => page.findElements("//a[@class='btn btn-primary'][starts-with(@href, '/product/')]") )
    
    let pagesLinks = [];
    for (const pageButtons of pagesButtons) {
        const links = pageButtons.map( button => button.getAttribute('href'))
        pagesLinks = [...pagesLinks, ...links]
    }
    return pagesLinks
}


const getProducts = async () => {
    const pagesLinks = await getPagesLinks()
    let produits = []
    for (const link of pagesLinks) {
        const response = await fetch('http://vps-a47222b1.vps.ovh.net:8484' + link)  
        const page = await response.text();
        const document = xpath.fromPageSource(page)
        const title = document.findElement("//h1").getText();
        const desc = document.findElement("//div[@class='p-1']/p").getText();
        const img = document.findElement("//div[@class='d-flex']/img").getAttribute('src');
        const price = document.findElement("//h3").getText().trim();
        produits.push({desc , title , img , price })
    }
    return produits;
}

const scrapShop = async () => {
    const produits = await getProducts()
    const jsonPrice = JSON.stringify({produits}, null, 4)
    
    try {
        await fs.writeFile('../data.json', jsonPrice);
      } catch (err) {
        console.log(err);
      }
}

scrapShop()