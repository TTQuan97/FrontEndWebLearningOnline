appPersonal.controller("ctrlQuiz", function ($scope, $http, $routeParams, $location) {
    $scope.subject = {};
    $scope.listQuestion = [];
    $scope.begin = 0;
    let listOfQuestionsChecked = [];
    $scope.listIncorrectAnswer = [];
    $scope.checkAnswer = function (questionId, correctAnswer, yourAnswer) {
        let questionChecked = {
            id: questionId,
            yourAnswer: yourAnswer,
            correctAnswer: correctAnswer
        }
        let questionChose = false;
        for (let i = 0; i < listOfQuestionsChecked.length; i++) {
            if (listOfQuestionsChecked[i].id === questionId) {
                questionChose = true;
                break;   ////////thay đổi đáp án vẫn chưa cập nhạt đáp án mới vào mảng   
            }
        }
        if (questionChose === false) {
            listOfQuestionsChecked.push(questionChecked);
        }
        console.log(listOfQuestionsChecked)
    };
    $scope.mark = function () {
        let mark = 0;
        for (let i = 0; i < listOfQuestionsChecked.length; i++) {
            if (listOfQuestionsChecked[i].yourAnswer === listOfQuestionsChecked[i].correctAnswer) {
                mark += 1;
            }
        }
        return mark;
    }
    $scope.firstQuestion = function () {
        $scope.begin = 0;
    }
    $scope.endQuestion = function () {
        $scope.begin = $scope.listQuestion.length - 1;
    }
    $scope.nextQuestion = function () {
        if ($scope.begin < $scope.listQuestion.length - 1) {
            $scope.begin++;
        }
    }
    $scope.previousQuestion = function () {
        if ($scope.begin > 0) {
            $scope.begin--;
        }
    }
    $scope.offStudy = function () {
        let confirmOff = confirm("Bạn chắc chắn kết thúc bài học");
        if (confirmOff) {
            $location.path("/danhsachmonhoc");
        }
    }
    //get subject
    $http.get(subjectsAPI).then(function (response) {
        let listSubject = [] = response.data;
        for (let i = 0; i < listSubject.length; i++) {
            if (listSubject[i].Id === $routeParams.subjectId) {
                $scope.subject = listSubject[i];
                break;
            }
        }
    }, function () {
        console.log("Lỗi server");
    })
    //get list of question for subject
    $http.get("http://localhost:3000/" + $routeParams.subjectId).then(function (response) {
        $scope.listQuestion = response.data;
    }, function () {
        console.log("Lỗi server");
    })
})