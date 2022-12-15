<?php

require_once './back.json';

class displayJson {

    public $listData ;
    public $jsonData ;
    public $URL ;

    public static function decodeJson()
    {
        $URL = '../data.json' ;
        $jsonData = file_get_contents($URL);
        $listData = json_decode($jsonData);
        echo $listData;
    }
}

?>