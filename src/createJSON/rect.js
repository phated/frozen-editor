define([
  '../state',
  '../utils/orderRectPts'
], function(state, orderRectPts){

  return function(currentGeom){
    if(currentGeom && currentGeom.length === 2){
      var pts = orderRectPts(currentGeom);

      var rect = {
        x: ((pts[1].x - pts[0].x)/2 + pts[0].x),
        y: ((pts[1].y - pts[0].y)/2 + pts[0].y),
        halfWidth: ((pts[1].x - pts[0].x)/2 ),
        halfHeight: ((pts[1].y - pts[0].y)/2 )
      };
      rect.staticBody = state.toolType === 'static';
      rect.zone = state.toolType === 'zone';
      rect.type = 'Rectangle';

      return rect;
    }
  };

});