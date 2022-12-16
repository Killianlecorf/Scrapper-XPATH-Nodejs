<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style/styleProduct.css">
</head>
<body>
        <?php
            require './getLink.php'
        ?>

    <header class="header-area">
        <section class="header-content">
            <div class="logo-header-content">
                <a class="link-logo" href="./index.php"><img class="logo-header" src="../Assets/img/logo.png" alt="OrignalTee"></a>
            </div>
            <div class="title-header-content">
                <h1 class="title-header">Orignal TEE</h1>
            </div>
        </section>
    </header>

    <div class="pageProduct">
        <?php
            echo GetId()
        ?>
    </div>

</body>
</html>