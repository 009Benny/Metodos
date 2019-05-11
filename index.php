<?php
$modules = array(
  array(
    'type'     => 'cnt_calculator',
    'template' => 'base',
    'title'    => 'Ingresa la funcion',
  ),
  array(
    'type'     => 'block_calculator',
    'template' => 'cientific',
  )
);

require_once './vendor/autoload.php';
$loader = new Twig_Loader_Filesystem('./public/views');
$twig = new Twig_Environment($loader);
echo $twig->render('Content/Login.html.twig',array(
  'title'   => 'Calculadora con Metodos Numericos',
  'modules' => $modules,
));
?>
