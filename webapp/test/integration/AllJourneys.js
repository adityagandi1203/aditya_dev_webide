/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"aaa/aaa/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"aaa/aaa/test/integration/pages/View1",
	"aaa/aaa/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "aaa.aaa.view.",
		autoWait: true
	});
});