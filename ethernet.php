<?php
class ethernet{
 public $link='';
 function __construct($current, $voltage){
  $this->connect();
  $this->storeInDB($current, $voltage);
 }
 
 function connect(){
  $this->link = mysqli_connect('localhost','root','') or die('Cannot connect to the DB');
  mysqli_select_db($this->link,'restapi') or die('Cannot select the DB');
 }
 
 function storeInDB($current, $voltage){
  $query = "insert into ethernet set voltage='".$voltage."', current='".$current."'";
  $result = mysqli_query($this->link,$query) or die('Errant query:  '.$query);
 }
 
}
if($_GET['current'] != '' and  $_GET['voltage'] != ''){
 $ethernet=new ethernet($_GET['current'],$_GET['voltage']);
}
?>