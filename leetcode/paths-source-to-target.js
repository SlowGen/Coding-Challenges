/**
 Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from 
 node 0 to node n - 1, and return them in any order.
 */

 var allPathsSourceTarget = function(graph) {
    //set target
    //create recursive backtrack function to go through and add paths upon success
    // pop to go back and try more paths
    
    const target = graph.length - 1;
    const results =[]
    
    function backtrack (current, path) {
        if (current === target) results.push([...path])   //this means success, so push to results
        for (let next of graph[current]) {
            path.push(next);
            backtrack(next, path)
            path.pop()
        }
    }
    const path = [0] //always start at beginning
    backtrack(0, path);
    
    return results
};

//https://leetcode.com/problems/all-paths-from-source-to-target/