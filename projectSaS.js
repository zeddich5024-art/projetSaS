var prompt = require('prompt-sync')();
const trips = [
    {id: 1,departure: "Safi",destination: "Youssoufia",departureTime: "07:30",arrivalTime: "08:30",price: 25,availableSeats: 50},
    {id: 2,departure: "Safi",destination: "Marrakech",departureTime: "08:00",arrivalTime: "10:30",price: 90,availableSeats: 50},
    {id: 3,departure: "Safi",destination: "Casablanca",departureTime: "09:00",arrivalTime: "13:00",price: 140,availableSeats: 50},
    {id: 4,departure: "Youssoufia",destination: "Marrakech",departureTime: "09:15",arrivalTime: "11:00",price: 65,availableSeats: 50},
    {id: 5,departure: "Youssoufia",destination: "Casablanca",departureTime: "10:00",arrivalTime: "13:30",price: 110,availableSeats: 50},
    {id: 6,departure: "Marrakech",destination: "Casablanca",departureTime: "11:30",arrivalTime: "14:30",price: 120,availableSeats: 50},
    {id: 7,departure: "Marrakech",destination: "Rabat",departureTime: "12:00",arrivalTime: "16:00",price: 150,availableSeats: 50},
    {id: 8,departure: "Casablanca",destination: "Rabat",departureTime: "14:00",arrivalTime: "15:15",price: 40,availableSeats: 50},
    {id: 9,departure: "Casablanca",destination: "Kenitra",departureTime: "15:00",arrivalTime: "16:45",price: 55,availableSeats: 50},
    {id: 10,departure: "Rabat",destination: "Kenitra",departureTime: "16:00",arrivalTime: "16:45",price: 30,availableSeats: 50},
    {id: 11,departure: "Rabat",destination: "Fes",departureTime: "17:00",arrivalTime: "19:30",price: 95,availableSeats: 50},
    {id: 12,departure: "Kenitra",destination: "Fes",departureTime: "17:30",arrivalTime: "20:00",price: 85,availableSeats: 50},
    {id: 13,departure: "Fes",destination: "Meknes",departureTime: "08:30",arrivalTime: "09:20",price: 35,availableSeats: 50},
    {id: 14,departure: "Fes",destination: "Oujda",departureTime: "10:00",arrivalTime: "13:30",price: 130,availableSeats: 50},
    {id: 15,departure: "Meknes",destination: "Rabat",departureTime: "11:00",arrivalTime: "13:30",price: 80,availableSeats: 50},
    {id: 16,departure: "Meknes",destination: "Casablanca",departureTime: "12:00",arrivalTime: "15:00",price: 105,availableSeats: 50},
    {id: 17,departure: "Casablanca",destination: "El Jadida",departureTime: "16:30",arrivalTime: "18:00",price: 50,availableSeats: 50},
    {id: 18,departure: "El Jadida",destination: "Safi",departureTime: "18:30",arrivalTime: "20:30",price: 60,availableSeats: 50},
    {id: 19,departure: "Marrakech",destination: "Agadir",departureTime: "15:00",arrivalTime: "18:30",price: 100,availableSeats: 50},
    {id: 20,departure: "Agadir",destination: "Safi",departureTime: "19:00",arrivalTime: "22:00",price: 95,availableSeats: 50}
];
// Étape 1 — afficher Menu principal
function Menu_principal(){
    console.log("=================================");
    console.log("       RAILWAY MANAGER");
    console.log("=================================");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");
}
// Étape 2 — Afficher les trajets
function Afficher_trajets(){
 console.log("=== TRAJETS DISPONIBLES ===")
   for(let i=0;i<trips.length;i++){
        console.log(`#${i+1}`,trips[i].departure,"----->",trips[i].destination);
        console.log("Départ :",trips[i].departureTime);
        console.log("Arrivée :",trips[i].arrivalTime);
        console.log("Prix:",trips[i].price,"DH");
        console.log("Places disponibles :",trips[i].availableSeats);
   }
}
// Étape 3 —Acheter un ticket
const tickets = [
    { id: 1, passengerName: "Zakaria", tripId: 1, seatNumber: 1, price: 25 },
    { id: 2, passengerName: "Adil", tripId: 1, seatNumber: 2, price: 25 },
    { id: 3, passengerName: "Aya", tripId: 2, seatNumber: 1, price: 90 },
    { id: 4, passengerName: "Omar", tripId: 3, seatNumber: 1, price: 140 },
    { id: 5, passengerName: "Yassine", tripId: 4, seatNumber: 1, price: 65 },
    { id: 6, passengerName: "Sara", tripId: 1, seatNumber: 3, price: 25 }
];
let nextTicketId = 1;
function Acheter_ticket() {
    let passengerName = prompt("Nom du passager : ");
    let tripId = Number(prompt("Identifiant du trajet : "));
    for (const trip of trips) {
        if (trip.id === tripId && trip.availableSeats > 0) {
            let seatNumber = 1;
            for (let i = 1; i <= 50; i++) {
                let occupied = false;
                for (const ticket of tickets) {
                    if (ticket.tripId === trip.id && ticket.seatNumber === i) {
                        occupied = true;
                        break;
                    }
                }
                if (!occupied) {
                    seatNumber = i;
                    break;
                }
            }
            const ticket = {
                id: nextTicketId,
                passengerName: passengerName,
                tripId: tripId,
                seatNumber: seatNumber,
                price: trip.price
            };
            tickets.push(ticket);
            trip.availableSeats -= 1;
            nextTicketId++;
            return "Ticket acheté avec succès";
        }
        else if (trip.id === tripId && trip.availableSeats === 0) {
            return "Tra_comp";
        }
    }
    return "Tr_in";
}
// Étape 4 — Afficher les tickets
function Afficher_tickets(){
    if(tickets.length !== 0)
        return true;
    return false;
}

