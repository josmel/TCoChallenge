
function getMinChange(value){
 value.sort((a,b)=>a-b);
 let change = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] > change + 1) break;
    change += value[i];
  }
  return change + 1;
}

function SortedSquared (values){
    const newValues = values.map((va)=>{
       return va*va;
    })
    return  newValues.sort((a,b)=>a-b);
 }


module.exports = { getMinChange, SortedSquared };
