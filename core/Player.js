class Player {
    constructor() {

    }

    getCount() {
        var playerCountRef = database.ref('playerCount');

        playerCountRef.on('value', function(data) {
            playerCount = data.val();
        });
    }

    update(name, id) {
        var playerIndex = "player" + playerCount;

        database.ref(playerIndex).set({name: name});
        database.ref(playerIndex).set({id: id});
    }

    updateCount(count) {
        database.ref("/").update({playerCount: count});
    }
}