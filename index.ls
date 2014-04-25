main = ($scope, $interval) ->

  new-data = -> 
    now = new Date!getTime!
    [ 10 + Math.random!*80, 10 + Math.random!*80, Math.random!*18 + 2, now  + Math.random!* 1000 ]
  $scope.data = []
  $interval (->
    if $scope.data.length < 10 =>
      $scope.data.push new-data!
    now = new Date!getTime!
    $scope.data = $scope.data.filter -> it.3 >= now
    svg = d3.select \#svg
    svg.selectAll \circle .data $scope.data
      ..exit!remove!
      ..enter!append \circle
    svg.selectAll \circle
      ..attr do
        cx: -> it.0
        cy: -> it.1
        r: -> it.2
        fill: \#f00
        opacity: 1
      ..each ->
        if it.3 - now < 1000 =>
          d3.select(@) .transition!duration 500 
            .attr do
              opacity: 0
              r: 0
  ), 200
