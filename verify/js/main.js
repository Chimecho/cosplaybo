let cosplaybo = angular.module('cosplaybo', []);

cosplaybo.controller('VerifierController', ['$scope', async function ($scope) {
  let urlParams = new URLSearchParams(window.location.search)
  let hash = urlParams.get('hash')

  $scope.loading = true
  $scope.data = {}

  if (hash) {
    let res = await fetch(`http://chimecho.rocks:6500/?hash=${hash}`, {"method": "GET"})
    res = await res.json()

    $scope.$apply(function () {
      $scope.data = res
      $scope.loading = false
    })
  } else {
    window.location.href = '/'
  }
}])
