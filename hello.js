function count(array){
          let obj = array.reduce((r, v) =>{
                    r[0].has(v)? r[1][v]? r[1][v]++: r[1][v] = 2: r[0].add(v);
                    return r;
          }, [new Set, {}])[1];
          return obj;
}