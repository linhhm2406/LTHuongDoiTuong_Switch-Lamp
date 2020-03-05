let SwitchButton = function (status) {
    this.status = status;

    this.connectToLamp = function (ElectricLamp) {
        alert('Connected');
        ElectricLamp.status = true;
        };


    this.disconnectToLamp = function (ElectricLamp) {
        alert('Disconnected');
        ElectricLamp.status = false;

    };
    this.switchOff = function (ElectricLamp) {
        this.status = false;
        ElectricLamp.turnOff();
    };
    this.switchOn = function (ElectricLamp) {
        this.status = true;
        ElectricLamp.status = true;
        ElectricLamp.turnOn();
    };
};

let ElectricLamp = function (status) {
    this.status = status;

    this.turnOff = function () {
        alert('Lamp Off');
    };
    this.turnOn = function () {
        if (this.status === true) {
            alert('Lamp On');
        }
    };
};

let switchButton = new SwitchButton(true);
let electricLamp = new ElectricLamp(false);

function connect_lamp() {
    switchButton.connectToLamp(electricLamp);
}

function disconnect_lamp() {
    switchButton.disconnectToLamp(electricLamp);
}

function on() {
    switchButton.status = true;
    if (electricLamp.status === true) {
            switchButton.switchOn(electricLamp)
        }
}

function off() {
    if (electricLamp.status === true) {
    switchButton.switchOff(electricLamp)
    }
}