/*
You have a roadmap, which is the list of tasks that your team needs to complete. 
Each task in this list has a title, a start date, an end date, and a list of the people who will be working on.
You are given some queries, each of which contains a specific person's name and a date. 
For each query that is made, you need to return the list of tasks on which that person will be working on the date specified in the query, sorted by the tasks' end dates. 
If their end dates are equal, then sort by the tasks' titles.

Example

For

tasks =
[["A", "2017-02-01", "2017-03-01", "Sam", "Evan", "Troy"],
 ["B", "2017-01-16", "2017-02-15", "Troy"],
 ["C", "2017-02-13", "2017-03-13", "Sam", "Evan"]]

and

queries =
[["Evan", "2017-03-10"],
 ["Troy", "2017-02-04"]]

the output should be
roadmap(tasks, queries) = [["C"], ["B", "A"]].
On "2017-03-10" Evan only has task "C".
Troy will be working on two tasks on "2017-02-04", "A" and "B". We sort these tasks by their end dates. "A" has an end date of "2017-03-01" and "B" has an end date "2017-02-15". Since the end date for "B" is sooner than the end date for "A", we should return them as ["B", "A"].
*/

function roadmap(tasks, queries) {
    let output = [];
    for (let i=0;i<queries.length;i++){
        let currentOut = [];
        output.push([]);
        for (let j=0;j<tasks.length;j++){
            let sliced = tasks[j].slice(3);
            if (sliced.indexOf(queries[i][0])!==-1){
                let vsStart =  new Date(queries[i][1]) - new Date(tasks[j][1]);
                let vsEnd =  new Date(tasks[j][2]) - new Date(queries[i][1]);
                if (vsStart>=0 && vsEnd>=0){
                    currentOut.push({task:tasks[j][0],dateEnd:tasks[j][2]});
                }
            }
        }
        currentOut = currentOut.sort((a,b)=>{
            let date = new Date (a.dateEnd) - new Date (b.dateEnd);
            if (date==0){
                if(a.task<b.task)
                    return -1
                  else if (a.task>b.task)
                    return 1
                  else 
                    return 0;
            }
            return date;
        })
        for (let j=0;j<currentOut.length;j++){
            output[i].push(currentOut[j].task);
        }
    }
    return output;
}
