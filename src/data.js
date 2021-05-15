const codeData = {
  array: {
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
  sll: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  ls: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  bs: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  bso: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  is: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  ss: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  qs: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  bt: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  avl: {
    cpp: ``,
    java: ``,
    python: ``,
  },
  pf: {
    cpp: ``,
    java: ``,
    python: ``,
  },
};

export default codeData;
