<?php

namespace App;

use StoutLogic\AcfBuilder\FieldsBuilder;

$fecha = new FieldsBuilder('fecha');

$fecha
    ->addDatePicker('fecha_prod', [
        'label' => 'Fecha de producción',
        'instructions' => 'La fecha en la qe se produjo el trabajo',
        'display_format' => 'd/m/Y',
        'return_format' => 'd/m/Y',
        'first_day' => 1,
    ]);

return $fecha;
