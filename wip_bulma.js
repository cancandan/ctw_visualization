'use strict';function _0x4cd1(_0x244701,_0x591241){const _0x4745ee=_0x4745();return _0x4cd1=function(_0x4cd1af,_0x2d61fa){_0x4cd1af=_0x4cd1af-0x192;let _0x544c32=_0x4745ee[_0x4cd1af];return _0x544c32;},_0x4cd1(_0x244701,_0x591241);}const _0x306533=_0x4cd1;(function(_0x4e72dc,_0xfaaffd){const _0x49b80f=_0x4cd1,_0x423be2=_0x4e72dc();while(!![]){try{const _0x5a7832=parseInt(_0x49b80f(0x1f4))/0x1*(parseInt(_0x49b80f(0x1b2))/0x2)+parseInt(_0x49b80f(0x1cb))/0x3*(-parseInt(_0x49b80f(0x1dc))/0x4)+-parseInt(_0x49b80f(0x1cd))/0x5*(-parseInt(_0x49b80f(0x1fb))/0x6)+-parseInt(_0x49b80f(0x1c2))/0x7*(-parseInt(_0x49b80f(0x1c3))/0x8)+parseInt(_0x49b80f(0x1db))/0x9+parseInt(_0x49b80f(0x1ab))/0xa*(-parseInt(_0x49b80f(0x209))/0xb)+-parseInt(_0x49b80f(0x1c7))/0xc*(parseInt(_0x49b80f(0x198))/0xd);if(_0x5a7832===_0xfaaffd)break;else _0x423be2['push'](_0x423be2['shift']());}catch(_0x102ffd){_0x423be2['push'](_0x423be2['shift']());}}}(_0x4745,0x94928));let startx=null,starty=null,height=null,oneChar=null,trainSize=0xa,contextSize=0x3,alphabetSize=0x3,s=_0x306533(0x1b1),prev='',ctw=null,algo=null,sg=null,data=[],dataMap=new Map(),pos=0x0,stepNum=0x0,info=new Map();function _0x4745(){const _0x4fd286=['end','disabled','set','exp','Backward\x20propagation\x20for\x20computing\x20lw','value','map','none','1397221hPIiBm','16KZySbD','getBBox','__olddata__','#graph','3852876XwjPDB','#inputSeq','background','renderDot','18WvyKVv','50px','316555WMFfGK','depth','width','get','afterSet','#iterRect','The\x20lw\x20cell\x20for\x20the\x20root\x20has\x20the\x20probability\x20for\x20the\x20sequence.\x20Now\x20can\x20do\x20prediction\x20by\x20trying\x20one\x20more\x20step\x20for\x20each\x20symbol\x20in\x20the\x20alphabet\x20and\x20dividing\x20by\x20this\x20to\x20find\x20the\x20conditional\x20probabilities.','yellow','black','#stepAlgo','getComputedTextLength','slice','push','.myheading\x20~\x20div','9539730LpLHeA','31468WhEmbw','flatMap','step','currentRect','makeDot','ctxRect','filter','length','svg','toString','match','previous','svg1','path','remove','#setInput','div','digraph\x20\x20{rankdir=\x22RL\x22;root\x0a','done','log','parent','join','data','property','24247WSyrXU','localeCompare','keys','root','title','sym','node','102hoPpba','Forward\x20propagation\x20for\x20keeping\x20context\x20counts','alphabetSize','__data__','In\x20the\x20backward\x20phase,\x20we\x20go\x20forwards,\x20starting\x20from\x20leaf,\x20the\x20weighted\x20log\x20probability,\x20lw,\x20is\x20set\x20to\x20le\x20for\x20a\x20leaf.\x20Then\x20we\x20go\x20up\x20to\x20the\x20parent\x20and\x20update\x20its\x20lw\x20using\x20its\x20childs.','#tablo','size','height','select','#ctxLength','group','duration','iterRect','graphviz','33WetsOh','inputFocus','prototype','concat','selectAll','each','flat','Stepping\x20thru\x20the\x20algorithm','You\x20see\x20the\x20sequence\x20you\x20have\x20entered\x20on\x20the\x20right.\x20The\x20maximum\x20length\x20of\x20context\x20is\x20marked\x20as\x20blue,\x20the\x20current\x20symbol\x20as\x20red.\x20Below\x20you\x20see\x20an\x20empty\x20table\x20showing\x20the\x20counts\x20of\x20each\x20symbol\x20for\x20each\x20context.\x20It\x20will\x20be\x20populated\x20as\x20you\x20step\x20thru\x20the\x20algorithm.\x20Click\x20Step\x20button\x20to\x20continue.','append','fit','update','rect','transition','65uEEQBT','\x20->\x20','contextSize','counts','style','color','substr','context','white','setAttribute','delay','nextSibling','reduce','Done','next','attr','round','.message-header','divTableCell','3096710SBoZrV','class','text','#graph\x20svg','children','divTableRow','012012','54xIYtgl','#sequence\x20svg','#sequence','khaki','fill','red','inputChange','#69a3b2'];_0x4745=function(){return _0x4fd286;};return _0x4745();}info['set'](_0x306533(0x1d1),_0x306533(0x192)),info[_0x306533(0x1bc)]('fw','In\x20the\x20forward\x20phase,\x20we\x20go\x20backwards,\x20starting\x20from\x20\x22root\x22,\x20ie.\x20the\x20empty\x20context.\x20At\x20each\x20step,\x20the\x20count\x20for\x20the\x20current\x20symbol\x20is\x20increased\x20for\x20that\x20context.\x20The\x20log\x20probability\x20estimate,\x20le,\x20is\x20also\x20updated.'),info[_0x306533(0x1bc)]('bw',_0x306533(0x1ff)),info[_0x306533(0x1bc)](_0x306533(0x1ee),_0x306533(0x1d3));function inputFocus(){const _0x398c5e=_0x306533;data=[],dataMap=new Map(),console[_0x398c5e(0x1ef)](_0x398c5e(0x20a)),d3['select'](_0x398c5e(0x1eb))['attr'](_0x398c5e(0x1bb),null),d3['select'](_0x398c5e(0x1b3))[_0x398c5e(0x1ea)](),d3['selectAll']('#tablo\x20div')['remove'](),d3[_0x398c5e(0x203)](_0x398c5e(0x1ae))[_0x398c5e(0x1ea)](),d3['select']('#setInput')['attr'](_0x398c5e(0x1bb),!![]);}function inputChange(){const _0x1368e9=_0x306533;console[_0x1368e9(0x1ef)](_0x1368e9(0x1b8));let _0x921374=d3[_0x1368e9(0x203)](_0x1368e9(0x1c8))['node']()[_0x1368e9(0x1bf)],_0x3b7c29=d3[_0x1368e9(0x203)](_0x1368e9(0x204))[_0x1368e9(0x1fa)]()[_0x1368e9(0x1bf)],_0x159620=/^[0-9]+$/;_0x921374[_0x1368e9(0x1e6)](_0x159620)&&_0x3b7c29[_0x1368e9(0x1e6)](_0x159620)?(d3[_0x1368e9(0x203)](_0x1368e9(0x1eb))[_0x1368e9(0x1a7)](_0x1368e9(0x1bb),null),d3[_0x1368e9(0x203)]('#sequence\x20svg')[_0x1368e9(0x1ea)](),d3[_0x1368e9(0x203)]('#tablo\x20div')[_0x1368e9(0x1ea)](),d3[_0x1368e9(0x203)](_0x1368e9(0x1ae))[_0x1368e9(0x1ea)]()):d3[_0x1368e9(0x203)](_0x1368e9(0x1eb))[_0x1368e9(0x1a7)](_0x1368e9(0x1bb),!![]);}class Node{constructor(_0x579af9=null,_0x1b44a6=null){const _0x258234=_0x306533;this['parent']=_0x579af9,this['pe']=0x0,this['pw']=0x0,this['counts']=new Array(this['alphabetSize'])[_0x258234(0x1b6)](0x0),this['children']=new Array(this['alphabetSize']),this['depth']=_0x579af9?_0x579af9[_0x258234(0x1ce)]+0x1:0x0,this[_0x258234(0x1f9)]=_0x1b44a6,this[_0x258234(0x1e9)]=_0x579af9?_0x579af9[_0x258234(0x1e9)]+this[_0x258234(0x1f9)]:'';}[_0x306533(0x1e0)](_0x523f94){const _0x55b91c=_0x306533;for(const _0x2b20ca in this[_0x55b91c(0x1af)]){if(this[_0x55b91c(0x1af)][_0x2b20ca]!==undefined){let _0x16fdb5=this['path']==''?_0x55b91c(0x1f7):this[_0x55b91c(0x1e9)];_0x523f94=_0x523f94+_0x16fdb5+_0x55b91c(0x199)+this[_0x55b91c(0x1af)][_0x2b20ca]['path']+'\x0a',_0x523f94=_0x523f94+this[_0x55b91c(0x1af)][_0x2b20ca][_0x55b91c(0x1e0)]('');}}return _0x523f94;}}class CTW{constructor(_0x596f0f=0x3,_0x4bae67=0x2,_0xf7d488=null){const _0x1884c1=_0x306533;this[_0x1884c1(0x19a)]=_0x596f0f,this[_0x1884c1(0x1fd)]=_0x4bae67,this['previous']=_0xf7d488,Node[_0x1884c1(0x20b)]['alphabetSize']=_0x4bae67,this['root']=new Node();}[_0x306533(0x195)](_0x244230,_0x35e170,_0x2d42ae){const _0x3aa338=_0x306533;let _0x3947c1=this['root'];for(let _0x566c76=this[_0x3aa338(0x1e7)][_0x3aa338(0x1e3)];_0x566c76>=0x0;_0x566c76--){if(_0x566c76!=this[_0x3aa338(0x1e7)][_0x3aa338(0x1e3)]){let _0x55c412=this['previous'][_0x566c76];_0x3947c1[_0x3aa338(0x1af)][_0x55c412]===undefined&&(_0x3947c1[_0x3aa338(0x1af)][_0x55c412]=new Node(_0x3947c1,_0x55c412)),_0x3947c1=_0x3947c1['children'][_0x55c412];}!_0x35e170?(_0x3947c1['pe']+=Math[_0x3aa338(0x1ef)](_0x3947c1[_0x3aa338(0x19b)][_0x244230]+0.5)-Math[_0x3aa338(0x1ef)](_0x3947c1[_0x3aa338(0x19b)][_0x3aa338(0x1a4)]((_0x2fe007,_0x359fec)=>_0x2fe007+_0x359fec)+this[_0x3aa338(0x1fd)]/0x2),_0x3947c1['counts'][_0x244230]+=0x1):(_0x3947c1['counts'][_0x244230]-=0x1,_0x3947c1['pe']-=Math[_0x3aa338(0x1ef)](_0x3947c1[_0x3aa338(0x19b)][_0x244230]+0.5)-Math[_0x3aa338(0x1ef)](_0x3947c1[_0x3aa338(0x19b)][_0x3aa338(0x1a4)]((_0x421d30,_0x12a670)=>_0x421d30+_0x12a670)+this[_0x3aa338(0x1fd)]/0x2));}_0x3947c1['pw']=_0x3947c1['pe'];while(_0x3947c1[_0x3aa338(0x1f0)]!==null){_0x3947c1=_0x3947c1['parent'];let _0x4360ae=new Array();for(let _0xbaaf05=0x0;_0xbaaf05<this[_0x3aa338(0x1fd)];_0xbaaf05++){let _0x4cb8c1=0x0;_0x3947c1[_0x3aa338(0x1af)][_0xbaaf05]!==undefined&&(_0x4cb8c1=_0x3947c1[_0x3aa338(0x1af)][_0xbaaf05]['pw']),_0x4360ae[_0xbaaf05]=_0x4cb8c1;}let _0x561122=_0x4360ae[_0x3aa338(0x1a4)]((_0x214410,_0x265ff2)=>_0x214410+_0x265ff2);_0x3947c1['pw']=Math[_0x3aa338(0x1ef)](0.5)+Math[_0x3aa338(0x1ef)](Math[_0x3aa338(0x1bd)](_0x3947c1['pe'])+Math['exp'](_0x561122));}!_0x2d42ae&&(this[_0x3aa338(0x1e7)]=this[_0x3aa338(0x1e7)]['slice'](0x1,this[_0x3aa338(0x1e7)][_0x3aa338(0x1e3)]),this[_0x3aa338(0x1e7)]+=_0x244230);}*[_0x306533(0x1de)](){const _0x52649b=_0x306533;let _0x2b723b=s[_0x52649b(0x1d8)](contextSize,trainSize);for(let _0xf09aa8=0x0;_0xf09aa8<_0x2b723b[_0x52649b(0x1e3)];_0xf09aa8++){let _0x470d29=_0x2b723b[_0xf09aa8],_0x4bef16=![],_0xa81aed=![],_0x49e6de=this[_0x52649b(0x1f7)];for(let _0xeb94de=this[_0x52649b(0x1e7)][_0x52649b(0x1e3)];_0xeb94de>=0x0;_0xeb94de--){if(_0xeb94de!=this['previous'][_0x52649b(0x1e3)]){let _0x34ec5b=this[_0x52649b(0x1e7)][_0xeb94de];_0x49e6de[_0x52649b(0x1af)][_0x34ec5b]===undefined&&(_0x49e6de[_0x52649b(0x1af)][_0x34ec5b]=new Node(_0x49e6de,_0x34ec5b)),_0x49e6de=_0x49e6de[_0x52649b(0x1af)][_0x34ec5b];}!_0x4bef16?(_0x49e6de['pe']+=Math[_0x52649b(0x1ef)](_0x49e6de[_0x52649b(0x19b)][_0x470d29]+0.5)-Math['log'](_0x49e6de[_0x52649b(0x19b)][_0x52649b(0x1a4)]((_0x2b47d3,_0x5889bf)=>_0x2b47d3+_0x5889bf)+this[_0x52649b(0x1fd)]/0x2),_0x49e6de[_0x52649b(0x19b)][_0x470d29]+=0x1):(_0x49e6de[_0x52649b(0x19b)][_0x470d29]-=0x1,_0x49e6de['pe']-=Math[_0x52649b(0x1ef)](_0x49e6de[_0x52649b(0x19b)][_0x470d29]+0.5)-Math[_0x52649b(0x1ef)](_0x49e6de[_0x52649b(0x19b)][_0x52649b(0x1a4)]((_0x243ce8,_0x48e97b)=>_0x243ce8+_0x48e97b)+this[_0x52649b(0x1fd)]/0x2)),yield{'state':0x1,'currentNode':_0x49e6de,'x':_0x470d29};}_0x49e6de['pw']=_0x49e6de['pe'],yield{'state':0x2,'currentNode':_0x49e6de,'x':_0x470d29};while(_0x49e6de[_0x52649b(0x1f0)]!==null){_0x49e6de=_0x49e6de[_0x52649b(0x1f0)];let _0x42852f=new Array();for(let _0x42c21d=0x0;_0x42c21d<this[_0x52649b(0x1fd)];_0x42c21d++){let _0x160a01=0x0;_0x49e6de['children'][_0x42c21d]!==undefined&&(_0x160a01=_0x49e6de[_0x52649b(0x1af)][_0x42c21d]['pw']),_0x42852f[_0x42c21d]=_0x160a01;}let _0x712158=_0x42852f[_0x52649b(0x1a4)]((_0x5ac3cd,_0x3d63f5)=>_0x5ac3cd+_0x3d63f5);_0x49e6de['pw']=Math[_0x52649b(0x1ef)](0.5)+Math[_0x52649b(0x1ef)](Math['exp'](_0x49e6de['pe'])+Math[_0x52649b(0x1bd)](_0x712158)),yield{'state':0x2,'currentNode':_0x49e6de,'x':_0x470d29};}!_0xa81aed&&(this[_0x52649b(0x1e7)]=this[_0x52649b(0x1e7)][_0x52649b(0x1d8)](0x1,this[_0x52649b(0x1e7)][_0x52649b(0x1e3)]),this['previous']+=_0x470d29),_0xf09aa8+0x1<_0x2b723b['length']&&(console[_0x52649b(0x1ef)]('3'),yield{'state':0x3,'currentNode':null});}console[_0x52649b(0x1ef)]('4'),yield{'state':0x4,'currentNode':null};}[_0x306533(0x1e0)](){const _0x18014e=_0x306533;let _0x413545=_0x18014e(0x1ed),_0x40e583=this['root'][_0x18014e(0x1e0)](''),_0x372c20='}';return _0x413545+_0x40e583+_0x372c20;}}function setInput(){const _0x1ad62d=_0x306533;s=d3[_0x1ad62d(0x203)]('#inputSeq')[_0x1ad62d(0x1f3)](_0x1ad62d(0x1bf)),contextSize=parseInt(d3[_0x1ad62d(0x203)]('#ctxLength')[_0x1ad62d(0x1f3)](_0x1ad62d(0x1bf))),alphabetSize=new Set(s)[_0x1ad62d(0x201)],addSequence(s),makeTable(alphabetSize),d3[_0x1ad62d(0x203)](_0x1ad62d(0x1eb))[_0x1ad62d(0x1a7)](_0x1ad62d(0x1bb),!![]),d3['select'](_0x1ad62d(0x1d6))[_0x1ad62d(0x1a7)](_0x1ad62d(0x1bb),null),d3[_0x1ad62d(0x203)](_0x1ad62d(0x1a9))[_0x1ad62d(0x1ad)](_0x1ad62d(0x210)),d3['select']('.message-body')[_0x1ad62d(0x1ad)](info['get'](_0x1ad62d(0x1d1)));}function addSequence(_0x14a91d){const _0x1ea141=_0x306533;let _0x46c022=d3['select'](_0x1ea141(0x1b4))[_0x1ea141(0x193)](_0x1ea141(0x1e4))[_0x1ea141(0x1a7)]('id',_0x1ea141(0x1e8))['attr'](_0x1ea141(0x202),_0x1ea141(0x1cc)),_0x2a7066=_0x46c022[_0x1ea141(0x193)]('text')[_0x1ea141(0x1ad)](_0x14a91d)[_0x1ea141(0x1a7)]('y',0x1e)[_0x1ea141(0x1a7)](_0x1ea141(0x1ac),'myfont'),_0x4b3767=_0x2a7066['node']()[_0x1ea141(0x1c4)](),_0x5224b7=_0x2a7066[_0x1ea141(0x1ad)]()[_0x1ea141(0x19e)](0x0,0x1),_0x44f68c=_0x46c022['append'](_0x1ea141(0x1ad))['attr'](_0x1ea141(0x1ac),'myfont')[_0x1ea141(0x1ad)](_0x5224b7);oneChar=_0x44f68c[_0x1ea141(0x1fa)]()[_0x1ea141(0x1d7)](),_0x44f68c[_0x1ea141(0x1ea)](),startx=_0x4b3767['x'],starty=_0x4b3767['y'],height=_0x4b3767[_0x1ea141(0x202)],prev=_0x14a91d['slice'](0x0,contextSize),ctw=new CTW(contextSize,alphabetSize,prev),algo=ctw[_0x1ea141(0x1de)](),sg=sliceGen(),addRectGroup(contextSize,oneChar);}function addRectGroup(_0x3d1e85,_0x5d152d){const _0x4baa92=_0x306533;let _0x2cb8bf=d3['select']('#sequence\x20svg'),_0x271a06=_0x2cb8bf[_0x4baa92(0x203)]('text'),_0x18396c=_0x271a06[_0x4baa92(0x1fa)]()[_0x4baa92(0x1c4)](),_0x31354e=_0x2cb8bf['insert'](_0x4baa92(0x1e4),'text')[_0x4baa92(0x1a7)]('id',_0x4baa92(0x205));_0x31354e[_0x4baa92(0x1a7)]('x',_0x18396c['x'])['attr']('y',_0x18396c['y']);let _0x3007db=_0x31354e['append']('rect')[_0x4baa92(0x1a7)]('id',_0x4baa92(0x1df)),_0x597359=_0x31354e[_0x4baa92(0x193)](_0x4baa92(0x196))['attr']('id',_0x4baa92(0x1e1)),_0xf3f8a=_0x31354e[_0x4baa92(0x193)](_0x4baa92(0x196))[_0x4baa92(0x1a7)]('id',_0x4baa92(0x207));_0x3007db['attr'](_0x4baa92(0x202),_0x18396c['height'])['attr']('x',_0x18396c['x']+_0x5d152d*_0x3d1e85)[_0x4baa92(0x1a7)]('width',_0x5d152d)[_0x4baa92(0x1a7)](_0x4baa92(0x1b6),_0x4baa92(0x1b7)),_0xf3f8a[_0x4baa92(0x1a7)](_0x4baa92(0x202),_0x18396c[_0x4baa92(0x202)])['attr'](_0x4baa92(0x1cf),_0x5d152d*_0x3d1e85)[_0x4baa92(0x1a7)](_0x4baa92(0x1b6),_0x4baa92(0x1b9)),_0x597359[_0x4baa92(0x1a7)](_0x4baa92(0x202),_0x18396c[_0x4baa92(0x202)])[_0x4baa92(0x1a7)]('width',_0x5d152d*_0x3d1e85)[_0x4baa92(0x1a7)](_0x4baa92(0x1b6),_0x4baa92(0x1b5));}function moveIterRect(_0x77009f,_0x1464e0=!![]){const _0x3021c2=_0x306533;let _0x532afe=d3['select'](_0x3021c2(0x1d2)),_0x449ae3=parseFloat(_0x532afe[_0x3021c2(0x1a7)](_0x3021c2(0x1cf))),_0xfa949c=_0x1464e0?_0x449ae3-_0x77009f:_0x449ae3+_0x77009f;d3[_0x3021c2(0x203)](_0x3021c2(0x1d2))[_0x3021c2(0x197)]()[_0x3021c2(0x206)](0x1f4)[_0x3021c2(0x1a7)]('width',_0xfa949c);}function moveGroup(_0x5e59b8){const _0x337129=_0x306533;let _0x110d29=d3['select']('#group'),_0x5dd1b9=parseInt(_0x110d29[_0x337129(0x1a7)]('x'))+_0x5e59b8;_0x110d29[_0x337129(0x197)]()[_0x337129(0x206)](0x1f4)[_0x337129(0x1a7)]('x',_0x5dd1b9)['on'](_0x337129(0x1ba),()=>d3[_0x337129(0x203)]('#stepAlgo')[_0x337129(0x1a7)](_0x337129(0x1bb),null));}function*sliceGen(){const _0x24ec4c=_0x306533;for(const _0x289f6e of s[_0x24ec4c(0x1d8)](contextSize,trainSize)){yield _0x289f6e;}}function donext(){const _0x2ae96b=_0x306533;let _0x153c60=sg[_0x2ae96b(0x1a6)]();if(!_0x153c60[_0x2ae96b(0x1ee)]){ctw[_0x2ae96b(0x195)](_0x153c60['value'],![],![]);let _0x2f0399=ctw[_0x2ae96b(0x1e0)]();d3[_0x2ae96b(0x203)](_0x2ae96b(0x1c6))[_0x2ae96b(0x208)]()[_0x2ae96b(0x197)](function(){const _0xe698af=_0x2ae96b;return d3['transition']()[_0xe698af(0x1a2)](0x64)[_0xe698af(0x206)](0x3e8);})[_0x2ae96b(0x1ca)](_0x2f0399);}}function clickCtxRectMove(){moveGroup(oneChar);}function iterRectLeft(){moveIterRect(oneChar,!![]);}function iterRectRight(){moveIterRect(oneChar,![]);}function allPossibleContexts(){const _0x111e07=_0x306533;let _0x5a437b=[],_0x3f3d6b=0x3;const _0x9007c3=(..._0x47914c)=>_0x47914c[_0x111e07(0x1a4)]((_0x33091f,_0x5a45c8)=>_0x33091f[_0x111e07(0x1dd)](_0x11f8e9=>_0x5a45c8[_0x111e07(0x1c0)](_0x1266f1=>[_0x11f8e9,_0x1266f1][_0x111e07(0x20f)]())));let _0x3f0e8f=[...Array(_0x3f3d6b)[_0x111e07(0x1f6)]()],_0x477e1d=_0x2b4667=>{const _0x57886f=_0x111e07;let _0x16c8da=Array(_0x2b4667)[_0x57886f(0x1b6)](_0x3f0e8f),_0x52eebc=_0x9007c3(..._0x16c8da);return _0x52eebc=_0x52eebc['map'](_0x3d4070=>_0x3d4070[_0x57886f(0x1f1)]('')),_0x52eebc;},_0x53d9c8=[];for(let _0x13df86=0x2;_0x13df86<=_0x3f3d6b;_0x13df86++){_0x53d9c8=_0x53d9c8[_0x111e07(0x20c)](_0x477e1d(_0x13df86));}return _0x53d9c8=_0x53d9c8['concat'](_0x3f0e8f[_0x111e07(0x1c0)](_0x5d9ea2=>_0x5d9ea2[_0x111e07(0x1e5)]())),_0x53d9c8=_0x53d9c8['sort'](function(_0x428254,_0x435377){const _0x2be0e2=_0x111e07;return _0x428254['length']-_0x435377[_0x2be0e2(0x1e3)]||_0x428254[_0x2be0e2(0x1f5)](_0x435377);}),_0x53d9c8;}function makeTable(_0x21238b){const _0x2986e6=_0x306533;let _0xf3c967=d3[_0x2986e6(0x203)](_0x2986e6(0x200)),_0x2be630=_0xf3c967[_0x2986e6(0x193)]('div');_0x2be630[_0x2986e6(0x1a7)](_0x2986e6(0x1ac),'divTableRow\x20myheading');let _0x8cc8d4=[_0x2986e6(0x19f),'le','lw'][_0x2986e6(0x20c)]([...Array(_0x21238b)[_0x2986e6(0x1f6)]()]);_0x2be630[_0x2986e6(0x20d)](_0x2986e6(0x1ec))[_0x2986e6(0x1f2)](_0x8cc8d4)['enter']()['append'](_0x2986e6(0x1ec))['attr'](_0x2986e6(0x1ac),_0x2986e6(0x1aa))[_0x2986e6(0x1ad)](_0x496452=>_0x496452);}function updateTable(_0x573761){const _0x5ae985=_0x306533;let _0x46509d=d3[_0x5ae985(0x203)](_0x5ae985(0x200)),_0x49dbfb=_0x46509d['selectAll'](_0x5ae985(0x1da))[_0x5ae985(0x1f2)](_0x573761)['join'](_0x5ae985(0x1ec))[_0x5ae985(0x1a7)](_0x5ae985(0x1ac),_0x5ae985(0x1b0)),_0x1dfe1b=_0x49dbfb[_0x5ae985(0x20d)]('div')['data'](_0x4e756c=>_0x4e756c)[_0x5ae985(0x1f1)](_0x5ae985(0x1ec))[_0x5ae985(0x1a7)]('class',_0x5ae985(0x1aa));_0x1dfe1b[_0x5ae985(0x1e2)](function(){const _0x56d7fe=_0x5ae985;return this['__olddata__']!=this[_0x56d7fe(0x1fe)];})[_0x5ae985(0x20e)](function(){const _0x4866f1=_0x5ae985;this[_0x4866f1(0x1c5)]=this[_0x4866f1(0x1fe)];})['transition']()[_0x5ae985(0x206)](0x0)[_0x5ae985(0x19c)](_0x5ae985(0x1c9),'white')[_0x5ae985(0x197)]()[_0x5ae985(0x206)](0x12c)[_0x5ae985(0x19c)](_0x5ae985(0x1c9),_0x5ae985(0x1d4))[_0x5ae985(0x197)]()[_0x5ae985(0x1a2)](0x1f4)['duration'](0x64)['style']('color',_0x5ae985(0x1d4))[_0x5ae985(0x197)]()[_0x5ae985(0x206)](0x64)[_0x5ae985(0x19c)](_0x5ae985(0x19d),_0x5ae985(0x1d5))[_0x5ae985(0x1ad)](_0x11830b=>_0x11830b)[_0x5ae985(0x197)]()['duration'](0x64)[_0x5ae985(0x19c)](_0x5ae985(0x1c9),_0x5ae985(0x1a0))['on'](_0x5ae985(0x1ba),()=>d3[_0x5ae985(0x203)]('#stepAlgo')[_0x5ae985(0x1a7)]('disabled',null));}function setEllipseColor(_0x554282,_0x18769e=_0x306533(0x1c1)){const _0x137f7d=_0x306533;d3['selectAll'](_0x137f7d(0x1f8))[_0x137f7d(0x1e2)](function(){const _0x344a5c=_0x137f7d;return d3[_0x344a5c(0x203)](this)['text']()==_0x554282;})['node']()[_0x137f7d(0x1a3)][_0x137f7d(0x1a3)][_0x137f7d(0x1a1)](_0x137f7d(0x1b6),_0x18769e);}function ellipseColorWhiteToYellow(_0x1da848){const _0x11ba50=_0x306533;let _0x2ce084=d3[_0x11ba50(0x203)](d3[_0x11ba50(0x20d)](_0x11ba50(0x1f8))[_0x11ba50(0x1e2)](function(){const _0x3be66b=_0x11ba50;return d3['select'](this)[_0x3be66b(0x1ad)]()==_0x1da848;})[_0x11ba50(0x1fa)]()[_0x11ba50(0x1a3)][_0x11ba50(0x1a3)]);_0x2ce084[_0x11ba50(0x197)]()[_0x11ba50(0x206)](0x0)[_0x11ba50(0x1a7)](_0x11ba50(0x1b6),_0x11ba50(0x1a0))[_0x11ba50(0x197)]()['duration'](0x3e8)[_0x11ba50(0x1a7)](_0x11ba50(0x1b6),_0x11ba50(0x1d4));}function ellipseColorYellowToWhite(_0x5ea0e4){const _0x120df6=_0x306533;let _0x2ec017=d3[_0x120df6(0x203)](d3['selectAll'](_0x120df6(0x1f8))[_0x120df6(0x1e2)](function(){const _0x1edd7b=_0x120df6;return d3[_0x1edd7b(0x203)](this)[_0x1edd7b(0x1ad)]()==_0x5ea0e4;})['node']()[_0x120df6(0x1a3)][_0x120df6(0x1a3)]);_0x2ec017[_0x120df6(0x197)]()['duration'](0x0)[_0x120df6(0x1a7)](_0x120df6(0x1b6),'yellow')[_0x120df6(0x197)]()[_0x120df6(0x206)](0x3e8)[_0x120df6(0x1a7)]('fill',_0x120df6(0x1a0));}function ellipseFlash(_0x1bb249){const _0x328e38=_0x306533;let _0x59f4b7=d3[_0x328e38(0x203)](d3['selectAll'](_0x328e38(0x1f8))['filter'](function(){const _0x181090=_0x328e38;return d3[_0x181090(0x203)](this)['text']()==_0x1bb249;})[_0x328e38(0x1fa)]()[_0x328e38(0x1a3)][_0x328e38(0x1a3)]);_0x59f4b7[_0x328e38(0x197)]()['duration'](0x0)[_0x328e38(0x1a7)](_0x328e38(0x1b6),_0x328e38(0x1a0))['transition']()['duration'](0x1f4)[_0x328e38(0x1a7)](_0x328e38(0x1b6),_0x328e38(0x1d4))[_0x328e38(0x197)]()[_0x328e38(0x206)](0x1f4)['attr'](_0x328e38(0x1b6),_0x328e38(0x1a0));}function stepAlgo(){const _0x391cf4=_0x306533;d3[_0x391cf4(0x203)](_0x391cf4(0x1d6))[_0x391cf4(0x1a7)](_0x391cf4(0x1bb),!![]);let {value:_0x80c8b0,done:_0x57d67f}=algo['next'](),{state:_0x28510f,currentNode:_0x1bdb7f,..._0x4f5c7f}=_0x80c8b0;if(_0x28510f==0x1){d3[_0x391cf4(0x203)]('.message-header')[_0x391cf4(0x1ad)](_0x391cf4(0x1fc)),d3[_0x391cf4(0x203)]('.message-body')[_0x391cf4(0x1ad)](info[_0x391cf4(0x1d0)]('fw'));_0x1bdb7f!=ctw[_0x391cf4(0x1f7)]&&iterRectLeft();let _0x2b9e92=ctw[_0x391cf4(0x1e0)](),_0x28de27=d3[_0x391cf4(0x203)]('#graph')[_0x391cf4(0x208)]();_0x28de27[_0x391cf4(0x1cf)](0x190),_0x28de27[_0x391cf4(0x194)](!![]),_0x28de27[_0x391cf4(0x197)](function(){const _0x3c09c=_0x391cf4;return d3[_0x3c09c(0x197)]()['delay'](0x64)[_0x3c09c(0x206)](0x3e8);})['renderDot'](_0x2b9e92,_0x123cf4);function _0x123cf4(){const _0x3f7d56=_0x391cf4;let {x:_0x2f4087}=_0x4f5c7f;_0x2f4087=parseInt(_0x2f4087);let _0x25cc7b=dataMap[_0x3f7d56(0x1d0)](_0x1bdb7f['path']);if(_0x25cc7b===undefined){dataMap[_0x3f7d56(0x1bc)](_0x1bdb7f[_0x3f7d56(0x1e9)],pos);let _0x4617fc=[_0x1bdb7f[_0x3f7d56(0x1e9)]][_0x3f7d56(0x20c)]([...Array(alphabetSize+0x2)[_0x3f7d56(0x1b6)](0x0)]);_0x4617fc[_0x2f4087+0x3]=_0x1bdb7f[_0x3f7d56(0x19b)][_0x2f4087],_0x4617fc[0x1]=Math[_0x3f7d56(0x1a8)](_0x1bdb7f['pe']*0x64)/0x64,data[_0x3f7d56(0x1d9)](_0x4617fc),pos++;}else{let _0x10a9f9=_0x1bdb7f[_0x3f7d56(0x1e9)]==''?_0x3f7d56(0x1f7):_0x1bdb7f[_0x3f7d56(0x1e9)];ellipseFlash(_0x10a9f9),data[_0x25cc7b][_0x2f4087+0x3]=_0x1bdb7f[_0x3f7d56(0x19b)][_0x2f4087],data[_0x25cc7b][0x1]=Math['round'](_0x1bdb7f['pe']*0x64)/0x64;}updateTable(data);}}else{if(_0x28510f==0x2){d3[_0x391cf4(0x203)]('.message-header')[_0x391cf4(0x1ad)](_0x391cf4(0x1be)),d3[_0x391cf4(0x203)]('.message-body')[_0x391cf4(0x1ad)](info[_0x391cf4(0x1d0)]('bw'));let {x:_0x4edbe7}=_0x4f5c7f;_0x4edbe7=parseInt(_0x4edbe7);let _0x27e6da=dataMap[_0x391cf4(0x1d0)](_0x1bdb7f[_0x391cf4(0x1e9)]),_0x1cd09d=_0x1bdb7f[_0x391cf4(0x1e9)]==''?_0x391cf4(0x1f7):_0x1bdb7f[_0x391cf4(0x1e9)];ellipseFlash(_0x1cd09d),data[_0x27e6da][0x2]=Math[_0x391cf4(0x1a8)](_0x1bdb7f['pw']*0x64)/0x64,_0x1bdb7f!=ctw[_0x391cf4(0x1f7)]&&iterRectRight(),updateTable(data);}else{if(_0x28510f==0x3)moveGroup(oneChar);else _0x28510f==0x4&&(d3['select'](_0x391cf4(0x1a9))[_0x391cf4(0x1ad)](_0x391cf4(0x1a5)),d3['select']('.message-body')[_0x391cf4(0x1ad)](info[_0x391cf4(0x1d0)](_0x391cf4(0x1ee))));}}}