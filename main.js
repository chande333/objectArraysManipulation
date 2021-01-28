var objArrFn = function () {
    return {
        getObjArrParentPropAllChildProp: function (objArray) {
            // Example: {sourceObjArr: objArr, subObjArrProp: "child",  parentProp: "name", childProp: "ids" } [Description: When an OBJArray has items with children, it extracts a specific property of the children ARRAY and matches it with each single parent property creating new array] 
            // var objArray = {sourceObjArr: res, subObjArrProp: "scopes",  parentProp: "name", childProp: "id" };
            globalArr.objArray = objArray;

            var output = []

            objArray.sourceObjArr.forEach(function (a) {
                var obj = {};
                var x = [];

                a[objArray.subObjArrProp].forEach(function (b) {
                    x.push(b[objArray.childProp]);
                })

                obj[objArray.childProp] = x.join(",");
                obj[objArray.parentProp] = a[objArray.parentProp];
                output.push(obj);
            });

            return output;
        },
        groupArrayComponentIDs: function (property1, property2, objList) { // 006 fn_2017_apr_008 ("id","group",objFR) or ("key","newScore",objFR)  [Description: Used to get all Components IDs (object property) associated with a specific Group (object property)] 
            // Example: obj[0].component = 007, obj[0].group = "g1" ; 
            //	obj[1].component = 008, obj[1].group = "g1" ; 
            // 	obj[2].component = 009; obj[2].group = "g2" ; 
            // 	obj[3].component = 010; obj[3].group = "g1" ;
            // Output g1 = (007,008,010) ; g2 = (009) 

            var uniqueY = objVarToArray(objList, property2, true, "asc"); // Get list of all Y occurences, removes duplicate, sort 	alphabetically
            var output = [];

            for (var i = 0; i < uniqueY.length; i++) {
                var g1 = {};
                var k = 0;
                var xs = [];
                for (var j = 0; j < objList.length; j++) {
                    if (objList[j][property2] == uniqueY[i]) {
                        xs[k] = objList[j][property1]; //stores all X properties associated with the value "i" of the objlist
                        k++;
                    }
                }

                xs = xs.filter(function (item, pos) { //Removes duplicated xs
                    return xs.indexOf(item) == pos;
                })

                g1[property2] = uniqueY[i];
                g1[property1] = xs;
                output.push(g1);
            }

            return output;
        }

    }
}
