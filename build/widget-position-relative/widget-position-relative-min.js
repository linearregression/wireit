YUI.add("widget-position-relative",function(e,t){e.WidgetPositionRelative=function(e){},e.WidgetPositionRelative.ATTRS={relative_x:{getter:function(){return parseInt(this.get("boundingBox").getStyle("left"),10)},setter:function(e){this.get("boundingBox").setStyle("left",e+"px")}},relative_y:{getter:function(){return parseInt(this.get("boundingBox").getStyle("top"),10)},setter:function(e){this.get("boundingBox").setStyle("top",e+"px")}}}},"@VERSION@",{requires:[]});