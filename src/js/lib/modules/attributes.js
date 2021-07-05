import $ from '../core';

$.prototype.getAttribute = function (attributeName){
    if(!attributeName){ return this;}
    for(let i = 0; i < this.length; i++){
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);
    }
}

$.prototype.setAttribute = function (attributeName, value = ''){
    if(!attributeName){ return this;}
    for(let i = 0; i < this.length; i++){
        this[i].setAttribute(attributeName, value);
    }
    return this;
}

$.prototype.removeAttribute = function (...attributeName){
    if(!attributeName){ return this;}
    for(let i = 0; i < this.length; i++){
        if([...attributeName.length > 1]){
            for (let j = 0; j < [...attributeName].length; j++){
                this[i].removeAttribute([...attributeName][j]);
            }
        }else{
            this[i].removeAttribute(...attributeName);
        }
    }
    return this;
}

$.prototype.toggleAttribute = function (attributeName, value = ''){
    if(!attributeName){ return this;}
    for(let i = 0; i < this.length; i++){
        if(this[i].getAttribute(attributeName)){
            this[i].removeAttribute(attributeName);
        }else {
            this[i].setAttribute(attributeName, value);
        }
    }
    return this;
}