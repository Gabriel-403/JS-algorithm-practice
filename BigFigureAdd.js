   var a = '9999999999999999'
   var b = '9999999999999999'
   var n1 = a.length;
   var n2 = b.length;
   for (let i = 0; i < Math.max(n1, n2) - Math.min(n1, n2); i++) {
       if (n1 > n2) {
           b = '0' + b
       };
       if (n1 < n2) {
           a = '0' + a
       };
   }
   a = a.split('').reverse();
   b = b.split('').reverse();
   var n = Math.max(n1, n2);
   var result = Array.apply(this, Array(n)).map((item, i) => {
       return 0;
   })

   for (let k = 0; k < n; k++) {
       var temp = parseInt(a[k]) + parseInt(b[k])
       if (temp > 9) {
           result[k] += temp - 10;
           result[k + 1] = 1;
       } else {
           result[k] += temp;
       }
   }
   console.log(result.reverse().join('').toString())