appPersonal.controller("ctrlPersonal", function ($scope, $http) {
    $scope.listStudents = [];
    $scope.acountActive = "";
    $http.get(studenstAPI).then(function (response) {
        $scope.listStudents = response.data;
        for (let i = 0; i < $scope.listStudents.length; i++) {
            if ($scope.listStudents[i].state === 1) {
                $scope.acountActive = $scope.listStudents[i].username;
                break;
            }

        }
    }, function () {
        alert("Lỗi server");
    })

})