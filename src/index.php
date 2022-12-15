<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Original Tee | Accueil</title>
    <link rel="stylesheet" href="../src/style/style.css">
    <link rel="icon" href="../Assets/img/logo.png">
</head>

<body>
    <?php
        include './decodeJson.php';
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

    <section class="body-area">
        <div class="body-content">
            <?php
                echo viewArticle();
            ?>
        </div>
    </section>
</body>

</html>