sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("aaa.aaa.controller.View1", {
		onInit: function () {

		},
		
		onclose:function(){
			
			this.getView().byId("dia").close();
		}
	});
});