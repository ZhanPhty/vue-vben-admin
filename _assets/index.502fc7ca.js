import{d5 as e,a as o,r as l,h as n,i,o as s,j as a,k as t,w as p}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import{s as r}from"./index.5586c30e.js";import"./colors.88c331b3.js";import"./RightOutlined.7f7867ab.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.668cd44f.js";import"./UpOutlined.4f317e4e.js";import"./index.2c5ff13d.js";import"./index.1027e3c8.js";import"./index.2cd1edc8.js";import"./index.99070219.js";import{a as c}from"./index.4eeb0172.js";import"./LoadingOutlined.0226bca5.js";import"./RightOutlined.28ca736c.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./useAttrs.6880d872.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";var d;(d||(d={})).OPTIONS_LIST="/select/getDemoOptions";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:o})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"远程下拉",required:!0,componentProps:{api:function(){return e.request({url:d.OPTIONS_LIST,method:"GET"})}},colProps:{span:8}},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}}];var u=o({components:{BasicForm:r,CollapseContainer:c},setup(){const e=l(null),{createMessage:o}=n();return{schemas:m,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},check:e}}});const f={class:"m-4"};u.render=function(e,o,l,n,r,c){const d=i("BasicForm"),m=i("CollapseContainer");return s(),a("div",f,[t(m,{title:"基础示例"},{default:p((()=>[t(d,{autoFocusFirstItem:"",labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])};export default u;