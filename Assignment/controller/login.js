
mainApp.controller("CtrlLogin", function ($scope, $http) {
    $scope.showHidePass = function () {
        var state = document.getElementById("pass_input");
        const icon = document.getElementById('icon').classList;
        var text = document.getElementById('text');
        if (state.type === "password") {
            state.type = "text";
            text.innerText = "Ẩn";
            icon.add("fa-eye-slash");
            icon.remove("fa-eye");
        } else {
            state.type = "password";
            text.innerText = "Hiện";
            icon.add("fa-eye");
            icon.remove("fa-eye-slash");
        }

    }

    $scope.dataStudent = [];
    $http.get(studenstAPI).then(function (response) {
        $scope.dataStudent = response.data;
    });
    $scope.submitlogin = function (event) {
        let accountActive = {};
        let warning = document.getElementById("warning_User_PassWord");
        var dataIn = {
            username: $scope.inputUser,
            password: $scope.inputPass
        }
        if (dataIn.username === undefined || dataIn.password === undefined) {
            event.preventDefault();
            warning.classList.remove("show");
            document.getElementById("formLogin").classList.add("was-validated");
        } else {
            document.getElementById("formLogin").classList.remove("was-validated");
            var matchFound = false;
            for (let i = 0; i < $scope.dataStudent.length; i++) {
                if (dataIn.username === $scope.dataStudent[i].username
                    && dataIn.password === $scope.dataStudent[i].password) {
                    matchFound = true;
                    accountActive = $scope.dataStudent[i];
                    break;
                }
            }
            if (matchFound) {
                accountActive.state = 1;
                document.getElementById("formLogin").action = "trangcanhan.html";
                $http.put(studenstAPI + "/" + accountActive.id, accountActive).then(function () {
                }, function () {
                    console.error;
                });
            } else {
                event.preventDefault();
                warning.classList.add("show");
            }
        }

    };
});