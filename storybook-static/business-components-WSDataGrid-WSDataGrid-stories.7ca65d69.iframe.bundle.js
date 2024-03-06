"use strict";(self.webpackChunk_krishnasct_ws_pos_components=self.webpackChunk_krishnasct_ws_pos_components||[]).push([[512],{"./src/business-components/WSDataGrid/WSDataGrid.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WSDataGrid_Grid:()=>WSDataGrid_Grid,WSDataGrid_mPOS_Interface:()=>WSDataGrid_mPOS_Interface,__namedExportsOrder:()=>__namedExportsOrder,default:()=>WSDataGrid_stories});var react=__webpack_require__("./node_modules/react/index.js"),DataGrid=__webpack_require__("./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),WSDataGrid=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/business-components/WSDataGrid/WSDataGrid.css"),options={};function WSDataGrid_WSDataGrid_WSDataGrid(props){return react.createElement("div",{style:{height:400,width:"100%"}},react.createElement(DataGrid.zh,{rows:props.rows,columns:props.columns,initialState:{pagination:{paginationModel:{page:0,pageSize:5}}},pageSizeOptions:[5,10],checkboxSelection:!0}))}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(WSDataGrid.A,options),WSDataGrid.A&&WSDataGrid.A.locals&&WSDataGrid.A.locals;try{WSDataGrid_WSDataGrid_WSDataGrid.displayName="WSDataGrid",WSDataGrid_WSDataGrid_WSDataGrid.__docgenInfo={description:"",displayName:"WSDataGrid",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"GridColDef[]"}},rows:{defaultValue:null,description:"",name:"rows",required:!0,type:{name:"any[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/business-components/WSDataGrid/WSDataGrid.tsx#WSDataGrid"]={docgenInfo:WSDataGrid_WSDataGrid_WSDataGrid.__docgenInfo,name:"WSDataGrid",path:"src/business-components/WSDataGrid/WSDataGrid.tsx#WSDataGrid"})}catch(__react_docgen_typescript_loader_error){}var columns=[{field:"id",headerName:"ID",width:70},{field:"firstName",headerName:"First name",width:130},{field:"lastName",headerName:"Last name",width:130},{field:"age",headerName:"Age",type:"number",width:90},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160}],rows=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65}];let WSDataGrid_stories={title:"WS Components/WS Datatable",component:WSDataGrid_WSDataGrid_WSDataGrid,parameters:{layout:"centered"},tags:["autodocs"]};var WSDataGrid_Grid={name:"WS DataTable (Grid)",args:{rows:rows,columns:columns}},WSDataGrid_mPOS_Interface={name:"WS DataTable (mPOS)",args:{rows:rows,columns:columns}};WSDataGrid_Grid.parameters={...WSDataGrid_Grid.parameters,docs:{...WSDataGrid_Grid.parameters?.docs,source:{originalSource:'{\n  name: "WS DataTable (Grid)",\n  args: {\n    rows,\n    columns\n  }\n}',...WSDataGrid_Grid.parameters?.docs?.source}}},WSDataGrid_mPOS_Interface.parameters={...WSDataGrid_mPOS_Interface.parameters,docs:{...WSDataGrid_mPOS_Interface.parameters?.docs,source:{originalSource:'{\n  name: "WS DataTable (mPOS)",\n  args: {\n    rows,\n    columns\n  }\n}',...WSDataGrid_mPOS_Interface.parameters?.docs?.source}}};let __namedExportsOrder=["WSDataGrid_Grid","WSDataGrid_mPOS_Interface"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/business-components/WSDataGrid/WSDataGrid.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap);"]),___CSS_LOADER_EXPORT___.push([module.id,`.MuiDataGrid-root{
  border-radius: 0.5rem !important;
  border: 1px solid #266899 !important;
  background: #FFF;
  box-shadow: 0px 2px 4px -10px rgba(0, 0, 0, 0.10);  
}

.MuiDataGrid-row.Mui-selected {
  background-color: rgba(57, 164, 247, 0.10) !important;
}

.MuiDataGrid-cellCheckbox{
  border-color: #E2E2E2 !important;
}

.MuiDataGrid-row:hover, .MuiDataGrid-row.Mui-hovered {
  background-color: rgba(57, 164, 247, 0.10) !important;
}
.MuiDataGrid-columnHeader{
  color: #266899;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 0.9rem */
  letter-spacing: 0.0225rem;
  border-right: 1px solid #266899 !important;
  position: relative;
}

.MuiDataGrid-columnHeaders{
  position: relative;
}

.MuiDataGrid-columnHeaders:after{
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  bottom: 0px;
  height: 1px;
  background: #266899;
}

/* .MuiDataGrid-virtualScrollerRenderZone>*[data-rowindex="0"]{
  border-top: 1px solid #266899 !important;
} */

.MuiDataGrid-row>.MuiDataGrid-cell, .MuiDataGrid-columnHeader {
  min-height: 40px !important;
  max-height: 40px !important;
}

.MuiDataGrid-row>.MuiDataGrid-cell+.MuiDataGrid-cell{
  border-left: 1px solid #E2E2E2 !important;
}
.MuiDataGrid-row>.MuiDataGrid-cell::nth-last-child(2){
  border-left: transparent !important;
}

.MuiDataGrid-row>.MuiDataGrid-cell{
  border-color: #E2E2E2;
}

.MuiDataGrid-columnHeaderTitle{
  font-size: 12px;
  font-weight: 500 !important;
  letter-spacing: 0;
}

.MuiDataGrid-row, .MuiDataGrid-columnHeaders{
  min-height: unset !important;
  max-height: unset !important;
}

.MuiDataGrid-row:nth-child(even){
  background: #F3F8FB;
}

.MuiDataGrid-cellContent{
  color:#060606 ;
}

.MuiDataGrid-cellCheckbox .MuiCheckbox-root, .MuiDataGrid-columnHeaderTitleContainerContent .MuiCheckbox-root{
  transform: scale(0.9) !important;
}

.MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus {
  outline: solid #000000 1px !important;
  outline-offset: -1px;
}
/* .MuiDataGrid-footerContainer{
  display: none !important;
} */
.MuiDataGrid-virtualScrollerContent{
  height: auto !important;
}`,"",{version:3,sources:["webpack://./src/business-components/WSDataGrid/WSDataGrid.css"],names:[],mappings:"AAEA;EACE,gCAAgC;EAChC,oCAAoC;EACpC,gBAAgB;EAChB,iDAAiD;AACnD;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qDAAqD;AACvD;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB,EAAE,WAAW;EAC9B,yBAAyB;EACzB,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,OAAO;EACP,QAAQ;EACR,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;;AAEA;;GAEG;;AAEH;EACE,2BAA2B;EAC3B,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;AAC3C;AACA;EACE,mCAAmC;AACrC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA;EACE,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,qCAAqC;EACrC,oBAAoB;AACtB;AACA;;GAEG;AACH;EACE,uBAAuB;AACzB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');\n\n.MuiDataGrid-root{\n  border-radius: 0.5rem !important;\n  border: 1px solid #266899 !important;\n  background: #FFF;\n  box-shadow: 0px 2px 4px -10px rgba(0, 0, 0, 0.10);  \n}\n\n.MuiDataGrid-row.Mui-selected {\n  background-color: rgba(57, 164, 247, 0.10) !important;\n}\n\n.MuiDataGrid-cellCheckbox{\n  border-color: #E2E2E2 !important;\n}\n\n.MuiDataGrid-row:hover, .MuiDataGrid-row.Mui-hovered {\n  background-color: rgba(57, 164, 247, 0.10) !important;\n}\n.MuiDataGrid-columnHeader{\n  color: #266899;\n  font-size: 0.75rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 120%; /* 0.9rem */\n  letter-spacing: 0.0225rem;\n  border-right: 1px solid #266899 !important;\n  position: relative;\n}\n\n.MuiDataGrid-columnHeaders{\n  position: relative;\n}\n\n.MuiDataGrid-columnHeaders:after{\n  position: absolute;\n  content: '';\n  left: 0;\n  right: 0;\n  bottom: 0px;\n  height: 1px;\n  background: #266899;\n}\n\n/* .MuiDataGrid-virtualScrollerRenderZone>*[data-rowindex=\"0\"]{\n  border-top: 1px solid #266899 !important;\n} */\n\n.MuiDataGrid-row>.MuiDataGrid-cell, .MuiDataGrid-columnHeader {\n  min-height: 40px !important;\n  max-height: 40px !important;\n}\n\n.MuiDataGrid-row>.MuiDataGrid-cell+.MuiDataGrid-cell{\n  border-left: 1px solid #E2E2E2 !important;\n}\n.MuiDataGrid-row>.MuiDataGrid-cell::nth-last-child(2){\n  border-left: transparent !important;\n}\n\n.MuiDataGrid-row>.MuiDataGrid-cell{\n  border-color: #E2E2E2;\n}\n\n.MuiDataGrid-columnHeaderTitle{\n  font-size: 12px;\n  font-weight: 500 !important;\n  letter-spacing: 0;\n}\n\n.MuiDataGrid-row, .MuiDataGrid-columnHeaders{\n  min-height: unset !important;\n  max-height: unset !important;\n}\n\n.MuiDataGrid-row:nth-child(even){\n  background: #F3F8FB;\n}\n\n.MuiDataGrid-cellContent{\n  color:#060606 ;\n}\n\n.MuiDataGrid-cellCheckbox .MuiCheckbox-root, .MuiDataGrid-columnHeaderTitleContainerContent .MuiCheckbox-root{\n  transform: scale(0.9) !important;\n}\n\n.MuiDataGrid-columnHeader:focus, .MuiDataGrid-cell:focus {\n  outline: solid #000000 1px !important;\n  outline-offset: -1px;\n}\n/* .MuiDataGrid-footerContainer{\n  display: none !important;\n} */\n.MuiDataGrid-virtualScrollerContent{\n  height: auto !important;\n}"],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);
//# sourceMappingURL=business-components-WSDataGrid-WSDataGrid-stories.7ca65d69.iframe.bundle.js.map