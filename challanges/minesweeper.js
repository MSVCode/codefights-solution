/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. 
Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For
matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]

the output should be
minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]       
*/

function minesweeper(m) {
    let o = [];
    for (let i=0;i<m.length;i++){
        o.push([]);
        for (let j=0;j<m[i].length;j++){
            let n = 0;
            for (let r=-1;r<2;r++){
                for (let c=-1;c<2;c++){
                    if (i+r>=0&&i+r<m.length&&j+c>=0&&j+c<m[i].length&&(r!=0||c!=0)&&m[i+r][j+c])
                        n++;
                }
            }
            o[i].push(n);
        }
    }
    return o;
}