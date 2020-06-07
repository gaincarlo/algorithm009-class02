学习笔记

递归模板
```
const recursion = function(level, param1, param2, ...) {
    if (level > MAX_LEVEL) {
         // process result 
         return; 
    }
    // process current logic 
    process(level, param);

  // drill down 
  recur( level: level + 1, newParam); 
  // restore current status 
}
```