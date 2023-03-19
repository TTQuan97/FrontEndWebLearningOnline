
mainApp.controller("ctrlForgotPass", function ($scope, $http) {
    $scope.listStudents = [];
    $scope.warningUser = false;
    $scope.warningEmail = false;
    $scope.warningPass = false;
    $scope.acountForgot =
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
    }, function () {
        console.log("Lỗi server");
    });
    $scope.forgotAccount = function (event) {
        let foundUser = false;
        for (let i = 0; i < $scope.listStudents.length; i++) {
            if ($scope.listStudents[i].username === $scope.inputusername &&
                $scope.listStudents[i].email === $scope.inputemail) {
                $scope.acountForgot = $scope.listStudents[i];
                foundUser = true;
                break;
            }
        }
        if (foundUser) {
            $scope.warningUser = false;
            $scope.warningEmail = false;
            if ($scope.newpass === $scope.confirmPass) {
                $scope.acountForgot.password = $scope.newpass;
                $http.put(studenstAPI + "/" + $scope.acountForgot.id, $scope.acountForgot).then(function () {
                }, function () {
                    console.error;
                });
                $scope.warningUser = false;
                $scope.warningEmail = false;
                $scope.warningPass = false;
                alert("Lấy lại mật khẩu thành công");
                document.getElementById("formForgotPass").action = "#!home"
            } else {
                $scope.warningPass = true;
                event.preventDefault();
            }
        } else {
            $scope.warningUser = true;
            $scope.warningEmail = true;
            $scope.warningPass = false;
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