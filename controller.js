(function() {
function FormController() {
  var vm = this;
  vm.newTask = [ "Grocery Shop", "Laundry", "Get Gas", "Vacuum"];
    vm.removeTask = function() {
     console.log(task);
     vm.List.splice(task, 1);

   };
   vm.addTask = function(task) {
     console.log(task);
     vm.newTask.push(task, 1);
   };
}
   angular
     .module("App")
     .controller("FormController", FormController);

  })();
