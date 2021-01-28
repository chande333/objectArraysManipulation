var objArrFn = function(){
    return{
        getObjArrParentPropAllChildProp: function  (objArray){ 
            // Example: {sourceObjArr: objArr, subObjArrProp: "child",  parentProp: "name", childProp: "ids" } [Description: When an OBJArray has items with children, it extracts a specific property of the children ARRAY and matches it with each single parent property creating new array] 
            // var objArray = {sourceObjArr: res, subObjArrProp: "scopes",  parentProp: "name", childProp: "id" };
            globalArr.objArray = objArray;
        
            var output = []
        
            objArray.sourceObjArr.forEach(function(a){
                var obj = {};
                var x =[];
        
                a[objArray.subObjArrProp].forEach(function(b){
                    x.push(b[objArray.childProp]);
                })
        
                obj[objArray.childProp] = x.join(",");
                obj[objArray.parentProp] = a[objArray.parentProp];
                output.push(obj);
            });
        
            return output;
        }
    }
}
