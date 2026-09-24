import "./App.css";

function App() {
  let text: string = "fkfgkfgm";

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
        //alert("dont use your name");
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

  return <>app</>;
}

export default App;
