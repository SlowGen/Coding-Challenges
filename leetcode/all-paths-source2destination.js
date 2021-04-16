/*
Given the edges of a directed graph where edges[i] = [ai, bi] indicates there is an edge between 
nodes ai and bi, and two nodes source and destination of this graph, determine whether or not all 
paths starting from source eventually, end at destination, that is:

At least one path exists from the source node to the destination node
If a path exists from the source node to a node with no outgoing edges, then that node is equal to destination.
The number of possible paths from source to destination is a finite number.
Return true if and only if all roads from source lead to destination.

*/
//*****In my opinion, this is a way easier way to understand this than trying to do the color variant method */

//n is an irrelevant variable and not used
//edges - [a,b], a has a directed path to b
//source - root node
//destination - target node
//return true if ALL paths from source lead to destination. This means there may be some outlier paths
//that are not connected to the source or destination and are therefore irrelevant

//possible triggers to false
//no path -- a path from the source terminates at another destination
//infinite loop --- any node along the path creates a cycle
//Destination has children -- creates a cycle
//anything self-looping that isn't both the source and destination --creates a cycle

// path map, key=start node val= Set() of end nodes
//backtrack dfs type search, recording all visited nodes with a boolean trigger
//if any path triggers bool, return false

function leadsToDestination(n, edges, source, destination) {
    
    const paths = new Map()
    let isValid = true

    for (const edge of edges) {
        if (!paths.has(edge[0])) paths.set(edge[0], new Set())
        paths.get(edge[0]).add(edge[1])
    }
    
    if (paths.has(destination)) return false   //if our destination has children, this is an automatic fail
    
    function search(start, target, visited) {
        if (visited.has(start)) {   //any nodes visited more than once is a cycle, automatic fail
            isValid = false
            return
        }
        visited.add(start)
        if (start === target) {
            visited.delete(start)   //this is a pass, deleting for backtracking
            return
        }
        if (paths.has(start)) {
            const nextPaths = paths.get(start)
            for (const next of nextPaths) {    //check all paths of each child
                if (start === next) {          //if a node has a child that is equal to self, that's a cycle
                    isValid = false                   // fail
                    return
                }
                search(next, target, visited)  
            }
        } else {
            isValid = false   //if there are no children and you haven't reached the destination, fail
            return
        }
        visited.delete(start)  //backtracking
    }
    search(source, destination, new Set())
    return isValid
}

//https://leetcode.com/problems/all-paths-from-source-lead-to-destination/