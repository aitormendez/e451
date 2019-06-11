<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$trabajo = new FieldsBuilder('trabajo');

$trabajo
    ->setLocation('post_type', '==', 'trabajo');

$trabajo
    ->addFields(get_field_partial('partials.fecha'));

return $trabajo;
