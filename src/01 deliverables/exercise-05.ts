console.log("************** DELIVERABLE 05 *********************");
/* 5. Slot Machine
El objetivo de este ejercicio es crear una máquina tragaperras utilizando 
clases donde cada vez que juguemos insertemos una moneda. 
Cada máquina tragaperras (instancia) tendrá un contador de monedas que 
automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de 
forma automática y debe generar tres booleanos aleatorios que representarán 
el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres 
booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";

y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido 
de la máquina. En caso contrario deberá mostrar otro mensaje:
"Good luck next time!!".*/

type Slot = boolean;

class SlothMachine {
  slot1: Slot;
  slot2: Slot;
  slot3: Slot;
  coins: number = 0;
  play = () => {
    this.coins = ++this.coins;
    this.slot1 = Math.random() < 0.5;
    this.slot2 = Math.random() < 0.5;
    this.slot3 = Math.random() < 0.5;
    console.log(this.coins, this.slot1, this.slot2, this.slot3);  // --> No es necesario, solo para comprobar el resultado
    const Result = (this.slot1 === true && this.slot2 === true && this.slot3 === true) ? this.congratulation() : this.nextTime();
  };

  congratulation() {
    console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
    this.coins = 0;
    return this.coins;
  };

  nextTime(): void {
    console.log("Good luck next time!!");
  }
};

const machine1 = new SlothMachine();

machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 
machine1.play(); 