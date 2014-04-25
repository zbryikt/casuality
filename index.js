// Generated by LiveScript 1.2.0
var main;
main = function($scope, $interval){
  var newData;
  newData = function(){
    var now;
    now = new Date().getTime();
    return [10 + Math.random() * 80, 10 + Math.random() * 80, Math.random() * 18 + 2, now + 2000];
  };
  $scope.data = [];
  return $interval(function(){
    var now, svg, x$;
    if ($scope.data.length < 10) {
      $scope.data.push(newData());
    }
    now = new Date().getTime();
    $scope.data = $scope.data.filter(function(it){
      return it[3] >= now;
    });
    svg = d3.select('#svg');
    x$ = svg.selectAll('circle').data($scope.data);
    x$.exit().remove();
    x$.enter().append('circle');
    return svg.selectAll('circle').attr({
      cx: function(it){
        return it[0];
      },
      cy: function(it){
        return it[1];
      },
      r: function(){
        return 1;
      },
      fill: '#f00',
      opacity: 1
    }).transition().duration(500).attr({
      opacity: 0,
      r: function(it){
        return it[2];
      }
    });
  }, 200);
};