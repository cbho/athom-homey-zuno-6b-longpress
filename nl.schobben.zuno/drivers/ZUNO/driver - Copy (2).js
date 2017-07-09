'use strict';

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://manuals.fibaro.com/content/manuals/en/FGBS-321/FGBS-321-EN-A-v1.01.pdf

module.exports = new ZwaveDriver(path.basename(__dirname), {
	debug: true,
	capabilities: {
		'alarm_generic.contact1': [ 
			{
				multiChannelNodeId: 1,
				command_class: 'COMMAND_CLASS_SENSOR_BINARY',
				command_report: 'SENSOR_BINARY_REPORT',
				command_report_parser:   report => 
				{  //report['Sensor Value'] === 'detected an event',
				  console.log(JSON.stringify(report));
				}
				                        
				                       
			},
		],
		'alarm_generic.contact2': [
			{
				multiChannelNodeId: 1,
				command_class: 'COMMAND_CLASS_ALARM',
				command_report: 'ALARM_REPORT',
				command_report_parser:   report => //report['Sensor Value'] === 'detected an event',
				{  //report['Sensor Value'] === 'detected an event',
				  console.log(JSON.stringify(report));
				}	                        
                      
			},
		],
		'alarm_generic.contact3': [
			{
				multiChannelNodeId: 1,
				command_class: 'COMMAND_CLASS_BASIC',
				command_report: 'BASIC_REPORT',
				command_report_parser:   report => //report['Sensor Value'] === 'detected an event',
				{  //report['Sensor Value'] === 'detected an event',
				  console.log(JSON.stringify(report));
				}                        
				                       
			},
		],
		'alarm_generic.contact4': [
			{
				multiChannelNodeId: 4,
				command_class: 'COMMAND_CLASS_SENSOR_BINARY',
//				command_get: 'SENSOR_BINARY_GET',
				command_report: 'SENSOR_BINARY_REPORT',
				command_report_parser:   report => report['Sensor Value'] === 'detected an event',
				                        
				                       
			},
		],
		'alarm_generic.contact5': [
			{
				multiChannelNodeId: 5,
				command_class: 'COMMAND_CLASS_SENSOR_BINARY',
//				command_get: 'SENSOR_BINARY_GET',
				command_report: 'SENSOR_BINARY_REPORT',
				command_report_parser:   report => report['Sensor Value'] === 'detected an event',
				                        
				                       
			},
		],
		'alarm_generic.contact6': [
			{
				multiChannelNodeId: 6,
				command_class: 'COMMAND_CLASS_SENSOR_BINARY',
//				command_get: 'SENSOR_BINARY_GET',
				command_report: 'SENSOR_BINARY_REPORT',
				command_report_parser:   report => report['Sensor Value'] === 'detected an event',
				                        
				                       
			},
		],
	},
});