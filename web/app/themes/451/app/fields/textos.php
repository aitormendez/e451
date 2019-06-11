<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$texto = new FieldsBuilder('texto');

$texto
    ->setLocation('post_type', '==', 'texto');

$texto
    ->addFields(get_field_partial('partials.fecha'));

return $texto;