//Étape 5 — Annuler un ticket
function  Annuler_ticket(){
    let Idticket =Number(prompt("Entrez l'identifiant du ticket à supprimer : "));
    for (const ticket of tickets){
        if(ticket.id === Idticket){
            for(const trip of trips){
                if (trip.id === ticket.tripId){
                    trip.availableSeats+=1;
                }
            }
        const index = tickets.indexOf(ticket);
        tickets.splice(index, 1);
            return true;}
    }
    return false;
}

// Étape 6 — Rechercher un ticket
function Rechercher_ticket(){
    let nompassager =prompt("Veuillez entrer le nom du passager : ");
    for(const ticket of tickets){
        if(ticket.passengerName === nompassager)
            return ticket;
    }
    return null;
}


//Étape 7 — Filtrer les trajets
function Filtrer_trajets(){
    let villedepart=prompt("Veuillez entrer la ville de départ : ");
    for(const trip of trips){
        if((trip.departure) === villedepart) 
            console.log(villedepart,"---->",trip.destination,":",trip.price,"DH");
    }
}


// Étape 8 — Trier les trajets
function Trier_trajets(){
    let trips2 =[...trips];
    for(let i=0;i<trips2.length;i++){
        for(let j=0;j<trips2.length-1-i;j++){
            if(trips2[j].price>trips2[j+1].price){
                let temp = trips2[j];
                trips2[j] = trips2[j+1];
                trips2[j+1] = temp;
            }
        }   
    }
    return trips2;
}


function Railway_Manager(){
    let menu = true 
    while (menu){
        Menu_principal();
        let nombre = prompt("Choisissez le numéro de l'opération à effectuer : ");
        switch(nombre){
            case "1":
                Afficher_trajets()
                 
                break;
            case "2":
                let trajet = Acheter_ticket();
                if(trajet === "Tr_in") console.log("Trajet introuvable");
                else if(trajet === "Tra_comp") console.log("Train complet");
                else  console.log(trajet);
                break;
            case "3":
                let Affticket =Afficher_tickets();
                if(Affticket){
                console.log("=== TICKETS ===")
                for (const ticket of tickets) {
                console.log("Ticket #",ticket.id)
                console.log("Passager :",ticket.passengerName);
                console.log("Trajet :",trips[ticket.tripId - 1].departure,"---->",trips[ticket.tripId - 1].destination);
                console.log("Place :",ticket.seatNumber);
                console.log("Prix :",ticket.price,"DH");
                }}
                else console.log("Aucun ticket enregistré");
                break;
            case "4":
                let suppticket = Annuler_ticket();
                if(suppticket) console.log("Ticket annulé avec succès");
                else console.log("Ticket introuvable.");
                break;
            case "5":
                let Rechticket=Rechercher_ticket();
                if(Rechticket !== null){
                console.log("Ticket #",Rechticket.id);
                console.log("Passager :",Rechticket.passengerName);
                console.log("Trajet :",trips[Rechticket.tripId - 1].departure,"---->",trips[Rechticket.tripId - 1].destination);
                console.log("Place :",Rechticket.seatNumber);
                console.log("Prix :",Rechticket.price,"DH");}
                else console.log("Aucun ticket trouvé pour ce nom.");
                break;
            case "6":
                Filtrer_trajets();
                break;
            case "7":
                let trier=Trier_trajets();
            
                for(let trip of trier){
                    console.log(trip.departure,"---->",trip.destination,":",trip.price,"DH");
                }
                break;
            case "0":
                menu =false;
                break;
            default:
                console.log("Option invalide. Veuillez choisir un numéro existant.");
                break;
                
        }
    }

}
Railway_Manager();