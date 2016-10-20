
require(["config"],function(){
	require(["jquery","lunbo","magnify","tab-lr","myhover","show_hide","shopcar","specialTab"],function(jq,lb,mf,tab,myhover,sh,sc,st){
			mf.init("#small","#glass","#big");
			tab.init({
				leftBtn:"#span-left",
				rightBtn:"#span-right",
				handover:"#span-lr"
			});
			new myhover().init({
				topid:"#small",
				bottomid:"#span-lr",
				bigid:"#big",
				styleon:"style-on",
				styledown:"style-down"
			})
			sh.init({
				id:"#size",
				myattr:"i",
				righticon:"div",
				check:"b",
				borderColor:"#cc0000"
			});
			sh.init({
				id:"#color",
				myattr:"i",
				righticon:"div",
				check:"b",
				borderColor:"#cc0000"
			})
			sc.init({
				id:"shopAttr",
				shopAttrStyle:"shopAttrstyle",
				bynow:"buy-now",
				join:"join",
				shopname:"h2",
				color:"color",
				size:"size",
				num:"num",
				price:"price",
				numleft:"down",
				numright:"up",
				numleftStyleA:"i-left-a",
				numleftStyleB:"i-left-b",
				numrightStyleA:"i-right-a",
				numrightStyleB:"i-right-b"
			});
			st.init({
				navid:"nav",
				liStyle:"a-hover",
				spxq:"spxq",
				guideContent:"guidecontent",
				guideImg:"guideimg",
				content:"content",
				judge:"judge"
			});
			
	})
})
