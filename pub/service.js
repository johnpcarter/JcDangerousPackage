app.service('myserv', function() {
          this.getServiceList = function () {
    return [{"serviceName":"jc.dangerous:sayHi","description":"This is demo service to showcase how to use a custom package in a webMethods.io Integration project.","serviceinputs":[{"inputName":"name","inputType":"String","inputComments":"The name of the person to be greeted","required":true,"wrapperType":"--"}],"serviceoutputs":[{"outputName":"greeting","outputType":"String","outputComments":"The greeting that was logged to the runtime log","required":true,"wrapperType":"--"}]},{"serviceName":"jc.dangerous:suspiciousService","description":"This service makes use of several public services that could be used for nefarious use","serviceinputs":[],"serviceoutputs":[]},{"serviceName":"jc.dangerous:willRobinson","description":"Java services are inheritantly dangerous as they can do so many dangerous things","serviceinputs":[],"serviceoutputs":[]}];
}
this.getISEndpoint = function() { 
 return 'http://johns-mbp:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "04-11-2024 11:33:59 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"JcDangerousPackage","displayName":"Dangerous Pakagee","status":"Prototype","tags":["demo","security"],"createdDate":"14-10-2024 18:28:51 CEST","version":"1.0","buildNumber":"","description":"Package to demonstrate how package that reference dangerous \nuse of services/code can be secured"};
}
});
