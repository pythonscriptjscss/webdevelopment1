// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    var treeNodes = document.querySelectorAll('.tree-node');
    
    treeNodes.forEach(function(node) {
        node.addEventListener('click', function() {
            var children = this.parentElement.querySelector('ul');
            if (children) {
                children.classList.toggle('hidden');
            }
        });
    });
});