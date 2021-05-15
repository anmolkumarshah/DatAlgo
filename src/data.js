const codeData = {
  array: {
    name: `Array Data Structure`,
    intro: `An array is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array). The base value is index 0 and the difference between the two indexes is the offset.`,
    cpp: `#include <stdio.h>

#include <stdlib.h>

int a[10], pos, elem;

int n = 0;

void create();

void display();

void insert();

void del();

void main()

{

    int choice;

    while (1)

    {

        printf("\n\n~~~~MENU~~~~");

        printf("\n=>1. Create an array of N integers");

        printf("\n=>2. Display of array elements");

        printf("\n=>3. Insert ELEM at a given POS");

        printf("\n=>4. Delete an element at a given POS");

        printf("\n=>5. Exit");

        printf("\nEnter your choice: ");

        scanf("%d", &choice);

        switch (choice)

        {

        case 1:
            create();

            break;

        case 2:
            display();

            break;

        case 3:
            insert();

            break;

        case 4:
            del();

            break;

        case 5:
            exit(1);

            break;

        default:
            printf("\nPlease enter a valid choice:");
        }
    }
}

void create()

{

    int i;

    printf("\nEnter the number of elements: ");

    scanf("%d", &n);

    printf("\nEnter the elements: ");

    for (i = 0; i < n; i++)

    {

        scanf("%d", &a[i]);
    }
}

void display()

{

    int i;

    if (n == 0)

    {

        printf("\nNo elements to display");

        return;
    }

    printf("\nArray elements are: ");

    for (i = 0; i < n; i++)

        printf("%d\t ", a[i]);
}

void insert()

{

    int i;

    if (n == 5)

    {

        printf("\nArray is full. Insertion is not possible");

        return;
    }

    do

    {

        printf("\nEnter a valid position where element to be inserted:    ");

        scanf("%d", &pos);

    } while (pos > n);

    printf("\nEnter the value to be inserted:   ");

    scanf("%d", &elem);

    for (i = n - 1; i >= pos; i--)

    {

        a[i + 1] = a[i];
    }

    a[pos] = elem;

    n = n + 1;

    display();
}


void del()

{

    int i;

    if (n == 0)

    {

        printf("\nArray is empty and no elements to delete");

        return;
    }

    do

    {

        printf("\nEnter a valid position from where element to be deleted:    ");

        scanf("%d", &pos);

    } while (pos >= n);

    elem = a[pos];

    printf("\nDeleted element is : %d \n", elem);

    for (i = pos; i < n - 1; i++)

    {
        a[i] = a[i + 1];
    }

    n = n - 1;

    display();
}



Array using c++ :-

#include <iostream>
using namespace std;

int *arr = new int[100], pos, elem;

int n = 0;

void create();

void display();

void insert();

void del();

int main()

{

    int choice;

    while (1)

    {

        cout << "\n\n~~~~MENU~~~~";

        cout << "\n=>1. Create an array of N integers";

        cout << "\n=>2. Display of array elements";

        cout << "\n=>3. Insert ELEM at arr given POS";

        cout << "\n=>4. Delete an element at arr given POS";

        cout << "\n=>5. Exit";

        cout << "\nEnter your choice: ";

        cin >> choice;

        switch (choice)

        {

        case 1:
            create();

            break;

        case 2:
            display();

            break;

        case 3:
            insert();

            break;

        case 4:
            del();

            break;

        case 5:
            exit(1);

            break;

        default:
            cout << "\nPlease enter arr valid choice:";
        }
    }
    return 0;
}

void create()

{

    int i;

    cout << "\nEnter the number of elements: ";

    cin >> n;

    cout << "\nEnter the elements: ";

    for (i = 0; i < n; i++)

    {

        cin >> arr[i];
    }
}

void display()

{

    int i;

    if (n == 0)

    {

        cout << "\nNo elements to display";
        return;
    }

    cout << "\nArray elements are: ";

    for (i = 0; i < n; i++)

        cout << "\t" << arr[i];
}

void insert()

{

    int i;

    if (n == 5)

    {

        cout << "\nArray is full. Insertion is not possible";

        return;
    }

    do

    {

        cout << "\nEnter arr valid position where element to be inserted:    ";

        cin >> pos;

    } while (pos > n);

    cout << "\nEnter the value to be inserted:   ";

    cin >> elem;

    for (i = n - 1; i >= pos; i--)

    {

        arr[i + 1] = arr[i];
    }

    arr[pos] = elem;

    n = n + 1;

    display();
}

void del()

{

    int i;

    if (n == 0)

    {

        cout << "\nArray is empty and no elements to delete";

        return;
    }

    do

    {

        cout << "\nEnter arr valid position from where element to be deleted:    ";

        cin >> pos;

    } while (pos >= n);

    elem = arr[pos];

    cout << "\nDeleted element is : %d \n", elem;

    for (i = pos; i < n - 1; i++)

    {
        arr[i] = arr[i + 1];
    }

    n = n - 1;

    display();
}

`,
    java: ``,
    python: ``,
  },
  stack: {
    name: `Stack Data Structure`,
    intro: `Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.
`,
    cpp: `#include <stdio.h>

#include <stdlib.h>

#define Size 4

int Top = -1, inp_array[Size];
void Push();
void Pop();
void show();

int main()
{
    int choice;

    while (1)
    {
        printf("\nOperations performed by Stack");
        printf("\n1.Push the element\n2.Pop the element\n3.Show\n4.End");
        printf("\n\nEnter the choice:");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            Push();
            break;
        case 2:
            Pop();
            break;
        case 3:
            show();
            break;
        case 4:
            exit(0);

        default:
            printf("\nInvalid choice!!");
        }
    }
}

void Push()
{
    int x;

    if (Top == Size - 1)
    {
        printf("\nOverflow!!");
    }
    else
    {
        printf("\nEnter element to be inserted to the stack:");
        scanf("%d", &x);
        Top = Top + 1;
        inp_array[Top] = x;
    }
}

void Pop()
{
    if (Top == -1)
    {
        printf("\nUnderflow!!");
    }
    else
    {
        printf("\nPopped element:  %d", inp_array[Top]);
        Top = Top - 1;
    }
}

void show()
{

    if (Top == -1)
    {
        printf("\nUnderflow!!");
    }
    else
    {
        printf("\nElements present in the stack: \n");
        for (int i = Top; i >= 0; --i)
            printf("%d\n", inp_array[i]);
    }
}


Stack using c++ :-

#include <iostream>
using namespace std;
#define Size 10

int Top = -1,
    *inp_array = new int[Size];
void Push();
void Pop();
void show();

int main()
{
    int choice;

    while (1)
    {
        cout << "\nOperations performed by Stack";
        cout << "\n1.Push the element\n2.Pop the element\n3.Show\n4.End";
        cout << "\n\nEnter the choice:";
        cin >> choice;

        switch (choice)
        {
        case 1:
            Push();
            break;
        case 2:
            Pop();
            break;
        case 3:
            show();
            break;
        case 4:
            exit(0);

        default:
            cout << "\nInvalid choice!!";
        }
    }
}

void Push()
{
    int x;

    if (Top == Size - 1)
    {
        cout << "\nOverflow!!";
    }
    else
    {
        cout << "\nEnter element to be inserted to the stack:";
        cin >> x;
        Top = Top + 1;
        inp_array[Top] = x;
    }
}

void Pop()
{
    if (Top == -1)
    {
        cout << "\nUnderflow!!";
    }
    else
    {
        cout << "\nPopped element: ", inp_array[Top];
        Top = Top - 1;
    }
}

void show()
{

    if (Top == -1)
    {
        cout << "\nUnderflow!!";
    }
    else
    {
        cout << "\nElements present in the stack: \n";
        for (int i = Top; i >= 0; --i)
            cout << "%d\n", inp_array[i];
    }
}
`,
    java: ``,
    python: ``,
  },
  queue: {
    name: `Queue Data Structure`,
    intro: `A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added. It works on the principle of First In First Out.`,
    cpp: `#include <stdio.h>
#define SIZE 100
void enqueue();
void dequeue();
void show();
int inp_arr[SIZE];
int Rear = -1;
int Front = -1;
main()
{
    int ch;
    while (1)
    {
        printf("1.Enqueue Operation\n");
        printf("2.Dequeue Operation\n");
        printf("3.Display the Queue\n");
        printf("4.Exit\n");
        printf("Enter your choice of operations : ");
        scanf("%d", &ch);
        switch (ch)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            show();
            break;
        case 4:
            exit(0);
        default:
            printf("Incorrect choice \n");
        }
    }
}

void enqueue()
{
    int insert_item;
    if (Rear == SIZE - 1)
        printf("Overflow \n");
    else
    {
        if (Front == -1)

            Front = 0;
        printf("Element to be inserted in the Queue\n : ");
        scanf("%d", &insert_item);
        Rear = Rear + 1;
        inp_arr[Rear] = insert_item;
    }
}

void dequeue()
{
    if (Front == -1 || Front > Rear)
    {
        printf("Underflow \n");
        return;
    }
    else
    {
        printf("Element deleted from the Queue: %d\n", inp_arr[Front]);
        Front = Front + 1;
    }
}

void show()
{

    if (Front == -1)
        printf("Empty Queue \n");
    else
    {
        printf("Queue: \n");
        for (int i = Front; i <= Rear; i++)
            printf("%d ", inp_arr[i]);
        printf("\n");
    }
}


Queue using c++ :-

#include <iostream>
using namespace std;
#define SIZE 100
void enqueue();
void dequeue();
void show();
int *inp_arr = new int[SIZE];
int Rear = -1;
int Front = -1;
main()
{
    int ch;
    while (1)
    {
        cout << "1.Enqueue Operation\n";
        cout << "2.Dequeue Operation\n";
        cout << "3.Display the Queue\n";
        cout << "4.Exit\n";
        cout << "Enter your choice of operations : ";
        cin >> ch;
        switch (ch)
        {
        case 1:
            enqueue();
            break;
        case 2:
            dequeue();
            break;
        case 3:
            show();
            break;
        case 4:
            exit(0);
        default:
            cout << "Incorrect choice \n";
        }
    }
}

void enqueue()
{
    int insert_item;
    if (Rear == SIZE - 1)
        cout << "Overflow \n";
    else
    {
        if (Front == -1)

            Front = 0;
        cout << "Element to be inserted in the Queue\n : ";
        cin >> insert_item;
        Rear = Rear + 1;
        inp_arr[Rear] = insert_item;
    }
}

void dequeue()
{
    if (Front == -1 || Front > Rear)
    {
        cout << "Underflow \n";
        return;
    }
    else
    {
        cout << "Element deleted from the Queue: %d\n", inp_arr[Front];
        Front = Front + 1;
    }
}

void show()
{

    if (Front == -1)
        cout << "Empty Queue \n";
    else
    {
        cout << "Queue: \n";
        for (int i = Front; i <= Rear; i++)
            cout << "%d ", inp_arr[i];
        cout << "\n";
    }
}

`,
    java: ``,
    python: ``,
  },
  //   single linked list
  sll: {
    name: `Single Linked list`,
    intro: `A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below: Consider 4 nodes [A,B,C & D]
So in Linked List Data Structure, A is the head which is connected to the next block (i.e B) which is connected to C & the C block is connected to the D block respectively. 
In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   linear search
  ls: {
    name: `Linear Search`,
    intro: `A simple approach is to do a linear search, i.e  
•	Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
•	If x matches with an element, return the index.
•	If x doesn’t match with any of elements, return -1.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   binary Search
  bs: {
    name: `Binary Search`,
    intro: `Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
A simple approach is to do Linear Search. The time complexity of the above algorithm is O(n). Another approach to perform the same task is using Binary Search. 
Binary Search: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(Log n). 
We basically ignore half of the elements just after one comparison.

1.	Compare x with the middle element.
2.	If x matches with the middle element, we return the mid index.
3.	Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
4.	Else (x is smaller) recur for the left half.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   bubble sort
  bso: {
    name: `Bubble Sort`,
    intro: `Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst-case complexity are of Ο(n2) where n is the number of items.`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   insertion Sort
  is: {
    name: `Insertion Sort`,
    intro: `Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
Algorithm 
To sort an array of size n in ascending order: 
1: Iterate from arr[1] to arr[n] over the array. 
2: Compare the current element (key) to its predecessor. 
3: If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   Selection sort
  ss: {
    name: `Selection Sort`,
    intro: `The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   Quick Sort
  qs: {
    name: `Quick Sort`,
    intro: `QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways. 
1.	Always pick first element as pivot.
2.	Always pick last element as pivot (implemented below)
3.	Pick a random element as pivot.
4.	Pick median as pivot.
The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.
`,
    cpp: ``,
    java: ``,
    python: ``,
  },
  //   binary tree
  bt: {
    name: `Binary Tree`,
    intro: `A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.

Example of Binary Tree Data Structure is: 1,2,3,4,5,6,7,8,9,10,11,12,13,14.
A Binary Tree node contains following parts.
1.	Data
2.	Pointer to left child
3.	Pointer to right child
`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

struct Node {
	int data;
	struct Node* left;
	struct Node* right;

	// val is the key or the value that
	// has to be added to the data part
	Node(int val)
	{
		data = val;

		// Left and right child for node
		// will be initialized to null
		left = NULL;
		right = NULL;
	}
};

int main()
{

	/*create root*/
	struct Node* root = new Node(1);
	/* following is the tree after above statement

			1
			/ \
		NULL NULL
	*/

	root->left = new Node(2);
	root->right = new Node(3);
	/* 2 and 3 become left and right children of 1
					1
				/ \
				2	 3
			/ \	 / \
			NULL NULL NULL NULL
	*/

	root->left->left = new Node(4);
	/* 4 becomes left child of 2
			1
			/	 \
		2	 3
		/ \	 / \
		4 NULL NULL NULL
		/ \
	NULL NULL
	*/

	return 0;
}
`,
    java: `/* Class containing left and right child of current
node and key value*/
class Node
{
	int key;
	Node left, right;

	public Node(int item)
	{
		key = item;
		left = right = null;
	}
}

// A Java program to introduce Binary Tree
class BinaryTree
{
	// Root of Binary Tree
	Node root;

	// Constructors
	BinaryTree(int key)
	{
		root = new Node(key);
	}

	BinaryTree()
	{
		root = null;
	}

	public static void main(String[] args)
	{
		BinaryTree tree = new BinaryTree();

		/*create root*/
		tree.root = new Node(1);

		/* following is the tree after above statement

			1
			/ \
		null null	 */

		tree.root.left = new Node(2);
		tree.root.right = new Node(3);

		/* 2 and 3 become left and right children of 1
			1
			/	 \
		2	 3
		/ \	 / \
	null null null null */


		tree.root.left.left = new Node(4);
		/* 4 becomes left child of 2
					1
				/	 \
			2		 3
			/ \	 / \
			4 null null null
		/ \
		null null
		*/
	}
}
`,
    python: `# Python program to introduce Binary Tree

# A class that represents an individual node in a
# Binary Tree
class Node:
	def __init__(self,key):
		self.left = None
		self.right = None
		self.val = key


# create root
root = Node(1)
''' following is the tree after above statement
		1
	/ \
	None None'''

root.left	 = Node(2);
root.right	 = Node(3);

''' 2 and 3 become left and right children of 1
		1
		/ \
		2	 3
	/ \ / \
None None None None'''


root.left.left = Node(4);
'''4 becomes left child of 2
		1
	/	 \
	2		 3
	/ \	 / \
4 None None None
/ \
None None'''
`,
  },
  //   avl tree
  avl: {
    name: `AVL Tree`,
    intro: `AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes. 

Example: 12,8,18,11,17,5,4
 
The above tree is AVL because differences between heights of left and right subtrees for every node is less than or equal to 1.
An Example Tree that is NOT an AVL Tree 

Example: 12,18,8,11,17,5,4,7,2

The above tree is not AVL because differences between heights of left and right subtrees for 8 and 12 is greater than 1.
Why AVL Trees? 
Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. The cost of these operations may become O(n) for a skewed Binary tree. If we make sure that height of the tree remains O(Logn) after every insertion and deletion, then we can guarantee an upper bound of O(Logn) for all these operations. The height of an AVL tree is always O(Logn) where n is the number of nodes in the tree.
`,
    cpp: `// C++ program to insert a node in AVL tree
#include<bits/stdc++.h>
using namespace std;

// An AVL tree node
class Node
{
	public:
	int key;
	Node *left;
	Node *right;
	int height;
};

// A utility function to get maximum
// of two integers
int max(int a, int b);

// A utility function to get the
// height of the tree
int height(Node *N)
{
	if (N == NULL)
		return 0;
	return N->height;
}

// A utility function to get maximum
// of two integers
int max(int a, int b)
{
	return (a > b)? a : b;
}

/* Helper function that allocates a
new node with the given key and
NULL left and right pointers. */
Node* newNode(int key)
{
	Node* node = new Node();
	node->key = key;
	node->left = NULL;
	node->right = NULL;
	node->height = 1; // new node is initially
					// added at leaf
	return(node);
}

// A utility function to right
// rotate subtree rooted with y
// See the diagram given above.
Node *rightRotate(Node *y)
{
	Node *x = y->left;
	Node *T2 = x->right;

	// Perform rotation
	x->right = y;
	y->left = T2;

	// Update heights
	y->height = max(height(y->left),
					height(y->right)) + 1;
	x->height = max(height(x->left),
					height(x->right)) + 1;

	// Return new root
	return x;
}

// A utility function to left
// rotate subtree rooted with x
// See the diagram given above.
Node *leftRotate(Node *x)
{
	Node *y = x->right;
	Node *T2 = y->left;

	// Perform rotation
	y->left = x;
	x->right = T2;

	// Update heights
	x->height = max(height(x->left),
					height(x->right)) + 1;
	y->height = max(height(y->left),
					height(y->right)) + 1;

	// Return new root
	return y;
}

// Get Balance factor of node N
int getBalance(Node *N)
{
	if (N == NULL)
		return 0;
	return height(N->left) - height(N->right);
}

// Recursive function to insert a key
// in the subtree rooted with node and
// returns the new root of the subtree.
Node* insert(Node* node, int key)
{
	/* 1. Perform the normal BST insertion */
	if (node == NULL)
		return(newNode(key));

	if (key < node->key)
		node->left = insert(node->left, key);
	else if (key > node->key)
		node->right = insert(node->right, key);
	else // Equal keys are not allowed in BST
		return node;

	/* 2. Update height of this ancestor node */
	node->height = 1 + max(height(node->left),
						height(node->right));

	/* 3. Get the balance factor of this ancestor
		node to check whether this node became
		unbalanced */
	int balance = getBalance(node);

	// If this node becomes unbalanced, then
	// there are 4 cases

	// Left Left Case
	if (balance > 1 && key < node->left->key)
		return rightRotate(node);

	// Right Right Case
	if (balance < -1 && key > node->right->key)
		return leftRotate(node);

	// Left Right Case
	if (balance > 1 && key > node->left->key)
	{
		node->left = leftRotate(node->left);
		return rightRotate(node);
	}

	// Right Left Case
	if (balance < -1 && key < node->right->key)
	{
		node->right = rightRotate(node->right);
		return leftRotate(node);
	}

	/* return the (unchanged) node pointer */
	return node;
}

// A utility function to print preorder
// traversal of the tree.
// The function also prints height
// of every node
void preOrder(Node *root)
{
	if(root != NULL)
	{
		cout << root->key << " ";
		preOrder(root->left);
		preOrder(root->right);
	}
}

// Driver Code
int main()
{
	Node *root = NULL;
	
	/* Constructing tree given in
	the above figure */
	root = insert(root, 10);
	root = insert(root, 20);
	root = insert(root, 30);
	root = insert(root, 40);
	root = insert(root, 50);
	root = insert(root, 25);
	
	/* The constructed AVL Tree would be
				30
			/ \
			20 40
			/ \ \
		10 25 50
	*/
	cout << "Preorder traversal of the "
			"constructed AVL tree is \n";
	preOrder(root);
	
	return 0;
}
`,
    java: `// Java program for insertion in AVL Tree
class Node {
	int key, height;
	Node left, right;

	Node(int d) {
		key = d;
		height = 1;
	}
}

class AVLTree {

	Node root;

	// A utility function to get the height of the tree
	int height(Node N) {
		if (N == null)
			return 0;

		return N.height;
	}

	// A utility function to get maximum of two integers
	int max(int a, int b) {
		return (a > b) ? a : b;
	}

	// A utility function to right rotate subtree rooted with y
	// See the diagram given above.
	Node rightRotate(Node y) {
		Node x = y.left;
		Node T2 = x.right;

		// Perform rotation
		x.right = y;
		y.left = T2;

		// Update heights
		y.height = max(height(y.left), height(y.right)) + 1;
		x.height = max(height(x.left), height(x.right)) + 1;

		// Return new root
		return x;
	}

	// A utility function to left rotate subtree rooted with x
	// See the diagram given above.
	Node leftRotate(Node x) {
		Node y = x.right;
		Node T2 = y.left;

		// Perform rotation
		y.left = x;
		x.right = T2;

		// Update heights
		x.height = max(height(x.left), height(x.right)) + 1;
		y.height = max(height(y.left), height(y.right)) + 1;

		// Return new root
		return y;
	}

	// Get Balance factor of node N
	int getBalance(Node N) {
		if (N == null)
			return 0;

		return height(N.left) - height(N.right);
	}

	Node insert(Node node, int key) {

		/* 1. Perform the normal BST insertion */
		if (node == null)
			return (new Node(key));

		if (key < node.key)
			node.left = insert(node.left, key);
		else if (key > node.key)
			node.right = insert(node.right, key);
		else // Duplicate keys not allowed
			return node;

		/* 2. Update height of this ancestor node */
		node.height = 1 + max(height(node.left),
							height(node.right));

		/* 3. Get the balance factor of this ancestor
			node to check whether this node became
			unbalanced */
		int balance = getBalance(node);

		// If this node becomes unbalanced, then there
		// are 4 cases Left Left Case
		if (balance > 1 && key < node.left.key)
			return rightRotate(node);

		// Right Right Case
		if (balance < -1 && key > node.right.key)
			return leftRotate(node);

		// Left Right Case
		if (balance > 1 && key > node.left.key) {
			node.left = leftRotate(node.left);
			return rightRotate(node);
		}

		// Right Left Case
		if (balance < -1 && key < node.right.key) {
			node.right = rightRotate(node.right);
			return leftRotate(node);
		}

		/* return the (unchanged) node pointer */
		return node;
	}

	// A utility function to print preorder traversal
	// of the tree.
	// The function also prints height of every node
	void preOrder(Node node) {
		if (node != null) {
			System.out.print(node.key + " ");
			preOrder(node.left);
			preOrder(node.right);
		}
	}

	public static void main(String[] args) {
		AVLTree tree = new AVLTree();

		/* Constructing tree given in the above figure */
		tree.root = tree.insert(tree.root, 10);
		tree.root = tree.insert(tree.root, 20);
		tree.root = tree.insert(tree.root, 30);
		tree.root = tree.insert(tree.root, 40);
		tree.root = tree.insert(tree.root, 50);
		tree.root = tree.insert(tree.root, 25);

		/* The constructed AVL Tree would be
			30
			/ \
		20 40
		/ \	 \
		10 25 50
		*/
		System.out.println("Preorder traversal" +
						" of constructed tree is : ");
		tree.preOrder(tree.root);
	}
}
`,
    python: `# Python code to insert a node in AVL tree

# Generic tree node class
class TreeNode(object):
	def __init__(self, val):
		self.val = val
		self.left = None
		self.right = None
		self.height = 1

# AVL tree class which supports the
# Insert operation
class AVL_Tree(object):

	# Recursive function to insert key in
	# subtree rooted with node and returns
	# new root of subtree.
	def insert(self, root, key):
	
		# Step 1 - Perform normal BST
		if not root:
			return TreeNode(key)
		elif key < root.val:
			root.left = self.insert(root.left, key)
		else:
			root.right = self.insert(root.right, key)

		# Step 2 - Update the height of the
		# ancestor node
		root.height = 1 + max(self.getHeight(root.left),
						self.getHeight(root.right))

		# Step 3 - Get the balance factor
		balance = self.getBalance(root)

		# Step 4 - If the node is unbalanced,
		# then try out the 4 cases
		# Case 1 - Left Left
		if balance > 1 and key < root.left.val:
			return self.rightRotate(root)

		# Case 2 - Right Right
		if balance < -1 and key > root.right.val:
			return self.leftRotate(root)

		# Case 3 - Left Right
		if balance > 1 and key > root.left.val:
			root.left = self.leftRotate(root.left)
			return self.rightRotate(root)

		# Case 4 - Right Left
		if balance < -1 and key < root.right.val:
			root.right = self.rightRotate(root.right)
			return self.leftRotate(root)

		return root

	def leftRotate(self, z):

		y = z.right
		T2 = y.left

		# Perform rotation
		y.left = z
		z.right = T2

		# Update heights
		z.height = 1 + max(self.getHeight(z.left),
						self.getHeight(z.right))
		y.height = 1 + max(self.getHeight(y.left),
						self.getHeight(y.right))

		# Return the new root
		return y

	def rightRotate(self, z):

		y = z.left
		T3 = y.right

		# Perform rotation
		y.right = z
		z.left = T3

		# Update heights
		z.height = 1 + max(self.getHeight(z.left),
						self.getHeight(z.right))
		y.height = 1 + max(self.getHeight(y.left),
						self.getHeight(y.right))

		# Return the new root
		return y

	def getHeight(self, root):
		if not root:
			return 0

		return root.height

	def getBalance(self, root):
		if not root:
			return 0

		return self.getHeight(root.left) - self.getHeight(root.right)

	def preOrder(self, root):

		if not root:
			return

		print("{0} ".format(root.val), end="")
		self.preOrder(root.left)
		self.preOrder(root.right)


# Driver program to test above function
myTree = AVL_Tree()
root = None

root = myTree.insert(root, 10)
root = myTree.insert(root, 20)
root = myTree.insert(root, 30)
root = myTree.insert(root, 40)
root = myTree.insert(root, 50)
root = myTree.insert(root, 25)

"""The constructed AVL Tree would be
			30
		/ \
		20 40
		/ \	 \
	10 25 50"""

# Preorder Traversal
print("Preorder traversal of the",
	"constructed AVL tree is")
myTree.preOrder(root)
print()
`,
  },
  //   Dijkstra’s Algorithm
  pf: {
    name: `Dijkstra’s Algorithm `,
    intro: ``,
    cpp: `// A C++ program for Dijkstra's single source shortest path algorithm.
// The program is for adjacency matrix representation of the graph

#include <limits.h>
#include <stdio.h>

// Number of vertices in the graph
#define V 9

// A utility function to find the vertex with minimum distance value, from
// the set of vertices not yet included in shortest path tree
int minDistance(int dist[], bool sptSet[])
{
	// Initialize min value
	int min = INT_MAX, min_index;

	for (int v = 0; v < V; v++)
		if (sptSet[v] == false && dist[v] <= min)
			min = dist[v], min_index = v;

	return min_index;
}

// A utility function to print the constructed distance array
void printSolution(int dist[])
{
	printf("Vertex \t\t Distance from Source\n");
	for (int i = 0; i < V; i++)
		printf("%d \t\t %d\n", i, dist[i]);
}

// Function that implements Dijkstra's single source shortest path algorithm
// for a graph represented using adjacency matrix representation
void dijkstra(int graph[V][V], int src)
{
	int dist[V]; // The output array. dist[i] will hold the shortest
	// distance from src to i

	bool sptSet[V]; // sptSet[i] will be true if vertex i is included in shortest
	// path tree or shortest distance from src to i is finalized

	// Initialize all distances as INFINITE and stpSet[] as false
	for (int i = 0; i < V; i++)
		dist[i] = INT_MAX, sptSet[i] = false;

	// Distance of source vertex from itself is always 0
	dist[src] = 0;

	// Find shortest path for all vertices
	for (int count = 0; count < V - 1; count++) {
		// Pick the minimum distance vertex from the set of vertices not
		// yet processed. u is always equal to src in the first iteration.
		int u = minDistance(dist, sptSet);

		// Mark the picked vertex as processed
		sptSet[u] = true;

		// Update dist value of the adjacent vertices of the picked vertex.
		for (int v = 0; v < V; v++)

			// Update dist[v] only if is not in sptSet, there is an edge from
			// u to v, and total weight of path from src to v through u is
			// smaller than current value of dist[v]
			if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
				&& dist[u] + graph[u][v] < dist[v])
				dist[v] = dist[u] + graph[u][v];
	}

	// print the constructed distance array
	printSolution(dist);
}

// driver program to test above function
int main()
{
	/* Let us create the example graph discussed above */
	int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
						{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
						{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
						{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
						{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
						{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
						{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
						{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
						{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };

	dijkstra(graph, 0);

	return 0;
}
`,
    java: `// A Java program for Dijkstra's single source shortest path algorithm.
// The program is for adjacency matrix representation of the graph
import java.util.*;
import java.lang.*;
import java.io.*;

class ShortestPath {
	// A utility function to find the vertex with minimum distance value,
	// from the set of vertices not yet included in shortest path tree
	static final int V = 9;
	int minDistance(int dist[], Boolean sptSet[])
	{
		// Initialize min value
		int min = Integer.MAX_VALUE, min_index = -1;

		for (int v = 0; v < V; v++)
			if (sptSet[v] == false && dist[v] <= min) {
				min = dist[v];
				min_index = v;
			}

		return min_index;
	}

	// A utility function to print the constructed distance array
	void printSolution(int dist[])
	{
		System.out.println("Vertex \t\t Distance from Source");
		for (int i = 0; i < V; i++)
			System.out.println(i + " \t\t " + dist[i]);
	}

	// Function that implements Dijkstra's single source shortest path
	// algorithm for a graph represented using adjacency matrix
	// representation
	void dijkstra(int graph[][], int src)
	{
		int dist[] = new int[V]; // The output array. dist[i] will hold
		// the shortest distance from src to i

		// sptSet[i] will true if vertex i is included in shortest
		// path tree or shortest distance from src to i is finalized
		Boolean sptSet[] = new Boolean[V];

		// Initialize all distances as INFINITE and stpSet[] as false
		for (int i = 0; i < V; i++) {
			dist[i] = Integer.MAX_VALUE;
			sptSet[i] = false;
		}

		// Distance of source vertex from itself is always 0
		dist[src] = 0;

		// Find shortest path for all vertices
		for (int count = 0; count < V - 1; count++) {
			// Pick the minimum distance vertex from the set of vertices
			// not yet processed. u is always equal to src in first
			// iteration.
			int u = minDistance(dist, sptSet);

			// Mark the picked vertex as processed
			sptSet[u] = true;

			// Update dist value of the adjacent vertices of the
			// picked vertex.
			for (int v = 0; v < V; v++)

				// Update dist[v] only if is not in sptSet, there is an
				// edge from u to v, and total weight of path from src to
				// v through u is smaller than current value of dist[v]
				if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
					dist[v] = dist[u] + graph[u][v];
		}

		// print the constructed distance array
		printSolution(dist);
	}

	// Driver method
	public static void main(String[] args)
	{
		/* Let us create the example graph discussed above */
		int graph[][] = new int[][] { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
									{ 4, 0, 8, 0, 0, 0, 0, 11, 0 },
									{ 0, 8, 0, 7, 0, 4, 0, 0, 2 },
									{ 0, 0, 7, 0, 9, 14, 0, 0, 0 },
									{ 0, 0, 0, 9, 0, 10, 0, 0, 0 },
									{ 0, 0, 4, 14, 10, 0, 2, 0, 0 },
									{ 0, 0, 0, 0, 0, 2, 0, 1, 6 },
									{ 8, 11, 0, 0, 0, 0, 1, 0, 7 },
									{ 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
		ShortestPath t = new ShortestPath();
		t.dijkstra(graph, 0);
	}
}
`,
    python: `# Python program for Dijkstra's single
# source shortest path algorithm. The program is
# for adjacency matrix representation of the graph

# Library for INT_MAX
import sys

class Graph():

	def __init__(self, vertices):
		self.V = vertices
		self.graph = [[0 for column in range(vertices)]
					for row in range(vertices)]

	def printSolution(self, dist):
		print "Vertex \tDistance from Source"
		for node in range(self.V):
			print node, "\t", dist[node]

	# A utility function to find the vertex with
	# minimum distance value, from the set of vertices
	# not yet included in shortest path tree
	def minDistance(self, dist, sptSet):

		# Initilaize minimum distance for next node
		min = sys.maxint

		# Search not nearest vertex not in the
		# shortest path tree
		for v in range(self.V):
			if dist[v] < min and sptSet[v] == False:
				min = dist[v]
				min_index = v

		return min_index

	# Funtion that implements Dijkstra's single source
	# shortest path algorithm for a graph represented
	# using adjacency matrix representation
	def dijkstra(self, src):

		dist = [sys.maxint] * self.V
		dist[src] = 0
		sptSet = [False] * self.V

		for cout in range(self.V):

			# Pick the minimum distance vertex from
			# the set of vertices not yet processed.
			# u is always equal to src in first iteration
			u = self.minDistance(dist, sptSet)

			# Put the minimum distance vertex in the
			# shotest path tree
			sptSet[u] = True

			# Update dist value of the adjacent vertices
			# of the picked vertex only if the current
			# distance is greater than new distance and
			# the vertex in not in the shotest path tree
			for v in range(self.V):
				if self.graph[u][v] > 0 and sptSet[v] == False and \
				dist[v] > dist[u] + self.graph[u][v]:
						dist[v] = dist[u] + self.graph[u][v]

		self.printSolution(dist)

# Driver program
g = Graph(9)
g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
		[4, 0, 8, 0, 0, 0, 0, 11, 0],
		[0, 8, 0, 7, 0, 4, 0, 0, 2],
		[0, 0, 7, 0, 9, 14, 0, 0, 0],
		[0, 0, 0, 9, 0, 10, 0, 0, 0],
		[0, 0, 4, 14, 10, 0, 2, 0, 0],
		[0, 0, 0, 0, 0, 2, 0, 1, 6],
		[8, 11, 0, 0, 0, 0, 1, 0, 7],
		[0, 0, 2, 0, 0, 0, 6, 7, 0]
		];

g.dijkstra(0);
`,
  },
};

export default codeData;
