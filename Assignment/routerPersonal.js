appPersonal.config(function ($routeProvider) {
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
            "/hoidap", {
            templateUrl: "layout/hoidap.html"
        }).
        when(
            "/danhsachmonhoc", {
            templateUrl: "layout/danhsachmonhoc.html",
            controller: "ctrlListSubject"
        }).
        when(
            "/quizs:subjectId", {
            templateUrl: "/layout/questionQuiz.html",
            controller: "ctrlQuiz"
        }).
        when(
            "/doimatkhau", {
            templateUrl: "layout/doimatkhau.html",
            controller: "ctrlChangePass"
        }).
        when(
            "/capnhattaikhoan", {
            templateUrl: "layout/capnhattaikhoan.html",
            controller: "ctrlUpdateAccount"
        }).
        otherwise(
            "/home",
            { templateUrl: "layout/home.html" })
})