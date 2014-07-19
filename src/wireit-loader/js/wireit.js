/* This file is auto-generated by src/loader/scripts/meta_join.js */

YUI().use(function(Y) {
   var CONFIG = {
      groups: {
         'wireit': {
            base: 'wireit/src/',
            combine: false,
            modules: {
    "arrow-wire": {
        "requires": [
            "wire-base"
        ]
    },
    "bezier-wire": {
        "requires": [
            "wire-base"
        ]
    },
    "bidirectional-arrow-wire": {
        "requires": [
            "wire-base"
        ]
    },
    "container": {
        "requires": [
            "widget-stdmod",
            "widget-stack",
            "widget-parent",
            "widget-child",
            "dd",
            "resize",
            "wires-delegate",
            "widget-terminals",
            "widget-icons"
        ],
        "skinnable": true
    },
    "image-container": {
        "requires": [
            "container"
        ],
        "skinnable": true
    },
    "inout-container": {
        "requires": [
            "container"
        ]
    },
    "layer": {
        "requires": [
            "widget-parent",
            "container",
            "wires-delegate"
        ],
        "skinnable": "true"
    },
    "straight-wire": {
        "requires": [
            "wire-base"
        ]
    },
    "terminal": {
        "requires": [
            "widget",
            "widget-child",
            "widget-position",
            "widget-position-align",
            "wire-base",
            "wires-delegate",
            "terminal-dragedit",
            "terminal-scissors",
            "terminal-ddgroups"
        ],
        "skinnable": true
    },
    "terminal-ddgroups": {
        "requires": [
            "terminal-dragedit"
        ]
    },
    "terminal-dragedit": {
        "requires": [
            "bezier-wire",
            "dd-drop",
            "dd-drag",
            "dd-proxy"
        ]
    },
    "terminal-input": {
        "requires": [
            "terminal"
        ]
    },
    "terminal-output": {
        "requires": [
            "terminal"
        ]
    },
    "terminal-scissors": {
        "requires": [
            "overlay"
        ],
        "skinnable": true
    },
    "textarea-container": {
        "requires": [
            "container"
        ]
    },
    "widget-icons": {
        "requires": [],
        "skinnable": true
    },
    "widget-terminals": {
        "requires": [
            "terminal"
        ]
    },
    "wire-base": {
        "requires": [
            "graphics"
        ],
        "skinnable": true
    },
    "wireit-app": {
        "requires": [
            "app",
            "handlebars",
            "model",
            "model-list",
            "json",
            "view",
            "layer",
            "bezier-wire",
            "anim"
        ]
    },
    "wires-delegate": {
        "requires": [
            "wire-base"
        ]
    }
}
         }
      }
   };

   if(typeof YUI_config === 'undefined') { 
      YUI_config = {groups: {}}; 
   }
   
   Y.mix(YUI_config.groups, CONFIG.groups);

});

