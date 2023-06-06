


const { createApp } = Vue
    createApp({
    data() {
        return {

        toDoList: [
            'giocare a zelda',
            'controllare se ho i soldi per diablo IV',
            'piangere perchè sono povero e non ho i soldi',
            'creare un bot per generare soldi',
            'comprare diablo IV',
        ],

        newElement : '',
    }
},
    methods:  {

        addToDoElment (newElement) {
            this.toDoList.push(newElement);
            this.newElement = '';
        },

        removeElement (toDoElementIndex) {
            if(toDoElementIndex >= this.toDoList.length || toDoElementIndex < 0){
                alert("you can't do it");
            } else{
                this.toDoList.splice(toDoElementIndex, 1);
            }
        }
}
}).mount('#app');







//     Descrizione:
// Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// text, una stringa che indica il testo del todo X
// done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista HTML un item per ogni todo. X Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato. 

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x" X: cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti. X