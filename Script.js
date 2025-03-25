
#include <stdio.h>

void printMessage() {
    printf("Hello, world!\n");
}

void askForInput() {
    char name[20];
    printf("What's your name? ");
    scanf("%s", name);
    printf("Hello, %s!\n", name);
}

void performArithmetic() {
    int num1, num2;
    printf("Enter the first number: ");
    scanf("%d", &num1);
    printf("Enter the second number: ");
    scanf("%d", &num2);
    printf("The sum is: %d\n", num1 + num2);
}

void makeDecision() {
    int age;
    printf("How old are you? ");
    scanf("%d", &age);
    if (age >= 18) {
        printf("You're an adult!\n");
    } else {
        printf("You're a minor!\n");
    }
}

int main() {
    int choice;
    printf("Script Program\n");
    printf("1. Print message\n");
    printf("2. Ask for input\n");
    printf("3. Perform arithmetic\n");
    printf("4. Make decision\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    switch (choice) {
        case 1:
            printMessage();
            break;
        case 2:
            askForInput();
            break;
        case 3:
            performArithmetic();
            break;
        case 4:
            makeDecision();
            break;
        default:
            printf("Invalid choice!\n");
            break;
    }

    return 0;
}
```
