export const loading={
    time:function(that){
        let date = new Date();
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
   var time= y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
  console.log(time);
  return time
    },

    sortByKey:function (array,key){
        return array.sort(function(a,b){
          var x=a[key];
          var y=b[key];
          return ((x>y)?-1:((x<y)?1:0));
       });
    },


    arrs:function (array,key){
      const arr=[]
      for(var i=0; i<array.length; i++){
      if(array[i].kinds==key){
      arr.push(array[i])
    }
  }
    return arr; 
  }

    
}