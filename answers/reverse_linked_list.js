var reverseList = function(head) {
    if(!head) return head;
    
    let tempNode = new ListNode(head.val, null);
    let curr = head.next;
    
    while (curr != null) {
        tempNode = new ListNode(curr.val, tempNode);
        curr = curr.next;
    }
    
    return tempNode;
};