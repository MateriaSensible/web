Drupal.behaviors.openlayers_behavior_keyboarddefaults=function(context){var data=$(context).data('openlayers');if(data&&data.map.behaviors['openlayers_behavior_keyboarddefaults']){var control=new OpenLayers.Control.KeyboardDefaults();data.openlayers.addControl(control);control.activate();}}