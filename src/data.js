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
    java: `//Java Program to illustrate how to declare, instantiate, initialize  
//and traverse the Java array.  
class Testarray{  
public static void main(String args[]){  
int a[]=new int[5];//declaration and instantiation  
a[0]=10;//initialization  
a[1]=20;  
a[2]=70;  
a[3]=40;  
a[4]=50;  
//traversing array  
for(int i=0;i<a.length;i++)//length is the property of array  
System.out.println(a[i]);  
}}  
`,
    python: `# Python program to demonstrate
# Creation of Array

# importing "array" for array creations
import array as arr

# creating an array with integer type
a = arr.array('i', [1, 2, 3])

# printing original array
print ("The new created array is : ", end =" ")
for i in range (0, 3):
	print (a[i], end =" ")
print()

# creating an array with float type
b = arr.array('d', [2.5, 3.2, 3.3])

# printing original array
`,
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
    java: `// Java Code for Linked List Implementation

public class StackAsLinkedList {

	StackNode root;

	static class StackNode {
		int data;
		StackNode next;

		StackNode(int data) { this.data = data; }
	}

	public boolean isEmpty()
	{
		if (root == null) {
			return true;
		}
		else
			return false;
	}

	public void push(int data)
	{
		StackNode newNode = new StackNode(data);

		if (root == null) {
			root = newNode;
		}
		else {
			StackNode temp = root;
			root = newNode;
			newNode.next = temp;
		}
		System.out.println(data + " pushed to stack");
	}

	public int pop()
	{
		int popped = Integer.MIN_VALUE;
		if (root == null) {
			System.out.println("Stack is Empty");
		}
		else {
			popped = root.data;
			root = root.next;
		}
		return popped;
	}

	public int peek()
	{
		if (root == null) {
			System.out.println("Stack is empty");
			return Integer.MIN_VALUE;
		}
		else {
			return root.data;
		}
	}

	// Driver code
	public static void main(String[] args)
	{

		StackAsLinkedList sll = new StackAsLinkedList();

		sll.push(10);
		sll.push(20);
		sll.push(30);

		System.out.println(sll.pop()
						+ " popped from stack");

		System.out.println("Top element is " + sll.peek());
	}
}
`,
    python: `# Python program for linked list implementation of stack

# Class to represent a node


class StackNode:

	# Constructor to initialize a node
	def __init__(self, data):
		self.data = data
		self.next = None


class Stack:

	# Constructor to initialize the root of linked list
	def __init__(self):
		self.root = None

	def isEmpty(self):
		return True if self.root is None else False

	def push(self, data):
		newNode = StackNode(data)
		newNode.next = self.root
		self.root = newNode
		print "% d pushed to stack" % (data)

	def pop(self):
		if (self.isEmpty()):
			return float("-inf")
		temp = self.root
		self.root = self.root.next
		popped = temp.data
		return popped

	def peek(self):
		if self.isEmpty():
			return float("-inf")
		return self.root.data


# Driver code
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

print "% d popped from stack" % (stack.pop())
print "Top element is % d " % (stack.peek())
`,
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
    java: `// Java program to demonstrate a Queue

import java.util.LinkedList;
import java.util.Queue;

public class QueueExample {

	public static void main(String[] args)
	{
		Queue<Integer> q
			= new LinkedList<>();

		// Adds elements {0, 1, 2, 3, 4} to
		// the queue
		for (int i = 0; i < 5; i++)
			q.add(i);

		// Display contents of the queue.
		System.out.println("Elements of queue "
						+ q);

		// To remove the head of queue.
		int removedele = q.remove();
		System.out.println("removed element-"
						+ removedele);

		System.out.println(q);

		// To view the head of queue
		int head = q.peek();
		System.out.println("head of queue-"
						+ head);

		// Rest all methods of collection
		// interface like size and contains
		// can be used with this
		// implementation.
		int size = q.size();
		System.out.println("Size of queue-"
						+ size);
	}
}
`,
    python: `# Python program to
# demonstrate queue implementation
# using list

# Initializing a queue
queue = []

# Adding elements to the queue
queue.append('a')
queue.append('b')
queue.append('c')

print("Initial queue")
print(queue)

# Removing elements from the queue
print("\nElements dequeued from queue")
print(queue.pop(0))
print(queue.pop(0))
print(queue.pop(0))

print("\nQueue after removing elements")
print(queue)

# Uncommenting print(queue.pop(0))
# will raise and IndexError
# as the queue is now empty
`,
  },
  //   single linked list
  sll: {
    name: `Single Linked list`,
    intro: `A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers as shown in the below: Consider 4 nodes [A,B,C & D]
So in Linked List Data Structure, A is the head which is connected to the next block (i.e B) which is connected to C & the C block is connected to the D block respectively. 
In simple words, a linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.
`,
    cpp: `#include <iostream>

using namespace std;

struct node
{
    int data;
    node *next;
};

class linked_list
{
private:
    node *head,*tail;
public:
    linked_list()
    {
        head = NULL;
        tail = NULL;
    }

    void add_node(int n)
    {
        node *tmp = new node;
        tmp->data = n;
        tmp->next = NULL;

        if(head == NULL)
        {
            head = tmp;
            tail = tmp;
        }
        else
        {
            tail->next = tmp;
            tail = tail->next;
        }
    }
};

int main()
{
    linked_list a;
    a.add_node(1);
    a.add_node(2);
    return 0;
}
`,
    java: `public class SinglyLinkedList {    
    //Represent a node of the singly linked list    
    class Node{    
        int data;    
        Node next;    
            
        public Node(int data) {    
            this.data = data;    
            this.next = null;    
        }    
    }    
     
    //Represent the head and tail of the singly linked list    
    public Node head = null;    
    public Node tail = null;    
        
    //addNode() will add a new node to the list    
    public void addNode(int data) {    
        //Create a new node    
        Node newNode = new Node(data);    
            
        //Checks if the list is empty    
        if(head == null) {    
            //If list is empty, both head and tail will point to new node    
            head = newNode;    
            tail = newNode;    
        }    
        else {    
            //newNode will be added after tail such that tail's next will point to newNode    
            tail.next = newNode;    
            //newNode will become new tail of the list    
            tail = newNode;    
        }    
    }    
        
    //display() will display all the nodes present in the list    
   public void display() {    
        //Node current will point to head    
        Node current = head;    
            
        if(head == null) {    
            System.out.println("List is empty");    
            return;    
        }    
        System.out.println("Nodes of singly linked list: ");    
        while(current != null) {    
            //Prints each node by incrementing pointer    
            System.out.print(current.data + " ");    
            current = current.next;    
        }    
        System.out.println();    
    }    
        
    public static void main(String[] args) {    
            
        SinglyLinkedList sList = new SinglyLinkedList();    

        //Add nodes to the list    
        sList.addNode(1);    
        sList.addNode(2);    
        sList.addNode(3);    
        sList.addNode(4);    
            
        //Displays the nodes present in the list    
        sList.display();    
    }    
}    
`,
    python: `# A single node of a singly linked list
class Node:
  # constructor
  def __init__(self, data = None, next=None): 
    self.data = data
    self.next = next

# A Linked List class with a single head node
class LinkedList:
  def __init__(self):  
    self.head = None
  
  # insertion method for the linked list
  def insert(self, data):
    newNode = Node(data)
    if(self.head):
      current = self.head
      while(current.next):
        current = current.next
      current.next = newNode
    else:
      self.head = newNode
  
  # print method for the linked list
  def printLL(self):
    current = self.head
    while(current):
      print(current.data)
      current = current.next

# Singly Linked List with insertion and print methods
LL = LinkedList()
LL.insert(3)
LL.insert(4)
LL.insert(5)
LL.printLL()
`,
  },
  //   linear search
  ls: {
    name: `Linear Search`,
    intro: `A simple approach is to do a linear search, i.e  
•	Start from the leftmost element of arr[] and one by one compare x with each element of arr[]
•	If x matches with an element, return the index.
•	If x doesn’t match with any of elements, return -1.
`,
    cpp: `// C++ code to linearly search x in arr[]. If x
// is present then return its location, otherwise
// return -1

#include <iostream>
using namespace std;

int search(int arr[], int n, int x)
{
	int i;
	for (i = 0; i < n; i++)
		if (arr[i] == x)
			return i;
	return -1;
}

// Driver code
int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int n = sizeof(arr) / sizeof(arr[0]);

	// Function call
	int result = search(arr, n, x);
	(result == -1)
		? cout << "Element is not present in array"
		: cout << "Element is present at index " << result;
	return 0;
`,
    java: `import java.util.Scanner;  
  
public class Leniear_Search {  
public static void main(String[] args) {  
    int[] arr = {10, 23, 15, 8, 4, 3, 25, 30, 34, 2, 19};  
    int item,flag=0;   
    Scanner sc = new Scanner(System.in);  
    System.out.println("Enter Item ?");  
    item = sc.nextInt();  
    for(int i = 0; i<10; i++)  
    {  
        if(arr[i]==item)  
        {  
            flag = i+1;  
            break;  
        }  
        else   
            flag = 0;   
    }  
    if(flag != 0)  
    {  
        System.out.println("Item found at location" + flag);  
    }  
    else   
        System.out.println("Item not found");  
      
}  
}  
`,
    python: `# Python3 code to linearly search x in arr[].
# If x is present then return its location,
# otherwise return -1


def search(arr, n, x):

	for i in range(0, n):
		if (arr[i] == x):
			return i
	return -1


# Driver Code
arr = [2, 3, 4, 10, 40]
x = 10
n = len(arr)

# Function call
result = search(arr, n, x)
if(result == -1):
	print("Element is not present in array")
else:
	print("Element is present at index", result)
`,
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
    cpp: `// C++ program to implement recursive Binary Search
#include <bits/stdc++.h>
using namespace std;

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
int binarySearch(int arr[], int l, int r, int x)
{
	if (r >= l) {
		int mid = l + (r - l) / 2;

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

int main(void)
{
	int arr[] = { 2, 3, 4, 10, 40 };
	int x = 10;
	int n = sizeof(arr) / sizeof(arr[0]);
	int result = binarySearch(arr, 0, n - 1, x);
	(result == -1) ? cout << "Element is not present in array"
				: cout << "Element is present at index " << result;
	return 0;
}
`,
    java: `import java.util.*;  
public class BinarySearch {  
public static void main(String[] args) {  
    int[] arr = {16, 19, 20, 23, 45, 56, 78, 90, 96, 100};  
    int item, location = -1;  
    System.out.println("Enter the item which you want to search");  
    Scanner sc = new Scanner(System.in);  
    item = sc.nextInt();  
    location = binarySearch(arr,0,9,item);  
    if(location != -1)  
    System.out.println("the location of the item is "+location);  
    else   
        System.out.println("Item not found");  
    }  
public static int binarySearch(int[] a, int beg, int end, int item)  
{  
    int mid;  
    if(end >= beg)   
    {     
        mid = (beg + end)/2;  
        if(a[mid] == item)  
        {  
            return mid+1;  
        }  
        else if(a[mid] < item)   
        {  
            return binarySearch(a,mid+1,end,item);  
        }  
        else   
        {  
            return binarySearch(a,beg,mid-1,item);  
        }  
      
    }  
    return -1;   
}  
}  
`,
    python: `def binarySearch(arr,beg,end,item):  
    if end >= beg:  
        mid = int((beg+end)/2)  
        if arr[mid] == item :  
            return mid+1  
        elif arr[mid] < item :   
            return binarySearch(arr,mid+1,end,item)  
        else:   
            return binarySearch(arr,beg,mid-1,item)  
    return -1  
      
  
arr=[16, 19, 20, 23, 45, 56, 78, 90, 96, 100];  
item = int(input("Enter the item which you want to search ?"))  
location = -1;   
location = binarySearch(arr,0,9,item);  
if location != -1:   
    print("Item found at location %d" %(location))  
else:   
    print("Item not found")  
`,
  },
  //   bubble sort
  bso: {
    name: `Bubble Sort`,
    intro: `Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst-case complexity are of Ο(n2) where n is the number of items.`,
    cpp: `#include<iostream>
using namespace std;
void swapping(int &a, int &b) {      //swap the content of a and b
   int temp;
   temp = a;
   a = b;
   b = temp;
}
void display(int *array, int size) {
   for(int i = 0; i<size; i++)
      cout << array[i] << " ";
   cout << endl;
}
void bubbleSort(int *array, int size) {
   for(int i = 0; i<size; i++) {
      int swaps = 0;         //flag to detect any swap is there or not
      for(int j = 0; j<size-i-1; j++) {
         if(array[j] > array[j+1]) {       //when the current item is bigger than next
            swapping(array[j], array[j+1]);
            swaps = 1;    //set swap flag
         }
      }
      if(!swaps)
         break;       // No swap in this pass, so array is sorted
   }
}
int main() {
   int n;
   cout << "Enter the number of elements: ";
   cin >> n;
   int arr[n];     //create an array with given number of elements
   cout << "Enter elements:" << endl;
   for(int i = 0; i<n; i++) {
      cin >> arr[i];
   }
   cout << "Array before Sorting: ";
   display(arr, n);
   bubbleSort(arr, n);
   cout << "Array after Sorting: ";
   display(arr, n);
}
`,
    java: `public class BubbleSortExample {  
    static void bubbleSort(int[] arr) {  
        int n = arr.length;  
        int temp = 0;  
         for(int i=0; i < n; i++){  
                 for(int j=1; j < (n-i); j++){  
                          if(arr[j-1] > arr[j]){  
                                 //swap elements  
                                 temp = arr[j-1];  
                                 arr[j-1] = arr[j];  
                                 arr[j] = temp;  
                         }  
                          
                 }  
         }  
  
    }  
    public static void main(String[] args) {  
                int arr[] ={3,60,35,2,45,320,5};  
                 
                System.out.println("Array Before Bubble Sort");  
                for(int i=0; i < arr.length; i++){  
                        System.out.print(arr[i] + " ");  
                }  
                System.out.println();  
                  
                bubbleSort(arr);//sorting array elements using bubble sort  
                 
                System.out.println("Array After Bubble Sort");  
                for(int i=0; i < arr.length; i++){  
                        System.out.print(arr[i] + " ");  
                }  
   
        }  
}  
`,
    python: `# Python program for implementation of Bubble Sort

def bubbleSort(arr):
	n = len(arr)

	# Traverse through all array elements
	for i in range(n-1):
	# range(n) also work but outer loop will repeat one time more than needed.

		# Last i elements are already in place
		for j in range(0, n-i-1):

			# traverse the array from 0 to n-i-1
			# Swap if the element found is greater
			# than the next element
			if arr[j] > arr[j+1] :
				arr[j], arr[j+1] = arr[j+1], arr[j]

# Driver code to test above
arr = [64, 34, 25, 12, 22, 11, 90]

bubbleSort(arr)

print ("Sorted array is:")
for i in range(len(arr)):
	print ("%d" %arr[i]),
`,
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
    cpp: `++:// C++ program for insertion sort
#include <bits/stdc++.h>
using namespace std;

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

// A utility function to print an array of size n
void printArray(int arr[], int n)
{
	int i;
	for (i = 0; i < n; i++)
		cout << arr[i] << " ";
	cout << endl;
}

/* Driver code */
int main()
{
	int arr[] = { 12, 11, 13, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, n);
	printArray(arr, n);

	return 0;
}
`,
    java: `// Java program for implementation of Insertion Sort
class InsertionSort {
	/*Function to sort array using insertion sort*/
	void sort(int arr[])
	{
		int n = arr.length;
		for (int i = 1; i < n; ++i) {
			int key = arr[i];
			int j = i - 1;

			/* Move elements of arr[0..i-1], that are
			greater than key, to one position ahead
			of their current position */
			while (j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j = j - 1;
			}
			arr[j + 1] = key;
		}
	}

	/* A utility function to print array of size n*/
	static void printArray(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n; ++i)
			System.out.print(arr[i] + " ");

		System.out.println();
	}

	// Driver method
	public static void main(String args[])
	{
		int arr[] = { 12, 11, 13, 5, 6 };

		InsertionSort ob = new InsertionSort();
		ob.sort(arr);

		printArray(arr);
	}
} 

`,
    python: `# Python program for implementation of Insertion Sort

# Function to do insertion sort
def insertionSort(arr):

	# Traverse through 1 to len(arr)
	for i in range(1, len(arr)):

		key = arr[i]

		# Move elements of arr[0..i-1], that are
		# greater than key, to one position ahead
		# of their current position
		j = i-1
		while j >= 0 and key < arr[j] :
				arr[j + 1] = arr[j]
				j -= 1
		arr[j + 1] = key


# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
for i in range(len(arr)):
	print ("% d" % arr[i])
`,
  },
  //   Selection sort
  ss: {
    name: `Selection Sort`,
    intro: `The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
1) The subarray which is already sorted.
2) Remaining subarray which is unsorted.
In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.
`,
    cpp: `// C++ program for implementation of selection sort
#include <bits/stdc++.h>
using namespace std;

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

void selectionSort(int arr[], int n)
{
	int i, j, min_idx;

	// One by one move boundary of unsorted subarray
	for (i = 0; i < n-1; i++)
	{
		// Find the minimum element in unsorted array
		min_idx = i;
		for (j = i+1; j < n; j++)
		if (arr[j] < arr[min_idx])
			min_idx = j;

		// Swap the found minimum element with the first element
		swap(&arr[min_idx], &arr[i]);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i=0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver program to test above functions
int main()
{
	int arr[] = {64, 25, 12, 22, 11};
	int n = sizeof(arr)/sizeof(arr[0]);
	selectionSort(arr, n);
	cout << "Sorted array: \n";
	printArray(arr, n);
	return 0;
}
`,
    java: `// Java program for implementation of Selection Sort
class SelectionSort
{
	void sort(int arr[])
	{
		int n = arr.length;

		// One by one move boundary of unsorted subarray
		for (int i = 0; i < n-1; i++)
		{
			// Find the minimum element in unsorted array
			int min_idx = i;
			for (int j = i+1; j < n; j++)
				if (arr[j] < arr[min_idx])
					min_idx = j;

			// Swap the found minimum element with the first
			// element
			int temp = arr[min_idx];
			arr[min_idx] = arr[i];
			arr[i] = temp;
		}
	}

	// Prints the array
	void printArray(int arr[])
	{
		int n = arr.length;
		for (int i=0; i<n; ++i)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	// Driver code to test above
	public static void main(String args[])
	{
		SelectionSort ob = new SelectionSort();
		int arr[] = {64,25,12,22,11};
		ob.sort(arr);
		System.out.println("Sorted array");
		ob.printArray(arr);
	}
}
`,
    python: `# Python program for implementation of Selection
# Sort
import sys
A = [64, 25, 12, 22, 11]

# Traverse through all array elements
for i in range(len(A)):
	
	# Find the minimum element in remaining
	# unsorted array
	min_idx = i
	for j in range(i+1, len(A)):
		if A[min_idx] > A[j]:
			min_idx = j
			
	# Swap the found minimum element with
	# the first element		
	A[i], A[min_idx] = A[min_idx], A[i]

# Driver code to test above
print ("Sorted array")
for i in range(len(A)):
	print("%d" %A[i]),
`,
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
    cpp: `/* C++ implementation of QuickSort */
#include <bits/stdc++.h>
using namespace std;

// A utility function to swap two elements
void swap(int* a, int* b)
{
	int t = *a;
	*a = *b;
	*b = t;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
int partition (int arr[], int low, int high)
{
	int pivot = arr[high]; // pivot
	int i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far

	for (int j = low; j <= high - 1; j++)
	{
		// If current element is smaller than the pivot
		if (arr[j] < pivot)
		{
			i++; // increment index of smaller element
			swap(&arr[i], &arr[j]);
		}
	}
	swap(&arr[i + 1], &arr[high]);
	return (i + 1);
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
void quickSort(int arr[], int low, int high)
{
	if (low < high)
	{
		/* pi is partitioning index, arr[p] is now
		at right place */
		int pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

/* Function to print an array */
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

// Driver Code
int main()
{
	int arr[] = {10, 7, 8, 9, 1, 5};
	int n = sizeof(arr) / sizeof(arr[0]);
	quickSort(arr, 0, n - 1);
	cout << "Sorted array: \n";
	printArray(arr, n);
	return 0;
}
`,
    java: `// Java implementation of QuickSort
import java.io.*;

class GFG{
	
// A utility function to swap two elements
static void swap(int[] arr, int i, int j)
{
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

/* This function takes last element as pivot, places
the pivot element at its correct position in sorted
array, and places all smaller (smaller than pivot)
to left of pivot and all greater elements to right
of pivot */
static int partition(int[] arr, int low, int high)
{
	
	// pivot
	int pivot = arr[high];
	
	// Index of smaller element and
	// indicates the right position
	// of pivot found so far
	int i = (low - 1);

	for(int j = low; j <= high - 1; j++)
	{
		
		// If current element is smaller
		// than the pivot
		if (arr[j] < pivot)
		{
			
			// Increment index of
			// smaller element
			i++;
			swap(arr, i, j);
		}
	}
	swap(arr, i + 1, high);
	return (i + 1);
}

/* The main function that implements QuickSort
		arr[] --> Array to be sorted,
		low --> Starting index,
		high --> Ending index
*/
static void quickSort(int[] arr, int low, int high)
{
	if (low < high)
	{
		
		// pi is partitioning index, arr[p]
		// is now at right place
		int pi = partition(arr, low, high);

		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
}

// Function to print an array
static void printArray(int[] arr, int size)
{
	for(int i = 0; i < size; i++)
		System.out.print(arr[i] + " ");
		
	System.out.println();
}

// Driver Code
public static void main(String[] args)
{
	int[] arr = { 10, 7, 8, 9, 1, 5 };
	int n = arr.length;
	
	quickSort(arr, 0, n - 1);
	System.out.println("Sorted array: ");
	printArray(arr, n);
}
}
`,
    python: `# Python3 implementation of QuickSort

# This Function handles sorting part of quick sort
# start and end points to first and last element of
# an array respectively
def partition(start, end, array):
	
	# Initializing pivot's index to start
	pivot_index = start
	pivot = array[pivot_index]
	
	# This loop runs till start pointer crosses
	# end pointer, and when it does we swap the
	# pivot with element on end pointer
	while start < end:
		
		# Increment the start pointer till it finds an
		# element greater than pivot
		while start < len(array) and array[start] <= pivot:
			start += 1
			
		# Decrement the end pointer till it finds an
		# element less than pivot
		while array[end] > pivot:
			end -= 1
		
		# If start and end have not crossed each other,
		# swap the numbers on start and end
		if(start < end):
			array[start], array[end] = array[end], array[start]
	
	# Swap pivot element with element on end pointer.
	# This puts pivot on its correct sorted place.
	array[end], array[pivot_index] = array[pivot_index], array[end]
	
	# Returning end pointer to divide the array into 2
	return end
	
# The main function that implements QuickSort
def quick_sort(start, end, array):
	
	if (start < end):
		
		# p is partitioning index, array[p]
		# is at right place
		p = partition(start, end, array)
		
		# Sort elements before partition
		# and after partition
		quick_sort(start, p - 1, array)
		quick_sort(p + 1, end, array)
		
# Driver code
array = [ 10, 7, 8, 9, 1, 5 ]
quick_sort(0, len(array) - 1, array)

print(f'Sorted array: {array}')
`,
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
