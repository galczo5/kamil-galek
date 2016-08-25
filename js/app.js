'use strict';

angular.module('app', [
    'vtortola.ng-terminal' 
]).config(['terminalConfigurationProvider', function (terminalConfigurationProvider) {
    terminalConfigurationProvider.promptConfiguration = {
        end: ' $ ',
        user: 'root',
        separator: '@system',
        path: '' };
}]).controller('console', ['$scope', function($scope){

    $scope.commandText = 'kamil-galek.pl';
    $scope.availableOptions = ['--help', '-h', '--all', '-a', '--pdf', '-p', '--asc', '--desc', '--open-external-content'];
    $scope.availableCommands = ['personal-informations', 'skills', 'experience', 'freelance'];
    
    $scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0].command
                .trim()
                .split(' ')
                .filter(function (el) {return el != "";});

        var call = prepareCommand(cmd);
        validateOptions(call.options);
        validateCommands(call.commands);

        getOutput(call);
    });

    function prepareCommand (cmd) {
        if(cmd[0] != $scope.commandText)
            throw "Unknown command " + cmd[0];

        return {
            options: cmd.filter(function (el) {return el.substring(0, 1) == '-';}),
            commands: cmd.filter(function (el) {return el.substring(0, 1) != '-' && el != $scope.commandText;})
        }; 
    };

    function validateOptions(options) {
        angular.forEach(options, function(option) {
            if ($scope.availableOptions.indexOf(option) == -1) throw 'Invalid option: ' + option;
        });
    };

    function validateCommands(commands) {
        angular.forEach(commands, function(command) {
            if ($scope.availableCommands.indexOf(command) == -1) throw 'Invalid command: ' + command;
        });

        if (commands.length != 1) {
            throw 'Invalid number of commands. One command allowed.';
        }
    };

    function getOutput(call) {

        var showAll = call.options.indexOf('-a') != -1 || call.options.indexOf('--all') != -1;

        if(call.commands[0] == 'personal-informations') {
            $scope.$broadcast('terminal-output', {
                output: true,
                text: [PERSONAL_INFORMATIONS.toString(showAll)]
            });
        }
        
    };

    function displayHelp() {
        $scope.$broadcast('terminal-output', {
            output: true,
            text: ["This is help"]
        });
    };
    
}]);
