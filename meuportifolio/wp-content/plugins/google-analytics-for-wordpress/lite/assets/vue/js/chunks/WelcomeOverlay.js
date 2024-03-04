import{n as u,m as _,s as d,_ as r,d as p,V as m,M as f}from"./vendor.js";import{a as g}from"./index.js";import{S as h}from"./SettingsInfoTooltip.js";import{S as v}from"./SlideDownUp.js";const y={name:"PopularPostsProPill"};var b=function(){var t=this;return t._self._c,t._m(0)},k=[function(){var s=this,t=s._self._c;return t("span",[t("span",{staticClass:"monsterinsights-pro-pill"},[s._v("PRO")])])}],w=u(y,b,k,!1,null,null,null,null);const x=w.exports,C={isThemeAvailable(s){return s==="lite"},canaccess(){return!1}},S={name:"SettingsInputRadio",components:{PopularPostsProPill:x},props:{options:Array,name:String,auth_disabled:{type:Boolean,default:!0},classes:String},data(){return{is_loading:!1,has_error:!1}},computed:{..._({settings:"$_settings/settings",auth:"$_auth/auth",license:"$_license/license",license_network:"$_license/license_network"}),has_v4(){return this.$mi.network?this.auth.network_v4||this.auth.network_manual_v4:this.auth.v4||this.auth.manual_v4},tooltip_data(){return{content:this.disabled?this.$mi_need_to_auth:"",autoHide:!1,trigger:"hover focus click"}},disabled(){return this.auth_disabled?!this.has_v4:!1},licenseType(){return this.$mi.network?this.license_network.type:this.license.type}},methods:{optionAvailable(s){return C.canaccess(this.licenseType,s)},updateSetting:function(s){if(this.disabled)return!1;this.$emit("change",s.target.value),this.$mi_saving_toast({}),this.$store.dispatch("$_settings/updateSettings",{name:this.name,value:s.target.value}).then(t=>{t.success?(this.$emit("updated",s.target.value),this.$mi_success_toast({})):this.$mi_error_toast({})})},titleClass(s){let t="monsterinsights-styled-radio";return this.isChecked(s)&&(t+=" monsterinsights-styled-radio-checked"),t},labelClass(s){let t="";return this.isChecked(s.value)&&(t+=" monsterinsights-styled-radio-label-checked"),s.level&&!this.optionAvailable(s.level)&&(t+=" monsterinsights-styled-radio-label-disabled"),t},isChecked(s){return this.settings[this.name]?s===this.settings[this.name]:s===this.options[0].value}}};var $=function(){var t=this,e=t._self._c;return e("fieldset",[e("div",{staticClass:"monsterinsights-settings-input-radio",class:t.classes},t._l(t.options,function(i){return e("span",{key:i.value},[e("label",{class:t.labelClass(i),attrs:{for:"monsterinsights-settings-radio-"+t.name+"["+i.value+"]"}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],class:t.titleClass(i.value)}),e("input",{attrs:{id:"monsterinsights-settings-radio-"+t.name+"["+i.value+"]",type:"radio",name:t.name,autocomplete:"off",readonly:t.disabled||i.level&&!t.optionAvailable(i.level)},domProps:{value:i.value,checked:t.isChecked(i.value)},on:{change:t.updateSetting}}),e("span",{staticClass:"monsterinsights-settings-radio-text",domProps:{innerHTML:t._s(i.label)}}),i.level?e("PopularPostsProPill",{attrs:{level:i.level}}):t._e()],1),t.$slots[i.value]&&t.isChecked(i.value)?e("span",{staticClass:"monsterinsights-radio-sub-panel"},[t.isChecked(i.value)?t._t(i.value):t._e()],2):t._e()])}),0)])},P=[],L=u(S,$,P,!1,null,null,null,null);const ot=L.exports,O={name:"SettingsInputLicense",props:{label:String},data(){return{is_network:this.$mi.network,text_license_row_1:d(r("You're using %1$sMonsterInsights Lite%2$s - no license needed. Enjoy! %3$s","google-analytics-for-wordpress"),"<strong>","</strong>",'<span class="monsterinsights-bg-img monsterinsights-smile"></span>'),text_license_row_2:d(r("To unlock more features consider %1$supgrading to PRO%2$s.","google-analytics-for-wordpress"),'<a href="'+this.$getUpgradeUrl("settings-panel","license")+'" class="monsterinsights-bold" target="_blank">',"</a>"),text_license_row_3:d(r("As a valued MonsterInsights Lite user you %1$sreceive 50%% off%2$s, automatically applied at checkout!","google-analytics-for-wordpress"),'<span class="monsterinsights-highlighted-text">',"</span>"),text_upgrade_to_pro:r("Unlock PRO Features Now","google-analytics-for-wordpress"),text_license_placeholder:r("Paste your license key here","google-analytics-for-wordpress"),text_license_verify:r("Verify","google-analytics-for-wordpress"),text_license_label:d(r("Already purchased? Simply enter your license key below to connect with MonsterInsights PRO! %1$sRetrieve your license key%2$s.","google-analytics-for-wordpress"),'<a href="'+this.$getUrl("license","settings_panel","https://www.monsterinsights.com/my-account/")+'" target="_blank">',"</a>"),is_loading:!1,show_connect:!1,connect_key:""}},methods:{fieldInput:p(function(){this.show_connect=this.connect_key!==""},100),startUpgradeToPro(){const s=this;this.$swal({icon:"info",title:r("Please wait...","google-analytics-for-wordpress"),allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,customClass:{container:"monsterinsights-swal"},didOpen:function(){s.$swal.showLoading()}}),g.getUpgradeLink(this.connect_key).then(function(t){if(t.success&&t.data.url)return window.location=t.data.url;{let e=t.data.message?t.data.message:r("There was an error unlocking MonsterInsights PRO please try again or install manually.","google-analytics-for-wordpress");s.$mi_error_toast({title:r("Error","google-analytics-for-wordpress"),text:e,toast:!1,position:"center",showConfirmButton:!0,showCloseButton:!1,customClass:!1,confirmButtonText:r("Ok","google-analytics-for-wordpress")}).then(function(){t.data.reload&&window.location.reload()})}}).catch(function(){s.$swal.close()})}}};var R=function(){var t=this,e=t._self._c;return e("div",{staticClass:"settings-input settings-input-license"},[e("p",{domProps:{innerHTML:t._s(t.text_license_row_1)}}),e("p",{domProps:{innerHTML:t._s(t.text_license_row_2)}}),e("p",{domProps:{innerHTML:t._s(t.text_license_row_3)}}),e("div",{staticClass:"monsterinsights-settings-license-lite"},[e("label",{attrs:{for:"monsterinsights-license-key"},domProps:{innerHTML:t._s(t.text_license_label)}}),e("div",{staticClass:"inline-field"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.connect_key,expression:"connect_key"}],attrs:{id:"monsterinsights-license-key",readonly:t.is_loading,type:"text",autocomplete:"off",placeholder:t.text_license_placeholder},domProps:{value:t.connect_key},on:{input:[function(i){i.target.composing||(t.connect_key=i.target.value)},t.fieldInput]}}),t.show_connect?e("button",{staticClass:"monsterinsights-button",domProps:{textContent:t._s(t.text_upgrade_to_pro)},on:{click:function(i){return i.preventDefault(),t.startUpgradeToPro.apply(null,arguments)}}}):t._e()])])])},T=[],N=u(O,R,T,!1,null,null,null,null);const lt=N.exports,A={name:"SettingsInputCheckbox",components:{SlideDownUp:v,SettingsInfoTooltip:h},props:{name:String,label:String,description:String,tooltip:String,faux:Boolean,faux_tooltip:String,faux_tooltip_off:String,valueOn:String,valueOff:String,default:{type:Boolean,default:!0},auth_disabled:{type:Boolean,default:!0}},data(){return{is_loading:!1,has_error:!1,slotCollapsibleVisible:!1}},computed:{..._({settings:"$_settings/settings",auth:"$_auth/auth"}),has_tag(){return this.auth_disabled?this.$mi.network?this.auth.network_v4||this.auth.network_manual_v4:this.auth.v4||this.auth.manual_v4:!0},hasCollapsibleSlot(){return this.$slots.collapsible},hasLabelSlot(){return this.$slots.label},iconClass(){let s="monstericon-arrow";return this.slotCollapsibleVisible&&(s+=" monstericon-down"),s},componentClass(){let s="monsterinsights-settings-input-checkbox";return this.$slots.collapsible&&(s+=" has-collapsible"),s},checked:{get(){let s=this.valueOn?this.valueOn===this.settings[this.name]:this.settings[this.name];return this.faux?this.default:s},set(s){let t=this.valueOff?this.valueOff:!1;s&&(t=this.valueOn?this.valueOn:!0),this.updateSetting(t)}},tooltip_data(){return{content:this.faux_tooltip_text,autoHide:!1,trigger:"hover focus click"}},faux_tooltip_text(){return this.has_tag?this.checked?this.faux_tooltip:this.faux_tooltip_off:this.$mi_need_to_auth},disabled(){return this.has_tag?this.faux:!0}},watch:{checked:function(s){this.$emit("checkboxChange",s),this.slotCollapsibleVisible=s}},methods:{stopClick:function(s){!s.target.classList.contains("monsterinsights-styled-checkbox")&&!s.target.classList.contains("monsterinsights-checkbox-label")?(this.toggleCollapsible(s),s.stopPropagation()):this.checked=!this.checked},updateSetting:function(s){if(this.disabled)return!1;this.$mi_saving_toast({}),this.$store.dispatch("$_settings/updateSettings",{name:this.name,value:s}).then(t=>{t.success?(this.$emit("checkbox_option_updated"),this.$mi_success_toast({})):this.$mi_error_toast({})})},toggleCollapsible:function(s){s.preventDefault(),s.stopPropagation(),this.slotCollapsibleVisible=!this.slotCollapsibleVisible},labelClass(){let s="monsterinsights-styled-checkbox";return this.checked&&(s+=" monsterinsights-styled-checkbox-checked"),s}},created(){this.slotCollapsibleVisible=this.checked}};var I=function(){var t=this,e=t._self._c;return e("div",{class:t.componentClass},[e("label",{class:t.disabled?"monsterinsights-styled-checkbox-faux":"",on:{click:function(i){return i.preventDefault(),t.stopClick.apply(null,arguments)},keyup:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.stopClick.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"space",32,i.key,[" ","Spacebar"])?null:t.stopClick.apply(null,arguments)}]}},[e("span",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],class:t.labelClass(),attrs:{tabindex:t.faux?"":0}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox",name:t.name,disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(i){var n=t.checked,a=i.target,l=!!a.checked;if(Array.isArray(n)){var o=null,c=t._i(n,o);a.checked?c<0&&(t.checked=n.concat([o])):c>-1&&(t.checked=n.slice(0,c).concat(n.slice(c+1)))}else t.checked=l}}}),t.label?e("span",{staticClass:"monsterinsights-checkbox-label",domProps:{innerHTML:t._s(t.label)}}):t._e(),t.hasLabelSlot?e("span",{staticClass:"monsterinsights-checkbox-label"},[t._t("label")],2):t._e(),t.description?e("span",{staticClass:"monsterinsights-checkbox-description",domProps:{innerHTML:t._s(t.description)}}):t._e(),t.tooltip?e("settings-info-tooltip",{attrs:{content:t.tooltip}}):t._e(),t.hasCollapsibleSlot?e("span",{staticClass:"monsterinsights-settings-input-toggle-collapsible",attrs:{role:"button"},on:{keyup:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.toggleCollapsible.apply(null,arguments)},function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"space",32,i.key,[" ","Spacebar"])?null:t.toggleCollapsible.apply(null,arguments)}]}},[e("i",{class:t.iconClass,attrs:{tabindex:"0",onkeypress:"if(event.keyCode==32||event.keyCode==13){return false;};"}})]):t._e()],1),e("slide-down-up",[t.slotCollapsibleVisible&&t.hasCollapsibleSlot?e("div",{staticClass:"monsterinsights-collapsible"},[t.hasCollapsibleSlot?e("div",{staticClass:"monsterinsights-separator"}):t._e(),e("div",{staticClass:"monsterinsights-collapsible-content"},[t._t("collapsible")],2)]):t._e()])],1)},M=[],H=u(A,I,M,!1,null,null,null,null);const ct=H.exports;const F={name:"SettingsNetworkNotice"};var U=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monsterinsights-settings-network-notice"},[t._m(0),e("div",{staticClass:"monsterinsights-network-message"},[t._t("default")],2)])},V=[function(){var s=this,t=s._self._c;return t("div",[t("div",{staticClass:"monsterinsights-bg-img monsterinsights-icon-warning"})])}],B=u(F,U,V,!1,null,"50389526",null,null);const ut=B.exports;const D={name:"SettingsInputText",components:{SettingsInfoTooltip:h},props:{name:String,label:String,description:String,placeholder:String,type:{type:String,default:"text"},tooltip:String,default_value:String,format:RegExp,auth_disabled:{type:Boolean,default:!0},readonly:{type:Boolean,default:!1},validate:Function},data(){return{is_loading:!1,has_error:!1,id:"input-"+this.name,text_reset:r("Reset to default","google-analytics-for-wordpress"),text_error:r("The value entered does not match the required format","google-analytics-for-wordpress"),updated_value:!1}},computed:{..._({settings:"$_settings/settings",auth:"$_auth/auth"}),has_v4(){return this.$mi.network?this.auth.network_v4||this.auth.network_manual_v4:this.auth.v4||this.auth.manual_v4},value:{get(){return this.updated_value!==!1?this.updated_value:this.settings[this.name]},set(s){return this.updated_value=s}},tooltip_data(){return{content:this.disabled?this.$mi_need_to_auth:"",autoHide:!1,trigger:"hover focus click"}},disabled(){return this.auth_disabled?!this.has_v4:!1}},methods:{inputUpdate:function(s){this.updateSetting(s.target.name,s.target.value)},updateSetting:function(s,t){if(this.disabled)return!1;if(this.has_error=!1,this.format&&!this.format.test(t))return this.has_error=!0,!1;if(this.validate){let e=this.validate(t);if(e.success!==!0)return this.text_error=e.error_text,this.has_error=!0,!1;e.value&&(t=e.value)}this.$mi_saving_toast({}),this.value=t,this.$store.dispatch("$_settings/updateSettings",{name:s,value:t}).then(e=>{e.success?this.$mi_success_toast({}):this.$mi_error_toast({})})},showReset(){return this.default_value&&this.settings[this.name]!==this.default_value},resetValue(){return this.updateSetting(this.name,this.default_value)}}};var E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"settings-input-text"},[t.label||t.description||t.tooltip?e("label",{attrs:{for:t.id}},[e("span",{staticClass:"monsterinsights-dark",domProps:{innerHTML:t._s(t.label)}}),t.description?e("span",{domProps:{innerHTML:t._s(t.description)}}):t._e(),t.showReset()?e("a",{staticClass:"monsterinsights-reset-default",attrs:{href:"#"},domProps:{textContent:t._s(t.text_reset)},on:{click:function(i){return i.preventDefault(),t.resetValue.apply(null,arguments)}}}):t._e(),t.tooltip?e("settings-info-tooltip",{attrs:{content:t.tooltip}}):t._e()],1):t._e(),e("div",{staticClass:"settings-input-text-input"},[t.type==="checkbox"?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,readonly:t.disabled||t.readonly,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?t._i(t.value,null)>-1:t.value},on:{change:[function(i){var n=t.value,a=i.target,l=!!a.checked;if(Array.isArray(n)){var o=null,c=t._i(n,o);a.checked?c<0&&(t.value=n.concat([o])):c>-1&&(t.value=n.slice(0,c).concat(n.slice(c+1)))}else t.value=l},t.inputUpdate]}}):t.type==="radio"?e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,readonly:t.disabled||t.readonly,type:"radio"},domProps:{checked:t._q(t.value,null)},on:{change:[function(i){t.value=null},t.inputUpdate]}}):e("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"},{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],attrs:{id:t.id,name:t.name,placeholder:t.placeholder,readonly:t.disabled||t.readonly,type:t.type},domProps:{value:t.value},on:{change:t.inputUpdate,input:function(i){i.target.composing||(t.value=i.target.value)}}})]),t.has_error?e("label",{staticClass:"monsterinsights-error"},[e("i",{staticClass:"monstericon-warning-triangle"}),e("span",{domProps:{innerHTML:t._s(t.text_error)}})]):t._e()])},J=[],q=u(D,E,J,!1,null,"55376385",null,null);const dt=q.exports,W={name:"SettingsInputRepeater",props:{structure:Array,name:String,text_add:String,delete_icon:{type:String,default:"monstericon-times-circle"},max_items:{type:Number,default:-1},min_items:{type:Number,default:-1},max_item_error_notice:{type:String,default:r("You can add maximum 5 items.","google-analytics-for-wordpress")},min_item_error_notice:{type:String,default:r("At least 0 item required.","google-analytics-for-wordpress")}},data(){return{text_add_path:this.text_add?this.text_add:r("Add Another Link Path","google-analytics-for-wordpress"),text_remove_row:r("Remove row","google-analytics-for-wordpress"),has_errors:[],show_max_item_error:!1,show_min_item_error:!1}},computed:{..._({settings:"$_settings/settings",auth:"$_auth/auth"}),rows:{get:function(){return this.settings[this.name]||m.set(this.settings,this.name,[]),JSON.parse(JSON.stringify(this.settings[this.name]))},set:function(){this.updateSetting(!1)}},has_v4(){return this.$mi.network?this.auth.network_v4||this.auth.network_manual_v4:this.auth.v4||this.auth.manual_v4},disabled(){return!this.has_v4},tooltip_data(){return{content:this.has_v4?"":this.$mi_need_to_auth,autoHide:!1,trigger:"hover focus click"}},button_class(){let s="monsterinsights-button";return this.disabled&&(s+=" monsterinsights-button-disabled"),s}},methods:{updateSetting:function(s){if(this.disabled||!s&&!this.validateSettings())return!1;this.$mi_saving_toast({}),this.$store.dispatch("$_settings/updateSettings",{name:this.name,value:this.rows}).then(t=>{t.success?this.$mi_success_toast({}):this.$mi_error_toast({})})},addRow:function(){let s={};if(this.rows.length===this.max_items){this.show_max_item_error=!0;return}for(let t in this.structure)s[this.structure[t].name]="";this.rows.push(s),this.rows.length!==this.min_items&&(this.show_min_item_error=!1),this.updateSetting(!0)},removeRow:function(s){if(this.rows.length===this.min_items){this.show_min_item_error=!0;return}this.rows&&this.rows instanceof Array?this.rows.splice(s,1):this.rows="",this.rows.length!==this.max_items&&(this.show_max_item_error=!1),this.updateSetting()},validateSettings(){this.has_errors=[];let s={};for(let t in this.rows)for(let e in this.structure){if(this.rows[t][this.structure[e].name]===""){this.has_errors[t]=d(r("%s can't be empty.","google-analytics-for-wordpress"),"<strong>"+this.structure[e].label+"</strong>");break}if(this.structure[e].pattern&&this.structure[e].pattern.test(this.rows[t][this.structure[e].name])===!1){this.has_errors[t]=this.structure[e].error;break}if(this.structure[e].prevent_duplicates){typeof s[this.structure[e].name]>"u"&&(s[this.structure[e].name]=[]),s[this.structure[e].name].push(this.rows[t][this.structure[e].name]);const i=s[this.structure[e].name];let n=()=>i.filter((a,l)=>i.indexOf(a)===l);i.length!==n().length&&(this.has_errors[t]=r("Duplicate values are not allowed.","google-analytics-for-wordpress"))}}return this.has_errors.length===0},errorClass(s,t){return this.rows[s][t]===""?"":this.has_errors[s]?"monsterinsights-input-error":"monsterinsights-input-valid"}}};var K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monsterinsights-settings-input-repeater"},[t.rows.length?e("div",{staticClass:"monsterinsights-settings-input-repeater-labels monsterinsights-settings-input-repeater-row"},t._l(t.structure,function(i,n){return e("label",{key:n,domProps:{textContent:t._s(i.label)}})}),0):t._e(),t._l(t.rows,function(i,n){return[e("div",{key:n,staticClass:"monsterinsights-settings-input-repeater-row"},[t._l(t.structure,function(a,l){return e("span",{key:l,class:t.errorClass(n,a.name)},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.rows[n][a.name],expression:"rows[index][input.name]"}],attrs:{type:"text",readonly:t.disabled},domProps:{value:t.rows[n][a.name]},on:{change:function(o){return t.updateSetting(!1,a.pattern)},input:function(o){o.target.composing||t.$set(t.rows[n],a.name,o.target.value)}}})])}),e("button",{attrs:{title:t.text_remove_row},on:{click:function(a){return a.preventDefault(),t.removeRow(n)}}},[e("i",{class:t.delete_icon})])],2),t.has_errors[n]?e("label",{key:n+"error",staticClass:"monsterinsights-error"},[e("i",{staticClass:"monstericon-warning-triangle"}),e("span",{domProps:{innerHTML:t._s(t.has_errors[n])}})]):t._e()]}),t.show_max_item_error?e("label",{staticClass:"monsterinsights-error"},[e("i",{staticClass:"monstericon-warning-triangle"}),e("span",{domProps:{innerHTML:t._s(t.max_item_error_notice)}})]):t._e(),t.show_min_item_error?e("label",{staticClass:"monsterinsights-error"},[e("i",{staticClass:"monstericon-warning-triangle"}),e("span",{domProps:{innerHTML:t._s(t.min_item_error_notice)}})]):t._e(),e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip_data,expression:"tooltip_data"}],class:t.button_class,domProps:{textContent:t._s(t.text_add_path)},on:{click:function(i){return i.preventDefault(),t.addRow.apply(null,arguments)}}})],2)},Y=[],j=u(W,K,Y,!1,null,null,null,null);const _t=j.exports;const z={name:"SettingsInputSelect",components:{SettingsInfoTooltip:h,Multiselect:f},props:{options:Array,forced:{type:Array,default:()=>[]},name:String,label:String,description:String,multiple:{type:Boolean,default:!1},tooltip:String,disabled:{type:Boolean,default:!1},addtext:String},data(){return{is_loading:!1,has_error:!1,id:"input-"+this.name,text_no_options:r("No options available","google-analytics-for-wordpress")}},computed:{..._({settings:"$_settings/settings"}),selected:{get:function(){let s=JSON.parse(JSON.stringify(this.forced));if(this.settings[this.name])for(let t in this.options)this.settings[this.name].indexOf(this.options[t].value)>=0&&this.notForced(this.options[t])&&s.push(this.options[t]);return s},set:function(){}},disabled_tooltip(){return{content:this.disabled?this.$mi_need_to_auth:"",autoHide:!1,trigger:"hover focus click"}}},methods:{updateSetting:function(s){if(this.disabled)return!1;this.$mi_saving_toast({});let t=[];for(let e in s)t.push(s[e].value);this.$store.dispatch("$_settings/updateSettings",{name:this.name,value:t}).then(e=>{e.success?this.$mi_success_toast({}):this.$mi_error_toast({})})},notForced:function(s){for(let t in this.forced)if(this.forced[t].value===s.value)return!1;return!0},tagClass(s){let t="multiselect__tag";return this.notForced(s)||(t+=" monsterinsights-tag-forced"),t}}};var G=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monsterinsights-settings-input-select"},[t.label?e("label",{attrs:{for:t.id}},[e("span",{staticClass:"monsterinsights-dark",domProps:{innerHTML:t._s(t.label)}}),t.description?e("span",{domProps:{innerHTML:t._s(t.description)}}):t._e(),t.tooltip?e("settings-info-tooltip",{attrs:{content:t.tooltip}}):t._e()],1):t._e(),e("div",{staticClass:"monsterinsights-settings-input-select-input"},[e("multiselect",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.disabled_tooltip,expression:"disabled_tooltip"}],attrs:{options:t.options,multiple:t.multiple,"track-by":"value",label:"label",searchable:!1,selectLabel:"",selectedLabel:"",deselectLabel:"",readonly:t.disabled},on:{input:t.updateSetting},scopedSlots:t._u([{key:"selection",fn:function({remove:i,values:n}){return[e("div",{staticClass:"multiselect__tags-wrap",attrs:{"data-text":t.addtext}},t._l(n,function(a,l){return e("span",{key:l,class:t.tagClass(a),on:{mousedown:function(o){o.preventDefault()}}},[e("span",{domProps:{textContent:t._s(a.label)}}),e("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"0"},on:{keypress:function(o){return!o.type.indexOf("key")&&t._k(o.keyCode,"enter",13,o.key,"Enter")?null:(o.preventDefault(),i(a))},mousedown:function(o){return o.preventDefault(),i(a)}}})])}),0)]}}]),model:{value:t.selected,callback:function(i){t.selected=i},expression:"selected"}})],1)])},Q=[],X=u(z,G,Q,!1,null,"9cd09625",null,null);const ht=X.exports,Z={name:"WelcomeOverlay",props:{id:String},methods:{close(){this.$emit("close",this.id)},maybeClose(s){s.target.classList.contains("monsterinsights-welcome-overlay")&&this.close()}}};var tt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"monsterinsights-welcome-overlay",attrs:{id:t.id},on:{click:t.maybeClose}},[e("div",{staticClass:"monsterinsights-welcome-overlay-inner"},[e("button",{staticClass:"monsterinsights-overlay-close",on:{click:t.close}},[e("span",{staticClass:"monstericon-times"})]),e("div",{staticClass:"monsterinsights-welcome-overlay-content"},[t._t("default")],2)])])},et=[],st=u(Z,tt,et,!1,null,null,null,null);const pt=st.exports;export{C as P,ct as S,pt as W,ut as a,lt as b,ot as c,_t as d,dt as e,ht as f,x as g};