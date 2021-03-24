/**
 You are given an array of variable pairs equations and an array of real numbers values, 
 where equations[i] = [Ai, Bi] and values[i] represent the equation Ai / Bi = values[i]. 
 Each Ai or Bi is a string that represents a single variable.

You are also given some queries, where queries[j] = [Cj, Dj] represents the jth query where 
you must find the answer for Cj / Dj = ?.

Return the answers to all queries. If a single answer cannot be determined, return -1.0.

Note: The input is always valid. You may assume that evaluating the queries will 
not result in division by zero and that there is no contradiction.
 */

 var calcEquation = function(equations, values, queries) {
    //build a graph of equations using a Map, key = numerator / denominator,
    //val = new map with opposite as key and a value calculation with quotient
    const graph = new Map()
    const answers = []
    
    //iterate through equations to build graph
    
    for (let i=0; i<equations.length; i++) {
        const numerator = equations[i][0];
        const denominator = equations[i][1];
        const quotient = values[i];
        
        if (!graph.has(numerator)) graph.set(numerator, new Map());
        if (!graph.has(denominator)) graph.set(denominator, new Map());
        
        graph.get(numerator).set(denominator, quotient);
        graph.get(denominator).set(numerator, 1 / quotient);
        
    }
    
    //DFS with backtrack helper
    function backtrackDFS(graph, current, target, accumulator, visited) {
        visited.add(current)
        let answer = -1.0;
        
        let children = graph.get(current);
        
        if (children.has(target)) answer = accumulator * children.get(target);
        else {
            for (const child of children) {
                if (visited.has(child[0])) continue;
                answer = backtrackDFS(graph, child[0], target, accumulator * child[1], visited)
                if (answer !== -1.0) break;
            }
        }
        visited.delete(current);   //backtrack
        return answer
    }
    
    
    for (const query of queries) {
        const numerator = query[0];
        const denominator = query[1];
        
        if (!graph.has(numerator) || !graph.has(denominator)) answers.push(-1.0);
        else if (numerator === denominator) answers.push(1.0);
        else {
            const visited = new Set();
            const accumulator = 1;
            answers.push(backtrackDFS(graph, numerator, denominator, accumulator, visited))
        }
    }
    
    return answers
};

//https://leetcode.com/problems/evaluate-division/