# Linked Lists in JavaScript

This project implements a basic **Linked List** data structure in JavaScript. It includes common operations such as appending, prepending, inserting, removing, and finding nodes, along with utility methods to display the list and check its size.

## Files

- **node.js**: Defines the `Node` class, which represents an individual node in the linked list.
- **linked-lists.js**: Implements the `LinkedList` class, with all the methods required to manipulate a linked list.
- **index.js**: A test file that demonstrates how to use the `LinkedList` class with example cases.

## Node Class (node.js)

The `Node` class contains:
- `value`: The data held by the node.
- `next`: A pointer to the next node in the list, initially set to `null`.

## LinkedList Class (linked-lists.js)

The `LinkedList` class supports the following methods:
- `append(value)`: Adds a new node to the end of the list.
- `prepend(value)`: Adds a new node to the start of the list.
- `getSize()`: Returns the number of nodes in the list.
- `getHead()`: Returns the value of the head node.
- `tail()`: Returns the value of the last node in the list.
- `at(index)`: Returns the value of the node at the specified index.
- `pop()`: Removes the last node from the list.
- `contains(value)`: Checks if the list contains a node with the specified value.
- `find(value)`: Returns the index of the node with the specified value or `null` if not found.
- `toString()`: Returns a string representation of the list in the format `(value) -> (value) -> ... -> null`.
- `insertAt(value, index)`: Inserts a new node with the given value at the specified index.
- `removeAt(index)`: Removes the node at the given index.

## Testing the Project

You can test the linked list implementation using **Node.js**. The `index.js` file provides sample test cases that create and manipulate a linked list.

