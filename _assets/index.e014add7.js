let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as o,u as t,ao as i,au as r,s,ax as d,f as a,aA as n,c$ as p,d0 as m,i as l,o as j,j as c,k as f,n as b,m as x,aS as u}from"./index.ef3db6d5.js";import"./xlsx.a48e520c.js";import"./index.deb1177b.js";import"./index.1a9c0d02.js";import"./Trigger.bfe12865.js";import"./omit.973d6ffa.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06ba6731.js";import"./CheckOutlined.35bd116b.js";import"./index.6c31a860.js";import"./index.dbc09bd7.js";import"./index.4355cf69.js";import"./colors.88c331b3.js";import"./index.d6ae3dfa.js";import"./RightOutlined.7f7867ab.js";import{L as _}from"./index.d424d9f3.js";import"./index.209318a5.js";import"./types.80de9d94.js";import"./index.7337166d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.dd5e0426.js";import"./_baseFor.f4e5f03f.js";import"./index.5d3f872a.js";import"./index.a172b251.js";import"./index.23afc8d6.js";import"./index.668cd44f.js";import"./index.98592b54.js";import"./UpOutlined.4f317e4e.js";import"./LeftOutlined.760e802a.js";import"./index.2c5ff13d.js";import"./index.6148a3f9.js";import"./index.1027e3c8.js";import"./index.eb4ddc20.js";import"./index.d958525d.js";import"./zh_CN.0242bd16.js";import"./index.04693e16.js";import"./index.86f52d58.js";import"./index.aec5e809.js";import"./index.99070219.js";import"./CaretDownFilled.b023be26.js";import"./FileOutlined.fc3bf4d5.js";import"./index.0e150eb6.js";import"./index.d1cc2d2c.js";import"./index.4eeb0172.js";import{G as v}from"./GithubFilled.f4a175af.js";import"./RightOutlined.28ca736c.js";import"./index.3c10d2c1.js";import"./index.0e2bba57.js";import"./useTimeout.ecacd159.js";import"./tsxHelper.de9bad94.js";import"./index.9996551d.js";import"./domUtils.6607e034.js";import"./index.5b29772c.js";import"./animation.ee9e574c.js";import"./useScrollTo.2ce047e1.js";import"./index.f4b13226.js";import"./index.ff50ff6b.js";import"./useWindowSizeFn.4b33812b.js";import"./index.79276d61.js";import"./useHeaderSetting.4f8d0f31.js";import"./index.e6d195b4.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var F=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=t(),{getShowFooter:o}=n(),{currentRoute:p}=i(),{prefixCls:m}=r("layout-footer");return{getShowLayoutFooter:s((()=>{var e;return a(o)&&!(null==(e=a(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:d}}});const C=u("data-v-6da14420");p("data-v-6da14420");const L=f("div",null,"Copyright ©2020 Vben Admin",-1);m();const S=C(((e,o,t,i,r,s)=>{const d=l("GithubFilled"),a=l("Footer");return e.getShowLayoutFooter?(j(),c(a,{key:0,class:e.prefixCls},{default:C((()=>[f("div",{class:`${e.prefixCls}__links`},[f("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),f(d,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),f("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):x("v-if",!0)}));F.render=S,F.__scopeId="data-v-6da14420";export default F;