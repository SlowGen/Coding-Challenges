//implement the browser history class


 var BrowserHistory = function(homepage) {
    this.history = [homepage]
    this.currentPageIndex = 0; 
};

BrowserHistory.prototype.visit = function(url) {
    this.history.splice(this.currentPageIndex + 1)
    this.history.push(url)
    this.currentPageIndex++;
};

BrowserHistory.prototype.back = function(steps) {
    if (this.currentPageIndex > steps) this.currentPageIndex -= steps
    else this.currentPageIndex = 0;
    return this.history[this.currentPageIndex]
};

BrowserHistory.prototype.forward = function(steps) {
    let stepsToEnd = this.history.length - this.currentPageIndex
    if (stepsToEnd > steps) this.currentPageIndex += steps
    else this.currentPageIndex = this.history.length - 1
    return this.history[this.currentPageIndex]
};

//https://leetcode.com/problems/design-browser-history/