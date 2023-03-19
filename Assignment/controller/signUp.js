mainApp.controller('ctrlSignUp', function ($scope, $http) {
    $scope.listStudents = [];
    $scope.warningUser = false;
    $scope.warningConfirmPass = false;
    $scope.newStudent =
    {
        id: "",
        username: "",
        password: "",
        fullname: "",
        email: "",
        gender: 1,
        birthday: "",
        schoolfee: "0",
        marks: "0",
        state: 0
    };
    $http.get(studenstAPI).then(function (response) {
        $scope.listStudents = response.data;
        console.log($scope.listStudents);
    }, function () {
        alert("Lỗi server");
    })
    $scope.signUp = function (event) {
        let UserExisted = false;
        for (let i = 0; i < $scope.listStudents.length; i++) {
            if ($scope.newStudent.username === $scope.listStudents[i].username) {
                UserExisted = true;
                break;
            }
        }
        if (UserExisted === false) {
            $scope.warningUser = false;
            if ($scope.ConfirmPassWord === $scope.newStudent.password) {
                $http.post(studenstAPI, $scope.newStudent).then(function () {
                }, function () {
                    console.error;
                });
                alert("Đăng kí tài khoản thành công");
                document.getElementById("formSignUp").action = "#!dangnhap";
            } else {
                $scope.warningConfirmPass = true;
                event.preventDefault();
            }
        } else {
            $scope.warningUser = true;
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