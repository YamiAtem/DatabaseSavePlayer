class Form {
    constructor() {
        this.id = random(10000000000, 9999999999)
    }

    display() {
        var heading1 = createElement('h1');
        heading1.html("Player Save Data");
        heading1.position(150, 50);

        var input = createInput("Name");
        input.position(200, 100);

        var button = createButton("START");
        button.position(200, 150);

        var displayId = createElement('h3');
        displayId.html("Your id is: " + this.id);
        displayId.position(200, 200);

        var greeting = createElement('h1');
        
        button.mousePressed(function() {
            input.hide();
            button.hide();

            var name = input.value();

            playerCount += 1;
            player.update(name, this.id);
            player.updateCount(playerCount);

            greeting.html("Welcome, " + name);
            greeting.position(200, 100);
        });
    }
}