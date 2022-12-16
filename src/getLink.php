<?php

require './decodeJson.php';

function GetId()
{
    $listData = decodeJson();
    $products = $listData['produits'];
    $dataPage = $products[$_GET['page']];
    $title = $dataPage['title'];
    $img = $dataPage['img'];
    $price = $dataPage['price'];
    $desc = $dataPage['desc'];
    $htmlproduct = 
    "<div class='title-product-content'>
        <h1>$title</h1>
    </div>
    <div class='product-content'>
        <div class='img-content'>
            <img class='img-product' src='$img' alt=''>
        </div>
        <div class='desc-content'>
            <div class='desc'>
            <p class='description'> $desc </p>
            </div>
            <div class='price-content'>
                <p class='price'>$price</p>
            </div>
        </div>
    </div>";

    return $htmlproduct ;
}