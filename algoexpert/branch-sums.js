/*
Calculate the sums of each branch in a binary tree
*/

function branchSums(root) {
	const sumsList = [];
	const runningTotal = 0
	const calculateSums = (node, runningTotal) => {
		runningTotal += node.value
		if (!node.left && !node.right) {
			sumsList.push(runningTotal)
			return
		} else {
			if (node.left) calculateSums(node.left, runningTotal);
			if (node.right) calculateSums(node.right, runningTotal);
		}
	}
	calculateSums(root, runningTotal)
	return sumsList
}