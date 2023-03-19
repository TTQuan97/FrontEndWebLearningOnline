appPersonal.controller("ctrlLogOut", function ($scope, $http) {
    $scope.listStudents = [];
    $scope.acountActive =
    {
        id: "",
        username: "",
        password: "",
        fullname: "",
        email: "",
        gender: 0,
        birthday: "",
        schoolfee: "0",
        marks: "0",
        state: 0
    };
    $http.get(studenstAPI).then(function (response) {
        $scope.listStudents = response.data;
        for (let i = 0; i < $scope.listStudents.length; i++) {
            if ($scope.listStudents[i].state === 1) {
                $scope.acountActive = $scope.listStudents[i];
                break;
            }

        }
    }, function () {
        alert("Lỗi server");
    })
    $scope.logOut = function () {
        $scope.acountActive.state = 0;
        $http.put(studenstAPI + "/" + $scope.acountActive.id, $scope.acountActive).then(function () {
        }, function () {
            console.error;
        })
    }
});