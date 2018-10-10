var arrf=[];
var arrs1=[];
var arrs2=[];
var json = {
    "data": {
        "data": [{
            "id": 1,
            "name": "质控平台1",
        },{
            "id": 2,
            "name": "质控平台2",
        },{
            "id": 3,
            "name": "质控平台3",
        },{
            "id": 4,
            "name": "质控平台4",
        },{
            "id": 5,
            "name": "质控平台5",
        },{
            "id": 6,
            "name": "质控平台6",
        },{
            "id": 7,
            "name": "质控平台7",
        },{
            "id": 8,
            "name": "质控平台8",
        },{
            "id": 9,
            "name": "质控平台9",
        }]
    },
}
for(var i=0;i<json.data.data.length;i++){
    arrs1.push(json.data.data[i].id);
    arrs2.push(json.data.data[i].name);
    arrf[i]=[arrs1[i],arrs2[i]]
}
console.log(arrf);
