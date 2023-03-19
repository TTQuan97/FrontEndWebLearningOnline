appPersonal.controller("ctrlListSubject", function ($scope, $http) {
    $scope.listSubjects = [];
    $scope.numberPagination = [];
    $scope.begin = 0;
    $scope.numberSubjectwantToDisplay = 6;
    $http.get(subjectsAPI).then(function (response) {
        $scope.listSubjects = response.data;
        let numberPage = Math.ceil($scope.listSubjects.length / $scope.numberSubjectwantToDisplay);
        for (let i = 0; i < numberPage; i++) {
            $scope.numberPagination.push(i + 1);
        }
    }, function () {
        console.log("Lỗi server");
    })
    $scope.getPage = function (index) {
        $scope.begin = (index * $scope.numberSubjectwantToDisplay) - $scope.numberSubjectwantToDisplay;
    }


})