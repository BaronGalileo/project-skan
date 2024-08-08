

function textOnly ( str, limit=400 ) {

    if ( !str ) {
        return str;
    }

    let result = ""

    let ampersand = 0

    let teg = 0

    
    for(let i = 0 ; i < str.length; i++) {

            if(str[i] === "<") {
                teg ++
            }

            else if (str[i] === ">") {
                teg --
            }

            else if(str[i] === "&" && str[i+1] === "l") {
                ampersand ++

            }

            else if(str[i] === "&" && str[i+1] === "g") {
                ampersand --
                i += 3               
            }

            else if(teg === 0 && ampersand === 0) {

            result += str[i]
            }

            else continue

    }
    const toShow = result.substring(0,limit)+"..."

    return toShow
}


export { textOnly }