import "./App.css";

function App() {
  // let text: string = "fkfgkfgm";

  //

  // let id: string | number | undefined;

  // id = 101;
  // id = "a1";

  // id.toUpperCase();
  function handleId(id: string | number | undefined) {
    //

    if (!id) {
      console.log("id doesnt exsist");

      return "error";
    } else {
      if (typeof id === "string") {
        console.log(id.toUpperCase());
      } else if (typeof id === "number") {
        console.log(id);
      }
    }
  }
  handleId(undefined);
  handleId("abgd");
  handleId(545454);

  //id.tofixed - damrgvaleba
  //////
  function throwerror(message: string): never {
    throw new Error(message);
  }

  function validateage(age: number): number {
    if (age < 0) {
      throwerror("no");
    }
    return age;
  }

  try {
    validateage(-34);
  } catch (error) {
    console.log(error);
    // alert(error);
  }

  /////

  enum Color {
    Red,
    Green,
    Blue,
  }
  let c: Color = Color.Green;
  console.log(c);
  let a: Color = Color.Red;
  console.log(a);

  //klasebi , memkvidreoba

  class User {
    name: string;
    protected password: string;

    constructor(username: string, pass: string) {
      this.name = username;
      this.password = pass;
    }

    private checkPasswordForName() {
      if (this.password.includes(this.name)) {
        // alert("dont use your name");
      } else {
        // alert("this password in valid");
      }
    }

    callCheckPasswords() {
      this.checkPasswordForName();
    }
  }
  const User1 = new User("magda", "m123");
  console.log(User1.callCheckPasswords());
  const user2 = new User("natia", "432");
  console.log(user2);

  ///memkvidreoba

  class Admin extends User {
    deletePost() {
      console.log("warmatebit waishala");
      console.log(this.password);
    }
  }

  const admin = new Admin("magdu", "magdamagda");
  console.log(admin.deletePost());

  ///

  class Character {
    private health: number;
    protected level: number;
    public name: string;

    constructor(name: string, health: number, level: number) {
      this.name = name;
      this.health = health;
      this.level = level;
    }

    public takeDamage(amount: number): void {
      this.health -= amount;
      if (this.health <= 0) {
        console.log(`${this.name} has fallen!`);
      }
    }

    public getHealth(): number {
      return this.health; // 🐛 something's wrong here
    }

    protected levelUp(): void {
      this.level++;
      console.log(`${this.name} is now level ${this.level}!`);
    }
  }

  class Warrior extends Character {
    private rage: number = 0;

    constructor(name: string, health: number, level: number) {
      // 🐛 something's missing here
      super(name, health, level);
      this.rage = 0;
    }

    public gainRage(amount: number): void {
      this.rage += amount;
      if (this.rage >= 100) {
        this.levelUp();
        this.rage = 0;
      }
    }

    //  public getRage(): number {
    //   return this.rage;
    // }

    public showStatus(): void {
      // 🐛 one of these two lines is not like the other
      console.log(`${this.name} - Level ${this.level} - Rage: ${this.rage}`);
      console.log(`Health: ${this.getHealth()}`);
    }
  }

  const hero = new Warrior("Aria", 100, 1);
  hero.takeDamage(30);
  hero.gainRage(120);
  hero.showStatus();

  // 🐛 two more bugs are down here — try running these lines
  console.log(hero.getHealth());
  console.log(hero.gainRage(1));

  ///

  return <>app</>;
}

export default App;
