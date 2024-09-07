import LinkedList from "./linked-lists.js";

const list1 = new LinkedList();

list1.append(15);
list1.prepend(22);
list1.append(125);
list1.prepend(82);
list1.append(215);
list1.prepend(232);

console.log(`List1 toString:`, list1.toString());
console.log(`List1 get size:`, list1.getSize());
console.log(`List1 head node:`, list1.getHead());
console.log(`List1 tail node:`, list1.tail());
console.log(`List1 check element at index 2:`, list1.at(2));
console.log(`List1 check if it contains 125:`, list1.contains(125));
console.log(`List1 find in which index is 215:`, list1.find(215));

list1.insertAt(56,1);
console.log('New value: 56, added at index: 1')
console.log(`List1 toString:`, list1.toString());
list1.pop();
console.log('Last node deleted');
console.log(`List1 toString:`, list1.toString());
list1.removeAt(4);
console.log('Node at index: 4 deleted');
console.log(`List1 toString:`, list1.toString());
console.log(`List1 get size:`, list1.getSize());



