appPersonal.controller("ctrlUpdateAccount", function ($scope, $http) {
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
                $scope.acountActive.birthday = new Date($scope.listStudents[i].birthday);
                $scope.acountActive.gender = parseInt($scope.listStudents[i].gender);
                break;
            }

        }
    }, function () {
        alert("Lỗi server");
    })
    $scope.updateAcount = function () {
        $http.put(studenstAPI + "/" + $scope.acountActive.id, $scope.acountActive).then(function () {
        }, function () {
            console.error;
        })
        alert("Cập nhật thông tin thành công");
    }

    $scope.showHidePass1 = function () {
        var state1 = document.getElementById("pass_input1");
        const icon1 = document.getElementById('icon1').classList;
        var text1 = document.getElementById('text1');
        if (state1.type === "password") {
            state1.type = "text";
            text1.innerText = "Ẩn";
            icon1.add("fa-eye-slash");
            icon1.remove("fa-eye");
        } else {
            state1.type = "password";
            text1.innerText = "Hiện";
            icon1.add("fa-eye");
            icon1.remove("fa-eye-slash");
        }
    }
    $scope.showHidePass2 = function () {
        var state2 = document.getElementById("pass_input2");
        const icon2 = document.getElementById('icon2').classList;
        var text2 = document.getElementById('text2');
        if (state2.type === "password") {
            state2.type = "text";
            text2.innerText = "Ẩn";
            icon2.add("fa-eye-slash");
            icon2.remove("fa-eye");
        } else {
            state2.type = "password";
            text2.innerText = "Hiện";
            icon2.add("fa-eye");
            icon2.remove("fa-eye-slash");
        }
    }
})
appPersonal.controller("ctrlChangePass", function ($scope, $http) {
    $scope.listStudents = [];
    $scope.warningPass = false;
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
    $scope.changePassWord = function (event) {
        if ($scope.oldPass === $scope.acountActive.password) {
            $scope.acountActive.password = $scope.newPass;
            $http.put(studenstAPI + "/" + $scope.acountActive.id, $scope.acountActive).then(function () {
            }, function () {
                console.error;
            })
            alert("Đổi mật khẩu thành công");
            document.getElementById("formChangePass").action = "#!home";
        } else {
            $scope.warningPass = true;
            event.preventDefault();
        }
    }

    $scope.showHidePass1 = function () {
        var state1 = document.getElementById("pass_input1");
        const icon1 = document.getElementById('icon1').classList;
        var text1 = document.getElementById('text1');
        if (state1.type === "password") {
            state1.type = "text";
            text1.innerText = "Ẩn";
            icon1.add("fa-eye-slash");
            icon1.remove("fa-eye");
        } else {
            state1.type = "password";
            text1.innerText = "Hiện";
            icon1.add("fa-eye");
            icon1.remove("fa-eye-slash");
        }
    }
    $scope.showHidePass2 = function () {
        var state2 = document.getElementById("pass_input2");
        const icon2 = document.getElementById('icon2').classList;
        var text2 = document.getElementById('text2');
        if (state2.type === "password") {
            state2.type = "text";
            text2.innerText = "Ẩn";
            icon2.add("fa-eye-slash");
            icon2.remove("fa-eye");
        } else {
            state2.type = "password";
            text2.innerText = "Hiện";
            icon2.add("fa-eye");
            icon2.remove("fa-eye-slash");
        }
    }
});