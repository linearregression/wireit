YUI().use(function(e){var t={groups:{wireit:{base:"wireit/src/",combine:!1,modules:{"arrow-wire":{requires:["wire-base"]},"bezier-wire":{requires:["wire-base"]},"bidirectional-arrow-wire":{requires:["wire-base"]},container:{requires:["widget-stdmod","widget-stack","widget-parent","widget-child","dd","resize","wires-delegate","widget-terminals","widget-icons"],skinnable:!0},"image-container":{requires:["container"],skinnable:!0},"inout-container":{requires:["container"]},layer:{requires:["widget-parent","container","wires-delegate"],skinnable:"true"},"straight-wire":{requires:["wire-base"]},terminal:{requires:["widget","widget-child","widget-position","widget-position-align","wire-base","wires-delegate","terminal-dragedit","terminal-scissors","terminal-ddgroups"],skinnable:!0},"terminal-ddgroups":{requires:["terminal-dragedit"]},"terminal-dragedit":{requires:["bezier-wire","dd-drop","dd-drag","dd-proxy"]},"terminal-input":{requires:["terminal"]},"terminal-output":{requires:["terminal"]},"terminal-scissors":{requires:["overlay"],skinnable:!0},"textarea-container":{requires:["container"]},"widget-icons":{requires:[],skinnable:!0},"widget-terminals":{requires:["terminal"]},"wire-base":{requires:["graphics"],skinnable:!0},"wireit-app":{requires:["app","handlebars","model","model-list","json","view","layer","bezier-wire","anim"]},"wires-delegate":{requires:["wire-base"]}}}}};typeof YUI_config=="undefined"&&(YUI_config={groups:{}}),e.mix(YUI_config.groups,t.groups)});
