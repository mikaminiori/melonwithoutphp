<?php
    //Database Information
	$dbname='phpdb';
	$host='php.ci5vjjwa5osw.ap-northeast-1.rds.amazonaws.com';
	$hostname='root';
	$password='E0M6g2b4r';
	$port='3306';

    // global variable
    $MAX_TEXT_NUM = 50;	//テキストボックスの最大入力文字数
	$MAX_NAME_NUM = 30;	//名前の最大入力文字数
    $MIN_NAME_NUM = 3;	//名前の最小入力文字数
    $MAX_PASS_NUM = 30;	//パスワードの最大入力文字数
    $MIN_PASS_NUM = 3;	//パスワードの最小入力文字数

    //Table
	$TABLE_USER = 'melon_user';	// User table
	$TABLE_MUSIC = 'melon_music';	// Music table

    //Session key
    $SESSION_USER_NAME = "MelOnUserName";

    // Display error
    ini_set("display_errors", On);
    error_reporting(E_ALL);
?>