"use strict";define("ember-quickstart/app",["exports","ember","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,r,n,i){var a=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,a=t.default.Application.extend({modulePrefix:i.default.modulePrefix,podModulePrefix:i.default.podModulePrefix,Resolver:r.default}),(0,n.default)(a,i.default.modulePrefix),e.default=a}),define("ember-quickstart/components/users-list",["exports","ember"],function(e,t){e.default=t.default.Component.extend({})}),define("ember-quickstart/helpers/app-version",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){function n(){return i}e.appVersion=n;var i=r.default.APP.version;e.default=t.default.Helper.helper(n)}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,r){var n=r.default.APP,i=n.name,a=n.version;e.default={name:"App Version",initialize:(0,t.default)(i,a)}}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-quickstart/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,r){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/initializers/export-application-global",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){function n(){var e=arguments[1]||arguments[0];if(r.default.exportApplicationGlobal!==!1){var n;if("undefined"!=typeof window)n=window;else if("undefined"!=typeof global)n=global;else{if("undefined"==typeof self)return;n=self}var i,a=r.default.exportApplicationGlobal;i="string"==typeof a?a:t.default.String.classify(r.default.modulePrefix),n[i]||(n[i]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete n[i]}}))}}e.initialize=n,e.default={name:"export-application-global",initialize:n}}),define("ember-quickstart/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:t.default.K}}),define("ember-quickstart/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:t.default.K}}),define("ember-quickstart/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:t.default.K}}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("ember-quickstart/router",["exports","ember","ember-quickstart/config/environment"],function(e,t,r){var n=t.default.Router.extend({location:r.default.locationType,rootURL:r.default.rootURL});n.map(function(){this.route("users")}),e.default=n}),define("ember-quickstart/routes/users",["exports","ember"],function(e,t){e.default=t.default.Route.extend({model:function(){return["John Newman","Paul Stanlep","Mike Culombsky"]}})}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/components/users-list",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@2.9.0",loc:{source:null,start:{line:3,column:1},end:{line:5,column:1}},moduleName:"ember-quickstart/templates/components/users-list.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createTextNode("\t\t");e.appendChild(t,r);var r=e.createElement("li"),n=e.createComment("");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[1]),0,0),n},statements:[["content","user",["loc",[null,[4,6],[4,14]]],0,0,0,0]],locals:["user"],templates:[]}}();return{meta:{revision:"Ember@2.9.0",loc:{source:null,start:{line:1,column:0},end:{line:6,column:5}},moduleName:"ember-quickstart/templates/components/users-list.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createElement("h2"),n=e.createTextNode("Users List");e.appendChild(r,n),e.appendChild(t,r);var r=e.createTextNode("\n");e.appendChild(t,r);var r=e.createElement("ul"),n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");return e.appendChild(r,n),e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[2]),1,1),n},statements:[["block","each",[["get","users",["loc",[null,[3,9],[3,14]]],0,0,0,0]],[],0,null,["loc",[null,[3,1],[5,10]]]]],locals:[],templates:[e]}}())}),define("ember-quickstart/templates/users",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@2.9.0",loc:{source:null,start:{line:1,column:0},end:{line:1,column:26}},moduleName:"ember-quickstart/templates/users.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),r=e.createComment("");return e.appendChild(t,r),t},buildRenderNodes:function(e,t,r){var n=new Array(1);return n[0]=e.createMorphAt(t,0,0,r),e.insertBoundary(t,0),e.insertBoundary(t,null),n},statements:[["inline","users-list",[],["users",["subexpr","@mut",[["get","model",["loc",[null,[1,19],[1,24]]],0,0,0,0]],[],[],0,0]],["loc",[null,[1,0],[1,26]]],0,0]],locals:[],templates:[]}}())}),define("ember-quickstart/config/environment",["ember"],function(e){var t="ember-quickstart";try{var r=t+"/config/environment",n=document.querySelector('meta[name="'+r+'"]').getAttribute("content"),i=JSON.parse(unescape(n)),a={default:i};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+r+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+b8acdbd4"});