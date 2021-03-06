Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _maskResolver=require('./mask-resolver');var _maskResolver2=_interopRequireDefault(_maskResolver);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var

MaskService=function(){function MaskService(){_classCallCheck(this,MaskService);}_createClass(MaskService,null,[{key:'toMask',value:function toMask(
type,value,settings){
return _maskResolver2.default.resolve(type).getValue(value,settings);
}},{key:'toRawValue',value:function toRawValue(

type,maskedValue,settings){
return _maskResolver2.default.resolve(type).getRawValue(maskedValue,settings);
}},{key:'isValid',value:function isValid(

type,value,settings){
return _maskResolver2.default.resolve(type).validate(value,settings);
}}]);return MaskService;}();exports.default=MaskService;