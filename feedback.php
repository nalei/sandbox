<?php
require_once 'lib/lib.php';
ini_set("display_errors", "Off");
error_reporting(0);
$obFeedback = new Feedback();
$obFeedback->order($_POST);
