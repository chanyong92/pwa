(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{106:function(e,a,t){e.exports=t.p+"static/media/log_img2.54068d70.png"},107:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAQCAYAAADJViUEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATZJREFUeNp8U7FRw0AQfGmUW3RgAohNBYgMIqwKkDoQFYAqMG4AiwpQRig6wDGR3MF3IPZm9pkd++Wb2bl//e396u4+mabJxez6YbeEM7jfr/o7FpMoGYQcrgGeAlHMEmyRqD8hg7iCG4DcnbcOCWpbpBGiB1rgAkGJAesbI5FcIX7zfzM2RixIvKPkF8CS7oklfcMkl8nV/bsF/PBDTb+bkVwCGyZqTfaaBx4SOx463mJyeyHvWTizhZEX4QDyCylYiWQW/CHJR/gD93k6V10Gmt1Kq8we6Q+ZZFodDUkRqks/4lslcX3G/3CiwHM9HIlpZN3bL6WcmFGqXIrE0HPdv4WuZNKigS34BJ5ZMC9ju+aNPjaeFdt0bjxbkF/DJpXqdjKGPkIcpT6nr2ruSRpJ5Qb7E2AAP8N+uIj0QeYAAAAASUVORK5CYII="},108:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALNJREFUeNpi/P//P4Oa53wDBgaGfiB2YECABUBceGt74gcGAoBR1WMeyID9QCyARf4CEDsSMghkyH40F6CDB1CMCxxkgRoAUpQIxPFAnICmSAGKcQEHJijjANDJB4D0RgYyAMglIP8mAAMXZJsBFjUfkMLrAdRVD5Bc1wgyZCIQ1+MJl0QkDSDXBgDxBph6oA8mMEKjeD6WsGCARvEEglEMMgQEgAY5oKcToAEPiAkTgAADAKiXNvj6WaR9AAAAAElFTkSuQmCC"},140:function(e,a,t){e.exports=t.p+"static/media/layout.6daccb2b.png"},159:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(69),o=t.n(l),i=t(28),s=(t(85),t(22)),c=t(14),m=t(15),d=t(16),u=t(17),v=t(8),_=(t(86),t(35)),p=t(18),h=t.n(p),f=t(29),b=t.n(f),g=t(26),w=t.n(g),E=t(5),k=t.n(E),A=t(163),C=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(e){var t;return Object(c.a)(this,n),(t=a.call(this,e)).submitClick=function(e){t.email_val=k()("#email_val").val(),t.pwd_val=k()("#pwd_val").val(),""===t.email_val||""===t.pwd_val?t.sweetalert("\uc774\uba54\uc77c\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"):h.a.post("/api/LoginForm?type=signin",{is_Email:t.email_val,is_Password:t.pwd_val}).then((function(e){var a=e.data.json[0].useremail,n=e.data.json[0].username,r=e.data.json[0].userpassword;if(null!=a&&""!=a){t.sweetalert("\ub85c\uadf8\uc778 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.","","info","\ub2eb\uae30");var l=new Date;l.setMinutes(l.getMinutes()+60),h.a.post("/api/LoginForm?type=SessionState",{is_Email:a,is_UserName:n}).then((function(e){b.a.save("userid",e.data.token1,{path:"/",expires:l}),b.a.save("username",e.data.token2,{path:"/",expires:l}),b.a.save("userpassword",r,{path:"/",expires:l})})).catch((function(e){t.sweetalert("\uc791\uc5c5\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.",e,"error","\ub2eb\uae30")})),setTimeout(function(){sessionStorage.setItem("username",n),window.location.href="/seating"}.bind(Object(_.a)(t)),1e3)}else t.sweetalert("\uc774\uba54\uc77c\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30")})).catch((function(e){t.sweetalert("\uc774\uba54\uc77c\uacfc \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30")}))},t.sweetalert=function(e,a,t,n){w.a.fire({title:e,text:a,icon:t,confirmButtonText:n})},t.state={user_name:""},t}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement(A.a,null,r.a.createElement("div",{className:"m_login"},r.a.createElement("h3",null,r.a.createElement("img",{src:t(106),alt:""})),r.a.createElement("div",{className:"log_box"},r.a.createElement("div",{className:"in_ty1"},r.a.createElement("span",null,r.a.createElement("img",{src:t(107),alt:""})),r.a.createElement("input",{type:"text",id:"email_val",placeholder:"\uc774\uba54\uc77c"})),r.a.createElement("div",{className:"in_ty1"},r.a.createElement("span",{className:"ic_2"},r.a.createElement("img",{src:t(108),alt:""})),r.a.createElement("input",{type:"password",id:"pwd_val",placeholder:"\ube44\ubc00\ubc88\ud638"})),r.a.createElement("ul",{className:"af"},r.a.createElement("li",null,r.a.createElement(i.b,{to:"/register"},"\ud68c\uc6d0\uac00\uc785")),r.a.createElement("li",{className:"pwr_b"},r.a.createElement("a",{href:"#n"},"\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815"))),r.a.createElement("div",{className:"s_bt",type:"",onClick:function(a){return e.submitClick(a)}},"\ub85c\uadf8\uc778"))))}}]),n}(n.Component),y=t(21),j=t.n(y),N=t(31),S=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).submitClick=function(){var e=Object(N.a)(j.a.mark((function e(a,t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.email_val_checker=k()("#email_val").val(),n.email2_val_checker=k()("#email2_val").val(),n.pwd_val_checker=k()("#pwd_val").val(),n.pwd_cnf_val_checker=k()("#pwd_cnf_val").val(),n.name_val_checker=k()("#name_val").val(),n.org_val_checker=k()("#org_val").val(),n.major_val_checker=k()("#major_val").val(),n.phone1_val_checker=k()("#phone1_val").val(),n.phone2_val_checker=k()("#phone2_val").val(),n.phone3_val_checker=k()("#phone3_val").val(),n.fnValidate=function(e){if(""===n.email_val_checker)return k()("#email_val").addClass("border_validate_err"),n.sweetalert("\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1;if(-1!==n.email_val_checker.search(/\s/))return k()("#email_val").addClass("border_validate_err"),n.sweetalert("\uc774\uba54\uc77c \uacf5\ubc31\uc744 \uc81c\uac70\ud574 \uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1;if(k()("#email_val").removeClass("border_validate_err"),""===n.email2_val_checker)return k()("#email2_val").addClass("border_validate_err"),n.sweetalert("\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ub2e4\uc2dc \ud655\uc778\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1;if(k()("#email2_val").removeClass("border_validate_err"),""===n.pwd_val_checker)return k()("#pwd_val").addClass("border_validate_err"),n.sweetalert("\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1;if(""!==n.pwd_val_checker){var a=n.pwd_val_checker;if(-1!==a.search(/\s/))return k()("#pwd_val").addClass("border_validate_err"),n.sweetalert("\ube44\ubc00\ubc88\ud638 \uacf5\ubc31\uc744 \uc81c\uac70\ud574 \uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1;if(!/[0-9]/.test(a)||!/[a-zA-Z]/.test(a)||!/[~!@#$%^&*()_+|<>?:{}]/.test(a)||a.length<8||a.length>16)return k()("#pwd_val").addClass("border_validate_err"),n.sweetalert("8~16\uc790 \uc601\ubb38 \ub300 \uc18c\ubb38\uc790\n\uc22b\uc790, \ud2b9\uc218\ubb38\uc790\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.","","info","\ub2eb\uae30"),!1}return k()("#pwd_val").removeClass("border_validate_err"),""===n.pwd_cnf_val_checker?(k()("#pwd_cnf_val").addClass("border_validate_err"),n.sweetalert("\ube44\ubc00\ubc88\ud638 \ud655\uc778\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):n.pwd_val_checker!==n.pwd_cnf_val_checker?(k()("#pwd_val").addClass("border_validate_err"),k()("#pwd_cnf_val").addClass("border_validate_err"),n.sweetalert("\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.","","info","\ub2eb\uae30"),!1):(k()("#pwd_cnf_val").removeClass("border_validate_err"),""===n.name_val_checker?(k()("#name_val").addClass("border_validate_err"),n.sweetalert("\uc131\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):-1!==n.name_val_checker.search(/\s/)?(k()("#name_val").addClass("border_validate_err"),n.sweetalert("\uc131\uba85\uc5d0 \uacf5\ubc31\uc744 \uc81c\uac70\ud574 \uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):(k()("#name_val").removeClass("border_validate_err"),""===n.org_val_checker?(k()("#org_val").addClass("border_validate_err"),n.sweetalert("\uc18c\uc18d\uae30\uad00\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):-1!==n.org_val_checker.search(/\s/)?(k()("#org_val").addClass("border_validate_err"),n.sweetalert("\uc18c\uc18d\uae30\uad00\uc5d0 \uacf5\ubc31\uc744 \uc81c\uac70\ud574 \uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):(k()("#org_val").removeClass("border_validate_err"),""===n.major_val_checker?(k()("#major_val").addClass("border_validate_err"),n.sweetalert("\uc804\uacf5\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):-1!==n.major_val_checker.search(/\s/)?(k()("#major_val").addClass("border_validate_err"),n.sweetalert("\uc804\uacf5\uc5d0 \uacf5\ubc31\uc744 \uc81c\uac70\ud574 \uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):(k()("#major_val").removeClass("border_validate_err"),""===n.phone1_val_checker||""===n.phone2_val_checker||""===n.phone3_val_checker?(k()("#phone1_val").addClass("border_validate_err"),k()("#phone2_val").addClass("border_validate_err"),k()("#phone3_val").addClass("border_validate_err"),n.sweetalert("\ud734\ub300\uc804\ud654 \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.","","info","\ub2eb\uae30"),!1):(k()("#phone1_val").removeClass("border_validate_err"),k()("#phone2_val").removeClass("border_validate_err"),k()("#phone3_val").removeClass("border_validate_err"),!0)))))},n.fnValidate()&&(n.state.full_email=n.email_val_checker+"@"+n.email2_val_checker,h.a.post("/api/register?type=dplicheck",{is_Email:n.email_val_checker+"@"+n.email2_val_checker}).then((function(e){try{0!==e.data.json[0].num?(k()("#email_val").addClass("border_validate_err"),k()("#email2_val").addClass("border_validate_err"),n.sweetalert("\uc774\ubbf8 \uc874\uc7ac\ud558\ub294 \uc774\uba54\uc77c\uc785\ub2c8\ub2e4.","","info","\ub2eb\uae30")):(k()("#email_val").removeClass("border_validate_err"),k()("#email2_val").removeClass("border_validate_err"),n.fnSignInsert("signup",t))}catch(a){n.sweetalert("\uc791\uc5c5\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.",a,"error","\ub2eb\uae30")}})).catch((function(e){return!1}))),n.fnSignInsert=function(){var e=Object(N.a)(j.a.mark((function e(a,t){var r,l,o,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=k()("form[name='frm']").serialize(),r=decodeURIComponent(r),l='{"'+(l=JSON.stringify(r).replace(/\"/gi,"")).replace(/\&/g,'","').replace(/=/gi,'":"')+'"}',e.prev=4,e.next=7,fetch("/api/register?type="+a,{method:"POST",headers:{"Content-Type":"application/json"},body:l});case 7:return o=e.sent,e.next=10,o.text();case 10:"succ"===(i=e.sent)?(n.sweetalert("\ud68c\uc6d0\uac00\uc785\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.","","info","\ub2eb\uae30"),n.props.history.push("/")):n.sweetalert("\uc791\uc5c5\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.",i,"error","\ub2eb\uae30"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),n.sweetalert("\uc791\uc5c5\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc600\uc2b5\ub2c8\ub2e4.",e.t0,"error","\ub2eb\uae30");case 17:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(a,t){return e.apply(this,arguments)}}();case 13:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),n.emailKeyPress=function(e){k()("#email_val").removeClass("border_validate_err")},n.pwdKeyPress=function(e){k()("#pwd_val").removeClass("border_validate_err")},n.pwdCnfKeyPress=function(e){k()("#pwd_cnf_val").removeClass("border_validate_err")},n.nameKeyPress=function(e){k()("#name_val").removeClass("border_validate_err")},n.handleSubmit=function(e){e.preventDefault()},n.mustNumber=function(e){var a=k()("#"+e).val();/[0-9]/.test(a.substr(a.length-1,1))||k()("#"+e).val(a.substr(0,a.length-1))},n.sweetalert=function(e,a,t,n){w.a.fire({title:e,text:a,icon:t,confirmButtonText:n})},n.state={},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("section",{className:"sub_wrap"},r.a.createElement("article",{className:"s_cnt re_1 ct1"},r.a.createElement("div",{className:"li_top"},r.a.createElement("h2",{className:"s_tit1"},"\ud68c\uc6d0\uac00\uc785"),r.a.createElement("form",{method:"post",name:"frm"},r.a.createElement("div",{className:"re1_wrap"},r.a.createElement("div",{className:"re_cnt ct2"},r.a.createElement("table",{className:"table_ty1"},r.a.createElement("tr",{className:"re_email"},r.a.createElement("th",null,"\uc774\uba54\uc77c"),r.a.createElement("td",null,r.a.createElement("input",{id:"email_val",type:"text",name:"is_Useremail1",placeholder:"\uc774\uba54\uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",onKeyPress:this.emailKeyPress}),r.a.createElement("span",{className:"e_goll"},"@"),r.a.createElement("select",{id:"email2_val",name:"is_Useremail2",className:"select_ty1"},r.a.createElement("option",{value:""},"\uc120\ud0dd\ud558\uc138\uc694"),r.a.createElement("option",{value:"naver.com"},"naver.com"),r.a.createElement("option",{value:"hanmail.net"},"hanmail.net"),r.a.createElement("option",{value:"nate.com"},"nate.com"),r.a.createElement("option",{value:"hotmail.com"},"hotmail.com"),r.a.createElement("option",{value:"gmail.com"},"gmail.com"),">",r.a.createElement("option",{value:"yahoo.co.kr"},"yahoo.co.kr"),r.a.createElement("option",{value:"yahoo.com"},"yahoo.com")))),r.a.createElement("tr",null,r.a.createElement("th",null,"\ube44\ubc00\ubc88\ud638"),r.a.createElement("td",null,r.a.createElement("input",{id:"pwd_val",type:"password",name:"is_Password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",onKeyPress:this.pwdKeyPress}))),r.a.createElement("tr",null,r.a.createElement("th",null,"\ube44\ubc00\ubc88\ud638 \ud655\uc778"),r.a.createElement("td",null,r.a.createElement("input",{id:"pwd_cnf_val",type:"password",name:"is_Password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",onKeyPress:this.pwdCnfKeyPress}))),r.a.createElement("tr",null,r.a.createElement("th",null,"\uc131\uba85"),r.a.createElement("td",null,r.a.createElement("input",{id:"name_val",type:"text",name:"is_Username",placeholder:"\uc131\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",onKeyPress:this.nameKeyPress}))),r.a.createElement("tr",null,r.a.createElement("th",null,"\uc18c\uc18d \uae30\uad00"),r.a.createElement("td",null,r.a.createElement("input",{id:"org_val",type:"text",name:"is_Organization",placeholder:"\uc18c\uc18d \uae30\uad00\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}))),r.a.createElement("tr",null,r.a.createElement("th",null,"\uc804\uacf5"),r.a.createElement("td",null,r.a.createElement("input",{id:"major_val",type:"text",name:"is_Usermajor",placeholder:"\uc804\uacf5\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}))),r.a.createElement("tr",{className:"tr_tel"},r.a.createElement("th",null,"\ud578\ub4dc\ud3f0"),r.a.createElement("td",null,r.a.createElement("select",{id:"phone1_val",name:"is_Userphone1",className:"select_ty1"},r.a.createElement("option",{value:""},"\uc120\ud0dd"),r.a.createElement("option",{value:"010"},"010"),r.a.createElement("option",{value:"011"},"011"),r.a.createElement("option",{value:"016"},"016"),r.a.createElement("option",{value:"017"},"017"),r.a.createElement("option",{value:"018"},"018"),r.a.createElement("option",{value:"019"},"019")),r.a.createElement("span",{className:"tel_dot"},"-"),r.a.createElement("input",{id:"phone2_val",name:"is_Userphone2",max:"9999",maxlength:"4",onChange:function(a){return e.mustNumber("phone2_val")}}),r.a.createElement("span",{className:"tel_dot"},"-"),r.a.createElement("input",{id:"phone3_val",name:"is_Userphone3",max:"9999",maxlength:"4",onChange:function(a){return e.mustNumber("phone3_val")}})))))),r.a.createElement("div",{className:"btn_confirm"},r.a.createElement("div",{className:"bt_ty bt_ty2 submit_ty1",onClick:function(a){return e.submitClick("signup",a)}},"\ud68c\uc6d0\uac00\uc785")))))))}}]),t}(n.Component),x=(t(158),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).loadSeat=Object(N.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.a.post("/api/LoginForm?type=SeatOut").then((function(e){n.setState({seat:e.data.json}),n.setState({seat_top:n.state.seat.filter((function(e){return e.id<=6}))}),n.setState({seat_top2:n.state.seat.filter((function(e){return e.id>=7}))})})).catch(console.log);case 1:case"end":return e.stop()}}),e)}))),n.state={seat:[],seat_top:[],seat_top2:[],seat_middle:[],seat_middle2:[],seat_bottom:[],seat_bottom2:[],seatAvailable:[],seatReserved:[]},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadSeat()}},{key:"onClickData",value:function(e){for(var a=this,t=sessionStorage.getItem("username"),n=0,r=0;r<this.state.seat.length;r++)if(this.state.seat[r].name==t){h.a.post("/api/LoginForm?type=Seatupdate",{is_Name:t,is_Seat:e}).then((function(e){return console.log(e.data.json)})).then(n=1);break}0==n&&h.a.post("/api/LoginForm?type=Seatinput",{is_Name:t,is_Seat:e}).then((function(e){return console.log(e.data.json)})),h.a.post("/api/LoginForm?type=SeatOut").then((function(e){a.setState({seat:e.data.json},(function(){a.loadSeat()}))}))}},{key:"render",value:function(){return console.log("\uc9c0\uae08\uc774\ub2c8!"),r.a.createElement("div",null,r.a.createElement(O,{seat:this.state.seat,seat_top:this.state.seat_top,seat_top2:this.state.seat_top2,available:this.state.seatAvailable,reserved:this.state.seatReserved,onClickData:this.onClickData.bind(this)}))}}]),t}(r.a.Component)),O=function(e){Object(u.a)(n,e);var a=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var t=arguments.length,r=new Array(t),l=0;l<t;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).rendering=function(e){var a=0;return null!=e&&(a=1),a},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"image"},r.a.createElement("img",{src:t(140),alt:""}),this.props.seat.map((function(a){return r.a.createElement("button",{class:"button"+a.id,type:"button",onClick:function(t){return e.onClickSeat(a.id)}},a.name)})))}},{key:"onClickSeat",value:function(e){this.props.onClickData(e)}}]),n}(r.a.Component),P=(r.a.Component,r.a.Component,x),B=t(48),D=t.n(B),R=r.a.createContext();R.Provider,R.Consumer;D.a.initializeApp({apiKey:"AIzaSyBMcxOHjmAoSOvdeLuV2nbJmyPXS9wdY80",authDomain:"seating-pwa.firebaseapp.com",projectId:"seating-pwa",storageBucket:"seating-pwa.appspot.com",messagingSenderId:"14701710055",appId:"1:14701710055:web:d22f12c13f8b054d59f042",measurementId:"G-PY2Z1KS3H3"});var F=D.a.messaging();F.requestPermission().then((function(){return console.log("\ud5c8\uac00!"),F.getToken()})).then((function(e){console.log(e)})).catch((function(e){console.log("fcm\uc5d0\ub7ec : ",e)})),F.onMessage((function(e){console.log(e.notification.title),console.log(e.notification.body)}));var I=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state=Object(s.a)({},e),n}return Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(v.a,{exact:!0,path:"/",render:function(){return r.a.createElement(C,{oncreate:e.getName})}}),r.a.createElement(v.a,{path:"/seating",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(v.a,{path:"/register",render:function(){return r.a.createElement(S,null)}}))}}]),t}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(155),t(156),t(157);o.a.render(r.a.createElement(i.a,null,r.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/pwa","/worker.js");M?(!function(e,a){fetch(e,{headers:{Worker:"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload(!1)}))})):U(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):U(a,e)}))}}()},80:function(e,a,t){e.exports=t(159)},85:function(e,a,t){},86:function(e,a,t){}},[[80,1,2]]]);
//# sourceMappingURL=main.b92bc367.chunk.js.map