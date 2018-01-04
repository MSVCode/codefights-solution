/*
Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, a Pro specifies which categories of services they provide. To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.

Example

For pros = ["Jack", "Leon", "Maria"] and

preferences = [["Computer repair", "Handyman", "House cleaning"],
               ["Computer lessons", "Computer repair", "Data recovery service"],
               ["Computer lessons", "House cleaning"]]

the output should be

proCategorization(pros, preferences) = [[["Computer lessons"], ["Leon", "Maria"]],
                                        [["Computer repair"], ["Jack", "Leon"]],
                                        [["Data recovery service"], ["Leon"]],
                                        [["Handyman"], ["Jack"]],
                                        [["House cleaning"], ["Jack", "Maria"]]]

*/
function proCategorization(pros, preferences) {
    let dic = {};
    for (let i=0;i<pros.length;i++){
        for (let j=0;j<preferences[i].length;j++){
            if (preferences[i][j] in dic){
                dic[preferences[i][j]].push(pros[i]);
            } else {
                dic[preferences[i][j]] = [pros[i]];
            }
        }
    }
    let arrOut=[];
    for (let key in dic){
        arrOut.push([[key], dic[key]]);
    }

    arrOut.sort((a,b)=>{
        return a[0]>b[0];
    });
    return arrOut;
}
