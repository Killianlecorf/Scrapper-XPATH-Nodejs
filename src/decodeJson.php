<?php

function decodeJson()
{
    $URL = '../data.json' ;
    $jsonData = file_get_contents($URL);
    $listData = json_decode($jsonData , true);
    return $listData ;
}


function viewArticle() {
    $listData = decodeJson();
    $products = $listData['produits'];
    $htmlProducts = "";
    $index = -1 ;
    foreach ($products as $product) {
        $index = ++$index ;
        $image = $product['img'];
        $title = $product['title'];
        $price = $product['price'];

        $htmlProducts = $htmlProducts . 
        "<a class='link-product' href='pageProduct.php?page=$index'><div class='article-product'>
            <div class='img-Article-product'>
                <img class='img-product' src= '$image'  alt=''>
            </div>
            <div class='info-Article-product'>
                <div class='title-area'>
                    <p class='title-product'>$title</p>
                </div>
                <div class='desc-area'>
                    <p class='desc-product'>$price  </p>
                </div>
            </div>
        </div></a>";
        }
    return $htmlProducts ;
};

?>