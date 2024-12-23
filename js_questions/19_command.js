// The Command Pattern is a behavoral design pattern that turns a request into a stand-alone
// object containing all information about the request.

// Define the command interface
class Command {
  execute() {}
  undo() {}
}

// Create ConcreteCommand classes
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.on();
  }
  undo() {
    this.light.off();
  }
}

// Define the Receiver
class Light {
  on() {
    console.log("Light is on");
  }
  off() {
    console.log("Light is off");
  }
}

// Create the Invoker

class RemoteControl {
  setCommand(command) {
    this.command = command;
  }
  pressButton() {
    this.command.execute();
  }
  pressUndo() {
    this.command.undo();
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);

const remote = new RemoteControl();
remote.setCommand(lightOnCommand);

remote.pressButton();
remote.pressUndo();
