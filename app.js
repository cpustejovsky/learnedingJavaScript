/*
MyModules assigned it IIFE named Manager
Declares empty object modules
runs function define that takes three parameters
    name
    deps (dependencies as an array)
    impl (implementation)
define adds any dependencies to the module object using a for loop
then it assigned to module[name] the function with an apply method that adds on any dependencies as parameters
`modules[name] = impl.apply(impl, deps);` 
    invokes the definition wrapper function for a module(passing in any dependencies), and storing the return value, the module 's API, into an internal list of modules tracked by name.
get returns module[name] based on what name is passed in as an argument
MyModules returns an object with define and get as methods
*/

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
        console.log(modules[name]);
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModules.define("bar", [], function () {
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
});

MyModules.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";

    function awesome() {
        console.log(bar.hello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

var bar = MyModules.get("bar");
var foo = MyModules.get("foo");
console.log(bar);
console.log(foo);
console.log(bar.hello("hippo")); // Let me introduce: hippo

foo.awesome(); // LET ME INTRODUCE: HIPPO