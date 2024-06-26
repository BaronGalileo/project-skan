import React from 'react';

var __importDefault=function(e){
    return e&&e.__esModule?e:{default:e}},
    react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),
    exports.PrevNextButton=void 0,
    __importDefault(require("react"))),
    types_1=require("../types"),
    utils_1=require("../utils"),
    PrevNextButton=function(e){
        var t,s=e.name,a=e.isDisabled,
        r=e.onClick,
        n=e.renderPrevButton,
        e=e.renderNextButton;
        return"function"==typeof n
        ?react_1.default.createElement("div",
        {className:types_1.Classnames.BUTTON_PREV,
            onClick:r},
            n({isDisabled:a})):"function"==typeof 
            e?react_1.default.createElement("div",
            {className:types_1.Classnames.BUTTON_NEXT,onClick:r},
            e({isDisabled:a})):(e=(n="prev"===s)?"<":">",
            s=n?types_1.Classnames.BUTTON_PREV:types_1.Classnames.BUTTON_NEXT,
            t=n?types_1.Classnames.BUTTON_PREV_WRAPPER:types_1.Classnames.BUTTON_NEXT_WRAPPER,
            n=n?types_1.Classnames.BUTTON_PREV_ITEM:types_1.Classnames.BUTTON_NEXT_ITEM,
            a=a?types_1.Modifiers.INACTIVE:"",
            n=(0,utils_1.concatClassnames)(n,a),
            react_1.default.createElement("div",{className:s},
            react_1.default.createElement("div",{className:t},
            react_1.default.createElement("p",
            {className:n,onClick:function(e){return r(e)}},
            react_1.default.createElement("span",{"data-area":e})))))};
            exports.PrevNextButton=PrevNextButton;

