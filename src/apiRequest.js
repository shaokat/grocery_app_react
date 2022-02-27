const apiRequest = async (url = '', optionsObj = null, errMsg = null) =>{
    try {
        const response = await fetch(url, optionsObj)
        if(!response.ok) throw Error('Please reload the app!')
    } catch (error) {
        errMsg = error.message;
        console.log(errMsg)
        
    } finally{
        console.log(errMsg)
        return errMsg;
       
    }
    // npx json-server -p3500 -w data/db.json
}

export default apiRequest