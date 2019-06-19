module.exports = () => {
    const issueList = document.getElementById("issues-list");
    while (issueList.firstChild) {
        issueList.removeChild(issueList.firstChild);
    }
};
