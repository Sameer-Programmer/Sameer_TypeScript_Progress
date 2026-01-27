/*
✅ Corrected & Clean Notes (FINAL VERSION)
🔹 Class

A class can have:

properties

methods

A class can create objects

🔹 Abstract Class

An abstract class can have:

properties

abstract methods

normal (concrete) methods

To define an abstract method, the abstract keyword is mandatory

An abstract class:

❌ cannot create objects

✅ child class can create objects

Child class must implement all abstract methods

🔹 Interface

An interface contains:

only abstract method declarations

property declarations

Interfaces do not have implementations

Interfaces do not create objects

🔹 Inheritance / Relationships (VERY IMPORTANT)
✅ Valid relationships
class        → class        : extends
abstract class → class      : extends
class        → interface    : implements
class        → interfaces   : implements Interface1, Interface2
interface    → interface    : extends
interface    → interfaces   : extends Interface1, Interface2

❌ Invalid relationships
interface → class          ❌ (no implements / extends)
class → multiple classes   ❌


Examples ❌:

class A extends B, C {}        // ❌
interface I implements A {}   // ❌

🔹 Multiple Inheritance Rules (MEMORIZE)

❌ A class cannot extend multiple classes

✅ A class can implement multiple interfaces

✅ An interface can extend multiple interfaces

🔹 Correct Syntax Examples
Class implements multiple interfaces
class MyClass implements Interface1, Interface2 {}

Interface extends multiple interfaces
interface I3 extends I1, I2 {}

🧠 Final Mental Model (LOCK THIS 🔐)

Class → Full implementation + objects

Abstract Class → Partial implementation + rules

Interface → Rules only
*/