
const parseSQL = (queryObj)=>{
    let entries = Object.entries(queryObj).filter((entry,index)=>{
        return entry[1] !== undefined
    });
    console.log(entries);
    let query = "";
    for(let i=0; i<entries.length; i++){
        query += `${entries[i][0]}`;
        query += '=';
        if(typeof entries[i][1] === 'string'){
            query += `'`;
        }
        query += entries[i][1];
        if(typeof entries[i][1] === 'string'){
            query += `'`;
        }
        if(i != entries.length-1){
            query+=','
        }

            
    }
    console.log(query);
    return query;
}

module.exports = 
{parseSQL}