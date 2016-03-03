app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/app/templates/home.html',
            controller: 'MainController',
            controllerAs: 'mc'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/app/templates/login.html',
            controller: 'LoginController',
            controllerAs: 'lc'
        })
        .state('designer', {
            url: '/designer',
            templateUrl: '/app/templates/designer.html',
            controller: 'DesignController',
            controllerAs: 'dc'
        })
})