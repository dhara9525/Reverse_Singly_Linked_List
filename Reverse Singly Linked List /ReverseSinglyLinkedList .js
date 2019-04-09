/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var prev=null;
    var cur=head;
    while(cur!=null)
    {
        var next;  
        next=cur.next;
        cur.next=prev;
        prev=cur;
        cur=next;
    }
    head=prev;
return head;
};