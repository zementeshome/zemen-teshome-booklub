(this["webpackJsonpzemen-teshome-booklub"]=this["webpackJsonpzemen-teshome-booklub"]||[]).push([[0],{111:function(e,a,t){},128:function(e,a,t){},129:function(e,a,t){},130:function(e,a,t){},131:function(e,a,t){},132:function(e,a,t){},133:function(e,a,t){},168:function(e,a){},171:function(e,a,t){},172:function(e,a,t){},195:function(e,a,t){},196:function(e,a,t){},197:function(e,a,t){},198:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},201:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(84),r=t.n(l),s=(t(95),t(8)),c=t(4),m=t(3),i=(t(96),t(38)),u=t.n(i),h=(t(106),u.a.initializeApp({apiKey:"AIzaSyCteInkX1DhuFOQRCRY1ZL26VIhE6StpcY",authDomain:"booklub-capstone.firebaseapp.com",databaseURL:"https://booklub-capstone.firebaseio.com",projectId:"booklub-capstone",storageBucket:"booklub-capstone.appspot.com",messagingSenderId:"823089345089",appId:"1:823089345089:web:120d46b919ae1eca608cc0",measurementId:"G-MLY6FSZQZB"}));u.a.analytics();var _=h.firestore(),d=(u.a.auth(),h);var b=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2)[1],t=Object(n.useState)(""),l=Object(m.a)(t,2),r=l[0],s=l[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),h=u[0],_=u[1],b=Object(n.useState)(""),p=Object(m.a)(b,2),g=p[0],f=p[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),N=v[0],y=v[1],k=Object(n.useState)(""),j=Object(m.a)(k,2),w=j[0],x=j[1],O=Object(n.useState)(""),C=Object(m.a)(O,2),S=C[0],F=C[1],I=Object(n.useState)(!1),A=Object(m.a)(I,2),D=A[0],R=A[1],z=function(){x(""),F(""),s(""),_("")},U=Object(c.f)(),L=function(){d.auth().onAuthStateChanged((function(e){e?(a(e),f(""),y(""),s(""),_("")):a("")}))};return Object(n.useEffect)((function(){L()}),[]),o.a.createElement("div",{className:"app"},o.a.createElement("section",{className:"login"},o.a.createElement("div",{className:"login__container"},o.a.createElement("img",{className:"login__logo",src:"/assets/logo1.svg",alt:"booklub logo"}),o.a.createElement("div",{className:"login__button-container"},D?o.a.createElement("form",{className:"login__form-signUp"},o.a.createElement("label",{className:"login__label"},"first name"),o.a.createElement("input",{className:"login__input",type:"text",autoFocus:!0,required:!0,value:r,onChange:function(e){return s(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("label",{className:"login__label"},"last name"),o.a.createElement("input",{className:"login__input",type:"text",autoFocus:!0,required:!0,value:h,onChange:function(e){return _(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("label",{className:"login__label-2"},"username (email)"),o.a.createElement("input",{className:"login__input",type:"text",autoFocus:!0,required:!0,value:g,onChange:function(e){return f(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("p",{className:"login__email-error"},w),o.a.createElement("label",{className:"login__label"},"password"),o.a.createElement("input",{className:"login__input",type:"password",required:!0,value:N,onChange:function(e){return y(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("p",{className:"login__password-error"},S),o.a.createElement("div",{className:"login__button-div"},o.a.createElement("button",{className:"login__button",onClick:function(e){e.preventDefault(),z(),d.auth().createUserWithEmailAndPassword(g,N).then((function(e){console.log("successful login"),d.auth().currentUser.updateProfile({displayName:"".concat(r)}).then((function(){U.push("/form")}))})).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":x(e.message);break;case"auth/weak-password":F(e.message)}}))}},"sign up")),o.a.createElement("div",{className:"login__signup-container"},o.a.createElement("p",{className:"login__sign-in"},"have an account?",o.a.createElement("span",{onClick:function(){return R(!D)}},"sign in")))):o.a.createElement("form",{className:"login__form-signIn"},o.a.createElement("label",{className:"login__label"},"username"),o.a.createElement("input",{className:"login__input",type:"text",autoFocus:!0,required:!0,value:g,onChange:function(e){return f(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("p",{className:"login__email-error"},w),o.a.createElement("label",{className:"login__label"},"password"),o.a.createElement("input",{className:"login__input",type:"password",required:!0,value:N,onChange:function(e){return y(e.target.value)},style:{fontFamily:"Roboto",fontSize:"14px"}}),o.a.createElement("p",{className:"login__password-error"},S),o.a.createElement("div",{className:"login__button-div"},o.a.createElement("button",{className:"login__button",onClick:function(e){e.preventDefault(),console.log(d.auth().currentUser),z(),d.auth().signInWithEmailAndPassword(g,N).then((function(){U.push("/home")})).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":x(e.message);break;case"auth/wrong-password":F(e.message)}}))}},"sign in")),o.a.createElement("div",{className:"login__signup-container"},o.a.createElement("p",{className:"login__sign-up"},"don't have an account?",o.a.createElement("span",{onClick:function(){return R(!D)}},"sign up"))))))))},p=t(16),g=t(17),f=t(19),E=t(18);t(111);var v=function(){var e=Object(c.f)();return o.a.createElement("section",{className:"header"},o.a.createElement("img",{className:"header__logo",src:"/assets/logo2.svg",alt:"booklub logo"}),o.a.createElement("nav",{className:"header__nav"},o.a.createElement("ul",{className:"header__nav-list"},o.a.createElement(s.b,{to:"/home",style:{textDecoration:"none",color:"black"}},o.a.createElement("li",{className:"header__nav-list-item"},"home")),o.a.createElement(s.b,{to:"/about",style:{textDecoration:"none",color:"black"}},o.a.createElement("li",{className:"header__nav-list-item"},"about")),o.a.createElement(s.b,{to:"/klub",style:{textDecoration:"none",color:"black"}},o.a.createElement("li",{className:"header__nav-list-item"},"klub")),o.a.createElement("button",{className:"header__logout",onClick:function(){d.auth().signOut().then((function(){e.push("/")}))}},"logout"))))},N=t(86),y=t.n(N);t(128);var k=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)([]),s=Object(m.a)(r,2),c=s[0],i=s[1],u=Object(n.useState)("AIzaSyD711ZoA7Yy6HWyZ0lJxDASNR9uJYEOcXc"),h=Object(m.a)(u,1)[0];return o.a.createElement("section",{className:"search"},o.a.createElement("form",{className:"search__form",onSubmit:function(e){e.preventDefault(),y.a.get("https://www.googleapis.com/books/v1/volumes?q="+t+"&key="+h+"&maxResults=40").then((function(e){console.log(e.data.items),i(e.data.items)}))}},o.a.createElement("div",{className:"search__container"},o.a.createElement("label",{className:"search__label",htmlFor:"search__input"},o.a.createElement("input",{className:"search__input",type:"text",autoComplete:"off",onChange:function(e){var a=e.target.value;l(a)}})),o.a.createElement("br",null),o.a.createElement("button",{className:"search__button",type:"submit"},"search for books"))),c.map((function(e){return o.a.createElement("a",{href:e.volumeInfo.previewLink,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{src:e.volumeInfo.imageLinks.thumbnail,alt:e.title})," ")})))},j=(t(129),function(e){Object(f.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).handleLogout=function(){d.auth().signOut()},e}return Object(g.a)(t,[{key:"render",value:function(){var e;return o.a.createElement("section",{className:"home"},o.a.createElement(v,{handleLogout:this.handleLogout}),o.a.createElement("img",{className:"home__hero",src:"/assets/hero2.svg",alt:"hero of library"}),o.a.createElement("div",{className:"home__div"},o.a.createElement("div",{className:"home__left-container"},o.a.createElement("div",{className:"home__container"},o.a.createElement("h1",{className:"home__header"},"hey ",null===(e=d.auth().currentUser)||void 0===e?void 0:e.displayName,","),o.a.createElement("div",{className:"home__text-container"},o.a.createElement("p",{className:"home__text"},"welcome to booklub. we're here to help you start your book club journey! please visit the klub page to meet your klub members or visit the about page to find out more about how we run things around here.")),o.a.createElement("img",{className:"home__image",src:"/assets/girl-icon.svg",alt:"girl reading illustration"}))),o.a.createElement("div",{className:"home__right-container"},o.a.createElement("div",{className:"home__book-container"},o.a.createElement("h2",{className:"home__book"},"book of the month"),o.a.createElement("div",{className:"home__book-cover-container"},o.a.createElement("img",{className:"home__book-cover",src:"/assets/japanese-short-stories.jpg",alt:"book cover"})),o.a.createElement("div",{className:"home__book-text-container"},o.a.createElement("p",{className:"home__book-text"},'"...provides a window into one of the world\'s most dynamic and challenging literary scenes. beginning with the first writings to assimilate and rework western literary traditions."'))))),o.a.createElement(k,null))}}]),t}(n.Component)),w=t(12),x=(t(130),function(e){Object(f.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={userId:"",hours:"",purpose:"",genres:[],authors:""},e.user=d.auth().currentUser,e.onChange=function(a){e.setState(Object(w.a)(Object(w.a)({},e.state),{},{hours:a.target.value}))},e.onPurposeChange=function(a){e.setState(Object(w.a)(Object(w.a)({},e.state),{},{purpose:a.target.value}))},e.onGenreChange=function(a){var t=e.state.genres;if(a.target.checked)t.push(a.target.value);else{var n=t.findIndex((function(e){return e===a.target.value}));n>-1&&t.splice(n,1)}e.setState(Object(w.a)(Object(w.a)({},e.state),{},{genres:t}))},e.onAuthorChange=function(a){e.setState(Object(w.a)(Object(w.a)({},e.state),{},{authors:a.target.value}))},e.handleSubmit=function(a){a.preventDefault(),console.log(d.auth().currentUser),e.setState(Object(w.a)(Object(w.a)({},e.state),{},{userId:d.auth().currentUser.email})),_.collection("booklub-users").add(Object(w.a)(Object(w.a)({},e.state),{},{userId:d.auth().currentUser.email})).then((function(){e.addUserToKlub()})),e.props.history.push("/home")},e.addUserToKlub=function(){var a=[];_.collection("klubs").where("genres","array-contains-any",e.state.genres).get().then((function(t){if(t.forEach((function(e){a.push({id:e.id,data:e.data()})})),console.log(a),a&&a.length>0){var n,o,l=(null===(n=a[0].data.users)||void 0===n?void 0:n.length)||0,r=0;a.forEach((function(e,a){var t;(null===(t=e.data.users)||void 0===t?void 0:t.length)<l&&(r=a)}));var s=a[r],c=null!==(o=null===s||void 0===s?void 0:s.data.users)&&void 0!==o?o:[];c.push(d.auth().currentUser.displayName),console.log(c,"updated users"),_.collection("klubs").doc(a[r].id).update({users:c}).then((function(){_.collection("booklub-users").where("userId","==",e.user.email).get().then((function(e){e.forEach((function(e){_.collection("booklub-users").doc(e.id).update({klub:s.id})}))}))}))}}))},e}return Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"form"},o.a.createElement("div",{className:"form__header-container"},o.a.createElement("h1",{className:"form__header"},"hello"),o.a.createElement("img",{className:"form__image",src:"/assets/book-icon.svg",alt:"book"})),o.a.createElement("p",{className:"form__info"},"please fill out the form below so we can get to know you a little better."),o.a.createElement("form",{onSubmit:this.handleSubmit,name:"form__container",action:"",method:"GET"},o.a.createElement("p",{className:"form__subheading"},"how many hours a week do you spend reading?"),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer",value:"0",onChange:this.onChange}),o.a.createElement("label",{className:"form__label",htmlFor:"zero"},"0")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer",value:"1-5",onChange:this.onChange}),o.a.createElement("label",{className:"form__label",htmlFor:"one"},"1-5")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer",value:"6-10",onChange:this.onChange}),o.a.createElement("label",{className:"form__label",htmlFor:"six"},"6-10")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer",value:"11-15",onChange:this.onChange}),o.a.createElement("label",{className:"form__label",htmlFor:"eleven"},"11-15")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer2",value:"15+",onChange:this.onChange}),o.a.createElement("label",{className:"form__label",htmlFor:"fifteenPlus"},"15+")),o.a.createElement("p",{className:"form__subheading"},"why did you join booklub?"),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer2",value:"to get into reading",onChange:this.onPurposeChange}),o.a.createElement("label",{className:"form__label",htmlFor:"getInto"},"to get into reading")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer2",value:"to read more",onChange:this.onPurposeChange}),o.a.createElement("label",{className:"form__label",htmlFor:"readMore"},"to read more")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"radio",name:"radAnswer2",value:"to meet new people",onChange:this.onPurposeChange}),o.a.createElement("label",{className:"form__label",htmlFor:"meet"},"to meet new people")),o.a.createElement("p",{className:"form__subheading"},"choose three genres you're interested in"),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"horror",value:"horror",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"horror"},"horror")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"scienceFiction",value:"science fiction",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"scienceFiction"},"science fiction")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"history",value:"history",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"history"},"history")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"selfHelp",value:"self-help",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"selfHelp"},"self-help")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"politics",value:"politics",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"politics"},"politics")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"",value:"literary fiction",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"literaryFiction"},"literary fiction")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"satire",value:"satire",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"satire"},"satire")," ",o.a.createElement("br",null)),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"philosophy",value:"philosophy",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"philosophy"},"philosophy")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"graphic",value:"graphic novels/comic books",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"graphic"},"graphic novels/comic books")),o.a.createElement("div",{className:"form__box"},o.a.createElement("input",{className:"form__input",type:"checkbox",name:"art",value:"art/architecture",onChange:this.onGenreChange}),o.a.createElement("label",{className:"form__label",htmlFor:"art"},"art/architecture")),o.a.createElement("p",{className:"form__subheading"},"let us know who some of your favourite authors are"),o.a.createElement("div",{className:"form__input-container"},o.a.createElement("textarea",{className:"form__input-authors",type:"text",style:{fontFamily:"Roboto",fontSize:"13px"},required:!0,placeholder:"if you don't have any please type n/a",value:this.state.authors,onChange:this.onAuthorChange})),o.a.createElement("div",{className:"form__button-container"},o.a.createElement("button",{className:"form__button",type:"submit"},"submit"))))}}]),t}(o.a.Component)),O=t(37);t(131),t(132);var C=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(""),c=Object(m.a)(r,2),i=c[0],u=c[1];return o.a.createElement("section",{className:"join"},o.a.createElement("div",{className:"join__outer-container"},o.a.createElement("div",{className:"join__inner-container"},o.a.createElement("h1",{className:"join__header"},"get to know your klub members below"),o.a.createElement("p",{className:"join__header-text"},"please join the same room"),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"name",className:"join__input",type:"text",onChange:function(e){return l(e.target.value)}})),o.a.createElement("div",null,o.a.createElement("input",{placeholder:"room",className:"join__input",value:i,onChange:function(e){return u(e.target.value)}})),o.a.createElement(s.b,{onClick:function(e){return t&&i?null:e.preventDefault()},to:"/chat?name=".concat(t,"&room=").concat(i)},o.a.createElement("button",{className:"join__button",type:"submit"},"sign in")))))},S=(t(133),t(14));var F=function(){var e=window.gapi,a=["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];return o.a.createElement("div",{className:"addEvent"},o.a.createElement("div",{className:"addEvent__main-container"},o.a.createElement("div",{className:"addEvent__left-container"},o.a.createElement("h1",{className:"addEvent__header"},"tips to make your klub run smoothly:"),o.a.createElement("div",{className:"addEvent__container"},o.a.createElement("ul",{className:"addEvent__list"},o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," after getting to know each choose a moderator"),o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," stay on the same page"),o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," remember that the purpose of this klub is to read and enjoy yourselves"),o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," give your discussions structure"),o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," give everyone a chance to be heard and have their book of choice nominated"),o.a.createElement("li",{className:"addEvent__list-item"},o.a.createElement(S.a,null)," meetings should start on time and can be organized through google calendar below"))),o.a.createElement("div",{className:"addEvent__button-container"},o.a.createElement("button",{className:"addEvent__button",onClick:function(){e.load("client:auth2",(function(){e.client.init({apiKey:"AIzaSyC2tqnocECgB7xT5F3NrYODL3NHRyh-VYE",clientId:"345527721227-14s99r64u63br5634e1csvvcqcnnecbe.apps.googleusercontent.com",discoveryDocs:a,scope:"https://www.googleapis.com/auth/calendar"}),e.client.load("calendar","v3"),e.auth2.getAuthInstance().signIn().then((function(){e.client.calendar.events.insert({calendarId:"primary",resource:{summary:"booklub meeting",location:"virtual",description:"first meeting",start:{dateTime:"2020-11-05T13:00:00-01:00",timeZone:"America/Toronto"},end:{dateTime:"2020-11-05T17:00:00-01:00",timeZone:"America/Toronto"},recurrence:["RRULE:FREQ=MONTHLY;COUNT=1"],attendees:[{email:"random@gmail.com"}],reminders:{useDefault:!1,overrides:[{method:"email",minutes:1440},{method:"popup",minutes:10}]}}}).execute((function(e){window.open(e.htmlLink)}))}))}))}},o.a.createElement("span",{className:"addEvent__add"},"add event")))),o.a.createElement("div",{className:"addEvent__right-container"},o.a.createElement("img",{className:"addEvent__image",src:"/assets/meeting-image.svg",alt:"virtual meeting illustration"}))))},I=function(e){Object(f.a)(t,e);var a=Object(E.a)(t);function t(){var e;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=a.call.apply(a,[this].concat(o))).state={users:[]},e.user=d.auth().currentUser,e.displayKlub=function(){var a;_.collection("booklub-users").where("userId","==",null===(a=e.user)||void 0===a?void 0:a.email).get().then((function(a){console.log(a),a.forEach((function(a){var t=a.data().klub;console.log(t),_.collection("klubs").doc(t).get().then((function(a){a.exists&&(console.log(a.data()),e.setState({users:Object(O.a)(a.data().users)}))}))}))}))},e}return Object(g.a)(t,[{key:"componentDidMount",value:function(){this.user?this.displayKlub():this.props.history.push("/")}},{key:"render",value:function(){var e;return o.a.createElement("section",{className:"klub"},o.a.createElement(s.b,{to:"/home"},o.a.createElement("img",{className:"klub__logo",src:"/assets/logo1.svg",alt:"booklub logo"})),o.a.createElement("h1",{className:"klub__header"},"welcome,"),o.a.createElement("div",{className:"klub__members"},null===(e=this.state.users)||void 0===e?void 0:e.map((function(e){return o.a.createElement("p",{className:"klub__member-name",key:e.id},o.a.createElement(S.b,{style:{width:"40%"}})," ",e)}))),o.a.createElement(F,null),o.a.createElement(C,null))}}]),t}(o.a.Component),A=t(87),D=t.n(A),R=t(88),z=t.n(R);t(171);var U=function(e){var a=e.room;return o.a.createElement("section",{className:"infoBar"},o.a.createElement("div",{className:"infoBar__left-inner-container"},o.a.createElement("img",{className:"infoBar__icon",src:"/assets/online.png",alt:"online icon"}),o.a.createElement("h3",{className:"infoBar__header"},a)),o.a.createElement("div",{className:"infoBar__right-inner-container"},o.a.createElement("a",{href:"/"},o.a.createElement("img",{className:"infoBar__online-icon",src:"/assets/leave.png",alt:"leave icon"}))))};t(172);var L=function(e){var a=e.message,t=e.setMessage,n=e.sendMessage;return o.a.createElement("section",{className:"messageInput"},o.a.createElement("form",{className:"messageInput__form"},o.a.createElement("input",{className:"messageInput__send",type:"text",value:a,placeholder:"type a message",style:{fontFamily:"Roboto",fontSize:"13px"},onChange:function(e){var a=e.target.value;return t(a)},onKeyPress:function(e){return"enter"===e.key?n(e):null}}),o.a.createElement("button",{className:"messageInput__button",onClick:function(e){return n(e)}},"send")))},G=t(89),B=t.n(G),T=t(53),M=t.n(T),q=(t(195),function(e){var a=e.message,t=a.user,n=a.text,l=!1,r=e.name.trim().toLowerCase();return t===r&&(l=!0),l?o.a.createElement("section",{className:"message justifyEnd"},o.a.createElement("p",{className:"message__sent-text pr-10"},r),o.a.createElement("div",{className:"message__box backgroundBlue"},o.a.createElement("p",{className:"message__text colorWhite"},M.a.emojify(n)))):o.a.createElement("section",{className:"message jusitfyStart"},o.a.createElement("div",{className:"message__box backgroundLight"},o.a.createElement("p",{className:"message__text colorDark"},M.a.emojify(n))),o.a.createElement("p",{className:"message__sent-text pl-10"},t))}),P=(t(196),function(e){var a=e.messages,t=e.name;return o.a.createElement(B.a,{className:"displayMessages"},a.map((function(e,a){return o.a.createElement("div",{key:a},o.a.createElement(q,{message:e,name:t}))})))});t(197);var Y,K=function(e){var a=e.users;return o.a.createElement("div",{className:"text"},a?o.a.createElement("div",{className:"text__box"},o.a.createElement("h1",{className:"text__header"},"online:"),o.a.createElement("div",{className:"text__online-container"},o.a.createElement("h2",null,a.map((function(e){var a=e.name;return o.a.createElement("div",{key:a,className:"text__online"},a,o.a.createElement("img",{className:"text__icon",alt:"online Icon",src:"/assets/online.png"}))}))))):null)};t(198);var Z=function(e){var a=e.location,t=Object(n.useState)(""),l=Object(m.a)(t,2),r=l[0],c=l[1],i=Object(n.useState)(""),u=Object(m.a)(i,2),h=u[0],_=u[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),p=b[0],g=b[1],f=Object(n.useState)(""),E=Object(m.a)(f,2),v=E[0],N=E[1],y=Object(n.useState)([]),k=Object(m.a)(y,2),j=k[0],w=k[1];return Object(n.useEffect)((function(){var e=D.a.parse(a.search),t=e.name,n=e.room;return Y=z()("localhost:8000"),c(t),_(n),Y.emit("join",{name:t,room:n},(function(){})),function(){Y.emit("disconnect"),Y.off()}}),["localhost:8000",a.search]),Object(n.useEffect)((function(){Y.on("message",(function(e){w((function(a){return[].concat(Object(O.a)(a),[e])}))})),Y.on("roomData",(function(e){var a=e.users;g(a)}))}),[]),o.a.createElement("section",{className:"chat"},o.a.createElement(s.b,{to:"/home"},o.a.createElement("img",{className:"chat__logo",src:"/assets/logo1-transparent.png",alt:"booklub logo"})),o.a.createElement("div",{className:"chat__outer-container"},o.a.createElement("div",{className:"chat__inner-container"},o.a.createElement(U,{room:h}),o.a.createElement(P,{messages:j,name:r}),o.a.createElement(L,{message:v,setMessage:N,sendMessage:function(e){e.preventDefault(),v&&Y.emit("sendMessage",v,(function(){return N("")}))}})),o.a.createElement(K,{users:p})))},W=(t(199),function(e){Object(f.a)(t,e);var a=Object(E.a)(t);function t(){return Object(p.a)(this,t),a.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){return o.a.createElement("section",{className:"about"},o.a.createElement(s.b,{to:"/home"},o.a.createElement("img",{className:"about__logo",src:"/assets/logo1.svg",alt:"booklub logo"})),o.a.createElement("h1",{className:"about__header"},o.a.createElement("span",null,"about us")),o.a.createElement("div",{className:"about__container"},o.a.createElement("div",{className:"about__text-container"},o.a.createElement("p",{className:"about__text-first"},"booklub is a new way to enjoy an old tradition"),o.a.createElement("p",{className:"about__text-second"},"in these unprecedented times, starting an online book club is a great way to stay connected and participate in discussions that can take your mind off of everyday life."),o.a.createElement("p",{className:"about__text-third"},"whatever your reason was for joining booklub, you've come to the right place. our goal is to connect you with with people who have the same interests as you and keep you engaged. we're here to guide you on your literary journey.")),o.a.createElement("div",{className:"about__image-container"},o.a.createElement("img",{className:"about__image",src:"/assets/book-icon.svg",alt:"book"}))))}}]),t}(o.a.Component));t(200);var H=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.a,null,o.a.createElement(c.c,null,o.a.createElement(c.a,{exact:!0,path:"/",component:b}),o.a.createElement(c.a,{path:"/home",component:j}),o.a.createElement(c.a,{path:"/form",component:x}),o.a.createElement(c.a,{path:"/klub",component:I}),o.a.createElement(c.a,{path:"/chat",component:Z}),o.a.createElement(c.a,{path:"/about",component:W}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e,a,t){e.exports=t(201)},95:function(e,a,t){},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.67b5a445.chunk.js.map