(function () {
	'use strict';

	angular
		.module('accolade.dev')
		.factory('MockData', MockData);

	MockData.$inject = ['AccoladeConstants'];

	function MockData(AccoladeConstants) {

		var courseTemplate = {
			"course_name": "Template Course",
			"coursecode": 12324,
			"description": "This is the course and it is also cool yo.",
			"badges": [
				{
					"creator": "me",
					"name": "BadgeName1",
					"description": "this Badge Is Cool Yo",
					"badge_image": AccoladeConstants.staticPrefix + "/assets/img/badge.png",
					"pins": [
						{
							"creator": "me",
							"name": "pin1",
							"description": "this is a pin",
							"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
							"learningModuleID": 120
						},
						{
							"creator": "me",
							"name": "pin2",
							"description": "this is also pin",
							"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
							"learningModuleID": 121
						}
					]
				},
				{
					"creator": "me",
					"name": "BadgeName2",
					"description": "this Badge Is Cool Yo",
					"badge_image": AccoladeConstants.staticPrefix + "/assets/img/badge.png",
					"pins": [
						{
							"creator": "me",
							"name": "pin1",
							"description": "this is a pin",
							"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
							"learningModuleID": 120
						},
						{
							"creator": "me",
							"name": "pin2",
							"description": "this is also pin",
							"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
							"learningModuleID": 121
						}
					]
				}
			]
		}

		var learningModule = {
		   	"id": 1,
		   	"creator": "a@admin.com",
		   	"description": "This is learning module 1",
		   	"content": [
		       	{
		           	"id": 2,
		           	"url": null,
		           	"image": {
		               	"id": 1,
		               	"image": AccoladeConstants.staticPrefix + "/assets/img/badge.jpg"
		           	},
		           	"quiz": null,
		           	"text": null
		       	},
		       	{
		           	"id": 4,
		           	"url": null,
		           	"image": null,
		           	"quiz": null,
		           	"text": null,
				   	"video":
				   	{
					  	"url": "https://www.youtube.com/watch?v=PEKylVn4Mhs",
		               	"id": 1
				   	}
		       	},
       	       	{
       	           	"id": 5,
       	           	"url": null,
       	           	"image": null,
       	           	"quiz": null,
       	           	"text": {
       	           		"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque hendrerit, velit eget ornare sagittis, leo ipsum accumsan turpis, non volutpat tortor risus quis quam. Duis tincidunt purus sit amet commodo feugiat. Pellentesque mauris leo, aliquam vel eleifend ac, mattis quis risus. Integer non auctor ex. Aliquam semper ante et odio mollis placerat. Sed dapibus tincidunt mauris in dapibus. Donec ultricies velit sed egestas viverra. Integer nec elit id velit commodo pulvinar ac eget felis. Quisque dapibus massa nulla, non mollis erat sagittis eu. Sed porta pellentesque efficitur. Fusce vehicula dolor vitae hendrerit molestie. Donec venenatis ornare lorem, eget pharetra lorem pretium ac. Phasellus mauris felis, interdum pharetra ullamcorper vitae, faucibus nec ex. Fusce pretium iaculis dui aliquet fringilla. Vestibulum ex justo, feugiat in nibh et, tempor consectetur ex. Sed id bibendum ante, vel cursus tortor. Nunc a sem turpis. Quisque sit amet libero eget quam venenatis eleifend. Pellentesque varius, mi faucibus mattis posuere, orci ligula mollis leo, in fringilla eros orci sed enim. Pellentesque in eros eu leo finibus vulputate.",
       	           		"id": 1
       	           	},
       			   	"video": null
       	       	},
       	       	{
       	           	"id": 5,
       	           	"url": null,
       	           	"image": null,
       	           	"quiz": {
       	           		"id": "myquiz"
       	           	},
       	           	"text": null,
       			   	"video": null
       	       	},
       	       	{
       	           	"id": 5,
       	           	"url": null,
       	           	"image": null,
       	           	"quiz": {
       	           		"id": "myquiz"
       	           	},
       	           	"text": null,
       			   	"video": null
       	       	}
		   	],
		   	"created_at": "2015-07-01T12:30:14.857079Z",
		   	"updated_at": "2015-07-01T12:30:14.857133Z"
		}

		var userCourses = {
			"results": [
				{
					"course_name": "Course 1",
					"id": 11111,
					"description": "Course 1, YO"
				},
				{
					"course_name": "Course 2",
					"id": 22222,
					"description": "Course 2. Cooler than course 1."
				}
			]
		}

		var pin = {
			"creator": "Joe",
			"name": "Joe's Pin",
			"description": "This is a test pin",
			"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
			"learningModuleID": 120
		}

		var badgePins = {
		   "count": 1,
		   "next": null,
		   "previous": null,
		   "results": [
		       {
		           "badge": {
		               "id": 1,
		               "name": "Badge 1",
		               "description": "Description Required",
		               "badge_image": AccoladeConstants.staticPrefix + "/badge_img/badge.jpg",
		               "creator": "a@admin.com",
		               "pins": [
		                   {
		                       "id": 1,
		                       "name": "Pin 1",
		                       "description": "Description Required",
		                       "pin_image": null,
		                       "creator": "a@admin.com",
		                       "module_id": null,
		                       "created_at": "2015-07-06T05:16:47.519163Z",
		                       "updated_at": "2015-07-06T05:16:47.519227Z"
		                   }
		               ],
		               "created_at": "2015-07-06T05:16:51.969596Z",
		               "updated_at": "2015-07-06T10:06:46.035600Z"
		           }
		       },
		       {
		           "badge": {
		               "id": 1,
		               "name": "Badge 1",
		               "description": "Description Required",
		               "badge_image": AccoladeConstants.staticPrefix + "/badge_img/badge.jpg",
		               "creator": "a@admin.com",
		               "pins": [
		                   {
		                       "id": 1,
		                       "name": "Pin 1",
		                       "description": "Description Required",
		                       "pin_image": null,
		                       "creator": "a@admin.com",
		                       "module_id": null,
		                       "created_at": "2015-07-06T05:16:47.519163Z",
		                       "updated_at": "2015-07-06T05:16:47.519227Z"
		                   }
		               ],
		               "created_at": "2015-07-06T05:16:51.969596Z",
		               "updated_at": "2015-07-06T10:06:46.035600Z"
		           }
		       }
		   ]
		}

		var pins = [
			{
				"creator": "Joe",
				"name": "Joe's Pin",
				"description": "This is a test pin",
				"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
				"learningModuleID": 120
			},
			{
				"creator": "Joe",
				"name": "Joe's Pin",
				"description": "This is a test pin",
				"pin_image": AccoladeConstants.staticPrefix + "/assets/img/pin.png",
				"learningModuleID": 120
			}
			
		]
		
		var joinedCourse = {
			"courseCode": 2134
		}

		var MockData = {
			courseTemplate: courseTemplate,
			learningModule: learningModule,
			userCourses: userCourses,
			pin: pin,
			pins: pins,
			badgePins: badgePins,
			joinedCourse: joinedCourse
		}

		return MockData;

	}
})();