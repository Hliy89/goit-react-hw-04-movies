(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{38:function(e,t,n){"use strict";var r=n(35),c=n.n(r),a=n(36),i=n(31),s=n(32),o=n(34),l=n(33),h=n(0),p=n.n(h),u=n(8),j=n(37),v=n.n(j),d=n(39),b=n.n(d),m=n(1),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={filmsDetails:{},genres:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.filmId,e.next=4,v.a.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US"));case 4:n=e.sent,r=n.data,this.setState({filmsDetails:r,genres:r.genres}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.filmsDetails,n=e.genres,r=this.props.filmId,c=this.props.children,a=n.map((function(e){var t=e.name,n=e.id;return Object(m.jsx)("li",{children:t},n)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(u.b,{to:"/",children:"Go back"}),Object(m.jsxs)("div",{className:b.a.oneMovie,children:[Object(m.jsx)("img",{className:b.a.imageFilm,src:"".concat("https://image.tmdb.org/t/p/w500/").concat(t.poster_path),alt:t.original_title}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:t.title||t.original_name}),Object(m.jsx)("h3",{children:"Overview"}),Object(m.jsx)("p",{children:t.overview}),Object(m.jsx)("h3",{children:"Genres"}),Object(m.jsx)("ul",{children:a})]})]}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/movies/".concat(r,"/cast"),children:"Cast"})}),Object(m.jsx)("li",{children:Object(m.jsx)(u.b,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})})]}),c]})}}]),n}(p.a.Component);t.a=f},39:function(e,t,n){e.exports={imageFilm:"OneFilm_imageFilm__1FVci",oneMovie:"OneFilm_oneMovie__2Dr8b"}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var r=n(35),c=n.n(r),a=n(36),i=n(31),s=n(32),o=n(34),l=n(33),h=n(0),p=n(37),u=n.n(p),j=n(38),v=n(1),d=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match,n=t.params.movieId,e.next=5,u.a.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=923c2cf88ec4338da74c768a045101f0&language=en-US&page=1"));case 5:r=e.sent,this.setState({reviews:r.data.results}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.movieId,t=this.state.reviews,n=t.map((function(e){return Object(v.jsxs)("li",{children:[Object(v.jsx)("p",{children:e.author}),Object(v.jsx)("p",{children:e.content})]},e.id)}));return Object(v.jsxs)(j.a,{filmId:e,children:[t.length>0&&Object(v.jsx)("ul",{children:n}),!t.length&&Object(v.jsx)("p",{children:"We don't have any reviews for this movie"})]})}}]),n}(h.Component)}}]);
//# sourceMappingURL=7.d5fcb145.chunk.js.map