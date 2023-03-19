mainApp.config(function ($routeProvider) {
    $routeProvider.
        when(
            "/home", {
            templateUrl: "layout/home.html",
        }).
        when(
            "/gioiThieu",
            { templateUrl: "layout/gioiThieu.html" }).
        when(
            "/lienhe",
            { templateUrl: "layout/lienhe.html" }).
        when(
            "/gopy", {
            templateUrl: "layout/gopy.html",
            controller: "ctrlGopy"
        }).
        when(
            "/hoidap",
            { templateUrl: "layout/hoidap.html" }).
        when(
            "/dangnhap", {
            templateUrl: "layout/dangnhap.html",
            controller: "CtrlLogin"
        }).
        when(
            "/dangky", {
            templateUrl: "layout/dangky.html",
            controller: "ctrlSignUp",
        }).
        when(
            "/quenmatkhau", {
            templateUrl: "layout/quenmatkhau.html",
            controller: "ctrlForgotPass"
        }).
        otherwise(
            "/home",
            { templateUrl: "layout/home.html" })
});

