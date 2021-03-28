/**
 You have n processes forming a rooted tree structure. You are given two integer arrays pid and ppid, 
 where pid[i] is the ID of the ith process and ppid[i] is the ID of the ith process's parent process.

Each process has only one parent process but may have multiple children processes. 
Only one process has ppid[i] = 0, which means this process has no parent process (the root of the tree).

When a process is killed, all of its children processes will also be killed.

Given an integer kill representing the ID of a process you want to kill, 
return a list of the IDs of the processes that will be killed. You may return the answer in any order.
 */

//map ppid, key=parent, val=[children]
//create kill stack for found children, kill is first entry
//while stack has length, find item in map, add children to stack, add self to kill list (BFS)


var killProcess = function(pid, ppid, kill) {
    const killList = []
    const killStack = [kill]
    
    const parents = new Map()
    
    for (let i=0; i<pid.length; i++) {
        if (parents.has(ppid[i])) {
            let children = parents.get(ppid[i])
            children.push(pid[i])
            parents.set(ppid[i], children)
        } else parents.set(ppid[i], [pid[i]])
    }
    
    while (killStack.length) {
        let current = killStack.pop()
        if (parents.has(current)) {
            let children = parents.get(current)
            killStack.push(...children)
        }
        killList.push(current)
    }
    return killList
};

//https://leetcode.com/problems/kill-process/